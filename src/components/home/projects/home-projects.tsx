import HomeProjectCard from "./home-project-card";
import AnimatedTitle from "../../animated-title";
import { useTranslations } from "next-intl";
import AnimatedParagraph from "../../animated-paragraph";
import { Link } from "@/src/i18n/navigation";

function HomeProjects() {
  const t = useTranslations("home.projects");
  const projects = [
    {
      id: 1,
      title: "ADM IDEX - Dispensing machine",
      image: "/images/projects/adm-idex.webp",
    },
    {
      id: 2,
      title: "JellyEdge - 4.00 TRINNING MODELS",
      image: "/images/projects/jelly-edge.webp",
    },
    {
      id: 3,
      title: "Desktop CNC -V2 Kit machine",
      image: "/images/projects/desktop-cnc.webp",
    },
    {
      id: 4,
      title: "Rumba 3D - SPLink controller",
      image: "/images/projects/rumba-3d.webp",
    },
    {
      id: 5,
      title: "AFP - Programming Software",
      image: "/images/projects/afp.webp",
    },
  ];

  return (
    <section className="py-12 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <AnimatedTitle className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4 uppercase">
            {t.rich("title", { br: () => <br></br> })}
          </AnimatedTitle>
          <AnimatedParagraph className="text-gray-800 mb-6 font-ibm_plex_mono">
            {t("subtitle")}
          </AnimatedParagraph>
          <Link
            href="/maintenance/preview/portfolio"
            aria-describedby={`portfolio`}
            className="inline-flex items-center text-gray-900 group text-xl font-medium"
          >
            {t("explore")}
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
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {projects.slice(0, 5).map((project) => (
          <HomeProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default HomeProjects;
