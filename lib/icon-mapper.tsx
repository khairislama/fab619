import { IconMapping } from "@/src/sanity/lib/types";
import { Calendar, Settings, DraftingCompass } from "lucide-react";
import Image from "next/image";

// Map icon types from Sanity to Lucide React icons
export const iconMap: IconMapping = {
  workshop: (
    <Image src="/icons/workshop.svg" alt="workshop" width={20} height={20} />
  ),
  event: <Calendar className="h-5 w-5" />,
  machine: <Settings className="h-5 w-5" />,
};

export default function getIconByType(type: string) {
  return iconMap[type] || <Calendar className="h-5 w-5" />;
}
