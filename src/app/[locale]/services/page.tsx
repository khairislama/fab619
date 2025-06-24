import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import ServiceCard from "@/src/components/services/service-card";
import ServiceFooter from "@/src/components/services/service-footer";
import { services } from "@/lib/services";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Footer from "@/src/components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "ServicesPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function ServicesPage({ params }: Props) {
  const t = useTranslations("ServicesPage");
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"ServicesPage"} />
      <div className="relative w-full h-[150px] overflow-hidden">
        <div className="md:w-2/3 h-full absolute right-0 hidden sm:block">
          <Image
            src="/images/services/services-bg.webp"
            alt="Blueprint background"
            width={1118}
            height={187}
            quality={50}
            className="opacity-20 h-full w-auto mx-auto"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <h2 className="text-sm sm:text-lg md:text-xl font-medium">
                {t.rich("subtitle", {
                  bold: (chunk) => <span className="font-bold">{chunk}</span>,
                  br: () => <br></br>,
                })}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-6">
          <div className="space-y-24 py-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <ServiceFooter />
        </div>
      </div>
      <Footer />
    </main>
  );
}
