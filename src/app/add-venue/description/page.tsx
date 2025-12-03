"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VenueDescriptionPage() {
  const router = useRouter();
  const [description, setDescription] = useState("");

  const MIN = 50;
  const MAX = 100;

  const handleNext = () => {
    const length = description.trim().split(" ").length;
    if (length < MIN || length > MAX) {
      alert(`Description must be between ${MIN} and ${MAX} words.`);
      return;
    }
    // store temporarily in localStorage (until final submit)
    localStorage.setItem("venue_description", description.trim());
    router.push("/add-venue/features");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-2xl w-full bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Venue Description</h1>
        <p className="text-sm text-zinc-400 mb-3 text-center">
          Write a 50–100 word description that customers will see.
        </p>

        <textarea
          className="w-full h-48 rounded-md bg-zinc-900 border border-zinc-800 p-3 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your venue..."
        />

        <button
          onClick={handleNext}
          className="w-full mt-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
