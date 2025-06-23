import { defineQuery } from "next-sanity";
import { client } from "../client";
import { PressItem } from "@/sanity.types";

export const filters = [
  { id: "all", label: "View All" },
  { id: "workshop", label: "Workshop" },
  { id: "event", label: "Event" },
  { id: "machine", label: "Machine" },
];

export async function getPressItems(limit?: number) {
  let query = `*[_type == "pressItem"] {
      ...,
      "slug": slug.current,
    } | order(date desc)`;

  // Append limit slice if provided
  if (limit) {
    query += `[0..${limit - 1}]`;
  }

  // Define the query using defineQuery (optional, can be omitted if query is dynamic)
  const getPressItemsQuery = defineQuery(query);

  // Fetch the press items with type safety
  const pressItems = await client.fetch<PressItem[]>(getPressItemsQuery);

  return pressItems;
}
