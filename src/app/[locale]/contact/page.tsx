import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import RequestForm from "@/src/components/contact/RequestForm";
import RequestSection from "@/src/components/contact/RequestSection";
import FaqSection from "@/src/components/contact/FaqSection";
import PageHeader from "@/src/components/page-header";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale,
    namespace: "contact.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default function ContactPage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

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
