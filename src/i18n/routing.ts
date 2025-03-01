import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      fr: '/about'
    },
    '/portfolio': {
      en: '/portfolio',
      fr: '/portfolio'
    },
    '/services': {
      en: '/services',
      fr: '/services'
    },
    '/contact': {
      en: '/contact',
      fr: '/contact'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];