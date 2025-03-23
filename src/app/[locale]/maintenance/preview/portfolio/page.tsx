import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHeader from "@/src/components/page-header";
import Grid from "@/src/components/grid";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function PortfolioPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader pageName="portfolio" />
      <Grid />
    </div>
  );
}
