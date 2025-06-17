import { useTranslations } from "next-intl";
import Image from "next/image";
import { PhoneSvgIcon } from "../../icons/phone";
import { AddressSvgIcon } from "../../icons/address";
import HomeContactBoxes from "./home-contact-boxes";
import HomeContactSocial from "./home-contact-social";
import Footer from "../../Footer";

export default function ContactSection() {
  const t = useTranslations("home.contact");
  return (
    <section
      id="contact"
      className="relative snap-center min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto py-24 lg:py-12 flex flex-col justify-between">
        {/* Header */}
        <div className="w-full flex flex-col xl:flex-row items-start md:items-center justify-between mb-12 pt-6 gap-4 md:gap-8">
          <h2 className="text-5xl xl:text-6xl font-bold tracking-tighter">
            {t("title")}
          </h2>
          <p className="text-gray-700 text-center xl:text-justify max-w-xl 2xl:max-w-4xl font-ibm_plex_mono">
            {t.rich("subtitle", {
              semibold: (chunk) => (
                <span className="font-semibold">{chunk}</span>
              ),
            })}
          </p>
        </div>
        <HomeContactBoxes />
        <div className="w-full mt-14">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="bg-green-100">H</div>
            <div className="bg-green-100">E</div>
            <div className="bg-green-100">E</div>
          </div>
        </div>
        <HomeContactSocial />
        <Footer />
      </div>
    </section>
  );
}
