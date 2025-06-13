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
      id="about"
      className="relative snap-center min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto py-24 lg:py-12">
        <div className="grid grid-cols-1 gap-y-4 lg:gap-0 lg:grid-cols-3 lg:h-[700px]">
          {/* Left Section with Semi-transparent Overlay */}
          <div className="relative overflow-hidden h-fit lg:h-[700px]">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/whoarewe/left.webp"
                alt="Manufacturing machinery background"
                fill
                quality={80}
                className="object-cover blur-[2px]"
                sizes="(max-width: 1023px) 100vw, 33vw"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 bg-white/70">
              <AnimatedTitle
                delay={0.1}
                className="font-extrabold text-gray-900 leading-tight uppercase text-4xl"
              >
                {t.rich("title", { br: () => <br></br> })}
              </AnimatedTitle>
              <AnimatedParagraph className="text-gray-900 text-lg font-ibm_plex_mono">
                {t.rich("l-description", {
                  underline: (chunk) => (
                    <span className="underline font-bold">{chunk}</span>
                  ),
                })}
              </AnimatedParagraph>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-xl font-medium text-gray-800 group animate-bounce"
              >
                {t("learn-more")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Section with Two-toned Background */}
          <div className="flex flex-col col-span-2 gap-4 lg:gap-0">
            {/* Top Dark Section */}
            <div className="relative bg-gray-950 p-8 md:p-12 overflow-hidden sm:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 z-0 opacity-25">
                <Image
                  src="/images/whoarewe/right-top.webp"
                  alt="Electronics and machinery"
                  fill
                  quality={80}
                  className="object-cover blur-[2px]"
                  sizes="(max-width: 1023px) 100vw, 33vw"
                />
              </div>
              <div className="relative z-10 flex h-full sm:items-end">
                <AnimatedParagraph
                  delay={0.4}
                  className="sm:text-lg text-white font-ibm_plex_mono"
                >
                  {t.rich("rt-description", {
                    underline: (chunk) => (
                      <span className="underline font-bold">{chunk}</span>
                    ),
                  })}
                </AnimatedParagraph>
              </div>
            </div>

            {/* Bottom Yellow Section */}
            <div className="relative bg-[#FDF81A] p-8 md:p-12 overflow-hidden lg:h-[300px]">
              <div className="absolute inset-0 z-0 opacity-35">
                <Image
                  src="/images/whoarewe/right-bottom.webp"
                  alt="working together and planning"
                  fill
                  quality={80}
                  className="object-cover blur-[2px]"
                  sizes="(max-width: 1023px) 100vw, 33vw"
                />
              </div>
              <div className="relative z-10 flex h-full sm:items-end">
                <AnimatedParagraph
                  delay={0.6}
                  className="text-gray-900 sm:text-lg font-ibm_plex_mono"
                >
                  {t.rich("rb-description", {
                    underline: (chunk) => (
                      <span className="underline font-bold">{chunk}</span>
                    ),
                  })}
                </AnimatedParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
