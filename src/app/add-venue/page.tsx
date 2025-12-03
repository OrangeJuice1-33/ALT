"use client";

import { useState } from "react";

const SERVICES = [
  {
    name: "Venue",
    subtypes: ["Farmhouse", "Villa", "Banquet Hall", "Penthouse", "Studio", "Apartment", "Outdoor Lawn"],
  },
  {
    name: "Decorators",
    subtypes: ["Traditional", "Modern", "Minimal", "Royal Theme", "Floral Theme", "Bollywood Theme"],
  },
  {
    name: "Caterers",
    subtypes: ["Indian", "Italian", "Asian", "Mexican", "Continental", "Fusion", "BBQ"],
  },
  {
    name: "DJs",
    subtypes: ["All-Mix", "House Music", "Sufi", "Hip-Hop", "Pop", "EDM", "Bollywood"],
  },
  {
    name: "Photographers",
    subtypes: ["Wedding", "Portfolio", "Candid", "Studio", "Documentary", "Lifestyle"],
  },
];

export default function AddVenuePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen px-6 py-24 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-10">Add Your Venue / Service</h1>

      <div className="w-full max-w-xl space-y-4">
        <label className="block text-lg">Type of Service</label>
        <input
          type="text"
          list="service-list"
          placeholder="Search or select"
          className="w-full bg-zinc-900 border border-zinc-700 rounded-md p-3"
          onChange={(e) => setSelected(e.target.value)}
        />
        <datalist id="service-list">
          {SERVICES.map((s) => (
            <option key={s.name} value={s.name} />
          ))}
        </datalist>
      </div>

      {selected && (
        <div className="w-full max-w-xl space-y-3 mt-8">
          <label className="block text-lg">Service Subtype</label>
          <select className="w-full bg-zinc-900 border border-zinc-700 rounded-md p-3">
            {SERVICES.find((s) => s.name === selected)?.subtypes.map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}

      {selected && (
        <button
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          onClick={() => (window.location.href = "/add-venue/details")}
        >
          Continue →
        </button>
      )}
    </div>
  );
}
