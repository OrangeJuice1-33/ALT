import { NextResponse } from "next/server";
import { db } from "@/lib/firebase/server";
import { doc, setDoc } from "firebase/firestore";

export async function POST(req: Request) {
  const { user_id } = await req.json();

  await setDoc(doc(db, "profiles", user_id), {
    role: "athlete",
    full_name: null,
    created_at: new Date().toISOString(),
  }, { merge: true });

  return NextResponse.json({ ok: true });
}
    