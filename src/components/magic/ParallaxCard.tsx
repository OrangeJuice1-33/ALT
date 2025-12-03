"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function ParallaxCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useTransform(rotateY, [-1, 1], ["10deg", "-10deg"]);
  const y = useTransform(rotateX, [-1, 1], ["-10deg", "10deg"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(dy * 2);
    rotateY.set(dx * 2);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        rotateX: y,
        rotateY: x,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "rounded-xl bg-zinc-900 border border-zinc-800 p-6 transition-all",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
