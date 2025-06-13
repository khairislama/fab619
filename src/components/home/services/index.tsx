import Image from "next/image";
import React from "react";
import ServiceCard from "./services-card";
import { useTranslations } from "next-intl";

function HomeServices() {
  const t = useTranslations("home.services");
  return (
    <section
      id="services"
      className="relative snap-center min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto py-24 lg:py-12">
        <div className="relative w-full h-[150px] overflow-hidden bg-card">
          <div className="md:w-full h-full absolute right-0 hidden md:block">
            <Image
              src="/images/services/services-bg.webp"
              alt="Blueprint background"
              width={1009}
              height={247}
              quality={50}
              className="opacity-20 w-full "
              sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 md:px-6 lg:px-8">
              <div className="max-w-md md:max-w-lg">
                <h2 className="text-sm sm:text-lg md:text-xl font-medium">
                  {t.rich("title", {
                    bold: (chunk) => <span className="font-bold">{chunk}</span>,
                    br: () => <br></br>,
                  })}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
          {/* Custom Machinery */}
          <ServiceCard
            id="custom-machinery"
            icon={"/icons/settings.svg"}
            title="Custom Machinery"
            description="Machinery development / Automation Systems / Advanced Robotics"
            backgroundImage="/images/services/custom-machine.webp"
          />

          {/* 3D Printing & CNC */}
          <ServiceCard
            id="3d-printing"
            icon={"/icons/printer3d.svg"}
            title="3D printing & CNC machining"
            description="On-Demand Manufacturing / rapid prototyping / customized production"
            backgroundImage="/images/services/printing.webp"
          />

          {/* IOT & Electronics */}
          <ServiceCard
            id="iot-electronics"
            icon={"/icons/electronics.svg"}
            title="IOT & Electronics"
            description="Electronic circuits /PCB Design & IOT integration / Embedded Software"
            backgroundImage="/images/services/electronics.webp"
          />

          {/* Hardware Design */}
          <ServiceCard
            id="hardware-engineering"
            icon={"/icons/design.svg"}
            title="Hardware design"
            description="Product design / Hardware Engineering / Prototyping / Electronic integration"
            backgroundImage="/images/services/design.webp"
          />

          {/* Machine Software */}
          <ServiceCard
            id="machine-software"
            icon={"/icons/software.svg"}
            title="Machine Software"
            description="Machine Control Algorithms, Real-time system Monitoring & Custom Software"
            backgroundImage="/images/services/machine-software.webp"
          />

          {/* Workshop & Training */}
          <ServiceCard
            id="workshops-training"
            icon={"/icons/workshop.svg"}
            title="Workshop & Training"
            description="Technical Documentation / Hands-On Workshops / Training sessions"
            backgroundImage="/images/services/workshop.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
