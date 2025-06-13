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
}

const CarouselContext = React.createContext<CarouselContextType | undefined>(
  undefined
);

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const value = React.useMemo(
    () => ({
      api,
      setApi,
      current,
      setCurrent,
      count,
      setCount,
      scrollTo,
    }),
    [api, current, count, scrollTo]
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
