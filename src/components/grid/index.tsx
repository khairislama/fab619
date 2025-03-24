"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { filters, works } from "@/settings/data/grid";
import { Link } from "@/src/i18n/navigation";

export default function Grid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [columnsPerRow, setColumnsPerRow] = useState<number>(3); // Default to 3 columns

  // Filter works based on active filter
  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.tag === activeFilter);

  // Detect screen size and set columns per row
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        setColumnsPerRow(4);
      } else if (window.innerWidth >= 1024) {
        // lg breakpoint
        setColumnsPerRow(3);
      } else if (window.innerWidth >= 768) {
        // md breakpoint
        setColumnsPerRow(2);
      } else {
        setColumnsPerRow(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate how many items to show to complete rows
  const calculateItemsToShow = (itemCount: number, columns: number) => {
    // Calculate how many complete rows we can show
    const completeRows = Math.ceil(itemCount / columns);
    return completeRows * columns;
  };

  // Handle filter click
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);

    // Calculate initial items to show based on current column count
    const filtered =
      filter === "all" ? works : works.filter((work) => work.tag === filter);
    const initialItems = Math.min(
      calculateItemsToShow(6, columnsPerRow),
      filtered.length
    );
    setVisibleItems(initialItems);
  };

  // Handle load more
  const handleLoadMore = () => {
    // Add enough items to complete the next row
    const newVisibleItems = calculateItemsToShow(
      visibleItems + 1,
      columnsPerRow
    );
    setVisibleItems(Math.min(newVisibleItems, filteredWorks.length));
  };

  // Recalculate visible items when column count changes
  // ? why
  useEffect(() => {
    setVisibleItems((prev) => {
      // Ensure we always show complete rows
      return calculateItemsToShow(prev, columnsPerRow);
    });
  }, [columnsPerRow]);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant="ghost"
            className={`px-6 py-2 text-sm font-medium transition-all ${
              activeFilter === filter.id
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "hover:bg-black/5 dark:hover:bg-white/10"
            }`}
            onClick={() => handleFilterClick(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Works grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filteredWorks.slice(0, visibleItems).map((work) => (
          <Link
            href={{
              pathname: "/maintenance/preview/projects/[projectSlug]",
              params: { projectSlug: work.slug },
            }}
            key={work.id}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="group relative overflow-hidden bg-gray-50 dark:bg-gray-900 aspect-[4/3] cursor-pointer"
            >
              <Image
                src={work.image || "/placeholder.svg?height=800&width=600"}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-gray-300">
                  {filters.find((f) => f.id === work.tag)?.label || work.tag}
                </span>
                <h3 className="text-xl font-medium text-white mt-1 mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {work.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Load more button */}
      {filteredWorks.length > visibleItems && (
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="px-8 py-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
