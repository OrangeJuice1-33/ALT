"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ALL_FEATURES = [
  "Bedrooms",
  "Bathrooms",
  "Kitchen",
  "Swimming Pool",
  "Gym",
  "Terrace",
  "Balcony",
  "Wi-Fi Router",
  "Smart TV",
  "Washing Machine",
  "Backup Generator",
  "Outdoor Seating",
  "Parking Spots",
  "Event Hall",
  "DJ Console",
];

export default function VenueFeaturesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");

  const filtered = ALL_FEATURES.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const askQuantity = (feature: string) => {
    setShowPopup(feature);
    setQuantity("");
  };

  const confirmQuantity = () => {
    if (!quantity || isNaN(Number(quantity)) || Number(quantity) < 1) {
      alert("Enter a valid quantity.");
      return;
    }
    setSelected({ ...selected, [showPopup!]: Number(quantity) });
    setShowPopup(null);
  };

  const handleNext = () => {
    if (Object.keys(selected).length === 0) {
      alert("Select at least one feature.");
      return;
    }
    localStorage.setItem("venue_features", JSON.stringify(selected));
    router.push("/add-venue/gallery");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Venue Features</h1>
        <p className="text-sm text-zinc-400 mb-4 text-center">Select features and set quantities.</p>

        <input
          className="w-full rounded-md bg-zinc-900 border border-zinc-800 p-3 mb-4"
          placeholder="Search features..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {filtered.map((item) => (
            <button
              key={item}
              onClick={() => askQuantity(item)}
              className={`p-3 rounded-md text-center ${
                selected[item] ? "bg-green-700" : "bg-zinc-800"
              }`}
            >
              {item} {selected[item] ? `(${selected[item]})` : ""}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full mt-4 py-3 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-[#07102a] border border-zinc-800 p-6 rounded-xl w-80 text-center">
            <h2 className="text-lg font-semibold">{showPopup}</h2>
            <p className="text-sm text-zinc-400 mb-3">Enter quantity</p>
            <input
              className="w-full rounded-md bg-zinc-900 border border-zinc-800 p-2 mb-4"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min={1}
            />
            <button
              onClick={confirmQuantity}
              className="w-full py-2 bg-emerald-600 rounded-md"
            >
              Confirm
            </button>
            <button
              onClick={() => setShowPopup(null)}
              className="mt-2 text-sm text-zinc-400 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
