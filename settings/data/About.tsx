import {
  Scissors,
  Cog,
  Ruler,
  Printer,
  RotateCcw,
  CircuitBoardIcon as Circuit,
  Drill,
  Wrench,
  Crop,
  Hammer,
} from "lucide-react";

export interface EquipmentItem {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export const EQUIPMENTS: EquipmentItem[] = [
  {
    name: "Laser Cutters",
    icon: <Scissors className="h-8 w-8" />,
    description: "Precision cutting for various materials",
  },
  {
    name: "Large Format CNC",
    icon: <Cog className="h-8 w-8" />,
    description: "For large-scale machining projects",
  },
  {
    name: "Precision CNC",
    icon: <Ruler className="h-8 w-8" />,
    description: "Small format high-precision machining",
  },
  {
    name: "3D Printers",
    icon: <Printer className="h-8 w-8" />,
    description: "Additive manufacturing solutions",
  },
  {
    name: "Lathe",
    icon: <RotateCcw className="h-8 w-8" />,
    description: "For cylindrical parts and components",
  },
  {
    name: "PCB Prototyping",
    icon: <Circuit className="h-8 w-8" />,
    description: "Electronic circuit board creation",
  },
  {
    name: "Drill Press",
    icon: <Drill className="h-8 w-8" />,
    description: "Precise drilling operations",
  },
  {
    name: "Bend Saw",
    icon: <Wrench className="h-8 w-8" />,
    description: "For cutting and bending materials",
  },
  {
    name: "Vinyl Cutters",
    icon: <Crop className="h-8 w-8" />,
    description: "For signage and graphic applications",
  },
  {
    name: "Tapping/Drilling Arm",
    icon: <Hammer className="h-8 w-8" />,
    description: "For threading and precision drilling",
  },
];
