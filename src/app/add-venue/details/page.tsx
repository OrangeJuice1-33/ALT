"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Step2VenueDetails() {
  const router = useRouter();
  const params = useSearchParams();

  // we receive selected service + category from Step 1 via query
  const selectedService = params.get("service");
  const selectedCategory = params.get("category");

  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [googlePin, setGooglePin] = useState("");

  function handleNext(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/add-venue/description?` +
        `service=${selectedService}` +
        `&category=${selectedCategory}` +
        `&name=${encodeURIComponent(name)}` +
        `&address1=${encodeURIComponent(address1)}` +
        `&address2=${encodeURIComponent(address2)}` +
        `&country=${encodeURIComponent(country)}` +
        `&state=${encodeURIComponent(state)}` +
        `&city=${encodeURIComponent(city)}` +
        `&pincode=${encodeURIComponent(pincode)}` +
        `&googlePin=${encodeURIComponent(googlePin)}`
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white">
      <div className="w-full max-w-2xl bg-[#07102a]/80 border border-zinc-800 rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Venue Details</h2>

        <form onSubmit={handleNext} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Name of venue / service
            </label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="Ex: Club Alpha, Royal Decorators, Bombay Catering Co."
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Address 1 */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">Address Line 1</label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="Street / Building / Locality"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </div>

          {/* Address 2 */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">Address Line 2 (optional)</label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="Landmark / Area (optional)"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">Country</label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="India"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          {/* State + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2 text-zinc-300">State</label>
              <input
                className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
                placeholder="Ex: Maharashtra"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-zinc-300">City</label>
              <input
                className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
                placeholder="Ex: Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">Pincode</label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="Ex: 400001"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>

          {/* Google Pin */}
          <div>
            <label className="block text-sm mb-2 text-zinc-300">
              Google Maps Pin URL (optional)
            </label>
            <input
              className="w-full bg-zinc-900 rounded-md border border-zinc-700 p-3"
              placeholder="Paste Google Maps link if available"
              value={googlePin}
              onChange={(e) => setGooglePin(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-md p-3 text-lg font-semibold transition"
          >
            Next →
          </button>
        </form>
      </div>
    </div>
  );
}
