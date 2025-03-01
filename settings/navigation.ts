import { Github, Goal, Home, Linkedin, Presentation, Send, Twitter, Users } from "lucide-react";

// Define allowed URL paths
export type UrlPath = "/" | "/about" | "/portfolio" | "/services" | "/contact";

export const NAVIGATION: { title: string; url: UrlPath; icon: React.ComponentType }[]= [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About",
      url: "/about",
      icon: Users,
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: Presentation,
    },
    {
      title: "Services",
      url: "/services",
      icon: Goal,
    },
    {
      title: "Contact",
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