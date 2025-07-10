import { getProjects } from "@/src/sanity/lib/project/getProjects";
import { getTranslations } from "next-intl/server";
import { Slug } from "@/sanity.types";
import { WorkCard } from "./grid/WorkCard";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";

export default async function Recommendation({ slug }: { slug: Slug }) {
  const t = await getTranslations("SingleProjectPage");

  const projects = await getProjects();

  const sortedProjects = [...projects].sort((a, b) =>
    new Date(a.createdAt!) > new Date(b.createdAt!) ? 1 : -1
  );

  const currentIndex = sortedProjects.findIndex((p) => p.slug === slug);
  // Next = current + 1 or 0 if last
  const nextProject =
    sortedProjects[(currentIndex + 1) % sortedProjects.length];

  // Prev = current - 1 or last if first
  const prevProject =
    sortedProjects[
      (currentIndex - 1 + sortedProjects.length) % sortedProjects.length
    ];
  // Randoms excluding current, next, prev
  const excludedSlugs = [slug, nextProject.slug, prevProject.slug];
  const shuffled = sortedProjects
    .filter((p) => !excludedSlugs.includes(p.slug))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between my-10">
        <Link
          href={{
            pathname: "/projects/[projectSlug]",
            params: { projectSlug: String(prevProject.slug) },
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full justify-start gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-semibold">{t("previous")}</span>
          </div>
          {prevProject.title}
        </Link>
        <Link
          href={{
            pathname: "/projects/[projectSlug]",
            params: { projectSlug: String(nextProject.slug) },
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full justify-end gap-2">
            <span className="font-semibold">{t("next")}</span>
            <ArrowRight className="h-6 w-6" />
          </div>
          {nextProject.title}
        </Link>
      </div>
      <div className="flex items-center mb-8">
        <ChevronRight className="h-10 w-10" />
        <h2 className="text-2xl font-bold">{t("recommendation")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shuffled.map((project) => (
          <WorkCard
            key={project._id}
            _id={project._id}
            slug={project.slug}
            title={project.title}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
}
