"use client";

import { motion } from "framer-motion";

export function AuroraBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 w-[900px] h-[600px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.30), rgba(99,102,241,0.06) 40%, transparent 60%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -bottom-44 -right-56 w-[700px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,197,94,0.20), rgba(34,197,94,0.04) 40%, transparent 60%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
