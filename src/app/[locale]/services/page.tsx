import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Maintenance from "@/src/components/Maintenance";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ServicesPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return <Maintenance locale={locale} />;
}
