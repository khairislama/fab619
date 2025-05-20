import { UrlPath } from "@/settings/navigation";

export interface CarouselSlide {
  id: number;
  buttonLink: UrlPath;
  image: string;
  video?: string;
}

export const SlidesData: CarouselSlide[] = [
  {
    id: 1,
    buttonLink: "/maintenance/preview/about",
    image: "/images/slideshow/slide-1.png",
    video:
      "https://drive.google.com/file/d/1cJ-xOlPOU9Z9yQPAgOHhBApSjisZlKSC/view",
  },
  {
    id: 2,
    buttonLink: "/maintenance/preview/services",
    image: "/images/slideshow/slide-2.png",
  },
  {
    id: 3,
    buttonLink: "/maintenance/preview/portfolio",
    image: "/images/slideshow/slide-3.png",
  },
  {
    id: 4,
    buttonLink: "/maintenance/preview/contact",
    image: "/images/slideshow/slide-4.png",
  },
];
