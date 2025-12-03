"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import sampleData from "@/data/sampleListings";
import FilterBar from "@/components/FilterBar";

export default function TopRatedPage() {
  // Filter states
  const [category, setCategory] = useState("Venue");
  const [subtype, setSubtype] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [startDateStr, setStartDateStr] = useState("");
  const [endDateStr, setEndDateStr] = useState("");

  const [stars, setStars] = useState(0);
  const [bookingsMin, setBookingsMin] = useState(0);
  const [priceMax, setPriceMax] = useState(200000);
  const [amenities, setAmenities] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return sampleData.filter(l => {
      if (category && l.category !== category) return false;
      if (subtype && l.subtype !== subtype) return false;
      if (city && l.city.toLowerCase() !== city.toLowerCase()) return false;
      if (region && l.region !== region) return false;
      if (stars && l.rating < stars) return false;
      if (bookingsMin && l.bookingsCount < bookingsMin) return false;
      if (priceMax && l.pricePerNight > priceMax) return false;

      // amenities must include all selected
      for (let a of amenities) {
        if (!l.amenities.includes(a)) return false;
      }

      return true;
    });
  }, [
    category, subtype, city, region,
    stars, bookingsMin, priceMax, amenities
  ]);

  const sorted = [...filtered].sort((a,b)=> b.rating - a.rating);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-6">⭐ Top Rated</h1>

        {/* FULL FILTER BAR */}
        <FilterBar
          category={category} setCategory={setCategory}
          subtype={subtype} setSubtype={setSubtype}
          city={city} setCity={setCity}
          region={region} setRegion={setRegion}
          startDateStr={startDateStr} endDateStr={endDateStr}
          setStartDateStr={setStartDateStr} setEndDateStr={setEndDateStr}
          stars={stars} setStars={setStars}
          bookingsMin={bookingsMin} setBookingsMin={setBookingsMin}
          priceMax={priceMax} setPriceMax={setPriceMax}
          amenities={amenities} setAmenities={setAmenities}
        />

        <div className="text-zinc-400 text-sm mb-4">{sorted.length} results</div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sorted.map(item => (
            <Link
              key={item.id}
              href={`/search/${item.id}`}
              className="group block rounded-xl bg-[#07162f]/60 border border-zinc-800 overflow-hidden hover:scale-[1.01] transition"
            >
              <div className="relative h-48">
                <img
                  src={item.images[0]}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition"
                />
                <div className="absolute left-3 top-3 bg-black/50 text-xs px-2 py-1 rounded">
                  {item.subtype}
                </div>
                <div className="absolute right-3 top-3 bg-black/50 text-xs px-2 py-1 rounded">
                  ⭐ {item.rating}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{item.description}</p>

                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-zinc-300">{item.city} • {item.region}</span>
                  <span className="font-bold">₹{item.pricePerNight}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
