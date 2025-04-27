"use client";

import { ClientsLogo } from "@/settings/data/clients";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  showDelay: number;
  rtl?: boolean;
  duration: number;
  CLIENTS_LOGOS: ClientsLogo[];
}

export function Marquee({ showDelay, rtl, duration, CLIENTS_LOGOS }: Props) {
  const duplicatedLogos = [...CLIENTS_LOGOS, ...CLIENTS_LOGOS];

  return (
    <div className="relative py-1 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
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
                delay: !rtl
                  ? Math.min(index * 0.05, 1)
                  : Math.min((duplicatedLogos.length - index) * 0.05, 1),
              }}
            >
              <div className="flex-shrink-0 w-40 h-20 rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300">
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
    </div>
  );
}
