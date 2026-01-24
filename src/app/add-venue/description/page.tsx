"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { markStepComplete, STEPS, arePreviousStepsComplete, getFirstIncompleteStepUrl } from "@/lib/venue-steps";

const SERVICE_NAMES: Record<string, string> = {
  venue: "Venue",
  decorator: "Decorator",
  caterer: "Caterer",
  dj: "DJ",
  photographer: "Photographer",
};

function VenueDescriptionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [description, setDescription] = useState("");
  
  const service = searchParams?.get("service") || "venue";
  const serviceName = SERVICE_NAMES[service] || "Service";
  const category = searchParams?.get("category") || "";

  const MIN = 50;
  const MAX = 100;

  // Check if previous steps are completed
  useEffect(() => {
    if (!arePreviousStepsComplete(STEPS.DESCRIPTION)) {
      // Redirect to the first incomplete step
      router.replace(getFirstIncompleteStepUrl());
    }
  }, [router]);

  const handleNext = () => {
    const length = description.trim().split(" ").length;
    if (length < MIN || length > MAX) {
      alert(`Description must be between ${MIN} and ${MAX} words.`);
      return;
    }
    // store temporarily in localStorage (until final submit)
    localStorage.setItem("venue_description", description.trim());
    
    // Mark step 3 as complete before navigating
    markStepComplete(STEPS.DESCRIPTION);
    
    // Preserve service type, category, and name in the URL
    const name = searchParams?.get("name") || "";
    const query = new URLSearchParams({
      service,
      ...(category && { category }),
      ...(name && { name }),
    }).toString();
    router.push(`/add-venue/features?${query}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
      <div className="max-w-2xl w-full bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">{serviceName} Description</h1>
        <p className="text-sm text-zinc-400 mb-3 text-center">
          Write a 50–100 word description that customers will see.
        </p>

        <textarea
          className="w-full h-48 rounded-md bg-zinc-900 border border-zinc-800 p-3 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`Describe your ${serviceName.toLowerCase()}...`}
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

export default function VenueDescriptionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6">
        <div className="max-w-2xl w-full bg-[#07102a]/80 border border-zinc-800 rounded-xl p-6 shadow-lg">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <VenueDescriptionContent />
    </Suspense>
  );
}
