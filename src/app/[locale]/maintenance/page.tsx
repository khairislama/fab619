import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Slideshow from "@/src/components/slideshow";

type Props = {
  params: Promise<{ locale: string }>;
};

const Grid = dynamic(() => import("@/src/components/grid"), {
  loading: () => <p>Loading...</p>,
});

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
      <Grid />
      <Slideshow />
    </div>
  );
}
