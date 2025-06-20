"use client";

import { Button } from "@/components/ui/button";
import { useGridContext } from "./GridContext";
import { filters } from "@/src/sanity/lib/project/getProjects";

export function GridFilterButtons() {
  const { activeFilter, handleFilterClick } = useGridContext();

  return (
    <div
      className="flex flex-wrap gap-2 mb-12 justify-center"
      role="tablist"
      aria-label="Project filters"
    >
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant="ghost"
          className={`px-6 py-2 text-sm font-medium transition-all rounded-2xl ${
            activeFilter === filter.id
              ? "border border-black"
              : "bg-black text-white hover:bg-black/70 hover:text-white"
          }`}
          onClick={() => handleFilterClick(filter.id!)}
          role="tab"
          aria-selected={activeFilter === filter.id}
          aria-controls={`panel-${filter.id}`}
          id={`tab-${filter.id}`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
