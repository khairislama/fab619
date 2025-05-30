import Image from "next/image";
import React from "react";
import AnimatedTitle from "../animated-title";
import AnimatedParagraph from "../animated-paragraph";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

function WhoWeAre() {
  const t = useTranslations("home.whoarewe");

  return (
    <section
      className="relative container mx-auto my-28"
      aria-labelledby="who-we-are-title"
      role="region"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[700px]">
        {/* Left Section with Semi-transparent Overlay */}
        <article
          className="relative overflow-hidden h-[500px] lg:h-[700px]"
          aria-labelledby="who-we-are-title"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/whoarewe/left.webp"
              alt="Manufacturing machinery background"
              fill
              quality={80}
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 33vw"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 bg-white/70">
            <AnimatedTitle
              delay={0.1}
              className="font-extrabold text-gray-900 leading-tight uppercase text-4xl"
              aria-level={2}
            >
              {t.rich("title", { br: () => <br></br> })}
            </AnimatedTitle>
            <AnimatedParagraph
              className="text-gray-900 text-lg font-ibm_plex_mono"
              aria-labelledby="who-we-are-title"
            >
              {t.rich("l-description", {
                underline: (chunk) => (
                  <span className="underline font-bold">{chunk}</span>
                ),
              })}
            </AnimatedParagraph>
            <Link
              href="/about"
              className="inline-flex items-center mt-8 text-xl font-medium text-gray-800 group"
              aria-describedby="who-we-are-title"
            >
              <span>{t("learn-more")}</span>
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">{t("learn-more-sr")}</span>
            </Link>
          </div>
        </article>

        {/* Right Section with Two-toned Background */}
        <div className="flex flex-col col-span-2" role="complementary">
          {/* Top Dark Section */}
          <article
            className="relative bg-gray-950 p-8 md:p-12 overflow-hidden sm:h-[300px] lg:h-[400px]"
            aria-label={t("capabilities-section-label")}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/whoarewe/right-top.webp"
                alt="Electronics and machinery"
                fill
                quality={80}
                className="object-cover opacity-25"
                sizes="(max-width: 1023px) 100vw, 67vw"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 flex h-full sm:items-end">
              <AnimatedParagraph
                delay={0.4}
                className="sm:text-lg text-white font-ibm_plex_mono"
                aria-label={t("capabilities-description-label")}
              >
                {t.rich("rt-description", {
                  underline: (chunk) => (
                    <span className="underline font-bold">{chunk}</span>
                  ),
                })}
              </AnimatedParagraph>
            </div>
          </article>

          {/* Bottom Yellow Section */}
          <article
            className="relative bg-[#FDF81A] p-8 md:p-12 overflow-hidden lg:h-[300px]"
            aria-label={t("collaboration-section-label")}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/whoarewe/right-bottom.webp"
                alt="working together and planning"
                fill
                quality={80}
                className="object-cover opacity-35"
                sizes="(max-width: 1023px) 100vw, 67vw"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 flex h-full sm:items-end">
              <AnimatedParagraph
                delay={0.6}
                className="text-gray-900 sm:text-lg font-ibm_plex_mono"
                aria-label={t("collaboration-description-label")}
              >
                {t.rich("rb-description", {
                  underline: (chunk) => (
                    <span className="underline font-bold">{chunk}</span>
                  ),
                })}
              </AnimatedParagraph>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
