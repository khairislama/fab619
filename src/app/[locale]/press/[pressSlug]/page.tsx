import { Button } from "@/components/ui/button";
import ContactInfo from "@/src/components/ContactInfo";
import { Link } from "@/src/i18n/navigation";
import { Locale } from "@/src/i18n/routing";
import { urlFor } from "@/src/sanity/lib/image";
import { getPressItemBySlug } from "@/src/sanity/lib/press/getPressItemBySlug";
import { getPressItems } from "@/src/sanity/lib/press/getPressItems";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { PortableText } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import PressRecommendation from "@/src/components/press/PressRecommendation";
import Footer from "@/src/components/Footer";

type Props = {
  params: Promise<{
    locale: string;
    pressSlug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const item = await getPressItemBySlug(resolvedParams.pressSlug);

  if (!item) {
    return {
      title: "Press item Not Found | FAB619",
      description: "The requested item could not be found.",
    };
  }

  return {
    title: `${item.title} | FAB619 Portfolio`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: urlFor(item.mainImage!).url(), width: 800, height: 600 }],
    },
  };
}

export default async function SinglePressPage({ params }: Props) {
  const resolvedParams = await params;
  const t = await getTranslations("SinglePressPage");

  const item = await getPressItemBySlug(resolvedParams.pressSlug);

  if (!item) {
    notFound();
  }

  const components = {
    types: {
      image: ({ value }: { value: SanityImageSource & { alt?: string } }) => (
        <div className="w-full">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ""}
            width={1200}
            height={750}
            className="rounded-md my-4 mx-auto"
          />
        </div>
      ),
    },
  };

  return (
    <>
      <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
        <Link href="/press" className="inline-block mb-8">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("heading")}
          </Button>
        </Link>
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
              {t("page-name")}
            </h1>
          </div>
          <ContactInfo />
        </div>
        <div className="relative w-full overflow-hidden mt-10">
          <div className="w-full">
            <Image
              src={urlFor(item.mainImage!).url()}
              alt="Blueprint background"
              width={1568}
              height={187}
              priority
              quality={80}
              className="h-44 object-cover blur-sm mx-auto"
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
          </div>
          <div className="absolute inset-0 flex items-center bg-white/60">
            <div className="container px-4 md:px-6 lg:px-8">
              <div className="max-w-lg md:max-w-2xl">
                <h2 className="text-sm sm:text-lg md:text-xl xl:text-3xl font-medium">
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto my-12 text-justify">
          <PortableText value={item.content ?? []} components={components} />
        </div>
        <PressRecommendation slug={item.slug!} />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "fr"]; // Your supported locales
  const pressItems = await getPressItems();

  // Generate params for each locale and project slug combination
  return locales.flatMap((locale) =>
    pressItems.map((item) => ({
      locale,
      pressSlug: item.slug,
    }))
  );
}
