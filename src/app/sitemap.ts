import { MetadataRoute } from "next";
import { getPathname } from "../i18n/navigation";
import { Locale, routing } from "../i18n/routing";
import { host } from "../config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries("/"),
    ...getEntries("/about"),
    ...getEntries("/services"),
    ...getEntries("/projects"),
    ...getEntries("/press"),
    ...getEntries("/contact"),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
