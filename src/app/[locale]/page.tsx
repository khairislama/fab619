import { getTranslations, setRequestLocale } from "next-intl/server";
import { CarouselProvider } from "@/src/components/home/carousel/carousel-provider";
import { CarouselWrapper } from "@/src/components/home/carousel/carousel-wrapper";
import { SlidesData } from "@/lib/carousel";
import WhoWeAre from "@/src/components/home/who-we-are";
import HomeServices from "@/src/components/home/services";
import HomeProjects from "@/src/components/home/projects/home-projects";
import HomeClients from "@/src/components/home/home-clients";
import ContactSection from "@/src/components/home/contact/home-contact";
import ServiceFooter from "@/src/components/services/service-footer";
import HomePress from "@/src/components/home/press";
import Footer from "@/src/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://fab619.tn",
      siteName: "FAB619",
      images: [
        {
          url: "https://fab619.tn/images/og-home.webp",
          width: 1200,
          height: 630,
          alt: "FAB619 Homepage",
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://fab619.tn/images/og-home.webp"],
    },
    metadataBase: new URL("https://fab619.tn"),
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="lg:snap-y snap-mandatory h-screen min-h-[100dvh] overflow-y-scroll scrollbar-hide">
      <section id="carousel" className="snap-center">
        <CarouselProvider>
          <div className="relative w-full">
            <CarouselWrapper slides={SlidesData} />
          </div>
        </CarouselProvider>
      </section>
      <WhoWeAre />
      <HomeServices />
      <HomeProjects />
      <HomeClients />
      <HomePress />
      <ContactSection />
      <ServiceFooter />
      <Footer />
    </main>
  );
}
