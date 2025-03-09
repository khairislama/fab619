import { slides } from "@/settings/data/slides";
import React from "react";

function SlideIndicator({
  currentSlide,
  goToSlide,
}: {
  currentSlide: number;
  goToSlide: (index: number) => void;
}) {
  return (
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
  );
}

export default SlideIndicator;
