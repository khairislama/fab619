import { DesignSvgIcon } from "@/src/components/icons/design";
import { ElectronicsSvgIcon } from "@/src/components/icons/electronics";
import Printer3dSvgIcon from "@/src/components/icons/printer3d";
import { SettingsSvgIcon } from "@/src/components/icons/settings";
import { SoftwareSvgIcon } from "@/src/components/icons/software";
import { WorkshopSvgIcon } from "@/src/components/icons/workshop";
import { Cog, Cpu, Printer, Settings, Users, Wrench } from "lucide-react";
import Image from "next/image";

export interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

export const services: ServiceSection[] = [
  {
    id: "custom-machinery",
    icon: <SettingsSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/service-custom-machine.webp",
    imageAlt: "Custom CNC machinery and automation equipment",
  },
  {
    id: "3d-printing",
    icon: <Printer3dSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/printing.webp",
    imageAlt: "3D printed parts and CNC machined components",
  },
  {
    id: "iot-electronics",
    icon: <ElectronicsSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/service-iot-electronics.webp",
    imageAlt: "Electronic circuit boards and IoT development components",
  },
  {
    id: "hardware-engineering",
    icon: <DesignSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/service-hardware.webp",
    imageAlt: "Hardware prototypes and mechanical engineering components",
  },
  {
    id: "machine-software",
    icon: <SoftwareSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/service-machine-software.webp",
    imageAlt: "Machine control software interface and monitoring systems",
  },
  {
    id: "workshops-training",
    icon: <WorkshopSvgIcon className="h-8 w-8" color="#fff" />,
    imageUrl: "/images/services/service-workshop.webp",
    imageAlt:
      "Technical training workshop with participants learning hands-on skills",
  },
];
