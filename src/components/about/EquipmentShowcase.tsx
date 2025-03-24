"use client";

import type React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scissors,
  Cog,
  Ruler,
  Printer,
  RotateCcw,
  CircuitBoardIcon as Circuit,
  Drill,
  Wrench,
  Crop,
  Hammer,
} from "lucide-react";

interface EquipmentItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function EquipmentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const equipment: EquipmentItem[] = [
    {
      name: "Laser Cutters",
      icon: <Scissors className="h-8 w-8" />,
      description: "Precision cutting for various materials",
    },
    {
      name: "Large Format CNC",
      icon: <Cog className="h-8 w-8" />,
      description: "For large-scale machining projects",
    },
    {
      name: "Precision CNC",
      icon: <Ruler className="h-8 w-8" />,
      description: "Small format high-precision machining",
    },
    {
      name: "3D Printers",
      icon: <Printer className="h-8 w-8" />,
      description: "Additive manufacturing solutions",
    },
    {
      name: "Lathe",
      icon: <RotateCcw className="h-8 w-8" />,
      description: "For cylindrical parts and components",
    },
    {
      name: "PCB Prototyping",
      icon: <Circuit className="h-8 w-8" />,
      description: "Electronic circuit board creation",
    },
    {
      name: "Drill Press",
      icon: <Drill className="h-8 w-8" />,
      description: "Precise drilling operations",
    },
    {
      name: "Bend Saw",
      icon: <Wrench className="h-8 w-8" />,
      description: "For cutting and bending materials",
    },
    {
      name: "Vinyl Cutters",
      icon: <Crop className="h-8 w-8" />,
      description: "For signage and graphic applications",
    },
    {
      name: "Tapping/Drilling Arm",
      icon: <Hammer className="h-8 w-8" />,
      description: "For threading and precision drilling",
    },
  ];

  // Duplicate the equipment array to create a seamless infinite scroll
  const duplicatedEquipment = [...equipment, ...equipment];

  return (
    <div ref={ref} className="mt-24 md:mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Manufacturing Equipment</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We have a comprehensive range of manufacturing equipment to bring your
          ideas to life
        </p>
      </div>

      <div className="relative overflow-hidden py-4">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
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
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
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
    </div>
  );
}
