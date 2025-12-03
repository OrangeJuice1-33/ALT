"use client";

import { motion } from "framer-motion";

export function FloatingElement({
  children,
  className = "",
  amplitude = 8,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={className}
      animate={{ y: [0, -amplitude, 0, amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
