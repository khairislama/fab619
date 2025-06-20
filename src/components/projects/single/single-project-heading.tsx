import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

function SingleProjectHeading() {
  const t = useTranslations("SingleProjectPage");

  return (
    <Link href="/projects" className="inline-block mb-8">
      <Button variant="ghost" className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        {t("heading")}
      </Button>
    </Link>
  );
}

export default SingleProjectHeading;
