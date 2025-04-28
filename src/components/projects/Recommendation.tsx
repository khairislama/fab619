import { works } from "@/settings/data/grid";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

function Recommendation({ slug }: { slug: string }) {
  const translation = useTranslations("portfolio");

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">
        {translation("recommendation")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {works
          .filter((work) => work.slug !== slug)
          .slice(0, 3)
          .map((work) => (
            <ProjectCard
              key={work.id}
              slug={work.slug}
              image={work.image}
              title={work.title}
            />
          ))}
      </div>
    </div>
  );
}

export default Recommendation;
