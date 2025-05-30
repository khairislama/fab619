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
  totalSlides: number;
}

export function CarouselSlideItem({
  slide,
  index,
  totalSlides,
}: CarouselSlideItemProps) {
  const t = useTranslations("home.carousel");
  const { current } = useCarousel();
  const isActive = current === index;

  const slideNumber = index + 1;
  const slideAriaLabel = `${t(`${slide.id}.title`)} - ${t("slide-label", { current: slideNumber, total: totalSlides })}`;

  return (
    <CarouselItem
      className="relative p-0"
      role="group"
      aria-roledescription="slide"
      aria-label={slideAriaLabel}
      aria-current={isActive ? "true" : "false"}
      data-slide-index={index}
    >
      <div
        className="relative h-full w-full"
        tabIndex={isActive ? 0 : -1}
        aria-hidden={!isActive}
      >
        <Image
          src={slide.image}
          alt={t(`${slide.id}.img-alt`)}
          fill
          className="object-cover brightness-90"
          priority={index === 0}
          aria-hidden="true"
          quality={85}
          sizes="(max-width: 1023px) 100vw, 65vw"
        />

        {/* Gradient overlay for better text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-20 text-white"
          aria-hidden={!isActive}
        >
          <div className="max-w-5xl">
            {slide.video && (
              <div className="mb-4">
                <VideoLink
                  url={slide.video}
                  aria-label={t("video-link-label", {
                    title: t(`${slide.id}.title`),
                  })}
                />
              </div>
            )}
            <AnimatedTitle
              id={`slide-${slide.id}-title`}
              className="mb-4"
              aria-level={2}
            >
              {t(`${slide.id}.title`)}
            </AnimatedTitle>
            <AnimatedParagraph
              id={`slide-${slide.id}-description`}
              className="text-sm sm:text-base md:text-lg mb-6 max-w-2xl xl:max-w-3xl text-justify"
              aria-labelledby={`slide-${slide.id}-title`}
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
                className="inline-flex items-center gap-2 no-underline focus:outline-none"
                tabIndex={isActive ? 0 : -1}
              >
                <span>{t(`${slide.id}.cta`)}</span>
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
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="sr-only">
                  {t("cta-screen-reader-text", {
                    title: t(`${slide.id}.title`),
                  })}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
