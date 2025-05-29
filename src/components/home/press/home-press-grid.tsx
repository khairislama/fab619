import HomePressCard from "./home-press-card";
import { getPressItems } from "@/src/sanity/lib/press/getPressItems";

export default async function HomePressGrid() {
  const pressItems = await getPressItems(3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pressItems.map((item) => (
        <HomePressCard key={item._id} item={item} />
      ))}
    </div>
  );
}
