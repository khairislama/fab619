// Define the work item type
type WorkItem = {
  id: number;
  image: string;
  title: string;
  tag: "product design" | "brand identity" | "digital solutions";
  description: string;
};

type filterItem = {
  id: "all" | "product design" | "brand identity" | "digital solutions";
  label: "View All" | "Product Design" | "Brand Identity" | "Digital Solutions";
};

// Sample data
export const works: WorkItem[] = [
  {
    id: 1,
    image: "/images/placeholder-800x600.webp",
    title: "Automated Assembly Line",
    tag: "digital solutions",
    description:
      "Interactive web platform for monitoring and controlling robotic assembly systems in real-time.",
  },
  {
    id: 2,
    image: "/images/placeholder-800x600.webp",
    title: "Precision Engineering Brand",
    tag: "brand identity",
    description:
      "Modern brand identity for a precision engineering firm specializing in custom manufacturing solutions.",
  },
  {
    id: 3,
    image: "/images/placeholder-800x600.webp",
    title: "3D Printed Prototype",
    tag: "product design",
    description:
      "Lightweight component design optimized for 3D printing with enhanced structural integrity.",
  },
  {
    id: 4,
    image: "/images/placeholder-800x600.webp",
    title: "Engineering Dashboard",
    tag: "digital solutions",
    description:
      "Comprehensive web interface for monitoring machinery performance and maintenance schedules.",
  },
  {
    id: 5,
    image: "/images/placeholder-800x600.webp",
    title: "Robotics Division Identity",
    tag: "brand identity",
    description:
      "Visual identity system for the advanced robotics division of an engineering firm.",
  },
  {
    id: 6,
    image: "/images/placeholder-800x600.webp",
    title: "Custom Machine Part",
    tag: "product design",
    description:
      "Precision-engineered replacement part designed for improved durability and performance.",
  },
  {
    id: 7,
    image: "/images/placeholder-800x600.webp",
    title: "Manufacturing Process Portal",
    tag: "digital solutions",
    description:
      "Client portal for tracking custom engineering projects from design to manufacturing.",
  },
  {
    id: 8,
    image: "/images/placeholder-800x600.webp",
    title: "Industrial Robot Arm",
    tag: "product design",
    description:
      "Redesigned robotic arm with improved range of motion and precision for industrial applications.",
  },
  {
    id: 9,
    image: "/images/placeholder-800x600.webp",
    title: "CNC Machining Interface",
    tag: "digital solutions",
    description:
      "Intuitive control interface for advanced CNC machinery with real-time feedback.",
  },
  {
    id: 10,
    image: "/images/placeholder-800x600.webp",
    title: "Engineering Consultancy",
    tag: "brand identity",
    description:
      "Minimalist brand identity for an engineering consultancy specializing in industrial automation.",
  },
  {
    id: 11,
    image: "/images/placeholder-800x600.webp",
    title: "3D Printed Tooling",
    tag: "product design",
    description:
      "Custom tooling solutions created with advanced 3D printing technology for rapid deployment.",
  },
  {
    id: 12,
    image: "/images/placeholder-800x600.webp",
    title: "IoT Machinery Monitoring",
    tag: "digital solutions",
    description:
      "Web application for IoT-enabled machinery monitoring and predictive maintenance.",
  },
];

// Improved filter categories with more engineering-focused terms
export const filters = [
  { id: "all", label: "View All" },
  { id: "product design", label: "Product Design" },
  { id: "brand identity", label: "Brand Identity" },
  { id: "digital solutions", label: "Digital Solutions" },
];
