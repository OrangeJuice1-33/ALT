// app/layout.tsx
"use client";

import React from "react";
import Link from "next/link";
import AuthListener from "@/components/AuthListener"; // if you use it; remove if not
import "./globals.css"; // adjust path if needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {/* Authentication listener (optional) */}
        <AuthListener />

        {/* GLOBAL NAVBAR — single source of truth across the app */}
        <header className="sticky top-0 z-30">
          <div className="backdrop-blur-xl bg-black/30 border-b border-white/6">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
              {/* Left: Logo (click to go home) */}
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-sky-400 to-emerald-400 flex items-center justify-center text-sm font-bold shadow-[0_0_25px_rgba(56,189,248,0.6)]">
                    ALT
                  </div>
                  <span className="hidden sm:inline font-semibold tracking-wide text-sm md:text-base text-zinc-100">
                    ALT
                  </span>
                </Link>
              </div>

              {/* Center nav links (desktop) */}
              <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
                <Link href="/add-venue" className="hover:text-white transition-colors">Add your venue</Link>
                <Link href="/most-popular" className="hover:text-white transition-colors">Most popular</Link>
                <Link href="/top-rated" className="hover:text-white transition-colors">Top rated</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </div>

              {/* Right auth buttons */}
              <div className="flex items-center gap-3 text-sm">
                <Link
                  href="/auth" /* user wanted register to go directly to auth */
                  className="hidden md:inline-flex px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40 text-zinc-200 hover:text-white transition-colors"
                >
                  Register
                </Link>

                <Link
                  href="/auth/login"
                  className="px-3 md:px-4 py-1.5 rounded-full bg-white/90 text-black text-sm font-medium hover:bg-white transition-colors"
                >
                  Sign in
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main>
          {children}
        </main>

        {/* Footer (optional) */}
        <footer className="border-t border-white/6 mt-12 bg-black/80">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] md:text-xs text-zinc-400">
            <span>© 2035 ALT. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <Link href="/terms" className="hover:text-zinc-200 transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-zinc-200 transition-colors">Privacy</Link>
              <Link href="/contact" className="hover:text-zinc-200 transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
