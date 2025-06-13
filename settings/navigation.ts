import { Facebook } from "@/src/components/SocialIcons/Facebook";
import { Github } from "@/src/components/SocialIcons/Github";
import { Instagram } from "@/src/components/SocialIcons/Instagram";
import { LinkedIn } from "@/src/components/SocialIcons/LinkedIn";

// Define allowed URL paths
export type UrlPath =
  | "/"
  | "/about"
  | "/services"
  | "/projects"
  | "/press"
  | "/contact";

export const NAVIGATION: {
  title: string;
  url: string;
}[] = [
  {
    title: "home",
    url: "carousel",
  },
  {
    title: "about",
    url: "about",
  },
  {
    title: "services",
    url: "services",
  },
  {
    title: "projects",
    url: "projects",
  },
  {
    title: "press",
    url: "press",
  },
  {
    title: "contact",
    url: "contact",
  },
];

export const SITE_LOGO = {
  large: {
    url: "/logo/fab-619-logo.svg",
    alt: "Fab 619 Logo",
    width: 300,
    height: 114,
  },
  mobile: {
    url: "/logo/fab-619-mobile-logo.svg",
    alt: "Fab 619 Mobile Logo",
    width: 104,
    height: 150,
  },
};

export const SOCIAL = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/fab619",
    icon: LinkedIn,
  },
  { name: "Facebook", href: "https://www.facebook.com/fab619", icon: Facebook },
  { name: "Github", href: "https://github.com/fab619", icon: Github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fab_619",
    icon: Instagram,
  },
];
