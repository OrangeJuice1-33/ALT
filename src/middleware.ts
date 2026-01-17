import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("firebase-access-token")?.value || req.cookies.get("sb-access-token")?.value;
  const url = req.nextUrl;

  // Protect admin routes
  if (url.pathname.startsWith("/admin")) {
    if (!token) {
      const redirectUrl = url.clone();
      redirectUrl.pathname = "/auth";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
