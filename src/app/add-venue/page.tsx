"use client";

import { useState } from "react";

const SERVICES = [
  {
    name: "Venue",
    subtypes: ["Farmhouse", "Villa", "Banquet Hall", "Penthouse", "Studio", "Apartment", "Outdoor Lawn"],
  },
  {
    name: "Decorators",
    subtypes: ["Floral", "Luxury", "Minimal", "Boho", "Theme-based"],
  },
  {
    name: "Caterers",
    subtypes: ["Indian", "Continental", "Italian", "Asian Fusion", "Street Food", "Custom menus"],
  },
  {
    name: "DJs",
    subtypes: ["Bollywood", "EDM", "House", "Hip-Hop", "Mixed"],
  },
  {
    name: "Photographers",
    subtypes: ["Candid", "Cinematic", "Drone", "Fashion", "Event coverage"],
  },
];

export default function AddVenuePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedSubtype, setSelectedSubtype] = useState<string>("");

  // Map service display names to their lowercase values used in the form
  const serviceNameToValue: Record<string, string> = {
    "Venue": "venue",
    "Decorators": "decorator",
    "Caterers": "caterer",
    "DJs": "dj",
    "Photographers": "photographer",
  };

  function handleContinue() {
    if (!selected || !selectedSubtype) return;
    
    const serviceValue = serviceNameToValue[selected] || selected.toLowerCase();
    const query = new URLSearchParams({
      service: serviceValue,
      category: selectedSubtype,
    }).toString();
    
    window.location.href = `/add-venue/details?${query}`;
  }

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
          onChange={(e) => {
            setSelected(e.target.value);
            setSelectedSubtype(""); // Reset subtype when service changes
          }}
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
          <select 
            className="w-full bg-zinc-900 border border-zinc-700 rounded-md p-3"
            value={selectedSubtype}
            onChange={(e) => setSelectedSubtype(e.target.value)}
          >
            <option value="">Select a subtype</option>
            {SERVICES.find((s) => s.name === selected)?.subtypes.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}

      {selected && selectedSubtype && (
        <button
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          onClick={handleContinue}
        >
          Continue →
        </button>
      )}
    </div>
  );
}
