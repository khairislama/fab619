"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface faqItem {
  question: string;
  response: {
    text: string;
    list?: string[];
  };
}

export default function FaqSection() {
  const translation = useTranslations("contact");
  const faqItems: faqItem[] = translation.raw("faqList");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24">
      {/* Title Section */}
      <div className="lg:col-span-4">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          {translation("faqTitle")}
        </h2>
        <h3 className="text-2xl md:text-3xl font-medium mt-4 uppercase">
          {translation("faqSubtitle")}
        </h3>
      </div>

      {/* Accordion Section */}
      <div className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-sm md:text-lg font-bold text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">{item.response.text}</p>
                {item.response.list && (
                  <ul className="list-disc pl-6 space-y-1">
                    {item.response.list.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
