"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/src/i18n/navigation";
import { Project } from "@/sanity.types";
import { urlFor } from "@/src/sanity/lib/image";
import { Eye } from "lucide-react";

export function WorkCard({ _id, slug, title, image }: Partial<Project>) {
  return (
    <Link
      href={{
        pathname: "/projects/[projectSlug]",
        params: { projectSlug: String(slug) },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
        className="group relative overflow-hidden bg-gray-50 aspect-[4/3] cursor-pointer"
        role="article"
        aria-labelledby={`work-title-${_id}`}
      >
        <div className="relative h-60 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:brightness-50 transition-all duration-200 ease-in-out">
          <Image
            src={urlFor(image!).url()}
            alt={`${title} project thumbnail`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={80}
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
          <div className="absolute hidden group-hover:block right-[40%] top-[40%] bg-white rounded-xl px-4 py-2 shadow-md transition-all duration-300 ease-in-out delay-300">
            <Eye className="h-10 w-10 fill-gray-900 text-white" />
          </div>
        </div>
        <h3 className="mt-2 text-lg text-gray-900 font-medium">{title}</h3>
      </motion.div>
    </Link>
  );
}
