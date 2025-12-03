// src/components/FilterBar.tsx
"use client";

import React, { useMemo, useState } from "react";

export const SUBTYPES = ["Farmhouse","Villa","Penthouse","Studio","Apartment","Banquet Hall","Rooftop"];
export const CATEGORIES = ["Venue","Decorator","Caterer","DJ","Photographer"];
export const AMENITIES_MASTER = [
  "Swimming Pool","Gym","AC","Heater","Projector","Stage","Sound System",
  "Parking","Backup Power","WiFi","Catering Available","In-house Staff",
  "Outdoor Space","Indoor Space","Bridal Room","Dressing Room","Green Room",
  "Shower","Toilets","Changing Area","Furniture Provided","Tables","Chairs",
  "Lighting","Security"
];

type Props = {
  category: string;
  setCategory: (v: string) => void;
  subtype: string;
  setSubtype: (v: string) => void;
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
  category, setCategory, subtype, setSubtype, city, setCity,
  startDateStr, endDateStr, setStartDateStr, setEndDateStr,
  onReset, onApply,
  stars, setStars, bookingsMin, setBookingsMin, priceMax, setPriceMax,
  amenities, setAmenities, region, setRegion
}: Props) {
  // region options for Delhi, Mumbai, Bangalore (we'll provide Mumbai + Delhi as requested)
  const REGION_MAP: Record<string, string[]> = {
    "Mumbai": ["South Mumbai","Bandra","Juhu","Andheri","Bandra Kurla Complex","Powai"],
    "Delhi": ["Greater Kailash","Vasant Kunj","Connaught Place","Saket","Dwarka"],
    "Bengaluru": ["Koramangala","Indiranagar","Whitefield","MG Road"]
  };

  const showRegions = REGION_MAP[city] ?? [];

  // amenities search
  const [amenityQuery, setAmenityQuery] = useState("");
  const amenityCandidates = useMemo(() => {
    if (!amenityQuery) return AMENITIES_MASTER;
    return AMENITIES_MASTER.filter(a => a.toLowerCase().includes(amenityQuery.toLowerCase()));
  }, [amenityQuery]);

  function toggleAmenity(item: string) {
    if (amenities.includes(item)) setAmenities(amenities.filter(a=>a!==item));
    else setAmenities([...amenities, item]);
  }

  return (
    <div className="w-full rounded-md bg-[#07162f]/60 border border-zinc-800 p-4 mb-6">
      <div className="flex flex-col gap-4">
        {/* top row: Category / City / Dates */}
        <div className="flex gap-3 items-center">
          <select value={category} onChange={(e)=>{ setCategory(e.target.value); setSubtype(""); }} className="bg-zinc-900 p-2 rounded-md border border-zinc-700">
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <input placeholder="City (e.g. Mumbai)" value={city} onChange={(e)=>setCity(e.target.value)} className="bg-zinc-900 p-2 rounded-md border border-zinc-700 flex-1"/>

          <div className="flex items-center gap-2">
            <label className="text-zinc-400 text-sm">From</label>
            <input type="date" value={startDateStr} onChange={(e)=>setStartDateStr(e.target.value)} className="bg-zinc-900 p-2 rounded-md border border-zinc-700"/>
            <label className="text-zinc-400 text-sm">To</label>
            <input type="date" value={endDateStr} onChange={(e)=>setEndDateStr(e.target.value)} className="bg-zinc-900 p-2 rounded-md border border-zinc-700"/>
          </div>
        </div>

        {/* second row: subtypes / region / nights summary */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 items-center">
            <div className="text-zinc-300 text-sm mr-2">Subtype</div>
            <div className="flex flex-wrap gap-2">
              <button onClick={()=>setSubtype("")} className={`px-3 py-1 rounded-md ${subtype===""?"bg-blue-600":"bg-zinc-800"}`}>All</button>
              {SUBTYPES.map(s => (
                <button key={s} onClick={()=>setSubtype(s)} className={`px-3 py-1 rounded-md ${subtype===s?"bg-emerald-600":"bg-zinc-800"}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="ml-auto flex gap-2 items-center">
            <select value={region} onChange={(e)=>setRegion(e.target.value)} className="bg-zinc-900 p-2 rounded-md border border-zinc-700">
              <option value="">Any region</option>
              {showRegions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        {/* third row: sliders + stars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 p-3 rounded-md border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">Min bookings (slider)</div>
            <input type="range" min={0} max={1000} value={bookingsMin} onChange={(e)=>setBookingsMin(Number(e.target.value))} />
            <div className="text-sm text-zinc-400 mt-2">{bookingsMin}+ bookings</div>
          </div>

          <div className="bg-zinc-900 p-3 rounded-md border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">Max price (₹)</div>
            <input type="range" min={0} max={200000} step={500} value={priceMax} onChange={(e)=>setPriceMax(Number(e.target.value))} />
            <div className="text-sm text-zinc-400 mt-2">Up to ₹{priceMax}</div>
          </div>

          <div className="bg-zinc-900 p-3 rounded-md border border-zinc-700">
            <div className="text-sm text-zinc-300 mb-2">Minimum stars</div>
            <div className="flex items-center gap-2">
              {[0,1,2,3,4,5].map(s => (
                <button key={s} onClick={()=>setStars(s)} className={`px-2 py-1 rounded ${stars===s ? "bg-amber-500 text-black":"bg-zinc-800"}`}>{s}★</button>
              ))}
            </div>
          </div>
        </div>

        {/* amenities grid */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-zinc-300">Amenities</div>
            <div className="text-sm text-zinc-400">Search & pick</div>
          </div>

          <div className="mb-2">
            <input value={amenityQuery} onChange={(e)=>setAmenityQuery(e.target.value)} placeholder="Search amenities" className="bg-zinc-900 p-2 rounded-md border border-zinc-700 w-full"/>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {amenityCandidates.map(a => {
              const active = amenities.includes(a);
              return (
                <button key={a} onClick={()=>toggleAmenity(a)} className={`text-sm p-2 rounded-md text-left ${active ? "bg-emerald-600":"bg-zinc-800"}`}>
                  {a}{active ? " ✓": ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* controls */}
        <div className="flex items-center gap-3 justify-end pt-2">
          <button onClick={()=>{
            // reset defaults
            setCategory("Venue");
            setSubtype("");
            setCity("");
            setRegion("");
            setStartDateStr("");
            setEndDateStr("");
            setStars(0);
            setBookingsMin(0);
            setPriceMax(200000);
            setAmenities([]);
            if (onReset) onReset();
          }} className="px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700">Reset</button>

          <button onClick={()=>onApply && onApply()} className="px-4 py-2 rounded-md bg-blue-600">Apply filters</button>
        </div>
      </div>
    </div>
  );
}
