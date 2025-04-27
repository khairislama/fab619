import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import { Marquee } from "@/src/components/Marquee";
import {
  CLIENTS_LOGOS_EDUC,
  CLIENTS_LOGOS_INDUS,
  CLIENTS_LOGOS_ING,
} from "@/settings/data/clients";
import { useTranslations } from "next-intl";

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
      <section className="w-full py-12 md:py-24 flex flex-col 2xl:grid 2xl:grid-cols-7">
        <div className="w-full 2xl:col-span-2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl mb-3">
            {translation.rich("clients.title", {
              bolder: (chunks) => (
                <span className="font-extrabold">
                  {chunks}
                  <br />
                </span>
              ),
            })}
          </h2>
          <p>
            {translation.rich("clients.description", {
              underline: (chunks) => (
                <span className="underline font-bold">{chunks}</span>
              ),
            })}
          </p>
        </div>
        <div className="space-y-6 2xl:col-span-5">
          <div className="-ml-8 mr-4">
            <Marquee
              key={"marquee-1"}
              showDelay={0}
              duration={15}
              CLIENTS_LOGOS={CLIENTS_LOGOS_ING}
            />
          </div>
          {/* Inverted and slower */}
          <div className="ml-24 -mr-10">
            <Marquee
              key={"marquee-2"}
              showDelay={0.3}
              rtl
              duration={25}
              CLIENTS_LOGOS={CLIENTS_LOGOS_EDUC}
            />
          </div>
          <div className="ml-8 -mr-6">
            <Marquee
              key={"marquee-3"}
              showDelay={0.6}
              duration={20}
              CLIENTS_LOGOS={CLIENTS_LOGOS_INDUS}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
