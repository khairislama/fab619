import Image from "next/image";
import React from "react";
import AnimatedTitle from "../animated-title";
import AnimatedParagraph from "../animated-paragraph";
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
                alt={t("left-alt")}
                fill
                quality={80}
                className="object-cover blur-[2px]"
                sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 bg-white/70">
              <AnimatedTitle
                delay={0.1}
                className="font-extrabold text-gray-900 leading-tight uppercase"
              >
                {t.rich("title", { br: () => <br></br> })}
              </AnimatedTitle>
              <AnimatedParagraph className="text-gray-900 font-ibm_plex_mono 2k:text-lg">
                {t.rich("l-description", {
                  underline: (chunk) => (
                    <span className="underline font-bold">{chunk}</span>
                  ),
                })}
              </AnimatedParagraph>
            </div>
          </div>

          {/* Right Section with Two-toned Background */}
          <div className="flex flex-col col-span-2 gap-4 lg:gap-0">
            {/* Top Dark Section */}
            <div className="relative bg-gray-950 p-8 md:p-12 overflow-hidden sm:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 z-0 opacity-25">
                <Image
                  src="/images/whoarewe/right-top.webp"
                  alt={t("rt-alt")}
                  fill
                  quality={80}
                  className="object-cover blur-[2px]"
                  sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
                />
              </div>
              <div className="relative z-10 flex h-full sm:items-end">
                <AnimatedParagraph
                  delay={0.4}
                  className="2k:text-lg text-white font-ibm_plex_mono"
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
                  alt={t("rb-alt")}
                  fill
                  quality={80}
                  className="object-cover blur-[2px]"
                  sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
                />
              </div>
              <div className="relative z-10 flex h-full sm:items-end">
                <AnimatedParagraph
                  delay={0.6}
                  className="text-gray-900 2k:text-lg font-ibm_plex_mono"
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
