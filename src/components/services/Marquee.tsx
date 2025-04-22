"use client";

import { CLIENTS_LOGOS } from "@/settings/data/clients";
import { motion } from "framer-motion";
import Image from "next/image";

export function Marquee() {
  const duplicatedLogos = [...CLIENTS_LOGOS, ...CLIENTS_LOGOS];

  return (
    <div className="flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
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
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
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
    </div>
  );
}
