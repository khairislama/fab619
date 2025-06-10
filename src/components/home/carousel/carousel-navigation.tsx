"use client";

import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export function CarouselNavigation() {
  const t = useTranslations("home.carousel");
  return (
    <>
      <div className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 z-10">
        <CarouselNext
          className="h-10 w-10 rounded-full bg-black/50 text-white hover:text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label={t("next-slide")}
        />
      </div>
      <div className="hidden md:block absolute left-14 top-1/2 -translate-y-1/2 z-10">
        <CarouselPrevious
          className="h-10 w-10 rounded-full bg-black/50 text-white hover:text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label={t("previous-slide")}
        />
      </div>
    </>
  );
}
