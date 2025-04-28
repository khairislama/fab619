"use client";

import { useGridContext } from "./GridContext";
import { Button } from "@/components/ui/button";

export function LoadMoreButton() {
  const { hasMoreItems, handleLoadMore } = useGridContext();

  if (!hasMoreItems) return null;

  return (
    <div className="flex justify-center mt-12">
      <Button
        variant="outline"
        className="px-8 py-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        onClick={handleLoadMore}
        aria-label="Load more projects"
      >
        Load More
      </Button>
    </div>
  );
}
