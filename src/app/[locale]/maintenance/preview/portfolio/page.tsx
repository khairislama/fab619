import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import Grid from "@/src/components/grid";

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
    <main className="container mx-auto px-6 py-12">
      <PageHeader pageName="portfolio" />
      <Grid />
    </main>
  );
}
