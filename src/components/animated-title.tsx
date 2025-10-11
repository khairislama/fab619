"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedTitle({
  children,
  className,
  delay = 0,
  id = "title",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.h2
      className={cn("text-3xl md:text-4xl 2xl:text-5xl font-bold", className)}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}
