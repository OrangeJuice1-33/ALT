"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();

  const id = typeof params?.id === "string" ? params.id : "";

  const [rating, setRating] = useState<number>(5);
  const [review, setReview] = useState("");

  async function submit() {
    return new Promise<void>((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          alert("Please sign in to leave a review.");
          router.push("/auth");
          resolve();
          return;
        }

        try {
          // Insert review using client-side Firebase with user authentication
          await addDoc(collection(db, "venue_reviews"), {
            venue_id: id,
            user_id: user.uid,
            rating,
            review_text: review || null,
            created_at: new Date().toISOString(),
          });

          // Recalculate summary fields
          const reviewsRef = collection(db, "venue_reviews");
          const q = query(reviewsRef, where("venue_id", "==", id));
          const querySnapshot = await getDocs(q);

          const stats = querySnapshot.docs.map(doc => doc.data().rating);
          const totalReviews = stats.length;
          const avgRating = stats.reduce((sum: number, r: number) => sum + r, 0) / totalReviews;

          // Update listing (using "listings" collection, not "venue_listings")
          const listingRef = doc(db, "listings", id);
          await updateDoc(listingRef, {
            review_count: totalReviews,
            average_rating: avgRating,
            popularity_score: totalReviews,
          });

          alert("Review submitted!");
          router.push(`/search/${id}`);
        } catch (error: any) {
          console.error("Error submitting review:", error);
          alert(`Error: ${error.message}`);
        }
        resolve();
      });
    });
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
