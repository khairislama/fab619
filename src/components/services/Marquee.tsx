"use client";

import { CLIENTS_LOGOS } from "@/settings/data/clients";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  showDelay: number;
  rtl?: boolean;
  duration: number;
}

export function Marquee({ showDelay, rtl, duration }: Props) {
  const duplicatedLogos = [...CLIENTS_LOGOS, ...CLIENTS_LOGOS];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: showDelay }}
      className="flex"
    >
      <motion.div
        initial={!rtl ? { x: 0 } : { x: "-50%" }}
        animate={!rtl ? { x: "-50%" } : { x: 0 }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex space-x-4 flex-nowrap"
      >
        {duplicatedLogos.map((item, index) => (
          <motion.div
            key={`row1-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: Math.min(index * 0.05, 1),
            }}
          >
            <div className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
              <Image
                src={"/marquees/" + item.logo.src}
                alt={item.name}
                width={item.logo.width}
                height={item.logo.height}
                className="object-contain h-20"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
