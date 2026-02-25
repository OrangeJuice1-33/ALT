// src/components/FilterBar.tsx
"use client";

import React, { useMemo, useState } from "react";

export const CATEGORIES = ["Venue","Decorator","Caterer","DJ","Photographer"];

// Category-specific subtypes
export const SUBTYPES_BY_CATEGORY: Record<string, string[]> = {
  "Venue": ["Farmhouse","Villa","Penthouse","Studio","Apartment","Banquet Hall","Rooftop"],
  "Decorator": ["Floral","Luxury","Minimal","Boho","Theme-based"],
  "Caterer": ["Indian","Continental","Italian","Asian Fusion","Street Food","Custom menus"],
  "DJ": ["Bollywood","EDM","House","Hip-Hop","Mixed"],
  "Photographer": ["Candid","Cinematic","Drone","Fashion","Event coverage"]
};

// Category-specific filters/amenities
const CATEGORY_FILTERS: Record<string, string[]> = {
  "Venue": [
    "Swimming Pool","Gym","AC","Heater","Projector","Stage","Sound System",
    "Parking","Backup Power","WiFi","Catering Available","In-house Staff",
    "Outdoor Space","Indoor Space","Bridal Room","Dressing Room","Green Room",
    "Shower","Toilets","Changing Area","Furniture Provided","Tables","Chairs",
    "Lighting","Security"
  ],
  "Caterer": [
    "Veg","Non-veg","Live counters","Dessert stations","Staff included","Custom menu support"
  ],
  "Decorator": [
    "Wedding decor","Corporate decor","Birthday / private events","Stage & lighting included","Custom themes supported"
  ],
  "Photographer": [
    "Drone availability","Same-day edits","Reels / social content","Album included","Video + photo bundle"
  ],
  "DJ": [
    "Own sound system","Lighting included","Mic support","Outdoor setup ready"
  ]
};

// State to Cities mapping for India
export const STATE_CITIES_MAP: Record<string, string[]> = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Thane", "Kalyan", "Vasai", "Navi Mumbai"],
  "Delhi": ["New Delhi", "Delhi"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi", "Davangere", "Ballari", "Tumakuru", "Shivamogga", "Raichur"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Dindigul", "Thanjavur"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Gandhidham", "Anand"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sikar"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Malda", "Kharagpur", "Haldia", "Jalpaiguri"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Ghaziabad", "Moradabad", "Aligarh"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Siddipet"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada", "Kadapa", "Anantapur"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Pathankot", "Hoshiarpur", "Batala", "Mohali", "Moga"],
  "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Satna", "Rewa", "Murwara"],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Kannur", "Kottayam", "Palakkad", "Manjeri"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Baleshwar", "Baripada", "Bhadrak", "Jharsuguda"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Dhubri", "Diphu"],
  "Jharkhand": ["Jamshedpur", "Dhanbad", "Ranchi", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Adityapur", "Phusro", "Chatra"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Korba", "Bilaspur", "Durg", "Rajnandgaon", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Bilaspur", "Kullu", "Chamba", "Hamirpur", "Una", "Nahan"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Ramnagar", "Pithoragarh", "Almora"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Mormugao", "Curchorem", "Sanquelim", "Bicholim", "Valpoi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Sopore", "Kathua", "Udhampur", "Poonch", "Rajouri", "Doda"],
  "Manipur": ["Imphal", "Thoubal", "Kakching", "Ukhrul", "Churachandpur", "Bishnupur", "Tamenglong", "Senapati", "Jiribam", "Moreh"],
  "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar", "Baghmara", "Nongstoin", "Mairang", "Resubelpara", "Ampati"],
  "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Mamit", "Khawzawl", "Hnahthial"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon", "Zunheboto", "Phek", "Kiphire", "Longleng"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia", "Khowai", "Teliamura", "Ambassa", "Kumarghat", "Sabroom"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Bomdila", "Pasighat", "Tezu", "Ziro", "Along", "Daporijo", "Anini"],
  "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Singtam", "Rangpo", "Jorethang", "Ravangla", "Pakyong", "Soreng"],
};

export const STATES = Object.keys(STATE_CITIES_MAP).sort();

