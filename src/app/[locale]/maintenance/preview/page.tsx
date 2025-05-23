import { SlidesData } from "@/lib/carousel";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import HomeClients from "@/src/components/home/home-clients";
import ContactSection from "@/src/components/home/home-contact";
import HomePressGrid from "@/src/components/home/press/home-press-grid";
import HomePressHeader from "@/src/components/home/press/home-press-header";
import HomeProjects from "@/src/components/home/projects/home-projects";
import HomeServices from "@/src/components/home/services";
import WhoWeAre from "@/src/components/home/who-we-are";
import { getPressItems } from "@/src/sanity/lib/press/getPressItems";

export default async function MaintenancePage() {
  // Fetch press items from Sanity
  const pressItems = await getPressItems(3);

  return (
    <main>
      <CarouselProvider>
        <div className="relative w-full">
          <CarouselWrapper slides={SlidesData} />
        </div>
      </CarouselProvider>
      <WhoWeAre />
      <HomeServices />
      <HomeProjects />
      <HomeClients />
      <div className="container mx-auto py-20">
        <HomePressHeader />
        <HomePressGrid pressItems={pressItems} />
      </div>
      <ContactSection />
    </main>
  );
}
