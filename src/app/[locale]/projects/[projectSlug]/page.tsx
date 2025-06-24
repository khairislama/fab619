import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Locale } from "@/src/i18n/routing";
import { getProjectBySlug } from "@/src/sanity/lib/project/getProjectBySlug";
import { urlFor } from "@/src/sanity/lib/image";
import { getProjects } from "@/src/sanity/lib/project/getProjects";
import Recommendation from "@/src/components/projects/Recommendation";
import SingleProjectHeading from "@/src/components/projects/single/single-project-heading";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import Footer from "@/src/components/Footer";

type Props = {
  params: Promise<{
    locale: string;
    projectSlug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getProjectBySlug(resolvedParams.projectSlug);

  if (!project) {
    return {
      title: "Project Not Found | FAB619",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | FAB619 Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: urlFor(project.image!).url(), width: 800, height: 600 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const t = await getTranslations("SingleProjectPage");

  const project = await getProjectBySlug(resolvedParams.projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
        <SingleProjectHeading />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={urlFor(project.image!).url()}
              alt={`${project.title} project thumbnail`}
              fill
              className="object-cover"
              priority
              quality={80}
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.title}
            </h1>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.client && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {t("client")}
                  </h3>
                  <p className="text-lg">{project.client}</p>
                </div>
              )}

              {project.year && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {t("year")}
                  </h3>
                  <p className="text-lg">{project.year}</p>
                </div>
              )}

              {project.location && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {t("location")}
                  </h3>
                  <p className="text-lg">{project.location}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {t("category")}
                </h3>
                <p className="text-lg capitalize">{project.tag}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                {project.description}
              </p>
            </div>

            {project.media && (
              <Button
                variant="outline"
                className="px-8 py-2 border bg-black text-white hover:bg-black hover:text-white hover:bg-black/60 rounded-2xl transition-colors"
                aria-label={t("read-more.aria-label")}
              >
                <Link
                  href={{
                    pathname: "/press/[pressSlug]",
                    params: { pressSlug: String(project.media) },
                  }}
                >
                  {t("read-more.btn")}
                </Link>
              </Button>
            )}
          </div>
        </div>
        <Recommendation slug={project.slug!} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "fr"]; // Your supported locales
  const projects = await getProjects();

  // Generate params for each locale and project slug combination
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      projectSlug: project.slug,
    }))
  );
}
