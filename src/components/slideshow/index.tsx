"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SlideshowContainer from "./SlideshowContainer";
import BackgroundDecorations from "./BackgroundDecorations";
import ProgressBar from "./ProgressBar";
import SlideIndicators from "./SlideIndicators";
import IndicatorButton from "./IndicatorButton";
import { slides } from "@/settings/data/slides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChangeSlide from "./ChangeSlide";
import SlideBackground from "./SlideBackground";
import SlideContent from "./SlideContent";
import SlideSubtitle from "./SlideSubtitle";
import SlideTitle from "./SlideTitle";
import SlideDescription from "./SlideDescription";
import SlideButton from "./SlideButton";

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prevSlide, setPrevSlide] = useState(0);
  const [direction, setDirection] = useState("right");
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = useCallback(() => {
    setPrevSlide(currentSlide);
    setDirection("right");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setPrevSlide(currentSlide);
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  // Reset and start the timer
  const resetSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }

    if (!isHovered) {
      slideTimerRef.current = setTimeout(() => {
        goToNextSlide();
      }, 6000);
    }
  }, [isHovered, goToNextSlide]);

  // Auto-advance slides, pause on hover
  useEffect(() => {
    resetSlideTimer();

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, isHovered, resetSlideTimer]);

  return (
    <>
      <SlideshowContainer setIsHovered={setIsHovered}>
        <BackgroundDecorations />

        {/* Slides */}
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          const isNext =
            (prevSlide === slides.length - 1 && index === 0) ||
            index === prevSlide + 1;
          const isPrev =
            (prevSlide === 0 && index === slides.length - 1) ||
            index === prevSlide - 1;

          let xPosition = "0%";
          let scale = 1;
          let opacity = 0;
          let zIndex = 0;

          if (isCurrent) {
            opacity = 1;
            zIndex = 20;
          } else if (direction === "right" && isPrev) {
            xPosition = "-100%";
            scale = 1.1;
            zIndex = 10;
          } else if (direction === "left" && isNext) {
            xPosition = "100%";
            scale = 1.1;
            zIndex = 10;
          }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 overflow-hidden`}
              style={{
                zIndex,
                opacity,
                transform: `translateX(${xPosition}) scale(${scale})`,
                transition:
                  "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Background Image with Parallax Effect */}
              <SlideBackground image={slide.image} isCurrent={isCurrent} />

              {/* Content */}
              <SlideContent>
                {/* Subtitle with Animation */}
                <SlideSubtitle
                  isCurrent={isCurrent}
                  subtitle={slide.subtitle}
                />

                {/* Title with Animation */}
                <SlideTitle isCurrent={isCurrent} title={slide.title} />

                {/* Description with Animation */}
                <SlideDescription
                  isCurrent={isCurrent}
                  description={slide.description}
                />

                {/* Button with Animation */}
                <SlideButton
                  isCurrent={isCurrent}
                  buttonLink={slide.buttonLink}
                  buttonText={slide.buttonText}
                />
              </SlideContent>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <ChangeSlide goToSlide={goToPrevSlide} prev Icon={ChevronLeft} />
        <ChangeSlide goToSlide={goToNextSlide} Icon={ChevronRight} />
        <SlideIndicators>
          {slides.map((_, index) => (
            <IndicatorButton
              key={index}
              index={index}
              currentSlide={currentSlide}
              goToSlide={goToSlide}
            />
          ))}
        </SlideIndicators>
        <ProgressBar isHovered={isHovered} />
      </SlideshowContainer>
    </>
  );
}
