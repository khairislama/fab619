import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/about",
    },
    "/services": {
      en: "/services",
      fr: "/services",
    },
    "/projects": {
      en: "/projects",
      fr: "/projects",
    },
    "/projects/[projectSlug]": {
      en: "/projects/[projectSlug]",
      fr: "/projects/[projectSlug]",
    },
    "/press": {
      en: "/press",
      fr: "/press",
    },
    "/press/[pressSlug]": {
      en: "/press/[pressSlug]",
      fr: "/press/[pressSlug]",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
