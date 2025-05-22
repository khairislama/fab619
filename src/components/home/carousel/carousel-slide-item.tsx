"use client";

import Image from "next/image";
import Link from "next/link";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCarousel } from "./carousel-provider";
import { CarouselSlide } from "@/lib/carousel";
import { useTranslations } from "next-intl";
import AnimatedTitle from "../../animated-title";
import AnimatedParagraph from "../../animated-paragraph";
import { VideoLink } from "./video-link";

interface CarouselSlideItemProps {
  slide: CarouselSlide;
  index: number;
}

export function CarouselSlideItem({ slide, index }: CarouselSlideItemProps) {
  const t = useTranslations("home.carousel");
  const { current } = useCarousel();
  const isActive = current === index;

  return (
    <CarouselItem className="relative p-0">
      <div className="relative h-full w-full">
        <Image
          src={slide.image}
          alt={t(`${slide.id}.img-alt`)}
          fill
          className="object-cover brightness-90"
          priority={index === 0}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-20 text-white"
          aria-hidden={!isActive}
        >
          <div className="max-w-5xl">
            {slide.video && <VideoLink url={slide.video} />}
            <AnimatedTitle id={`slide-${slide.id}-title`} className="mb-4">
              {t.rich(`${slide.id}.title`, {
                br: () => <br />,
              })}
            </AnimatedTitle>
            <AnimatedParagraph
              id={`slide-${slide.id}-description`}
              className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl xl:max-w-3xl text-justify"
            >
              {t(`${slide.id}.description`)}
            </AnimatedParagraph>
            <Button
              asChild
              variant="default"
              size={"lg"}
              className="bg-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out mb-10 group"
            >
              <Link
                href={slide.buttonLink}
                aria-describedby={`slide-${slide.id}-title slide-${slide.id}-description`}
              >
                {t(`${slide.id}.cta`)}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 transition-transform duration-300 group-hover:transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
