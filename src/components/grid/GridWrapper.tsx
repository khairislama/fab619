"use client";

import { useGridContext } from "./GridContext";
import { WorkCard } from "./WorkCard";

export function GridWrapper() {
  const { filteredWorks, visibleItems, activeFilter } = useGridContext();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
      role="tabpanel"
      id={`panel-${activeFilter}`}
      aria-labelledby={`tab-${activeFilter}`}
    >
      {filteredWorks.slice(0, visibleItems).map((work) => (
        <WorkCard
          key={work.id}
          id={work.id}
          slug={work.slug}
          title={work.title}
          description={work.description}
          image={work.image}
          tag={work.tag}
        />
      ))}
    </div>
  );
}
