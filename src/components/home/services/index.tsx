import Image from "next/image";
import React from "react";
import ServiceCard from "./services-card";
import { useTranslations } from "next-intl";

function HomeServices() {
  const t = useTranslations("home.services");

  const services = [
    {
      id: "custom-machinery",
      icon: "/icons/settings.svg",
      backgroundImage: "/images/services/custom-machine.webp",
    },
    {
      id: "3d-printing-cnc",
      icon: "/icons/printer3d.svg",
      backgroundImage: "/images/services/printing.webp",
    },
    {
      id: "iot-electronics",
      icon: "/icons/electronics.svg",
      backgroundImage: "/images/services/electronics.webp",
    },
    {
      id: "hardware-design",
      icon: "/icons/design.svg",
      backgroundImage: "/images/services/design.webp",
    },
    {
      id: "machine-software",
      icon: "/icons/software.svg",
      backgroundImage: "/images/services/machine-software.webp",
    },
    {
      id: "workshop-training",
      icon: "/icons/workshop.svg",
      backgroundImage: "/images/services/workshop.webp",
    },
  ];

  return (
    <section
      className="relative container mx-auto my-28"
      aria-labelledby="services-section-title"
      role="region"
    >
      <header className="relative w-full h-[150px] overflow-hidden">
        <div className="md:w-2/3 h-full absolute right-0 hidden sm:block">
          <Image
            src="/images/services/services-bg.webp"
            alt="Blueprint background"
            width={1118}
            height={187}
            quality={50}
            className="opacity-20 h-full w-auto"
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <h2
                className="text-sm sm:text-lg md:text-xl font-medium"
                id="services-section-title"
                aria-level={2}
              >
                {t.rich("title", {
                  bold: (chunk) => <span className="font-bold">{chunk}</span>,
                  br: () => <br></br>,
                })}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-2 gap-0"
        role="list"
        aria-labelledby="services-section-title"
        aria-label={t("services-grid-label")}
      >
        {services.map((service, index) => (
          <div key={service.id} role="listitem">
            <ServiceCard
              {...service}
              index={index}
              totalServices={services.length}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeServices;
