import { IBM_Plex_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/src/i18n/routing";
import { ReactNode } from "react";
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

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

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
        className={`${poppins.variable} ${ibm_plex_mono.variable} bg-background font-sans antialiased debug-screens`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex h-screen overflow-hidden font-poppins">
            {/* Sidebar/Navbar - responsive positioning */}
            <div className="fixed top-0 left-0 right-0 z-50 h-16 xl:relative xl:h-full xl:w-60 xl:flex-shrink-0">
              <AppSidebar />
            </div>

            {/* Main content area */}
            <main className="flex-1 flex flex-col min-w-0 pt-16 xl:pt-0">
              <div className="flex-1 overflow-auto scrollbar-hide">
                {children}
              </div>
            </main>
          </div>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
