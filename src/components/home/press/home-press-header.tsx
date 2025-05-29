import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomePressHeader() {
  const t = useTranslations("home.press");
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pt-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <h1 className="text-5xl font-bold tracking-tighter">{t("title")}</h1>
        <p className="text-base md:text-lg max-w-2xl font-ibm_plex_mono xl:ml-10">
          {t.rich("subtitle", { br: () => <br></br> })}
        </p>
      </div>
      <Link
        href="/explore"
        className="flex items-center mt-4 md:mt-0 text-lg font-medium group"
        aria-label={t("explore-aria")}
      >
        {t("explore")}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </header>
  );
}
