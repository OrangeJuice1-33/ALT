"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#0b1027_0%,#050316_45%,black_100%)] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-amber-300">
              Contact
            </span>
          </h1>
          <p className="text-sm md:text-base text-zinc-300">
            Reach out using the details below.
          </p>
        </header>

        <div className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8">
          <div>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-1">
              Email
            </h2>
            <a
              href="mailto:lukshyarora2009@gmail.com"
              className="text-lg md:text-xl text-zinc-50 hover:text-sky-400 break-all transition-colors"
            >
              lukshyarora2009@gmail.com
            </a>
          </div>

          <div className="h-px bg-zinc-800" />

          <div>
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-1">
              Portfolio / Website
            </h2>
            <a
              href="https://lukshya-arora.tiiny.site/#explore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-zinc-50 hover:text-emerald-400 break-all transition-colors"
            >
              https://lukshya-arora.tiiny.site/#explore
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