// Region options mapped by city
export const REGION_MAP: Record<string, string[]> = {
  "Mumbai": ["South Mumbai", "Bandra", "Juhu", "Andheri", "Bandra Kurla Complex", "Powai", "Worli", "Lower Parel", "Colaba", "Marine Drive"],
  "Pune": ["Koregaon Park", "Hinjewadi", "Baner", "Aundh", "Viman Nagar", "Kothrud", "Wakad", "Hadapsar"],
  "Nashik": ["Gangapur Road", "Satpur", "Nashik Road", "College Road", "Panchavati", "CIDCO", "Trimurti Chowk"],
  "Aurangabad": ["Jalna Road", "Cidco", "Aurangpura", "Gulmandi", "Kranti Chowk", "Harsul"],
  "Solapur": ["Akashwani Chowk", "Mangalwar Peth", "Shivaji Chowk", "Barshi Road", "Pandharpur Road"],
  "Thane": ["Kolshet Road", "Ghodbunder Road", "Wagle Estate", "Naupada", "Kopri"],
  "Kalyan": ["Shivaji Chowk", "Mahatma Phule Chowk", "Dombivli", "Ulhasnagar", "Ambernath"],
  "Navi Mumbai": ["Vashi", "Nerul", "Kharghar", "Belapur", "Panvel", "Airoli", "Seawoods"],
  "New Delhi": ["Greater Kailash", "Vasant Kunj", "Connaught Place", "Saket", "Dwarka", "Rohini", "Pitampura", "Janakpuri"],
  "Delhi": ["Greater Kailash", "Vasant Kunj", "Connaught Place", "Saket", "Dwarka", "Rohini", "Pitampura", "Janakpuri"],
  "Bengaluru": ["Koramangala", "Indiranagar", "Whitefield", "MG Road", "HSR Layout", "Marathahalli", "Electronic City", "JP Nagar"],
  "Mysuru": ["Vijaynagar", "Kuvempunagar", "Gokulam", "Nazarbad", "Jayalakshmipuram"],
  "Hubli": ["Vidyanagar", "Gokul Road", "Deshpande Nagar", "Unkal", "Old Hubli"],
  "Mangaluru": ["Kadri", "Bejai", "Kankanady", "Falnir", "Hampankatta"],
  "Chennai": ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR", "Porur", "Guindy", "Nungambakkam"],
  "Madurai": ["Anna Nagar", "KK Nagar", "Goripalayam", "Tallakulam", "Villapuram"],
  "Coimbatore": ["RS Puram", "Peelamedu", "Saibaba Colony", "Race Course", "Gandhipuram"],
  "Hyderabad": ["Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City", "Secunderabad", "Kondapur", "Madhapur"],
  "Kolkata": ["Park Street", "Salt Lake", "New Town", "Ballygunge", "Alipore", "Dum Dum", "Howrah"],
  "Howrah": ["Howrah Station", "Shibpur", "Bally", "Uluberia", "Santragachi"],
  "Ahmedabad": ["SG Highway", "Prahladnagar", "Satellite", "Bopal", "Vastrapur", "Navrangpura", "Maninagar"],
  "Surat": ["Adajan", "Vesu", "Athwa", "City Light", "Piplod", "Varachha"],
  "Vadodara": ["Alkapuri", "Fatehgunj", "Sayajigunj", "Akota", "Manjalpur"],
  "Rajkot": ["Kalavad Road", "University Road", "150 Feet Ring Road", "Gondal Road"],
  "Jaipur": ["C Scheme", "Malviya Nagar", "Vaishali Nagar", "Raja Park", "Mansarovar", "Pink City"],
  "Jodhpur": ["Ratanada", "Basni", "Pal", "Mandore", "Umaid Bhawan"],
  "Udaipur": ["Fateh Sagar", "Lake Pichola", "Hiran Magri", "Sukhadia Circle", "Bapu Bazar"],
  "Lucknow": ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Aminabad"],
  "Agra": ["Tajganj", "Fatehabad Road", "Kamla Nagar", "Shahganj", "Dayalbagh", "Rambagh", "Civil Lines", "Sikandra"],
  "Kanpur": ["Civil Lines", "Kakadeo", "Panki", "Barra", "Arya Nagar", "Swaroop Nagar"],
  "Varanasi": ["Cantt", "Sigra", "Lanka", "Bhelupur", "Assi", "Godowlia"],
  "Meerut": ["Shastri Nagar", "Begum Bridge", "Delhi Road", "Modipuram", "Hapur Road"],
  "Allahabad": ["Civil Lines", "Tagore Town", "Katra", "Naini", "Allenganj"],
  "Bareilly": ["Civil Lines", "C B Ganj", "Nazirabad", "Subhash Nagar", "Izzatnagar"],
  "Ghaziabad": ["Raj Nagar", "Vaishali", "Kaushambi", "Indirapuram", "Vasundhara"],
  "Aligarh": ["Civil Lines", "AMU", "Shamshad Market", "Dodhpur", "Barah"],
  "Visakhapatnam": ["Beach Road", "Dwaraka Nagar", "MVP Colony", "Seethammadhara", "Madhurawada"],
  "Vijayawada": ["Benz Circle", "MG Road", "Labbipet", "Gandhi Nagar", "Patamata"],
  "Indore": ["Vijay Nagar", "New Palasia", "MG Road", "Sapna Sangeeta", "Bhawarkua"],
  "Bhopal": ["Arera Colony", "MP Nagar", "New Market", "Kolar Road", "Shahpura"],
  "Gwalior": ["City Center", "Lashkar", "Morar", "Thatipur", "Gole Ka Mandir"],
  "Jabalpur": ["Civil Lines", "Wright Town", "Napier Town", "Gwarighat", "Vijay Nagar"],
  "Chandigarh": ["Sector 17", "Sector 35", "Sector 22", "Sector 10", "Sector 34"],
  "Gurgaon": ["DLF Phase 1", "Sector 29", "Sohna Road", "MG Road", "Cyber City"],
  "Noida": ["Sector 18", "Sector 62", "Sector 137", "Greater Noida", "Sector 15"],
  "Faridabad": ["Sector 15", "Sector 21", "Ballabgarh", "Old Faridabad", "Sector 16"],
  "Panipat": ["Model Town", "GT Road", "Subhash Chowk", "Old Panipat"],
  "Ambala": ["Cantt", "City", "Naraingarh", "Barara"],
  "Ludhiana": ["Model Town", "Sarabha Nagar", "Feroze Gandhi Market", "Civil Lines"],
  "Amritsar": ["Lawrence Road", "Ranjit Avenue", "Hall Bazaar", "Cantonment"],
  "Jalandhar": ["Model Town", "Nakodar Road", "Cantonment", "Adda Hoshiarpur"],
  "Patiala": ["Model Town", "Urban Estate", "Rajpura Road", "Leela Bhawan"],
  "Kochi": ["Marine Drive", "MG Road", "Panampilly Nagar", "Kakkanad", "Edapally"],
  "Thiruvananthapuram": ["Kowdiar", "Vellayambalam", "Pattom", "Sreekaryam"],
  "Kozhikode": ["Mavoor Road", "Puthiyara", "Palayam", "Feroke"],
  "Bhubaneswar": ["Nayapalli", "Acharya Vihar", "Sahid Nagar", "Patia", "Old Town"],
  "Cuttack": ["Buxi Bazar", "Chandi Chhaka", "Mangalabag", "Link Road"],
  "Raipur": ["Shankar Nagar", "GE Road", "Pandri", "Telibandha", "Dhamtari Road"],
  "Jamshedpur": ["Bistupur", "Sakchi", "Kadma", "Sonari", "Mango"],
  "Ranchi": ["Lalpur", "Harmu", "Doranda", "Argora", "Kanke Road"],
  "Dhanbad": ["Saraidhela", "Jharia", "Katras", "Bhowrah"],
  "Patna": ["Boring Road", "Kankarbagh", "Exhibition Road", "Fraser Road", "Danapur"],
  "Gaya": ["Civil Lines", "Kotwali", "Bodh Gaya", "Sherghati Road"],
  "Guwahati": ["GS Road", "Beltola", "Dispur", "Paltan Bazaar", "Uzan Bazaar"],
  "Shimla": ["Mall Road", "Chotta Shimla", "Summer Hill", "New Shimla"],
  "Dehradun": ["Rajpur Road", "Clement Town", "Saharanpur Road", "Dharampur"],
  "Haridwar": ["Har Ki Pauri", "Jwalapur", "Kankhal", "Sapt Sarovar"],
  "Rishikesh": ["Laxman Jhula", "Ram Jhula", "Tapovan", "Muni Ki Reti"],
  "Panaji": ["Fontainhas", "Miramar", "Dona Paula", "Calangute", "Baga"],
  "Margao": ["Colva", "Fatorda", "Benaulim", "Cavelossim"],
  "Srinagar": ["Dal Lake", "Lal Chowk", "Rajbagh", "Bemina", "Hazratbal"],
  "Jammu": ["Bahu Fort", "Raghunath Bazaar", "Gandhi Nagar", "Satwari"],
  "Imphal": ["Imphal East", "Imphal West", "Lamphelpat", "Thangal Bazaar"],
  "Shillong": ["Police Bazaar", "Laitumkhrah", "Nongthymmai", "Mawprem"],
  "Aizawl": ["Bawngkawn", "Durtlang", "Zarkawt", "Khatla"],
  "Kohima": ["Midland", "New Market", "PWD", "Dzüvürü"],
  "Agartala": ["Akhaura Road", "Krishnanagar", "Kunjaban", "Pratapgarh"],
  "Gangtok": ["MG Marg", "Deorali", "Tadong", "Ranipool"],
  "Itanagar": ["Naharlagun", "Papum Pare", "Doimukh"],
};

