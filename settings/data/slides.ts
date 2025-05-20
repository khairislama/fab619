import { UrlPath } from "../navigation";

type SlideItem = {
  id: number;
  image: string;
  cta: UrlPath;
  video?: string;
};

export const slides: SlideItem[] = [
  {
    id: 1,
    image: "/images/placeholder-1920x1080.webp",
    cta: "/maintenance/preview/about",
    video:
      "https://drive.google.com/file/d/1cJ-xOlPOU9Z9yQPAgOHhBApSjisZlKSC/view",
  },
  {
    id: 2,
    image: "/images/placeholder-1920x1080.webp",
    cta: "/maintenance/preview/portfolio",
  },
  {
    id: 3,
    image: "/images/placeholder-1920x1080.webp",
    cta: "/maintenance/preview/services",
  },
  {
    id: 4,
    image: "/images/placeholder-1920x1080.webp",
    cta: "/maintenance/preview/contact",
  },
];
