"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SlideshowContainer from "./SlideshowContainer";
import BackgroundDecorations from "./BackgroundDecorations";
import ProgressBar from "./ProgressBar";
import SlideIndicators from "./SlideIndicators";
import IndicatorButton from "./IndicatorButton";
import { slides } from "@/settings/data/slides";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import ChangeSlide from "./ChangeSlide";

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
              <div
                className="absolute inset-0 bg-cover bg-center w-full"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: isCurrent ? "scale(1.05)" : "scale(1.15)",
                  transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-black/70"></div>

              {/* Content */}
              <div className="relative z-20 flex h-full items-center">
                <div className="container">
                  <div className="w-full md:w-1/2 md:ml-auto lg:w-2/5 text-left">
                    {/* Animated Content */}
                    <div className="space-y-6">
                      {/* Subtitle with Animation */}
                      <div
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white/90 text-sm font-medium"
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          transform: isCurrent
                            ? "translateY(0)"
                            : "translateY(20px)",
                          transition:
                            "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
                        }}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{slide.subtitle}</span>
                      </div>

                      {/* Title with Animation */}
                      <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          transform: isCurrent
                            ? "translateY(0)"
                            : "translateY(30px)",
                          transition:
                            "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s",
                        }}
                      >
                        {slide.title}
                      </h1>

                      {/* Description with Animation */}
                      <p
                        className="text-base text-white/90 max-w-md"
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          transform: isCurrent
                            ? "translateY(0)"
                            : "translateY(40px)",
                          transition:
                            "opacity 0.8s ease-out 0.7s, transform 0.8s ease-out 0.7s",
                        }}
                      >
                        {slide.description}
                      </p>

                      {/* Button with Animation */}
                      <div
                        style={{
                          opacity: isCurrent ? 1 : 0,
                          transform: isCurrent
                            ? "translateY(0)"
                            : "translateY(50px)",
                          transition:
                            "opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s",
                        }}
                      >
                        <Link href={slide.buttonLink}>
                          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-8 py-3 font-medium text-white transition duration-300 ease-out hover:bg-white/20">
                            <span className="absolute inset-0 flex h-full w-full justify-center overflow-hidden">
                              <span className="absolute bottom-0 h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </span>
                            <span className="relative flex items-center gap-2">
                              {slide.buttonText}
                              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
