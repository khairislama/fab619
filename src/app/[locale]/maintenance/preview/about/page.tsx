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
    <div className="container mx-auto px-4 py-12">
      <PageHeader pageName={"about"} />
      <AboutHeroContainer />
    </div>
  );
}
