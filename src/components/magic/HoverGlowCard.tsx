"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverGlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "relative rounded-xl p-6 bg-zinc-900 border border-zinc-800 overflow-hidden",
        className
      )}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(99,102,241,0.06), rgba(34,197,94,0.04) 45%, transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
