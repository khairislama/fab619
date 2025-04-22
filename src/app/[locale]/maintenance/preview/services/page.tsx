import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import LogoMarquee from "@/src/components/services/LogoMarquee";
import { Marquee } from "@/src/components/services/Marquee";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ServicesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"services"} />
      {/* <LogoMarquee /> */}
      <section className="w-full py-12 md:py-24 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by industry leaders
          </h2>
          <p className="text-xl font-medium text-gray-600 mb-4">
            Join hundreds of innovative companies
          </p>
          <p className="text-gray-700">
            Our platform is the preferred choice for{" "}
            <span className="font-semibold">startups</span> and{" "}
            <span className="font-bold">enterprise businesses</span> looking to
            scale their operations with cutting-edge technology.
          </p>
        </div>
        <div className="relative overflow-hidden py-4 space-y-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <Marquee />
          <Marquee />
          <Marquee />
        </div>
      </section>
    </main>
  );
}
