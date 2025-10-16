import { useTranslations } from "next-intl";

export default function HomePressHeader() {
  const t = useTranslations("home.press");
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 2k:mb-24 pt-3 gap-4 md:gap-8">
      <h2 className="text-5xl xl:text-6xl font-bold tracking-tighter uppercase">
        {t("title")}
      </h2>
      <p className="text-base 2k:text-lg font-ibm_plex_mono">
        {t.rich("subtitle", { br: () => <br></br> })}
      </p>
    </header>
  );
}
