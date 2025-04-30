import ProjectCard from "./ProjectCard";
import { getProjects } from "@/src/sanity/lib/project/getProjects";
import { urlFor } from "@/src/sanity/lib/image";

export default async function Recommendation({ slug }: { slug: string }) {
  const projects = await getProjects();
  const filtered = projects.filter((p) => p.slug !== slug);
  const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shuffled.map((project) => (
          <ProjectCard
            key={project._id}
            slug={project.slug!}
            image={urlFor(project.image!).url()}
            title={project.title!}
          />
        ))}
      </div>
    </div>
  );
}
