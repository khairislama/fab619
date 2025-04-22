import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
import ContactInfo from "@/src/components/ContactInfo";
import RequestForm from "@/src/components/contact/RequestForm";
import RequestSection from "@/src/components/contact/RequestSection";
import FaqSection from "@/src/components/contact/FaqSection";
import PageHeader from "@/src/components/page-header";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function ContactPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const translation = useTranslations("contact");

  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName="contact" />
      <RequestSection>
        <RequestForm />
      </RequestSection>
      <FaqSection />
    </main>
  );
}
