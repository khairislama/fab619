"use client";

import { cn } from "@/lib/utils";
import { useCarousel } from "./carousel-provider";
import { useTranslations } from "next-intl";

export function CarouselDots() {
  const t = useTranslations("home.carousel");
  const { count, current, scrollTo } = useCarousel();

  return (
    <div
      className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10"
      role="tablist"
      aria-label={t("navigation")}
    >
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "h-3.5 w-3.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
            current === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
          )}
          onClick={() => scrollTo(index)}
          aria-label={t("goto", { index: index + 1 })}
          aria-selected={current === index}
          role="tab"
          tabIndex={current === index ? 0 : -1}
        />
      ))}
    </div>
  );
}
