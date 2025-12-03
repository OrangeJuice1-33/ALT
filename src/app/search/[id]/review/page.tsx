"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/client";

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();

  const id = typeof params?.id === "string" ? params.id : "";

  const [rating, setRating] = useState<number>(5);
  const [review, setReview] = useState("");

  async function submit() {
    const { data } = await supabaseBrowser.auth.getUser();

    if (!data?.user) {
      alert("Please sign in to leave a review.");
      router.push("/auth");
      return;
    }

    const res = await fetch("/api/reviews/add", {
      method: "POST",
      body: JSON.stringify({
        venue_id: id,
        user_id: data.user.id,
        rating,
        review_text: review,
      }),
    });

    const result = await res.json();

    if (result.error) {
      alert(result.error);
      return;
    }

    alert("Review submitted!");
    router.push(`/search/${id}`);
  }

  return (
    <div className="min-h-screen bg-[#07102a] p-8 text-white">
      <div className="max-w-lg mx-auto bg-[#0b1536] p-6 rounded-xl border border-zinc-700">

        <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>

        <label className="block mb-4">
          <span className="text-zinc-300">Rating (1–5)</span>
          <select
            className="w-full mt-2 p-3 rounded bg-zinc-900 border border-zinc-700"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} Stars
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-6">
          <span className="text-zinc-300">Review (optional)</span>
          <textarea
            className="w-full mt-2 p-3 rounded bg-zinc-900 border border-zinc-700"
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write something…"
          />
        </label>

        <button
          onClick={submit}
          className="w-full py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
