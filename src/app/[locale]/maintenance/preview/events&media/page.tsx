"use client";

// import { use } from "react";
// import { setRequestLocale } from "next-intl/server";
// import { useTranslations } from "next-intl";
import Slideshow from "@/src/components/slideshow";
import { JSX, useState } from "react";
import Grid from "@/src/components/grid";
import { Button } from "@/components/ui/button";
import { AboutHeroContainer } from "@/src/components/about/AboutHeroContainer";

// type Props = {
//   params: Promise<{ locale: string }>;
// };

export default function MaintenancePage() {
  const [show, isShow] = useState("Grid");
  // { params }: Props
  // const { locale } = use(params);

  // // Enable static rendering
  // setRequestLocale(locale);

  // const t = useTranslations("HomePage");

  const componentsToShow = ["Grid", "Slideshow", "About"];

  const handleClick = (component: string) => {
    isShow(component);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Fab Lab
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discover our journey, our team, and our passion for digital
          fabrication and custom machine design.
        </p>
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {componentsToShow.map((c) => (
            <Button
              key={c}
              variant="ghost"
              className={`px-6 py-2 text-sm font-medium transition-all ${
                show === c
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-black/5 dark:hover:bg-white/10"
              }`}
              onClick={() => handleClick(c)}
            >
              {c}
            </Button>
          ))}
        </div>
        <div className="h-1 w-full bg-black my-6"></div>
        {show === "Grid" && <Grid />}
        {show === "Slideshow" && <Slideshow />}
        {show === "About" && <AboutHeroContainer />}

        {/* <AboutHeroContainer /> */}

        {/* Additional about page content can go here */}
      </div>
    </main>
  );
}
