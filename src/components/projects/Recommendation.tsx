import { getProjects } from "@/src/sanity/lib/project/getProjects";
import { getTranslations } from "next-intl/server";
import { Slug } from "@/sanity.types";
import { WorkCard } from "./grid/WorkCard";

export default async function Recommendation({ slug }: { slug: Slug }) {
  const translation = await getTranslations("portfolio");

  const projects = await getProjects();
  const filtered = projects.filter((p) => p.slug !== slug);
  const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">
        {translation("recommendation")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shuffled.map((project) => (
          <WorkCard
            key={project._id}
            _id={project._id}
            slug={project.slug}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
