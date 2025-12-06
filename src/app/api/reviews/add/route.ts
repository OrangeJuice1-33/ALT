import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = supabaseServer();
  const body = await req.json();
  const { venue_id, user_id, rating, review_text } = body;

  if (!venue_id || !user_id || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Insert review
  const { error } = await supabase.from("venue_reviews").insert({
    venue_id,
    user_id,
    rating,
    review_text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Recalculate summary fields
  const { data: stats } = await supabase
    .from("venue_reviews")
    .select("rating")
    .eq("venue_id", venue_id);

  if (!stats) {
    return NextResponse.json({ error: "Failed to fetch review stats" }, { status: 500 });
  }

  const totalReviews = stats.length;
  const avgRating =
    stats.reduce((sum: number, r: any) => sum + r.rating, 0) / totalReviews;

  await supabase
    .from("venue_listings")
    .update({
      review_count: totalReviews,
      average_rating: avgRating,
      popularity_score: totalReviews,
    })
    .eq("id", venue_id);

  return NextResponse.json({ success: true });
}
