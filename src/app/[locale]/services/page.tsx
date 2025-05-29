import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import { useTranslations } from "next-intl";
import ServiceCard from "@/src/components/services/service-card";
import ServiceTitle from "@/src/components/services/service-title";
import ServiceFooter from "@/src/components/services/service-footer";
import { services } from "@/lib/services";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ServicesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const translation = useTranslations("services");

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"services"} />
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-6">
          <ServiceTitle />

          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <ServiceFooter />
        </div>
      </div>
    </main>
  );
}
