import { Button } from "@/components/ui/button";
import HomePressGrid from "./home-press-grid";
import HomePressHeader from "./home-press-header";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

function HomePress() {
  const t = useTranslations("home.press");
  return (
    <section
      id="press"
      className="relative snap-center min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container mx-auto py-24 lg:py-10">
        <HomePressHeader />
        <HomePressGrid />
      </div>
      <Button
        size={"lg"}
        className="bg-gray-900 text-white px-20 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        aria-label={t("explore-aria")}
      >
        <Link href="/press">{t("explore")}</Link>
      </Button>
    </section>
  );
}

export default HomePress;
