"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutHeroImage() {
  return (
    <div className="col-span-12 md:col-span-8 relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative aspect-video overflow-hidden rounded-xl"
      >
        <Image
          src="/images/placeholder-1280x720.webp"
          alt="Fab Lab Workshop"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80"
        />
      </motion.div>
    </div>
  );
}
