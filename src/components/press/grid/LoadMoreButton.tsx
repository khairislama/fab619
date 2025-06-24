"use client";

import { useTranslations } from "next-intl";
import { usePressGridContext } from "./GridContext";
import { Button } from "@/components/ui/button";

export function LoadMoreButton() {
  const { hasMoreItems, handleLoadMore } = usePressGridContext();
  const t = useTranslations("Common.load-more");

  if (!hasMoreItems) return null;

  return (
    <div className="flex justify-center mt-12">
      <Button
        variant="outline"
        className="px-8 py-2 border border-black hover:bg-black hover:text-white transition-colors"
        onClick={handleLoadMore}
        aria-label={t("aria-label")}
      >
        {t("btn")}
      </Button>
    </div>
  );
}
