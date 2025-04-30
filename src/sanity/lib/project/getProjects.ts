import { defineQuery } from "next-sanity";
import { client } from "../client";

export type Work = {
  _id: string;
  title: string;
  slug: string;
  image: any;
  tag: "product design" | "brand identity" | "digital solutions";
  description: string;
  client?: string;
  year?: string;
  location?: string;
  content?: any;
};

export const filters = [
  { id: "all", label: "View All" },
  { id: "product design", label: "Product Design" },
  { id: "brand identity", label: "Brand Identity" },
  { id: "digital solutions", label: "Digital Solutions" },
];

export async function getProjects() {
  const getProjectsQuery = defineQuery(`*[_type == "project"] {
        ...,
        "slug": slug.current,
      } | order(createdAt desc)`);

  const projects = await client.fetch(getProjectsQuery);

  return projects;
}
