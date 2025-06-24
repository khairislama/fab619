import { FacebookSvgIcon } from "@/src/components/icons/facebook";
import { GithubSvgIcon } from "@/src/components/icons/github";
import { InstagramSvgIcon } from "@/src/components/icons/instagram";
import { LinkedinSvgIcon } from "@/src/components/icons/linkedIn";

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
    icon: LinkedinSvgIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/fab619",
    icon: FacebookSvgIcon,
  },
  { name: "Github", href: "https://github.com/fab619", icon: GithubSvgIcon },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fab_619",
    icon: InstagramSvgIcon,
  },
];
