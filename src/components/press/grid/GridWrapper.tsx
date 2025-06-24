"use client";

import { usePressGridContext } from "./GridContext";
import { PressItemsSkeleton } from "../press-item-skelettons";
import HomePressCard from "../../home/press/home-press-card";

export function GridWrapper() {
  const { filteredPressItems, visibleItems, activeFilter, isLoading } =
    usePressGridContext();

  // Loading state
  if (isLoading) {
    return <PressItemsSkeleton />;
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      role="tabpanel"
      id={`panel-${activeFilter}`}
      aria-labelledby={`tab-${activeFilter}`}
    >
      {filteredPressItems.slice(0, visibleItems).map((pressItem) => (
        <HomePressCard key={pressItem._id} item={pressItem} />
      ))}
    </div>
  );
}
