import { defineQuery } from "next-sanity";
import { client } from "../client";
import { PressItem } from "@/sanity.types";

export async function getPressItems(limit?: number) {
  // Build the query string with optional limit
  const getPressItemsQuery = defineQuery(`*[_type == "pressItem"] {
    ...,
    "slug": slug.current,
  } | order(date desc)${limit ? `[0..${limit - 1}]` : ""}`);

  const pressItems: PressItem[] = await client.fetch(getPressItemsQuery);

  return pressItems;
}
