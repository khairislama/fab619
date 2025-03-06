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
  | "/about"
  | "/portfolio"
  | "/services"
  | "/contact"
  | "/maintenance";

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
    url: "/about",
    icon: Users,
  },
  {
    title: "portfolio",
    url: "/portfolio",
    icon: Presentation,
  },
  {
    title: "services",
    url: "/services",
    icon: Goal,
  },
  {
    title: "contact",
    url: "/contact",
    icon: Send,
  },
  {
    title: "preview",
    url: "/maintenance",
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
