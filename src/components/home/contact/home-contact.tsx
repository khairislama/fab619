import { useTranslations } from "next-intl";
import HomeContactBoxes from "./home-contact-boxes";
import HomeContactSocial from "./home-contact-social";
import Link from "next/link";
import Printer3dSvgIcon from "../../icons/printer3d";
import { FilePlusSvgIcon } from "../../icons/file-plus";
import { QuestionsSvgIcon } from "../../icons/questions";

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
          <p className="text-gray-700 text-center xl:text-justify max-w-xl 2k:max-w-4xl font-ibm_plex_mono">
            {t.rich("subtitle", {
              semibold: (chunk) => (
                <span className="font-semibold">{chunk}</span>
              ),
            })}
          </p>
        </div>
        <HomeContactBoxes />
        {/* Contact info */}
        <div className="w-full mt-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-2">
            <div className="w-full flex items-center justify-center lg:justify-start gap-4">
              <FilePlusSvgIcon className="h-12 w-12" />
              <div>
                <p className="underline uppercase text-sm">{t("projects")}</p>
                <Link
                  href="mailto:alilakais@fab619.tn"
                  className="text-lg 2k:text-xl hover:underline"
                >
                  alilakais@fab619.tn
                </Link>
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-4">
              <Printer3dSvgIcon className="h-12 w-12" />
              <div>
                <p className="underline uppercase text-sm">{t("print")}</p>
                <Link
                  href="mailto:3dprint@fab619.tn"
                  className="text-lg 2k:text-xl hover:underline"
                >
                  3dprint@fab619.tn
                </Link>
              </div>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-end gap-4">
              <QuestionsSvgIcon className="h-12 w-12" />
              <div>
                <p className="underline uppercase text-sm">{t("questions")}</p>
                <Link
                  href="mailto:contact@fab619.tn"
                  className="text-lg 2k:text-xl hover:underline"
                >
                  contact@fab619.tn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HomeContactSocial />
      </div>
    </section>
  );
}
