import { ServiceSection } from "@/lib/services";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceSection;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;
  return (
    <section
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
              {service.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{service.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          {service.description}
        </p>
      </div>

      {/* Image Section */}
      <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={service.imageUrl}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={index < 2}
          />
        </div>
      </div>
    </section>
  );
}
