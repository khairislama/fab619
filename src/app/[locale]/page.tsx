import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

export default function HomePage() {
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
        <h2>This is a slideshow section</h2>
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
