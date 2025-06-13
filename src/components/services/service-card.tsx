import { ServiceSection } from "@/lib/services";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceSection;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const t = useTranslations(`ServicesPage.${service.id}`);
  const isEven = index % 2 === 0;
  return (
    <section
      id={service.id}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:grid-flow-col-dense"
      }`}
      aria-labelledby={`${service.id}-heading`}
    >
      {/* Content Section */}
      <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
        <div className="flex items-center space-x-4">
          <div
            className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center"
            aria-hidden="true"
          >
            {service.icon}
          </div>
          <div>
            <h2
              id={`${service.id}-heading`}
              className="text-2xl lg:text-3xl font-bold text-gray-900"
            >
              {t("title")}
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-sm">
              {t("subtitle")}
            </p>
          </div>
        </div>

        <p className="text-gray-700 leading-tight text-lg font-ibm_plex_mono">
          {t.rich("description", {
            focus: (chunk) => (
              <span className="underline font-semibold">{chunk}</span>
            ),
          })}
        </p>
      </div>

      {/* Image Section */}
      <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src={service.imageUrl}
            alt={service.imageAlt}
            fill
            className="object-scale-down"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={index < 2}
          />
        </div>
      </div>
    </section>
  );
}
