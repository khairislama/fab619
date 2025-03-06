import { UrlPath } from "../navigation";

type SlideItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: UrlPath;
  color: string;
};

export const slides: SlideItem[] = [
  {
    id: 1,
    image: "/images/placeholder-1920x1080.webp",
    title: "Engineering & Digital Art Solutions",
    subtitle: "Innovative Technology",
    description:
      "We blend cutting-edge engineering with creative digital artistry to deliver innovative solutions for the modern world.",
    buttonText: "Explore Our Vision",
    buttonLink: "/about",
    color: "from-purple-600/80 to-blue-600/80",
  },
  {
    id: 2,
    image: "/images/placeholder-1920x1080.webp",
    title: "Our Portfolio",
    subtitle: "Creative Excellence",
    description:
      "Explore our diverse range of projects showcasing our expertise in engineering and digital art creation.",
    buttonText: "View Our Work",
    buttonLink: "/portfolio",
    color: "from-emerald-600/80 to-teal-600/80",
  },
  {
    id: 3,
    image: "/images/placeholder-1920x1080.webp",
    title: "Our Services",
    subtitle: "Technical Mastery",
    description:
      "From technical engineering solutions to stunning digital art, we offer comprehensive services tailored to your needs.",
    buttonText: "Discover Services",
    buttonLink: "/services",
    color: "from-amber-600/80 to-orange-600/80",
  },
  {
    id: 4,
    image: "/images/placeholder-1920x1080.webp",
    title: "Get In Touch",
    subtitle: "Start Your Journey",
    description:
      "Ready to transform your ideas into reality? Contact our team of experts today to discuss your project.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    color: "from-rose-600/80 to-pink-600/80",
  },
];
