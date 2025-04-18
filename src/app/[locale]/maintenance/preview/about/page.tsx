import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { AboutHeroContainer } from "@/src/components/about/AboutHeroContainer";
import PageHeader from "@/src/components/page-header";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function AboutPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"about"} />
      <AboutHeroContainer />
    </main>
  );
}
