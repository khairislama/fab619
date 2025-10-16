import Footer from "@/src/components/Footer";
import PageHeader from "@/src/components/page-header";
import { PressGridProvider } from "@/src/components/press/grid/GridContext";
import { GridFilterButtons } from "@/src/components/press/grid/GridFilterButtons";
import { GridWrapper } from "@/src/components/press/grid/GridWrapper";
import { LoadMoreButton } from "@/src/components/press/grid/LoadMoreButton";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React, { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "PressPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function PressPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("PressPage");

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName="PressPage" />
      <div className="relative w-full overflow-hidden mt-4 sm:mt-10">
        <div className="w-full">
          <Image
            src="/images/press-header.webp"
            alt="Blueprint background"
            width={1568}
            height={187}
            priority
            quality={80}
            className="h-44 object-cover mx-auto"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <h2 className="text-sm sm:text-lg md:text-xl font-medium">
                {t("subtitle")}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <PressGridProvider initialVisibleItems={6}>
        <div className="py-16">
          <GridFilterButtons />
          <GridWrapper />
          <LoadMoreButton />
        </div>
      </PressGridProvider>
      <Footer />
    </main>
  );
}
