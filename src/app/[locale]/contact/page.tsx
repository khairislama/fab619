import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Link } from "@/src/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ContactPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return (
    <main className="w-full h-screen xl:ml-60">
      <section className="w-full text-4xl text-center mb-6 p-10">
        <h1>{t("title")}</h1>
      </section>
      <section className="w-full text-4xl text-center mb-6 p-10">
        <Link href="/about">{t("about")}</Link>
      </section>
      <section className="w-full text-4xl text-center mb-6 p-10">
        <h2>CONTACT CONTACT CONTACT CONTACT CONTACT</h2>
      </section>
      <section className="w-full text-4xl text-center mb-6 p-10">
        <h2>This is a banner after hero</h2>
      </section>
      <section className="w-full text-4xl text-center mb-6 p-10">
        <h2>This is a grid with filter</h2>
      </section>
    </main>
  );
}
