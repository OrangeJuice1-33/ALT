"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useMemo } from "react";
import sampleData from "@/data/sampleListings";
import {
  differenceInCalendarDays,
  parseISO
} from "date-fns";

export default function ListingDetail() {
  const router = useRouter();
  const params = useParams();

  // ✅ Safe extraction
  const id = typeof params?.id === "string" ? params.id : "";

  const listing = sampleData.find((s) => s.id === id);

  if (!listing) {
    return (
      <div className="p-8 text-white text-center text-xl">
        Listing not found
      </div>
    );
  }

  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const nights = useMemo(() => {
    if (!startDate || !endDate) return 0;
    try {
      return differenceInCalendarDays(parseISO(endDate), parseISO(startDate));
    } catch {
      return 0;
    }
  }, [startDate, endDate]);

  const totalPrice = nights > 0 ? nights * listing.pricePerNight : 0;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      
      <button
        onClick={() => router.back()}
        className="text-zinc-300 underline mb-6"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{listing.name}</h1>

      <img
        src={listing.images?.[0] || "/placeholder.png"}
        className="w-full max-w-3xl rounded-xl shadow-lg mb-6"
      />

      <p className="text-lg text-zinc-300 max-w-3xl mb-8 leading-relaxed">
        {listing.description}
      </p>

      <div className="bg-[#07102a]/80 border border-zinc-700 rounded-xl p-6 max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Book this venue</h2>

        <label className="block mb-4">
          <span className="text-zinc-300 text-sm">Start Date</span>
          <input
            type="date"
            className="mt-2 w-full p-3 bg-zinc-900 rounded-md border border-zinc-700"
            value={startDate ?? ""}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-zinc-300 text-sm">End Date</span>
          <input
            type="date"
            className="mt-2 w-full p-3 bg-zinc-900 rounded-md border border-zinc-700"
            value={endDate ?? ""}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>

        <div className="mt-6 p-4 bg-zinc-900 border border-zinc-700 rounded-md">
          <p className="text-zinc-300 mb-2">
            Price per night: ₹{listing.pricePerNight}
          </p>
          <p className="text-zinc-300 mb-2">
            Nights selected: {nights > 0 ? nights : "-"}
          </p>
          <p className="text-xl font-semibold text-white">
            Total: ₹{totalPrice}
          </p>
        </div>

        <button
          onClick={() => alert("Payment flow coming next…")}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 p-3 rounded-md font-bold"
        >
          Continue →
        </button>

        {/* 📌 REVIEW BUTTON */}
        <button
          onClick={() => router.push(`/search/${id}/review`)}
          className="w-full mt-3 bg-purple-600 hover:bg-purple-700 p-3 rounded-md font-bold"
        >
          ⭐ Leave a Review
        </button>
      </div>
    </div>
  );
}
