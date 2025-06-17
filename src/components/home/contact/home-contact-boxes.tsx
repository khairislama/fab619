import Image from "next/image";
import React from "react";
import { PhoneSvgIcon } from "../../icons/phone";
import { AddressSvgIcon } from "../../icons/address";
import { useTranslations } from "next-intl";

function HomeContactBoxes() {
  const t = useTranslations("home.contact");
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
      <div className="w-full h-64 relative overflow-hidden">
        <Image
          src="/images/contact-background.webp"
          alt="contact information background"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        />
        <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-center items-center">
          <PhoneSvgIcon className="h-8 w-8 mb-4" />
          <h3 className="text-base font-light mb-4 uppercase">{t("title")}</h3>
          <div className="space-y-2">
            <p className="text-xl font-extralight">
              +216 55 336 659
              <br />
              +216 54 544 731
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 relative overflow-hidden">
        <Image
          src="/images/workshop-background.webp"
          alt="workshop address information background"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        />
        <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-center items-center">
          <AddressSvgIcon className="h-10 w-10 mb-4" />
          <h3 className="text-base font-light mb-4 uppercase">
            {t("workshop.title")}
          </h3>
          <div className="space-y-2">
            <p className="text-sm font-light">{t("workshop.address")}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-64 relative overflow-hidden">
        <Image
          src="/images/corporate-background.webp"
          alt="corporate address information background"
          fill
          className="object-cover brightness-[0.25]"
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        />
        <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-center items-center">
          <AddressSvgIcon className="h-10 w-10 mb-4" />
          <h3 className="text-base font-light mb-4 uppercase">
            {t("corporate.title")}
          </h3>
          <div className="space-y-2">
            <p className="text-sm font-light">{t("corporate.address")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactBoxes;
