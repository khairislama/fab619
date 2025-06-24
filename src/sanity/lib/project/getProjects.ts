import { defineQuery } from "next-sanity";
import { client } from "../client";
import { Project } from "@/sanity.types";

export const filters = [
  { id: "all" },
  { id: "custom machinery" },
  { id: "digital fabrication" },
  { id: "iot and Electronics" },
  { id: "hardware design" },
  { id: "machine software" },
];

export async function getProjects(limit?: number) {
  let query = `*[_type == "project"] {
    ...,
    "slug": slug.current,
  } | order(createdAt desc)`;

  if (limit) {
    query += `[0..${limit - 1}]`;
  }

  const getProjectsQuery = defineQuery(query);

  const projects = await client.fetch<Project[]>(getProjectsQuery);

  return projects;
}
