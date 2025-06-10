import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { use } from "react";
import { GridProvider } from "@/src/components/grid/GridContext";
import { GridFilterButtons } from "@/src/components/grid/GridFilterButtons";
import { GridWrapper } from "@/src/components/grid/GridWrapper";
import { LoadMoreButton } from "@/src/components/grid/LoadMoreButton";
import Image from "next/image";
import ContactInfo from "@/src/components/ContactInfo";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Portfolio | FAB619 - Engineering & Design Office",
  description:
    "Explore FAB619's portfolio of digital fabrication, custom machine design, and innovative engineering solutions for industries and professionals.",
  keywords:
    "digital fabrication, custom machine design, 3D printing, CNC machining, robotics, engineering projects, Tunisia",
  // openGraph: {
  //   title: "FAB619 Portfolio - Engineering Excellence & Innovation",
  //   description: "Discover our cutting-edge projects in digital fabrication, robotics, and custom machine design.",
  //   images: [{ url: "/images/og-portfolio.jpg", width: 1200, height: 630 }],
  // },
};

export default function PortfolioPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ProjectsPage");

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
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
            src="/images/projects-header.webp"
            alt="Blueprint background"
            width={1568}
            height={187}
            priority
            quality={80}
            className="h-44 object-cover"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <h2 className="text-sm sm:text-lg md:text-xl font-medium">
                {t("title")}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <GridProvider initialVisibleItems={6}>
        <div className="py-16">
          <GridFilterButtons />
          <GridWrapper />
          <LoadMoreButton />
        </div>
      </GridProvider>
    </main>
  );
}
