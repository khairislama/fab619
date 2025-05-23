import { SlidesData } from "@/lib/carousel";
import {
  CLIENTS_LOGOS_EDUC,
  CLIENTS_LOGOS_INDUS,
  CLIENTS_LOGOS_ING,
} from "@/settings/data/clients";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import HomeProjects from "@/src/components/home/projects/home-projects";
import HomeServices from "@/src/components/home/services";
import WhoWeAre from "@/src/components/home/who-we-are";
import { Marquee } from "@/src/components/Marquee";

export default function MaintenancePage() {
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
      <div className="space-y-6 2xl:col-span-5 my-32">
        <div className="-ml-8">
          <Marquee
            key={"marquee-1"}
            showDelay={0}
            duration={15}
            CLIENTS_LOGOS={CLIENTS_LOGOS_ING}
          />
        </div>
        {/* Inverted and slower */}
        <div className="-ml-8 2xl:ml-24 2xl:-mr-10">
          <Marquee
            key={"marquee-2"}
            showDelay={0.3}
            rtl
            duration={25}
            CLIENTS_LOGOS={CLIENTS_LOGOS_EDUC}
          />
        </div>
        <div className="-ml-8 2xl:ml-8 2xl:-mr-6">
          <Marquee
            key={"marquee-3"}
            showDelay={0.6}
            duration={20}
            CLIENTS_LOGOS={CLIENTS_LOGOS_INDUS}
          />
        </div>
      </div>
    </main>
  );
}
