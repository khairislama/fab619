"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function AboutHeroCard() {
  const translation = useTranslations("about.card");

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
            {translation("title")}
          </h3>
          <p className="text-muted-foreground mb-6">
            {translation("description-1")}
          </p>
          <p className="text-muted-foreground">
            {translation("description-2")}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
