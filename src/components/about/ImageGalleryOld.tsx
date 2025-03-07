"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function ImageGalleryOld() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const images = [
    {
      src: "/images/placeholder-800x600.webp",
      alt: "Fab Lab Workshop",
      className: "rounded-tr-[100px] rounded-bl-[100px]",
    },
    {
      src: "/images/placeholder-800x600.webp",
      alt: "Digital Fabrication Process",
      className: "rounded-tl-[100px] rounded-br-[100px]",
    },
    {
      src: "/images/placeholder-800x600.webp",
      alt: "Custom Machine Design",
      className: "rounded-t-[100px]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="mt-24 md:mt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative aspect-[4/3] overflow-hidden shadow-xl"
          >
            <div className={`w-full h-full overflow-hidden ${image.className}`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
