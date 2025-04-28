"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function ImageGallery() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const images = [
    {
      src: "/images/placeholder-1000x800.webp",
      alt: "Fab Lab Workshop",
      className: "rounded-tr-[80px] rounded-bl-[80px]",
      size: "large",
      y: y1,
    },
    {
      src: "/images/placeholder-800x600.webp",
      alt: "Digital Fabrication Process",
      className: "rounded-tl-[60px] rounded-br-[60px]",
      size: "medium",
      y: y2,
    },
    {
      src: "/images/placeholder-700x500.webp",
      alt: "Custom Machine Design",
      className: "rounded-t-[70px]",
      size: "small",
      y: y3,
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
    <div ref={containerRef} className="relative h-[600px] md:h-[500px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full h-full"
      >
        {/* Large image - positioned left */}
        <motion.div
          variants={itemVariants}
          style={{ y: y1 }}
          className="absolute left-0 top-0 md:top-10 w-[75%] md:w-[55%] h-[60%] z-10"
        >
          <div className="w-full h-full overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-xl">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 75vw, 55vw"
            />
          </div>
        </motion.div>

        {/* Medium image - positioned right top */}
        <motion.div
          variants={itemVariants}
          style={{ y: y2 }}
          className="absolute right-0 top-0 w-[60%] md:w-[45%] h-[50%] z-20"
        >
          <div className="w-full h-full overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-xl">
            <Image
              src={images[1].src || "/placeholder.svg"}
              alt={images[1].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 60vw, 45vw"
            />
          </div>
        </motion.div>

        {/* Small image - positioned right bottom */}
        <motion.div
          variants={itemVariants}
          style={{ y: y3 }}
          className="absolute right-[10%] bottom-0 w-[50%] md:w-[35%] h-[45%] z-30"
        >
          <div className="w-full h-full overflow-hidden rounded-t-[70px] shadow-xl">
            <Image
              src={images[2].src || "/placeholder.svg"}
              alt={images[2].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 35vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
