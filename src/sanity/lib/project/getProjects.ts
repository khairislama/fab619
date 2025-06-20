import { defineQuery } from "next-sanity";
import { client } from "../client";
import { Project } from "@/sanity.types";

export const filters = [
  { id: "all", label: "View All" },
  { id: "custom machinery", label: "Custom Machinery" },
  { id: "digital fabrication", label: "Digital Fabrication" },
  { id: "iot and Electronics", label: "IOT & Electronics" },
  { id: "hardware design", label: "Hardware Design" },
  { id: "machine software", label: "Machine Software" },
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
