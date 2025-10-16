"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGridContext } from "./GridContext";
import { WorkCard } from "./WorkCard";

export function GridWrapper() {
  const { filteredWorks, visibleItems, activeFilter, isLoading } =
    useGridContext();

  // Loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="aspect-[4/3]">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
      role="tabpanel"
      id={`panel-${activeFilter}`}
      aria-labelledby={`tab-${activeFilter}`}
    >
      {filteredWorks.slice(0, visibleItems).map((work) => (
        <WorkCard
          key={work._id}
          _id={work._id}
          slug={work.slug}
          title={work.title}
          images={work.images}
        />
      ))}
    </div>
  );
}
