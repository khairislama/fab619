import { AboutHeroCard } from "./AboutHeroCard";
import { AboutHeroImage } from "./AboutHeroImage";
import { EquipmentShowcase } from "./EquipmentShowcase";
import { ImageGallery } from "./ImageGallery";
import { StatsSection } from "./StatsSection";

export function AboutHeroContainer() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container relative">
        <div className="grid grid-cols-12 gap-6">
          {/* Image Container - 8/12 width */}
          <AboutHeroImage />

          {/* Card - Starting from 6/12 */}
          <AboutHeroCard />
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Image Gallery */}
        <ImageGallery />

        {/* Equipment Showcase */}
        <EquipmentShowcase />
      </div>
    </section>
  );
}
