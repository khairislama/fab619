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
import Footer from "@/src/components/Footer";

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
    // openGraph: {
    //   type: "website",
    //   url: "https://fab619.tn",
    //   title: t("ogTitle"),
    //   description: t("ogDescription"),
    //   images: [
    //     {
    //       url: "/logo/fab-619-logo.png",
    //       width: 1200,
    //       height: 630,
    //       alt: t("ogTitle"),
    //     },
    //   ],
    // },
    // twitter: {
    //   handle: "@fab619",
    //   site: "@fab619",
    //   cardType: "summary_large_image",
    //   image: "/logo/fab-619-logo.png",
    //   title: t("twitterTitle"),
    //   description: t("twitterDescription"),
    //   creator: "@fab619",
    // },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
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
          <main className="relative font-poppins">
            <AppSidebar />
            <div className="mt-24 xl:mt-0 xl:ml-60 xl:w-[calc(100vw-255px)]">
              <div className="scrollbar-hide h-screen">
                {children}
                <Footer />
              </div>
            </div>
          </main>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
