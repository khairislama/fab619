"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedParagraph({
  children,
  className,
  delay = 0.2,
  id = "paragraph",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.p
      className={className}
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}
