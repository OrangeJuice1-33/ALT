import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // TODO: Implement OTP sending logic
    // This is a placeholder route

    return NextResponse.json({ success: true, message: "OTP sent successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to send OTP" },
      { status: 500 }
    );
  }
}
