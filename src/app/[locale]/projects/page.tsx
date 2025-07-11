import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { GridProvider } from "@/src/components/projects/grid/GridContext";
import { GridFilterButtons } from "@/src/components/projects/grid/GridFilterButtons";
import { GridWrapper } from "@/src/components/projects/grid/GridWrapper";
import { LoadMoreButton } from "@/src/components/projects/grid/LoadMoreButton";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Footer from "@/src/components/Footer";
import PageHeader from "@/src/components/page-header";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "ProjectsPage.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function ProjectsPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("ProjectsPage");

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"ProjectsPage"} />
      <div className="relative w-full overflow-hidden mx-auto">
        <div className="w-full">
          <Image
            src="/images/projects-header.webp"
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
      <GridProvider initialVisibleItems={6}>
        <div className="py-16">
          <GridFilterButtons />
          <GridWrapper />
          <LoadMoreButton />
        </div>
      </GridProvider>
      <Footer />
    </main>
  );
}
