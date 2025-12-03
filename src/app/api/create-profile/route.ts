import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = supabaseServer();
  const { user_id } = await req.json();

  await supabase.from("profiles").insert({
    id: user_id,
    role: "athlete",
    full_name: null,
  });

  return NextResponse.json({ ok: true });
}
    