type Props = {
  category: string;
  setCategory: (v: string) => void;
  subtype: string;
  setSubtype: (v: string) => void;
  state: string;
  setState: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  startDateStr: string;
  endDateStr: string;
  setStartDateStr: (v: string) => void;
  setEndDateStr: (v: string) => void;
  onReset?: ()=>void;
  onApply?: ()=>void;
  // filters state
  stars: number;
  setStars: (n:number)=>void;
  bookingsMin: number;
  setBookingsMin: (n:number)=>void;
  priceMax: number;
  setPriceMax: (n:number)=>void;
  amenities: string[];
  setAmenities: (a:string[])=>void;
  region: string;
  setRegion: (r:string)=>void;
};

export default function FilterBar({
  category, setCategory, subtype, setSubtype, state, setState, city, setCity,
  startDateStr, endDateStr, setStartDateStr, setEndDateStr,
  onReset, onApply,
  stars, setStars, bookingsMin, setBookingsMin, priceMax, setPriceMax,
  amenities, setAmenities, region, setRegion
}: Props) {
  // Get cities for selected state
  const availableCities = useMemo(() => {
    if (!state) return [];
    return STATE_CITIES_MAP[state] || [];
  }, [state]);

  // Reset city when state changes
  React.useEffect(() => {
    if (state && !availableCities.includes(city)) {
      setCity("");
    }
  }, [state, city, availableCities, setCity]);

  // Reset region when city changes
  React.useEffect(() => {
    setRegion("");
  }, [city, setRegion]);

  // Get regions for selected city
  const availableRegions = useMemo(() => {
    if (!city) return [];
    return REGION_MAP[city] || [];
  }, [city]);
  const currentSubtypes = SUBTYPES_BY_CATEGORY[category] || [];
  const currentFilters = CATEGORY_FILTERS[category] || [];

  // filter search
  const [filterQuery, setFilterQuery] = useState("");
  const filterCandidates = useMemo(() => {
    if (!filterQuery) return currentFilters;
    return currentFilters.filter(f => f.toLowerCase().includes(filterQuery.toLowerCase()));
  }, [filterQuery, currentFilters]);

  function toggleFilter(item: string) {
    if (amenities.includes(item)) setAmenities(amenities.filter(a=>a!==item));
    else setAmenities([...amenities, item]);
  }

  // Price label based on category
  const getPriceLabel = () => {
    switch(category) {
      case "Caterer": return "Price per plate (₹)";
      case "Photographer": return "Price per day/event (₹)";
      case "DJ": return "Price per gig (₹)";
      default: return "Max price (₹)";
    }
  };

  // Bookings label based on category
  const getBookingsLabel = () => {
    switch(category) {
      case "Caterer": return "Min order size";
      case "Decorator": return "Event size supported";
      default: return "Min bookings";
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#07162f]/70 border border-zinc-800/80 p-4 md:p-5 mb-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
      <div className="flex flex-col gap-4">
        {/* top row: Category / State / City / Dates */}
        <div className="flex gap-3 items-center flex-wrap">
          <select value={category} onChange={(e)=>{ setCategory(e.target.value); setSubtype(""); }} className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <select 
            value={state} 
            onChange={(e) => {
              setState(e.target.value);
              setCity(""); // Reset city when state changes
            }} 
            className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700"
          >
            <option value="">Select State</option>
            {STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <select 
            value={city} 
            onChange={(e)=>setCity(e.target.value)} 
            disabled={!state || availableCities.length === 0}
            className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">{state ? "Select City" : "Select State first"}</option>
            {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <div className="flex items-center gap-2">
            <label className="text-zinc-400 text-sm">From</label>
            <input type="date" value={startDateStr} onChange={(e)=>setStartDateStr(e.target.value)} className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700"/>
            <label className="text-zinc-400 text-sm">To</label>
            <input type="date" value={endDateStr} onChange={(e)=>setEndDateStr(e.target.value)} className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700"/>
          </div>
        </div>

        {/* second row: subtypes / region */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <div className="text-zinc-300 text-sm mr-2">
              {category === "Caterer" ? "Cuisine type" : category === "Decorator" ? "Decorator category" : category === "Photographer" ? "Photography style" : category === "DJ" ? "Music genre" : "Subtype"}
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={()=>setSubtype("")} className={`px-3 py-1 rounded-full text-sm ${subtype===""?"bg-blue-600":"bg-zinc-800"}`}>All</button>
              {currentSubtypes.map(s => (
                <button key={s} onClick={()=>setSubtype(s)} className={`px-3 py-1 rounded-full text-sm ${subtype===s?"bg-emerald-600":"bg-zinc-800"}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="ml-auto flex gap-2 items-center">
            <label className="text-zinc-300 text-sm">Region:</label>
            <select 
              value={region} 
              onChange={(e)=>setRegion(e.target.value)} 
              disabled={!city || availableRegions.length === 0}
              className="bg-zinc-900 px-3 py-2 rounded-lg border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">{city ? (availableRegions.length > 0 ? "Select Region" : "No regions available") : "Select City first"}</option>
              {availableRegions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        {/* third row: sliders + stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900/95 p-3 rounded-xl border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">{getBookingsLabel()}</div>
            <input type="range" min={0} max={1000} value={bookingsMin} onChange={(e)=>setBookingsMin(Number(e.target.value))} />
            <div className="text-sm text-zinc-400 mt-2">{bookingsMin}+</div>
          </div>

          <div className="bg-zinc-900/95 p-3 rounded-xl border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">{getPriceLabel()}</div>
            <input type="range" min={0} max={200000} step={500} value={priceMax} onChange={(e)=>setPriceMax(Number(e.target.value))} />
            <div className="text-sm text-zinc-400 mt-2">Up to ₹{priceMax}</div>
          </div>

          <div className="bg-zinc-900/95 p-3 rounded-xl border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">Minimum stars</div>
            <div className="flex items-center gap-2">
              {[0,1,2,3,4,5].map(s => (
                <button key={s} onClick={()=>setStars(s)} className={`px-2 py-1 rounded text-sm ${stars===s ? "bg-amber-500 text-black":"bg-zinc-800"}`}>{s}★</button>
              ))}
            </div>
          </div>
        </div>

        {/* category-specific filters */}
        {currentFilters.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-zinc-300">
                {category === "Venue" ? "Amenities" : category === "Caterer" ? "Capabilities & Add-ons" : category === "Decorator" ? "Specialisation Filters" : category === "Photographer" ? "Capability Filters" : "Equipment & Setup"}
              </div>
              <div className="text-sm text-zinc-400">Search & pick</div>
            </div>

            <div className="mb-2">
              <input value={filterQuery} onChange={(e)=>setFilterQuery(e.target.value)} placeholder={`Search ${category === "Venue" ? "amenities" : "filters"}`} className="bg-zinc-900 px-3 py-2 rounded-full border border-zinc-700 w-full"/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {filterCandidates.map(f => {
                const active = amenities.includes(f);
                return (
                  <button key={f} onClick={()=>toggleFilter(f)} className={`text-sm px-3 py-2 rounded-full text-left ${active ? "bg-emerald-600":"bg-zinc-800"}`}>
                    {f}{active ? " ✓": ""}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* controls */}
        <div className="flex items-center gap-3 justify-end pt-2">
          <button onClick={()=>{
            // reset defaults
            setCategory("Venue");
            setSubtype("");
            setState("");
            setCity("");
            setRegion("");
            setStartDateStr("");
            setEndDateStr("");
            setStars(0);
            setBookingsMin(0);
            setPriceMax(200000);
            setAmenities([]);
            if (onReset) onReset();
          }} className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700">Reset</button>

          <button onClick={()=>onApply && onApply()} className="px-4 py-2 rounded-full bg-blue-600">Apply filters</button>
        </div>
      </div>
    </div>
  );
}
