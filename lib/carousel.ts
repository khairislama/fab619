export interface CarouselSlide {
  id: number;
  buttonLink: string;
  image?: string;
  video?: {
    sources: {
      mp4: string;
      webm?: string; // Optional for better compression
    };
    poster: {
      url: string;
      alt: string;
    };
  };
}

export const SlidesData: CarouselSlide[] = [
  {
    id: 1,
    buttonLink: "about",
    video: {
      sources: {
        mp4: "/videos/hero-video.mp4", // Optimized MP4 file
        webm: "/videos/hero-video.webm", // Optional WebM for better compression
      },
      poster: {
        url: "/images/slideshow/slide-1.webp",
        alt: "Preview of our company introduction video showing modern office space",
      },
    },
  },
  {
    id: 2,
    buttonLink: "services",
    image: "/images/slideshow/slide-2.webp",
  },
  {
    id: 3,
    buttonLink: "projects",
    image: "/images/slideshow/slide-3.webp",
  },
  {
    id: 4,
    buttonLink: "contact",
    image: "/images/slideshow/slide-4.webp",
  },
];
