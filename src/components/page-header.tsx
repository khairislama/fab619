import { useTranslations } from "next-intl";
import React from "react";

export default function PageHeader({ pageName }: { pageName: string }) {
  const translation = useTranslations(pageName);
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {" "}
        {translation("title")}{" "}
      </h1>
      <p className="text-xl text-muted-foreground mb-12">
        {translation("description")}
      </p>
      <div className="h-1 w-full bg-foreground my-6 scrollbar-hide"></div>
    </>
  );
}
