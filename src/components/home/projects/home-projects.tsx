import AnimatedTitle from "../../animated-title";
import { useTranslations } from "next-intl";
import AnimatedParagraph from "../../animated-paragraph";
import { Link } from "@/src/i18n/navigation";
import HomeProjectCardWrapper from "./home-project-card-wrapper";

function HomeProjects() {
  const t = useTranslations("home.projects");

  return (
    <section
      className="py-12 container mx-auto"
      aria-labelledby="home-projects-title"
      role="region"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <AnimatedTitle
            id="home-projects-title"
            className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4 uppercase"
            aria-level={2}
          >
            {t.rich("title", { br: () => <br></br> })}
          </AnimatedTitle>
          <AnimatedParagraph
            className="text-gray-800 mb-6 font-ibm_plex_mono"
            aria-labelledby="home-projects-title"
          >
            {t("subtitle")}
          </AnimatedParagraph>
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-900 group text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm transition-colors duration-200"
            aria-label={`${t("explore")} - ${t("learn-more-sr")}`}
          >
            <span>{t("explore")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 transition-transform duration-300 group-hover:transform group-hover:translate-x-1"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="sr-only">{t("learn-more-sr")}</span>
          </Link>
        </div>

        <HomeProjectCardWrapper />
      </div>
    </section>
  );
}

export default HomeProjects;
