import Image from "next/image";
import { Eye } from "lucide-react";
import { format } from "date-fns";
import getIconByType from "@/lib/icon-mapper";
import { urlFor } from "@/src/sanity/lib/image";
import { PressItem } from "@/sanity.types";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

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
        href={{
          pathname: "/press/[pressSlug]",
          params: { pressSlug: String(item.slug) },
        }}
        aria-label={`View details about ${item.title}`}
        className="group"
      >
        <h2 className="text-lg 2k:text-xl font-bold mt-2 2k:mt-4 mb-2 group-hover:underline line-clamp-2">
          {item.title}
        </h2>

        <p className="text-gray-700 mb-4 2k:mb-6 line-clamp-3">
          {item.description}
        </p>

        <div className="relative mt-auto group">
          <Image
            src={imageUrl}
            alt={item.mainImage?.alt || item.title!}
            width={400}
            height={300}
            className="w-full h-60 object-cover group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <div className="absolute hidden group-hover:block right-[40%] top-[40%] bg-white px-4 py-2 shadow-md transition-all duration-300 ease-in-out delay-300">
            <Eye className="h-10 w-10 fill-gray-900 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}
