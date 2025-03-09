import { Poppins } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/src/i18n/routing";
import { AppSidebar } from "@/src/components/sidebar";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "HomePage-Metadata" });

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
      <body
        className={`${poppins.variable} bg-background font-sans antialiased debug-screens`}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="relative font-poppins">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
