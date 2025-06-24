import { getTranslations } from "next-intl/server";
import { Slug } from "@/sanity.types";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/src/i18n/navigation";
import { PressItemCard } from "./grid/PressItemCard";
import { getPressItems } from "@/src/sanity/lib/press/getPressItems";

export default async function PressRecommendation({ slug }: { slug: Slug }) {
  const translation = await getTranslations("SinglePressPage");

  const pressItems = await getPressItems();

  const sortedPressItems = [...pressItems].sort((a, b) =>
    new Date(a.date!) > new Date(b.date!) ? 1 : -1
  );

  const currentIndex = sortedPressItems.findIndex((p) => p.slug === slug);
  // Next = current + 1 or 0 if last
  const nextItem =
    sortedPressItems[(currentIndex + 1) % sortedPressItems.length];

  // Prev = current - 1 or last if first
  const prevItem =
    sortedPressItems[
      (currentIndex - 1 + sortedPressItems.length) % sortedPressItems.length
    ];
  // Randoms excluding current, next, prev
  const excludedSlugs = [slug, nextItem.slug, prevItem.slug];
  const shuffled = sortedPressItems
    .filter((p) => !excludedSlugs.includes(p.slug))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between my-10">
        <Link
          href={{
            pathname: "/press/[pressSlug]",
            params: { pressSlug: String(prevItem.slug) },
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full justify-start gap-2">
            <ArrowLeft className="h-6 w-6" />
            <span className="font-semibold">Previous Post</span>
          </div>
          {prevItem.title}
        </Link>
        <Link
          href={{
            pathname: "/press/[pressSlug]",
            params: { pressSlug: String(nextItem.slug) },
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full justify-end gap-2">
            <span className="font-semibold">Next Post</span>
            <ArrowRight className="h-6 w-6" />
          </div>
          {nextItem.title}
        </Link>
      </div>
      <div className="flex items-center mb-8">
        <ChevronRight className="h-10 w-10" />
        <h2 className="text-2xl font-bold">{translation("recommendation")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shuffled.map((item) => (
          <PressItemCard
            key={item._id}
            _id={item._id}
            slug={item.slug}
            title={item.title}
            mainImage={item.mainImage}
          />
        ))}
      </div>
    </div>
  );
}
