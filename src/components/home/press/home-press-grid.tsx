import { PressItem } from "@/sanity.types";
import HomePressCard from "./home-press-card";

interface PressGridProps {
  pressItems: PressItem[];
}

export default function HomePressGrid({ pressItems }: PressGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pressItems.map((item) => (
        <HomePressCard key={item._id} item={item} />
      ))}
    </div>
  );
}
