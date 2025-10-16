import { useTranslations } from "next-intl";
import React from "react";
import ContactInfo from "./ContactInfo";

export default function PageHeader({ pageName }: { pageName: string }) {
  const translation = useTranslations(pageName);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            {translation("title")}
          </h1>
        </div>
        <ContactInfo />
      </div>
    </>
  );
}
