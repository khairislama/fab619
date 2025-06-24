import { defineQuery } from "next-sanity";
import { client } from "../client";
import { PressItem } from "@/sanity.types";

export async function getPressItemBySlug(slug: string) {
  const lowerCaseSlug = slug.toLowerCase();
  const getPressItemBySlugQuery =
    defineQuery(`*[_type == "pressItem" && slug.current == $slug][0] {
        ...,
        "slug": slug.current,
  }`);

  const pressItem = await client.fetch<PressItem>(getPressItemBySlugQuery, {
    slug: lowerCaseSlug,
  });

  return pressItem;
}
