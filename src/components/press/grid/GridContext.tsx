"use client";

import { PressItem } from "@/sanity.types";
import { getPressItems } from "@/src/sanity/lib/press/getPressItems";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Define types for our context
interface GridContextType {
  activeFilter: string;
  visibleItems: number;
  columnsPerRow: number;
  filteredPressItems: PressItem[];
  pressItems: PressItem[];
  isLoading: boolean;
  handleFilterClick: (filter: string) => void;
  handleLoadMore: () => void;
  hasMoreItems: boolean;
}

const GridContext = createContext<GridContextType | undefined>(undefined);

// Custom hook to use the grid context
export function usePressGridContext() {
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

export function PressGridProvider({
  children,
  initialVisibleItems = 6,
}: GridProviderProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleItems, setVisibleItems] = useState<number>(initialVisibleItems);
  const [columnsPerRow, setColumnsPerRow] = useState<number>(3);
  const [pressItems, setPressItems] = useState<PressItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch projects on component mount
  useEffect(() => {
    async function fetchPressItems() {
      try {
        setIsLoading(true);
        const items = await getPressItems();
        setPressItems(items);
      } catch (error) {
        console.error("Error fetching press items:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPressItems();
  }, []);

  // Filter works based on active filter
  const filteredPressItems =
    activeFilter === "all"
      ? pressItems
      : pressItems.filter((pressItem) => pressItem.category === activeFilter);

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
      filter === "all"
        ? pressItems
        : pressItems.filter((pressItem) => pressItem.category === filter);
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
    setVisibleItems(Math.min(newVisibleItems, filteredPressItems.length));
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
  const hasMoreItems = filteredPressItems.length > visibleItems;

  const value = {
    activeFilter,
    visibleItems,
    columnsPerRow,
    filteredPressItems,
    pressItems,
    isLoading,
    handleFilterClick,
    handleLoadMore,
    hasMoreItems,
  };

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}
