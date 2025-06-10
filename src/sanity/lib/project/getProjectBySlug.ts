import { defineQuery } from "next-sanity";
import { client } from "../client";
import { Project } from "@/sanity.types";

export async function getProjectBySlug(slug: string) {
  const lowerCaseSlug = slug.toLowerCase();
  const getProjectBySlugQuery =
    defineQuery(`*[_type == "project" && slug.current == $slug][0] {
        ...,
        "slug": slug.current,
  }`);

  const project = await client.fetch<Project>(getProjectBySlugQuery, {
    slug: lowerCaseSlug,
  });

  return project;
}
