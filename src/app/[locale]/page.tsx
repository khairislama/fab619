import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import { SlidesData } from "@/lib/carousel";
import WhoWeAre from "@/src/components/home/who-we-are";
import HomeServices from "@/src/components/home/services";
import HomeProjects from "@/src/components/home/projects/home-projects";
import HomeClients from "@/src/components/home/home-clients";
import HomePressHeader from "@/src/components/home/press/home-press-header";
import HomePressGrid from "@/src/components/home/press/home-press-grid";
import ContactSection from "@/src/components/home/home-contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
      <section id="carousel" className="snap-center">
        <CarouselProvider>
          <div className="relative w-full">
            <CarouselWrapper slides={SlidesData} />
          </div>
        </CarouselProvider>
      </section>
      <WhoWeAre />
      <HomeServices />
      <HomeProjects />
      <HomeClients />
      <section
        id="press"
        className="relative snap-center min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto py-24 lg:py-12">
          <HomePressHeader />
          <HomePressGrid />
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
