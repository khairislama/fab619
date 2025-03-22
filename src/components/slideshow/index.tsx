"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { slides } from "@/settings/data/slides";

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
  }, [currentSlide, slides.length]);

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
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

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
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: isCurrent ? "scale(1.05)" : "scale(1.15)",
                transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"></div>

            {/* Content */}
            <div className="relative z-20 flex h-full items-center">
              <div className="container mx-auto px-6">
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
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 group"
        aria-label="Previous slide"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
          <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </div>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 group"
        aria-label="Next slide"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
          <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white scale-100"
                  : "bg-white/40 scale-75 group-hover:bg-white/60 group-hover:scale-90"
              }`}
            />
            {index === currentSlide && (
              <div className="absolute -inset-1 rounded-full border border-white/50 animate-ping opacity-0"></div>
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/10">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{
            width: isHovered ? "100%" : "0%",
            transition: isHovered ? "none" : "width 6s linear",
          }}
        />
      </div>
    </div>
  );
}
