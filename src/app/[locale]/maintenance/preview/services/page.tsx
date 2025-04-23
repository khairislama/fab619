import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
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
      <section className="w-full py-12 md:py-24 flex flex-col 2xl:grid 2xl:grid-cols-6">
        <div className="w-full 2xl:col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl mb-3">
            <span className="font-extrabold">
              Clients & Partners
              <br />
            </span>
            Collaborating to Build the Future of Manufacturing
          </h2>
          <p className="text-gray-700">
            we believe innovation thrives through collaboration. We are proud to
            work with forward-thinking{" "}
            <span className="underline font-bold">industries</span>,{" "}
            <span className="underline font-bold">institutions</span>, and{" "}
            <span className="underline font-bold">organizations</span> that
            share our passion for cutting-edge manufacturing solutions,
            Machinery and open source hardware.
          </p>
        </div>
        <div className="relative overflow-hidden py-4 space-y-6 2xl:col-span-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <Marquee showDelay={0} duration={30} />
          {/* Inverted and slower */}
          <Marquee showDelay={0.3} rtl duration={50} />
          <Marquee showDelay={0.6} duration={35} />
        </div>
      </section>
    </main>
  );
}
