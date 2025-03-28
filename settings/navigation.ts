import {
  Github,
  Goal,
  Home,
  Linkedin,
  Presentation,
  Send,
  Twitter,
  Users,
} from "lucide-react";

// Define allowed URL paths
export type UrlPath =
  | "/"
  | "/maintenance/preview/about"
  | "/maintenance/preview/portfolio"
  | "/maintenance/preview/services"
  | "/maintenance/preview/contact"
  | "/maintenance/preview";

export const NAVIGATION: {
  title: string;
  url: UrlPath;
  icon: React.ComponentType;
}[] = [
  {
    title: "home",
    url: "/",
    icon: Home,
  },
  {
    title: "about",
    url: "/maintenance/preview/about",
    icon: Users,
  },
  {
    title: "portfolio",
    url: "/maintenance/preview/portfolio",
    icon: Presentation,
  },
  {
    title: "services",
    url: "/maintenance/preview/services",
    icon: Goal,
  },
  {
    title: "contact",
    url: "/maintenance/preview/contact",
    icon: Send,
  },
  {
    title: "preview",
    url: "/maintenance/preview",
    icon: Send,
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
  { name: "Facebook", href: "https://www.facebook.com/fab619", icon: Github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fab_619",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/fab619",
    icon: Linkedin,
  },
  { name: "Github", href: "https://github.com/fab619", icon: Github },
];
