import { SlidesData } from "@/lib/carousel";
import { CarouselProvider } from "@/src/components/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/carousel/carousel-wrapper";

export default function MaintenancePage() {
  return (
    <CarouselProvider>
      <div className="relative w-full">
        <CarouselWrapper slides={SlidesData} />
      </div>
    </CarouselProvider>
  );
}
