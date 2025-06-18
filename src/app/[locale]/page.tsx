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
import ContactSection from "@/src/components/home/contact/home-contact";
import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import ServiceFooter from "@/src/components/services/service-footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="lg:snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-hide">
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
        className="relative snap-center min-h-screen flex flex-col items-center justify-center"
      >
        <div className="container mx-auto py-24 lg:py-10">
          <HomePressHeader />
          <HomePressGrid />
        </div>
        <Button
          size={"lg"}
          className="bg-gray-900 text-white px-20 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          <Link href="/press">EXPLORE OUR MEDIA</Link>
        </Button>
      </section>
      <ContactSection />
      <ServiceFooter />
    </main>
  );
}
