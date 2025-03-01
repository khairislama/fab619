"use client";

import { motion } from "framer-motion";

function MotionDiv({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-card text-card-foreground p-6 shadow-lg"
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;
