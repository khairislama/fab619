import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/maintenance/preview/about": {
      en: "/maintenance/preview/about",
      fr: "/maintenance/preview/about",
    },
    "/maintenance/preview/portfolio": {
      en: "/maintenance/preview/portfolio",
      fr: "/maintenance/preview/portfolio",
    },
    "/maintenance/preview/services": {
      en: "/maintenance/preview/services",
      fr: "/maintenance/preview/services",
    },
    "/maintenance/preview/contact": {
      en: "/maintenance/preview/contact",
      fr: "/maintenance/preview/contact",
    },
    "/maintenance/preview": {
      en: "/maintenance/preview",
      fr: "/maintenance/preview",
    },
    "/maintenance/preview/projects/[projectSlug]": {
      en: "/maintenance/preview/projects/[projectSlug]",
      fr: "/maintenance/preview/projects/[projectSlug]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
