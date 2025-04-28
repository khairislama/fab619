"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EQUIPMENTS } from "@/settings/data/About";
import GradientOverlay from "./GradientOverlay";

export function EquipmentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Duplicate the equipment array to create a seamless infinite scroll
  const duplicatedEquipment = [...EQUIPMENTS, ...EQUIPMENTS];

  return (
    <div ref={ref} className="relative overflow-hidden py-4">
      {/* Gradient overlays for smooth fade effect */}
      <GradientOverlay />

      {/* First row - moves left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex mb-6"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex space-x-6 flex-nowrap"
        >
          {duplicatedEquipment.map((item, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
              className="flex-shrink-0 w-64"
            >
              <div className="bg-card hover:bg-accent/10 transition-all duration-300 rounded-xl p-6 h-full border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Second row - moves right (opposite direction) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex"
      >
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex space-x-6 flex-nowrap"
        >
          {duplicatedEquipment.map((item, index) => (
            <motion.div
              key={`row2-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.05 + 0.2, 1.2),
              }}
              className="flex-shrink-0 w-64"
            >
              <div className="bg-card hover:bg-accent/10 transition-all duration-300 rounded-xl p-6 h-full border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md hover:-translate-y-1">
                <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
