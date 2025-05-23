import type { ReactNode } from "react";

// Sanity image type
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

// Static categories - these are the only allowed values
export const PRESS_CATEGORIES = ["workshop", "event", "machine"] as const;
export type PressCategory = (typeof PRESS_CATEGORIES)[number];

// Type for press items from Sanity
export interface PressItem {
  _id: string;
  title: string;
  slug: string;
  category: PressCategory;
  date: string;
  description: string;
  mainImage: SanityImage;
  content?: any[]; // For portable text content
}

// Helper type for rendering icons
export interface IconMapping {
  [key: string]: ReactNode;
}
