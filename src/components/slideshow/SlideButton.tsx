import { UrlPath } from "@/settings/navigation";
import { Link } from "@/src/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface Props {
  isCurrent: boolean;
  buttonLink: UrlPath;
  buttonText: string;
}

function SlideButton({ isCurrent, buttonLink, buttonText }: Props) {
  return (
    <div
      style={{
        opacity: isCurrent ? 1 : 0,
        transform: isCurrent ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out 0.9s, transform 0.8s ease-out 0.9s",
      }}
    >
      <Link href={buttonLink}>
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/10 backdrop-blur-md px-8 py-3 font-medium text-white transition duration-300 ease-out hover:bg-white/20">
          <span className="absolute inset-0 flex h-full w-full justify-center overflow-hidden">
            <span className="absolute bottom-0 h-1 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <span className="relative flex items-center gap-2">
            {buttonText}
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default SlideButton;
