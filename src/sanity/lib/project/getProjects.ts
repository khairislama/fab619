import { defineQuery } from "next-sanity";
import { client } from "../client";
import { Project } from "@/sanity.types";

export const filters = [
  { id: "all", label: "View All" },
  { title: "Custom Machinery", value: "custom machinery" },
  { title: "Digital Fabrication", value: "digital fabrication" },
  { title: "IOT & Electronics", value: "iot and Electronics" },
  { title: "Hardware Design", value: "hardware design" },
  { title: "Machine Software", value: "machine software" },
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
