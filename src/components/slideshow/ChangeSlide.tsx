import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

type Props = {
  prev?: boolean;
  goToSlide: () => void;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

function ChangeSlide({ goToSlide, prev, Icon }: Props) {
  return (
    <button
      onClick={goToSlide}
      className={cn(
        "absolute top-1/2 z-30 -translate-y-1/2 group",
        !prev ? "right-6" : "left-6"
      )}
      aria-label={!prev ? "Next slide" : "Previous slide"}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white/20">
        <Icon
          className={cn(
            "w-6 h-6 transition-transform duration-300 ",
            !prev
              ? "group-hover:translate-x-0.5"
              : "group-hover:-translate-x-0.5"
          )}
        />
      </div>
    </button>
  );
}

export default ChangeSlide;
