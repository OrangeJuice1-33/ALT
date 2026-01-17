import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/server";
import { collection, addDoc, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const body = await req.json();
  const { venue_id, user_id, rating, review_text } = body;

  if (!venue_id || !user_id || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Insert review
    await addDoc(collection(db, "venue_reviews"), {
      venue_id,
      user_id,
      rating,
      review_text: review_text || null,
      created_at: new Date().toISOString(),
    });

    // Recalculate summary fields
    const reviewsRef = collection(db, "venue_reviews");
    const q = query(reviewsRef, where("venue_id", "==", venue_id));
    const querySnapshot = await getDocs(q);

    const stats = querySnapshot.docs.map(doc => doc.data().rating);
    const totalReviews = stats.length;
    const avgRating = stats.reduce((sum: number, r: number) => sum + r, 0) / totalReviews;

    // Update venue listing
    const venueRef = doc(db, "venue_listings", venue_id);
    await updateDoc(venueRef, {
      review_count: totalReviews,
      average_rating: avgRating,
      popularity_score: totalReviews,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
