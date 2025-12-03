// src/app/search/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import sampleData from "@/data/sampleListings";
import FilterBar from "@/components/FilterBar";

export default function SearchPage() {
  // filter states
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

  const [query, setQuery] = useState("");

  // ------- FILTER SEARCH RESULTS -------
  const listings = useMemo(() => {
    return sampleData.filter((l) => {
      if (category && l.category !== category) return false;
      if (subtype && l.subtype !== subtype) return false;

      if (city && !l.city.toLowerCase().includes(city.toLowerCase())) return false;
      if (region && l.region !== region) return false;

      if (stars && l.avg_rating < stars) return false;
      if (bookingsMin && l.bookingsCount < bookingsMin) return false;
      if (priceMax && l.pricePerNight > priceMax) return false;

      if (amenities.length > 0) {
        for (const am of amenities) {
          if (!l.amenities.includes(am)) return false;
        }
      }

      if (query) {
        const q = query.toLowerCase();
        if (
          !l.name.toLowerCase().includes(q) &&
          !l.description.toLowerCase().includes(q)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [
    category,
    subtype,
    city,
    region,
    stars,
    bookingsMin,
    priceMax,
    amenities,
    query,
  ]);

  // ------- RESET HANDLER -------
  function resetAll() {
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
    setQuery("");
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* ⭐ FILTER BAR */}
        <FilterBar
          category={category}
          setCategory={setCategory}
          subtype={subtype}
          setSubtype={setSubtype}
          city={city}
          setCity={setCity}
          region={region}
          setRegion={setRegion}
          startDateStr={startDateStr}
          setStartDateStr={setStartDateStr}
          endDateStr={endDateStr}
          setEndDateStr={setEndDateStr}
          stars={stars}
          setStars={setStars}
          bookingsMin={bookingsMin}
          setBookingsMin={setBookingsMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          amenities={amenities}
          setAmenities={setAmenities}
          onReset={resetAll}
        />

        {/* RESULTS COUNT */}
        <div className="mb-4 text-zinc-300">{listings.length} results</div>

        {/* LISTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <div
              key={l.id}
              className="group bg-[#07162f]/60 rounded-xl overflow-hidden border border-zinc-800 hover:scale-[1.01] transition"
            >
              <Link href={`/search/${l.id}`}>
                <div className="relative h-44">
                  <img
                    src={l.images[0]}
                    alt={l.name}
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition"
                  />
                  <div className="absolute left-3 top-3 bg-black/40 px-2 py-1 rounded text-xs">
                    {l.subtype}
                  </div>
                  <div className="absolute right-3 top-3 bg-black/40 px-2 py-1 rounded text-xs">
                    {l.city}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{l.name}</h3>
                  <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
                    {l.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-zinc-300">
                      {l.category} • {l.capacity} pax
                    </div>
                    <div className="text-lg font-bold">₹{l.pricePerNight}</div>
                  </div>

                  <div className="mt-2 text-amber-400 text-sm">
                    ⭐ {l.avg_rating} ({l.reviewsCount} reviews)
                  </div>
                </div>
              </Link>

              <div className="p-4 pt-0">
                <Link
                  href={`/search/${l.id}/review`}
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 rounded-md py-2 mt-2 font-semibold transition"
                >
                  ⭐ Leave a Review
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
