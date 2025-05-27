import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import getIconByType from "@/lib/icon-mapper";
import { urlFor } from "@/src/sanity/lib/image";
import { PressItem } from "@/sanity.types";
import { useTranslations } from "next-intl";

interface PressCardProps {
  item: PressItem;
}

export default function HomePressCard({ item }: PressCardProps) {
  const t = useTranslations("home.press");
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
      <div className="flex items-center border-b-[3px] border-gray-600 py-3">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-medium">{t(item.category)}</span>
        </div>
        <div className="ml-auto text-gray-600">{formattedDate}</div>
      </div>

      <Link
        href={`/press/${item.slug}`}
        aria-label={`View details about ${item.title}`}
        className="group"
      >
        <h2 className="text-xl font-bold mt-4 mb-2 group-hover:underline">
          {item.title}
        </h2>

        <p className="text-gray-700 mb-6 line-clamp-3">{item.description}</p>

        <div className="relative mt-auto group">
          <Image
            src={imageUrl}
            alt={item.mainImage?.alt || item.title!}
            width={400}
            height={300}
            className="w-full h-60 object-cover group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <div className="hidden group-hover:block transition-all duration-200 ease-in-out">
            <div
              className={cn(
                "absolute top-[45%] right-[45%] bg-white/80 rounded-xl p-3",
                "flex items-center justify-center shadow-md",
                "transition-transform focus:scale-110 focus:outline-none"
              )}
            >
              <Eye className="h-6 w-6" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
