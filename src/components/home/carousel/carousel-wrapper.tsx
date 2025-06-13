"use client";
import { useCarousel } from "./carousel-provider";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CarouselSlideItem } from "./carousel-slide-item";
import { CarouselNavigation } from "./carousel-navigation";
import { CarouselDots } from "./carousel-dots";
import { CarouselSlide } from "@/lib/carousel";
import { useTranslations } from "next-intl";
import * as React from "react";

interface CarouselWrapperProps {
  slides: CarouselSlide[];
}

export function CarouselWrapper({ slides }: CarouselWrapperProps) {
  const t = useTranslations("home.carousel");
  const { setApi } = useCarousel();

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        loop: true,
      }}
      aria-label={t("aria-label")}
    >
      <CarouselContent className="h-[90vh] xl:h-screen">
        {slides.map((slide, index) => (
          <CarouselSlideItem
            key={slide.id}
            slide={slide}
            index={index}
            totalSlides={4}
          />
        ))}
      </CarouselContent>
      <CarouselNavigation />
      <CarouselDots />
    </Carousel>
  );
}
