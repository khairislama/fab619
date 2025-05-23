"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedCard({
  children,
  index,
  className,
}: {
  children: ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
