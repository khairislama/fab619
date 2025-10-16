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
      <div className="container mx-auto py-24 lg:py-8">
        <div className="relative w-full h-[130px] 2xl:h-[150px] overflow-hidden bg-card">
          <div className="md:w-full h-full absolute right-0 hidden md:block">
            <Image
              src="/images/services/services-bg.webp"
              alt={t("background-alt")}
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
            title={t("custom-machinery.title")}
            description={t("custom-machinery.description")}
            backgroundImage="/images/services/custom-machine.webp"
          />

          {/* 3D Printing & CNC */}
          <ServiceCard
            id="3d-printing"
            icon={"/icons/printer3d.svg"}
            title={t("3d-printing.title")}
            description={t("3d-printing.description")}
            backgroundImage="/images/services/printing.webp"
          />

          {/* IOT & Electronics */}
          <ServiceCard
            id="iot-electronics"
            icon={"/icons/electronics.svg"}
            title={t("iot-electronics.title")}
            description={t("iot-electronics.description")}
            backgroundImage="/images/services/electronics.webp"
          />

          {/* Hardware Design */}
          <ServiceCard
            id="hardware-engineering"
            icon={"/icons/design.svg"}
            title={t("hardware-engineering.title")}
            description={t("hardware-engineering.description")}
            backgroundImage="/images/services/design.webp"
          />

          {/* Machine Software */}
          <ServiceCard
            id="machine-software"
            icon={"/icons/software.svg"}
            title={t("machine-software.title")}
            description={t("machine-software.description")}
            backgroundImage="/images/services/machine-software.webp"
          />

          {/* Workshop & Training */}
          <ServiceCard
            id="workshops-training"
            icon={"/icons/workshop.svg"}
            title={t("workshops-training.title")}
            description={t("workshops-training.description")}
            backgroundImage="/images/services/workshop.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
