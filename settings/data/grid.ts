// Define the work item type
type WorkItem = {
  id: number;
  image: string;
  title: string;
  slug: string;
  tag: "product design" | "brand identity" | "digital solutions";
  description: string;
  client?: string;
  year?: string;
  location?: string;
};

// Sample data with placeholder images that will work in the preview
export const works: WorkItem[] = [
  {
    id: 1,
    image: "/images/placeholder-800x600.webp",
    title: "AFP - Automated Fiber Placement",
    slug: "automated-fiber-placement",
    tag: "product design",
    description:
      "CNC transformation for composite fiber placement with precision control and advanced automation.",
    client: "Industrial Manufacturing Client",
    year: "2022",
    location: "Tunisia",
  },
  {
    id: 2,
    image: "/images/placeholder-800x600.webp",
    title: "IoT Multi-Technology Model",
    slug: "iot-multi-technology-model",
    tag: "digital solutions",
    description:
      "Demonstrating IoT integration in industry with real-time monitoring and control capabilities.",
    client: "Industry 4.0 Training Center",
    year: "2021",
    location: "Tunis, Tunisia",
  },
  {
    id: 3,
    image: "/images/placeholder-800x600.webp",
    title: "WAAM 3D Printer",
    slug: "waam-3d-printer",
    tag: "product design",
    description:
      "Wire Arc Additive Manufacturing transformation of CNC machines for large-scale metal printing.",
    client: "Manufacturing Research Lab",
    year: "2023",
    location: "Monastir, Tunisia",
  },
  {
    id: 4,
    image: "/images/placeholder-800x600.webp",
    title: "3D Printing Architecture - Tunisia",
    slug: "3d-printing-architecture-tunisia",
    tag: "product design",
    description:
      "Large-scale heritage restoration using digital manufacturing techniques and custom 3D printing solutions.",
    client: "Heritage Preservation Authority",
    year: "2022",
    location: "Tunisia",
  },
  {
    id: 5,
    image: "/images/placeholder-800x600.webp",
    title: "RUMBA SP-Link Machine Controller",
    slug: "rumba-sp-link-controller",
    tag: "digital solutions",
    description:
      "Machine Controller with ESP connectivity for 3D printers and other digital fabrication equipment.",
    client: "Open Hardware Initiative",
    year: "2021",
    location: "Tunisia",
  },
  {
    id: 6,
    image: "/images/placeholder-800x600.webp",
    title: "AI Model for Industrial Applications",
    slug: "ai-model-industrial-applications",
    tag: "digital solutions",
    description:
      "Real-time image classification for industrial applications with machine learning integration.",
    client: "Manufacturing Technology Center",
    year: "2023",
    location: "Tunis, Tunisia",
  },
  {
    id: 7,
    image: "/images/placeholder-800x600.webp",
    title: "RFID Smart Inventory Management",
    slug: "rfid-inventory-management",
    tag: "digital solutions",
    description:
      "Smart inventory management solutions using RFID technology for industrial applications.",
    client: "Logistics Company",
    year: "2022",
    location: "Tunisia",
  },
  {
    id: 8,
    image: "/images/placeholder-800x600.webp",
    title: "API Supervision Model",
    slug: "api-supervision-model",
    tag: "digital solutions",
    description:
      "Remote control and monitoring of automated processes through API integration.",
    client: "Industrial Automation Client",
    year: "2021",
    location: "Tunisia",
  },
  {
    id: 9,
    image: "/images/placeholder-800x600.webp",
    title: "FAB619 Brand Identity",
    slug: "fab619-brand-identity",
    tag: "brand identity",
    description:
      "Comprehensive brand identity system for FAB619, including logo, color palette, and applications.",
    client: "FAB619",
    year: "2018",
    location: "Tunisia",
  },
  {
    id: 10,
    image: "/images/placeholder-800x600.webp",
    title: "Custom CNC Router System",
    slug: "custom-cnc-router-system",
    tag: "product design",
    description:
      "Precision CNC router system designed for versatile manufacturing applications.",
    client: "Educational Institution",
    year: "2020",
    location: "Monastir, Tunisia",
  },
  {
    id: 11,
    image: "/images/placeholder-800x600.webp",
    title: "Digital Fabrication Training Platform",
    slug: "digital-fabrication-training",
    tag: "digital solutions",
    description:
      "Interactive learning platform for digital fabrication techniques and technologies.",
    client: "Technical Training Institute",
    year: "2022",
    location: "Tunisia",
  },
  {
    id: 12,
    image: "/images/placeholder-800x600.webp",
    title: "Embedded Systems for Automation",
    slug: "embedded-systems-automation",
    tag: "product design",
    description:
      "Custom embedded systems for industrial automation and control applications.",
    client: "Manufacturing Client",
    year: "2023",
    location: "Tunisia",
  },
];

// Portfolio-focused filter categories
export const filters = [
  { id: "all", label: "View All" },
  { id: "product design", label: "Product Design" },
  { id: "brand identity", label: "Brand Identity" },
  { id: "digital solutions", label: "Digital Solutions" },
];
