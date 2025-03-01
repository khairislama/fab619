import { Github, Goal, Home, Linkedin, Presentation, Send, Twitter, Users } from "lucide-react";

// Define allowed URL paths
export type UrlPath = "/" | "/about" | "/portfolio" | "/services" | "/contact";

export const NAVIGATION: { title: string; url: UrlPath; icon: React.ComponentType }[]= [
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
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ];