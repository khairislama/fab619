import { IconMapping } from "@/src/sanity/lib/types";
import { PenToolIcon as Tool, Calendar, Settings } from "lucide-react";

// Map icon types from Sanity to Lucide React icons
export const iconMap: IconMapping = {
  workshop: <Tool className="h-5 w-5" />,
  event: <Calendar className="h-5 w-5" />,
  machine: <Settings className="h-5 w-5" />,
};

export default function getIconByType(type: string) {
  return iconMap[type] || <Calendar className="h-5 w-5" />;
}
