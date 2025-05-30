import { Eye } from "lucide-react";
import Image from "next/image";
import AnimatedCard from "../../animated-card";
import { Project } from "@/sanity.types";
import { urlFor } from "@/src/sanity/lib/image";
import Link from "next/link";

function HomeProjectCard({
  project,
  index,
  totalCount,
}: {
  project: Project;
  index: number;
  totalCount: number;
}) {
  // Generate the image URL using Sanity's image URL builder
  const imageUrl = urlFor(project.image!).width(800).url();
  const projectTitle = project.title || "Untitled Project";
  const imageAlt = project.image?.alt || `Preview of ${projectTitle}`;

  // Create a proper project URL - replace '#' with actual project URL
  const projectUrl = `/projects/${project.slug}`;

  return (
    <AnimatedCard
      index={index}
      className="group relative"
      aria-label={`Project ${index + 1} of ${totalCount}: ${projectTitle}`}
    >
      <Link
        href={projectUrl}
        className="block focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg transition-all duration-200"
        aria-describedby={`project-title-${project._id}`}
      >
        <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:brightness-50 group-focus-within:brightness-50 transition-all duration-200 ease-in-out">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              quality={80}
              sizes="(max-width: 1023px) 100vw, 33vw"
              className="object-cover brightness-75"
              priority={index < 2} // Prioritize first two images for LCP
            />
          ) : (
            <div
              className="w-full h-full bg-gray-300 flex items-center justify-center"
              role="img"
              aria-label="No image available"
            >
              <span className="text-gray-500 text-sm">No image</span>
            </div>
          )}
          <div
            className="absolute hidden group-hover:block right-[45%] top-[45%] bg-white rounded-full p-2 shadow-md transition-all duration-300 ease-in-out delay-300"
            aria-hidden="true"
          >
            <Eye className="h-5 w-5 text-gray-900" />
          </div>
        </div>
        <h3
          id={`project-title-${project._id}`}
          className="mt-2 text-lg text-gray-900 font-medium"
        >
          {project.title}
        </h3>
      </Link>
    </AnimatedCard>
  );
}

export default HomeProjectCard;
