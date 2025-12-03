"use client";

import { motion } from "framer-motion";

export function TextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="inline-block"
      >
        {words.map((word, i) => (
          <span key={i} className="mr-2 inline-block">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
