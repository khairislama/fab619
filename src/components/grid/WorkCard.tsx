"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/src/i18n/navigation";
import { filters } from "@/settings/data/grid";

interface WorkCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export function WorkCard({
  id,
  slug,
  title,
  description,
  image,
  tag,
}: WorkCardProps) {
  const filterLabel = filters.find((f) => f.id === tag)?.label || tag;

  return (
    <Link
      href={{
        pathname: "/maintenance/preview/projects/[projectSlug]",
        params: { projectSlug: slug },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        className="group relative overflow-hidden bg-gray-50 dark:bg-gray-900 aspect-[4/3] cursor-pointer"
        role="article"
        aria-labelledby={`work-title-${id}`}
      >
        <Image
          src={image || "/placeholder.svg?height=800&width=600"}
          alt={`${title} project thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-xs uppercase tracking-wider text-gray-300">
            {filterLabel}
          </span>
          <h3
            id={`work-title-${id}`}
            className="text-xl font-medium text-white mt-1 mb-2"
          >
            {title}
          </h3>
          <p className="text-sm text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
