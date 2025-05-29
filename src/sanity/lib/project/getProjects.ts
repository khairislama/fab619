import { defineQuery } from "next-sanity";
import { client } from "../client";
import { Project } from "@/sanity.types";

export const filters = [
  { id: "all", label: "View All" },
  { id: "1", label: "Custom Machinery" },
  { id: "2", label: "Digital Fabrication" },
  { id: "3", label: "IOT & Electronics" },
  { id: "4", label: "Hardware Design" },
  { id: "5", label: "Machine Software" },
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
