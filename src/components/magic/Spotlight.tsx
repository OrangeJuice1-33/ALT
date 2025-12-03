"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function Spotlight({
  className,
}: {
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const opacity = useTransform(x, [0, 300], [0, 1]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${x.get()}px ${y.get()}px, rgba(255,255,255,0.08), transparent)`,
        opacity,
      }}
    />
  );
}
