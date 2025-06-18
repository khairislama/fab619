import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import { AboutHeroImage } from "@/src/components/about/AboutHeroImage";
import { AboutHeroCard } from "@/src/components/about/AboutHeroCard";
import { StatsSection } from "@/src/components/about/StatsSection";
import { EquipmentShowcase } from "@/src/components/about/EquipmentShowcase";
import ImageGalleryWrapper from "@/src/components/about/ImageGalleryWrapper";
import EquipmentsWrapper from "@/src/components/about/EquipmentsWrapper";
import OverlappingCircles from "@/src/components/about/OverlappingCircles";
import Maintenance from "@/src/components/Maintenance";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);
  return <Maintenance locale="en" />;

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"about"} />
      <section className="w-full py-12 md:pt-24">
        <div className="relative">
          <div className="grid grid-cols-12 gap-6">
            {/* Image Container - 8/12 width */}
            <AboutHeroImage />

            {/* Card - Starting from 6/12 */}
            <AboutHeroCard />
          </div>

          {/* Stats Section */}
          <StatsSection />

          {/* Image Gallery */}
          <ImageGalleryWrapper>
            <OverlappingCircles />
          </ImageGalleryWrapper>

          {/* Equipment Showcase */}
          <EquipmentsWrapper>
            <EquipmentShowcase />
          </EquipmentsWrapper>
        </div>
      </section>
    </main>
  );
}
