import { SlidesData } from "@/lib/carousel";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <main>
      <CarouselProvider>
        <div className="relative w-full">
          <CarouselWrapper slides={SlidesData} />
        </div>
      </CarouselProvider>
      <section className="relative container mx-auto my-28">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[700px]">
          {/* Left Section with Semi-transparent Overlay */}
          <div className="relative bg-gray-100">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/whoarewe/left.webp"
                alt="Manufacturing machinery background"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 bg-white/80">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                  WHO
                  <br />
                  WE ARE?
                </h2>
                <p className="text-gray-700 text-lg">
                  We specialize in the{" "}
                  <span className="underline">design and development</span> of{" "}
                  <span className="underline">custom machines</span>,{" "}
                  <span className="underline">automation systems</span>, and{" "}
                  <span className="underline">smart products</span> that bridge
                  the gap between innovation and industrial performance.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-xl font-medium text-gray-800 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Section with Two-toned Background */}
          <div className="flex flex-col col-span-2">
            {/* Top Dark Section */}
            <div className="relative bg-gray-900 p-8 md:p-12 flex-1">
              <div className="absolute inset-0 z-0 opacity-40">
                <Image
                  src="/images/whoarewe/right-top.webp"
                  alt="Electronics and machinery"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative z-10 text-white">
                <p className="text-lg leading-relaxed">
                  Whether it&apos;s{" "}
                  <span className="underline">CNC custom machinery</span>,{" "}
                  <span className="underline">IoT-enabled devices</span>,{" "}
                  <span className="underline">PCB boards</span>,{" "}
                  <span className="underline">Digital manufacturing</span> or{" "}
                  <span className="underline">workshops training programs</span>
                  , we deliver practical, scalable technologies that drive
                  real-world impact and measurable results.
                </p>
              </div>
            </div>

            {/* Bottom Yellow Section */}
            <div className="bg-yellow-300 p-8 md:p-12 flex-1">
              <p className="text-gray-800 text-lg leading-relaxed">
                Our multidisciplinary team brings together expertise in{" "}
                <span className="underline">mechanical engineering</span>,{" "}
                <span className="underline">electronics</span>,{" "}
                <span className="underline">machine software</span>, and{" "}
                <span className="underline">digital fabrication</span> to
                deliver end-to-end solutions—from concept and prototyping to
                production and integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
