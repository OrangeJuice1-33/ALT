"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SERVICE_FEATURES: Record<string, string[]> = {
  venue: [
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
  ],
  decorator: [
    "Floral Arrangements",
    "Lighting Setup",
    "Backdrop Design",
    "Table Settings",
    "Stage Decoration",
    "Ceiling Décor",
    "Entrance Décor",
    "Photobooth Setup",
    "Custom Props",
    "Color Theme Design",
    "Outdoor Decoration",
    "Indoor Decoration",
    "Marquee Setup",
    "Carpet/Flooring",
    "Sound System Integration",
  ],
  caterer: [
    "Vegetarian Menu",
    "Non-Vegetarian Menu",
    "Vegan Options",
    "Live Counters",
    "Dessert Stations",
    "Beverage Service",
    "Wait Staff",
    "Table Service",
    "Buffet Setup",
    "Plated Service",
    "Custom Menu Design",
    "Dietary Restrictions",
    "Equipment Provided",
    "Cleanup Service",
    "Chef on Site",
  ],
  dj: [
    "Sound System",
    "Microphone",
    "LED Lighting",
    "Fog Machine",
    "Projection Screen",
    "Karaoke Setup",
    "Music Library",
    "Live Mixing",
    "MC Services",
    "Wireless Setup",
    "Subwoofers",
    "Backup Equipment",
    "Extended Hours",
    "Multiple Genres",
    "Custom Playlist",
  ],
  photographer: [
    "Pre-Wedding Shoot",
    "Wedding Coverage",
    "Candid Photography",
    "Video Coverage",
    "Drone Photography",
    "Photo Editing",
    "Video Editing",
    "Album Design",
    "Online Gallery",
    "USB Delivery",
    "Multiple Photographers",
    "Extended Hours",
    "Raw Files",
    "Same Day Preview",
    "Wedding Highlights",
  ],
};

const SERVICE_NAMES: Record<string, string> = {
  venue: "Venue",
  decorator: "Decorator",
  caterer: "Caterer",
  dj: "DJ",
  photographer: "Photographer",
};

function VenueFeaturesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [showPopup, setShowPopup] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("");

  const service = searchParams?.get("service") || "venue";
  const serviceName = SERVICE_NAMES[service] || "Service";
  const allFeatures = SERVICE_FEATURES[service] || SERVICE_FEATURES.venue;

  const filtered = allFeatures.filter((item) =>
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
    
    // Preserve service type, category, and name in the URL
    const category = searchParams?.get("category") || "";
    const name = searchParams?.get("name") || "";
    const query = new URLSearchParams({
      service,
      ...(category && { category }),
      ...(name && { name }),
    }).toString();
    router.push(`/add-venue/gallery?${query}`);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-3xl mx-auto bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">{serviceName} Features</h1>
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

export default function VenueFeaturesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
        <div className="max-w-3xl mx-auto bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <VenueFeaturesContent />
    </Suspense>
  );
}
