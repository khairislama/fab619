import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import Maintenance from "@/src/components/Maintenance";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function MaintenancePage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <div>
      <section className="w-full text-4xl text-center mb-6 p-10">
        <h1>hello</h1>
      </section>
    </div>
  );
}
