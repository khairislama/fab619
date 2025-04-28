"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { works } from "@/settings/data/grid";

// Define types for our context
type Work = (typeof works)[0];

interface GridContextType {
  activeFilter: string;
  visibleItems: number;
  columnsPerRow: number;
  filteredWorks: Work[];
  handleFilterClick: (filter: string) => void;
  handleLoadMore: () => void;
  hasMoreItems: boolean;
}

// Create the context with a default value
const GridContext = createContext<GridContextType | undefined>(undefined);

// Custom hook to use the grid context
export function useGridContext() {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error("useGridContext must be used within a GridProvider");
  }
  return context;
}

interface GridProviderProps {
  children: ReactNode;
  initialVisibleItems?: number;
}

export function GridProvider({
  children,
  initialVisibleItems = 6,
}: GridProviderProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleItems, setVisibleItems] = useState<number>(initialVisibleItems);
  const [columnsPerRow, setColumnsPerRow] = useState<number>(3);

  // Filter works based on active filter
  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((work) => work.tag === activeFilter);

  // Calculate how many items to show to complete rows
  const calculateItemsToShow = (itemCount: number, columns: number) => {
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
      calculateItemsToShow(initialVisibleItems, columnsPerRow),
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

  // Recalculate visible items when column count changes
  useEffect(() => {
    setVisibleItems((prev) => {
      // Ensure we always show complete rows
      return calculateItemsToShow(prev, columnsPerRow);
    });
  }, [columnsPerRow]);

  // Check if there are more items to load
  const hasMoreItems = filteredWorks.length > visibleItems;

  const value = {
    activeFilter,
    visibleItems,
    columnsPerRow,
    filteredWorks,
    handleFilterClick,
    handleLoadMore,
    hasMoreItems,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}
