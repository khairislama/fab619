import { useTranslations } from "next-intl";
import React from "react";
import ContactInfo from "./ContactInfo";

export default function PageHeader({ pageName }: { pageName: string }) {
  const translation = useTranslations(pageName);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            {translation("title")}
          </h1>
        </div>
        <ContactInfo />
      </div>
      {/* <p className="text-xl text-muted-foreground my-6">
        {translation("description")}
      </p> */}

      <div className="h-1 w-full bg-foreground my-6 scrollbar-hide"></div>
    </>
  );
}
