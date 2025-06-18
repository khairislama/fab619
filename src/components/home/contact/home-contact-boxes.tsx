import Image from "next/image";
import React from "react";
import { PhoneSvgIcon } from "../../icons/phone";
import { AddressSvgIcon } from "../../icons/address";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
              <Link href="tel:+21655336659" className="text-xl hover:underline">
                +216 55 336 659
              </Link>

              <br />
              <Link href="tel:+21654544731" className="text-xl hover:underline">
                +216 54 544 731
              </Link>
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
            <Link
              href="https://www.google.com/maps/search/?api=1&query=35.716583,10.758278"
              className="text-sm font-light text-justify"
              target="_blank"
            >
              {t("workshop.address")}
            </Link>
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
            <Link
              href="https://www.google.com/maps/search/?api=1&query=36.849250,10.199806"
              className="text-sm font-light text-justify"
              target="_blank"
            >
              {t("corporate.address")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContactBoxes;
