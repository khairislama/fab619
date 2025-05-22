import { SlidesData } from "@/lib/carousel";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import WhoWeAre from "@/src/components/home/who-we-are";

export default function MaintenancePage() {
  return (
    <main>
      <CarouselProvider>
        <div className="relative w-full">
          <CarouselWrapper slides={SlidesData} />
        </div>
      </CarouselProvider>
      <WhoWeAre />
    </main>
  );
}
