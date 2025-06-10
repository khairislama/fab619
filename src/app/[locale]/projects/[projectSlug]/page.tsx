import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { Locale } from "@/src/i18n/routing";
import { getProjectBySlug } from "@/src/sanity/lib/project/getProjectBySlug";
import { urlFor } from "@/src/sanity/lib/image";
import { getProjects } from "@/src/sanity/lib/project/getProjects";
import Recommendation from "@/src/components/projects/Recommendation";

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

  const project = await getProjectBySlug(resolvedParams.projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <Link href="/projects" className="inline-block mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={urlFor(project.image!).url()}
            alt={`${project.title} project thumbnail`}
            fill
            className="object-cover"
            priority
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
                  Client
                </h3>
                <p className="text-lg">{project.client}</p>
              </div>
            )}

            {project.year && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Year
                </h3>
                <p className="text-lg">{project.year}</p>
              </div>
            )}

            {project.location && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Location
                </h3>
                <p className="text-lg">{project.location}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Category
              </h3>
              <p className="text-lg capitalize">{project.tag}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              {project.description}
            </p>
            <p className="text-lg text-muted-foreground">
              At FAB619, we specialize in delivering customized solutions from
              concept to final product, leveraging advanced machining
              technologies and design tools. This project demonstrates our
              commitment to precision, innovation, and technical excellence in
              the field of
              {project.tag === "custom machinery"
                ? " digital fabrication and custom machine design."
                : project.tag === "digital fabrication"
                  ? " visual communication and brand development."
                  : " software development and digital solutions."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tag === "custom machinery" && (
                <>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    3D Printing
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    CNC Machining
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    CAD Design
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Prototyping
                  </span>
                </>
              )}
              {project.tag === "digital fabrication" && (
                <>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Visual Design
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Typography
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Color Theory
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Brand Strategy
                  </span>
                </>
              )}
              {project.tag === "hardware design" && (
                <>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Web Development
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    IoT Integration
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                    API Development
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Recommendation slug={project.slug!} />
    </main>
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
