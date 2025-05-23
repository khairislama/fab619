import { Eye } from "lucide-react";
import Image from "next/image";
import AnimatedCard from "../../animated-card";
import Link from "next/link";

function HomeProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    image: string;
    hasViewButton?: boolean;
  };
}) {
  return (
    <AnimatedCard index={project.id} className="group relative">
      <Link href="#">
        <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:brightness-50 transition-all duration-200 ease-in-out">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={80}
            sizes="(max-width: 1023px) 100vw, 33vw"
            className="object-cover brightness-75"
          />
          <div className="absolute hidden group-hover:block right-[45%] top-[45%] bg-white rounded-full p-2 shadow-md transition-all duration-300 ease-in-out delay-300">
            <Eye className="h-5 w-5 text-gray-900" />
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
