import { Cog, Cpu, Printer, Settings, Users, Wrench } from "lucide-react";

export interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const services: ServiceSection[] = [
  {
    id: "manufacturing-overview",
    icon: <Cog className="w-8 h-8" />,
    title: "Manufacturing Services",
    subtitle:
      "We offer a wide range of innovative Manufacturing services from concept to final product.",
    description:
      "Our comprehensive manufacturing solutions cover the entire product lifecycle, from initial concept development through to final production and delivery.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "Technical engineering drawings and blueprints",
  },
  {
    id: "custom-machinery",
    icon: <Cog className="w-8 h-8" />,
    title: "Custom Machinery",
    subtitle:
      "Custom Design, Engineering & Automation for Technical Tasks and Automotive Industries",
    description:
      "We develop advanced CNC-controlled machinery and automation systems designed to meet the complex demands of the technical and automotive industries. Our expertise spans across industrial robotics, precision mechanics, and intelligent control systems to ensure high performance, reliability, and adaptability. From concept and prototyping to fully operational systems, we deliver machines optimized for productivity, quality, and industrial scalability.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "Custom CNC machinery and automation equipment",
  },
  {
    id: "3d-printing",
    icon: <Printer className="w-8 h-8" />,
    title: "3D printing & CNC machining",
    subtitle:
      "On-demand Manufacturing / Rapid prototyping / automated production",
    description:
      "We offer on-demand manufacturing services combining high-precision CNC machining and advanced 3D printing technologies. From rapid prototyping to small-batch production, we provide fast, reliable, and cost-effective solutions to your design and functional requirements. Ideal for accelerating product development and reducing time to market.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "3D printed parts and CNC machined components",
  },
  {
    id: "iot-electronics",
    icon: <Cpu className="w-8 h-8" />,
    title: "IoT & Electronics Development",
    subtitle:
      "Electronic circuits / PCB Design & IoT Integration / Embedded Software",
    description:
      "We design and develop custom electronic circuits, PCB layouts, and embedded software for smart, connected systems. Our expertise in IoT integration enables real-time monitoring, automation, and data-driven control across various applications. From concept to fully functional prototypes, we deliver robust and scalable electronic solutions tailored to your needs.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "Electronic circuit boards and IoT development components",
  },
  {
    id: "hardware-engineering",
    icon: <Wrench className="w-8 h-8" />,
    title: "Hardware & Product Engineering",
    subtitle: "Mechanical Engineering & Functional Prototyping",
    description:
      "We provide end-to-end hardware development services, from product design and mechanical engineering to electronic integration and prototyping. Our multidisciplinary approach ensures seamless collaboration between design, engineering, and manufacturing teams, delivering innovative, reliable, and ready-to-produce hardware solutions.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "Hardware prototypes and mechanical engineering components",
  },
  {
    id: "machine-software",
    icon: <Settings className="w-8 h-8" />,
    title: "Machine Software & Control Systems",
    subtitle:
      "Machine Control Algorithms, Real-time System Monitoring & Custom Software",
    description:
      "We develop custom software for machine control, real-time system monitoring, and process automation. Our solutions include advanced algorithms, intuitive user interfaces, and robust data management systems designed to ensure precision, reliability, and adaptability in industrial environments. From embedded programming to full-stack system integration, we bridge hardware and software for smarter machines.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt: "Machine control software interface and monitoring systems",
  },
  {
    id: "workshops-training",
    icon: <Users className="w-8 h-8" />,
    title: "Workshops & Technical Training",
    subtitle: "Digital Fabrication / Hands-On Workshops / Training Sessions",
    description:
      "We offer hands-on workshops and customized training sessions focused on digital fabrication, automation, and embedded systems. Our programs are designed to empower engineering professionals, teams and individuals to master practical skills, understand complex systems, and accelerate innovation across industrial and educational settings.",
    imageUrl: "/images/placeholder-800x600.webp",
    imageAlt:
      "Technical training workshop with participants learning hands-on skills",
  },
];
