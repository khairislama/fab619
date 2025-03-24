"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="col-span-12 md:col-span-6 md:col-start-6 lg:col-span-5 lg:col-start-7 relative z-10 -mt-0 md:-mt-32"
    >
      <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-2xl font-bold tracking-tight mb-4 text-primary">
            Who We Are & What We Do
          </h3>
          <p className="text-muted-foreground mb-6">
            We are a dynamic engineering design office specializing in digital
            fabrication and custom machine design. Our team of experts combines
            innovative technologies with creative solutions to bring your ideas
            to life.
          </p>
          <p className="text-muted-foreground">
            From CAD & CAM to 3D scanning, reverse engineering, and custom
            machine design, we offer comprehensive services to meet the diverse
            needs of our clients across various industries.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
