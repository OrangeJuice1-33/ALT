"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Properly typed variants
const letterVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -120 },
  hiddenBottom: { opacity: 0, y: 120 },
  hiddenRight: { opacity: 0, x: 120 },

  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#0b1027_0%,#050316_45%,black_100%)] text-white flex flex-col">

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-16 flex flex-col items-center text-center">

          {/* ALT LOGO */}
          <div className="relative mb-6 md:mb-8">
            <div className="flex gap-4 md:gap-6 items-end justify-center">

              <motion.span
                custom={0}
                initial="hiddenLeft"
                animate="visible"
                variants={letterVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(56,189,248,0.9)]"
              >
                A
              </motion.span>

              <motion.span
                custom={1}
                initial="hiddenBottom"
                animate="visible"
                variants={letterVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(52,211,153,0.9)]"
              >
                L
              </motion.span>

              <motion.span
                custom={2}
                initial="hiddenRight"
                animate="visible"
                variants={letterVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(251,191,36,0.9)]"
              >
                T
              </motion.span>

            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70">
              <div className="w-40 h-40 md:w-60 md:h-60 bg-[radial-gradient(circle,rgba(59,130,246,0.7)_0%,transparent_60%)] mx-auto" />
            </div>
          </div>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg md:text-2xl text-zinc-200 mb-3 md:mb-4"
          >
            <span className="block mb-1 text-zinc-300">The future of booking.</span>
            <span className="block font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-emerald-300 to-amber-300">
              Book your experience.
            </span>
          </motion.p>

          {/* CTA */}
          <Link href="/search">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-4 inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-linear-to-r from-sky-500 via-emerald-400 to-amber-300 text-black font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition"
            >
              Book your experience <span className="text-lg">↗️</span>
            </motion.button>
          </Link>

          {/* Subtext */}
          <p className="mt-4 max-w-xl text-xs md:text-sm text-zinc-400">
            Discover venues, decorators, caterers, DJs and photographers on one seamless platform.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 text-xs text-zinc-500">
            <span>Scroll to see what’s new</span>
            <div className="w-px h-10 bg-linear-to-b from-zinc-500/60 to-transparent relative overflow-hidden">
              <motion.div
                className="absolute inset-x-0 top-0 h-6 bg-linear-to-b from-white/70 to-transparent"
                animate={{ y: [0, 32] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              />
            </div>
          </div>

        </section>

        {/* FEED SECTION */}
        <section className="border-t border-white/10 bg-black/40">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
            {/* ... keep rest of your feed section exactly same ... */}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between text-[11px] text-zinc-400">
          <span>©️ 2035 ALT. All rights reserved.</span>
          <div className="flex gap-3">
            <button className="hover:text-zinc-200">Terms</button>
            <button className="hover:text-zinc-200">Privacy</button>
            <button className="hover:text-zinc-200">Contact</button>
          </div>
        </div>
      </footer>

    </div>
  );
}