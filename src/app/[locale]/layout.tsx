import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { type Locale, routing } from "@/src/i18n/routing";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import { AppSidebar } from "@/src/components/sidebar";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm_plex_mono",
  weight: "400",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${poppins.variable} ${ibm_plex_mono.variable} bg-background font-sans antialiased`}
      >
        <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>
      </body>
    </html>
  );
}

// nested async component handles NextIntl
async function LocaleLayoutContent({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-[100dvh] overflow-hidden font-poppins">
        <div className="fixed top-0 left-0 right-0 z-50 h-16 xl:relative xl:h-full xl:w-60 xl:flex-shrink-0">
          <AppSidebar />
        </div>
        <main className="flex-1 flex flex-col min-w-0 pt-16 xl:pt-0 debug-screens">
          <div className="flex-1 overflow-auto scrollbar-hide">{children}</div>
        </main>
      </div>
      <Toaster />
    </NextIntlClientProvider>
  );
}
