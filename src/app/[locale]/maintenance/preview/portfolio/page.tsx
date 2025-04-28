import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import { GridProvider } from "@/src/components/grid/GridContext";
import { GridFilterButtons } from "@/src/components/grid/GridFilterButtons";
import { GridWrapper } from "@/src/components/grid/GridWrapper";
import { LoadMoreButton } from "@/src/components/grid/LoadMoreButton";

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

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName="portfolio" />
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
