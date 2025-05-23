import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import getIconByType from "@/lib/icon-mapper";
import { urlFor } from "@/src/sanity/lib/image";
import { PressItem } from "@/sanity.types";

interface PressCardProps {
  item: PressItem;
}

export default function HomePressCard({ item }: PressCardProps) {
  // Format the date from ISO string to the desired format
  const formattedDate = item.date
    ? format(new Date(item.date), "dd.MM.yyyy")
    : "";

  // Get the appropriate icon based on the item's icon type
  const icon = getIconByType(item.category!);

  // Generate the image URL using Sanity's image URL builder
  const imageUrl = urlFor(item.mainImage!).width(800).url();

  return (
    <div className="flex flex-col">
      <div className="flex items-center border-t border-gray-300 py-3">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-medium">{item.category}</span>
        </div>
        <div className="ml-auto text-gray-600">{formattedDate}</div>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">{item.title}</h2>

      <p className="text-gray-700 mb-6 line-clamp-3">{item.description}</p>

      <div className="relative mt-auto group">
        <Image
          src={imageUrl}
          alt={item.mainImage?.alt || item.title!}
          width={400}
          height={300}
          className="w-full h-60 object-cover"
        />
        <Link
          href={`/press/${item.slug}`}
          className={cn(
            "absolute bottom-4 right-4 bg-white rounded-full p-3",
            "flex items-center justify-center shadow-md",
            "transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
          )}
          aria-label={`View details about ${item.title}`}
        >
          <Eye className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
