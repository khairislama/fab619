import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ServiceCardProps {
  id: string;
  icon: string;
  backgroundImage: string;
  index: number;
  totalServices: number;
}

export default function ServiceCard({
  id,
  icon,
  backgroundImage,
  index,
  totalServices,
}: ServiceCardProps) {
  const t = useTranslations("home.services");
  const cardNumber = index + 1;

  return (
    <article
      className="relative h-[300px] group overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      aria-labelledby={`service-${id}-title`}
      aria-describedby={`service-${id}-description`}
    >
      <Image
        src={backgroundImage}
        alt={t(`${id}.image-alt`)}
        fill
        className="object-cover brightness-[0.4] group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between">
        <div
          className="bg-white/90 backdrop-blur-sm p-2 rounded-md w-fit"
          role="img"
          aria-label={t(`${id}.icon-alt`)}
        >
          <Image
            src={icon}
            alt={t(`${id}.icon-alt`)}
            width={60}
            height={60}
            className="object-cover w-10 h-10"
            aria-hidden="true"
          />
        </div>

        {/* Service Title */}
        <h3
          id={`service-${id}-title`}
          className="text-xl font-bold text-white leading-tight"
          aria-level={3}
        >
          {t(`${id}.title`)}
        </h3>

        {/* Service Description */}
        <p
          id={`service-${id}-description`}
          className="text-sm text-white/90 leading-relaxed"
        >
          {t(`${id}.description`)}
        </p>

        {/* Call to Action Button */}
        <Button
          variant="outline"
          className="bg-white/90 backdrop-blur-sm hover:bg-white/80 border-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200"
        >
          <Link
            href={`/services`}
            className="inline-flex items-center justify-center no-underline focus:outline-none"
            aria-describedby={`service-${id}-title service-${id}-description`}
          >
            <span>{t("learn-more")}</span>
            <span className="sr-only">
              {t("learn-more-sr", {
                service: t(`${id}.title`),
                position: cardNumber,
                total: totalServices,
              })}
            </span>
          </Link>
        </Button>
      </div>

      {/* Screen reader only context */}
      <div className="sr-only">
        {t("service-card-context", {
          position: cardNumber,
          total: totalServices,
        })}
      </div>
    </article>
  );
}
