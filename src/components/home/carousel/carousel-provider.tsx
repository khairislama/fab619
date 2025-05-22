"use client";

import * as React from "react";
import type { CarouselApi } from "@/components/ui/carousel";

interface CarouselContextType {
  api: CarouselApi | undefined;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | undefined>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  scrollTo: (index: number) => void;
  isPlaying: boolean;
  toggleAutoplay: () => void;
}

const CarouselContext = React.createContext<CarouselContextType | undefined>(
  undefined
);

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Handle autoplay functionality
  React.useEffect(() => {
    if (!api || !isPlaying) {
      // Clear interval if autoplay is disabled or API is not available
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Set up interval for auto-advancing slides every 30 seconds
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 8000); // 8 seconds

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [api, isPlaying]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  // Function to toggle autoplay on/off
  const toggleAutoplay = React.useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({
      api,
      setApi,
      current,
      setCurrent,
      count,
      setCount,
      scrollTo,
      isPlaying,
      toggleAutoplay,
    }),
    [api, current, count, scrollTo, isPlaying, toggleAutoplay]
  );

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (context === undefined) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}
