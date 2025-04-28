import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

interface Props {
  slug: string;
  image: string;
  title: string;
}

function ProjectCard({ slug, image, title }: Props) {
  return (
    <Link
      href={{
        pathname: "/maintenance/preview/projects/[projectSlug]",
        params: { projectSlug: slug },
      }}
    >
      <div className="group relative overflow-hidden aspect-[4/3] rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-medium text-background">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
