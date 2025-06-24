import { Eye } from "lucide-react";
import Image from "next/image";
import AnimatedCard from "../../animated-card";
import { Project } from "@/sanity.types";
import { urlFor } from "@/src/sanity/lib/image";
import { Link } from "@/src/i18n/navigation";

function HomeProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  // Generate the image URL using Sanity's image URL builder
  const imageUrl = urlFor(project.image!).width(800).url();
  return (
    <AnimatedCard index={index} className="group relative">
      <Link
        href={{
          pathname: "/projects/[projectSlug]",
          params: { projectSlug: String(project.slug) },
        }}
      >
        <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:brightness-50 transition-all duration-200 ease-in-out">
          <Image
            src={imageUrl}
            alt={project.image?.alt || project.title!}
            fill
            quality={80}
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            className="object-cover brightness-75"
          />
          <div className="absolute hidden group-hover:block right-[40%] top-[40%] bg-white rounded-xl px-4 py-2 shadow-md transition-all duration-300 ease-in-out delay-300">
            <Eye className="h-10 w-10 fill-gray-900 text-white" />
          </div>
        </div>
        <h3 className="mt-2 text-lg text-gray-900 font-medium">
          {project.title}
        </h3>
      </Link>
    </AnimatedCard>
  );
}

export default HomeProjectCard;
