import { Button } from "@/components/ui/button";
import { Link as NavLink } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

function ServiceFooter() {
  const t = useTranslations("ServicesPage.cta");
  return (
    <footer className="mt-24 text-center snap-center h-1/3">
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("title")}</h2>
        <p className="text-gray-600 mb-6">{t("subtitle")}</p>
        <Button
          size={"lg"}
          className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors rounded-none"
        >
          <NavLink href="/contact" className="w-full">
            {t("button")}
          </NavLink>
        </Button>
      </div>
    </footer>
  );
}

export default ServiceFooter;
