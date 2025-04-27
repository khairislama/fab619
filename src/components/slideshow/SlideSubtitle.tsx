import { Sparkles } from "lucide-react";

interface Props {
  isCurrent: boolean;
  subtitle: string;
}

function SlideSubtitle({ isCurrent, subtitle }: Props) {
  return (
    <div
      className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white/90 text-sm font-medium"
      style={{
        opacity: isCurrent ? 1 : 0,
        transform: isCurrent ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
      }}
    >
      <Sparkles className="w-4 h-4" />
      <span>{subtitle}</span>
    </div>
  );
}

export default SlideSubtitle;
