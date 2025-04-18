import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
import ContactInfo from "@/src/components/contact/ContactInfo";
import RequestForm from "@/src/components/contact/RequestForm";
import RequestSection from "@/src/components/contact/RequestSection";
import FaqSection from "@/src/components/contact/FaqSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ContactPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const translation = useTranslations("contact");

  return (
    <main className="container mx-auto px-8 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
          {translation("title")}
        </h1>
        <ContactInfo />
      </div>
      <div className="h-1 w-full bg-foreground my-6 scrollbar-hide" />
      <RequestSection>
        <RequestForm />
      </RequestSection>
      <FaqSection />
    </main>
  );
}
