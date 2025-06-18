import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RequestSection({ children }: Props) {
  const translation = useTranslations("contact");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6 overflow-hidden my-10">
      {/* Form Section */}
      <div className="mb-5 lg:mb-0">
        <h2 className="text-2xl font-bold mb-5 uppercase">
          {translation("request")}
        </h2>
        {children}
      </div>

      {/* Image Section */}
      <div className="relative h-full min-h-[400px] w-full">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3239.3917446134!2d10.758278!3d35.71658300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQyJzU5LjciTiAxMMKwNDUnMjkuOCJF!5e0!3m2!1sfr!2stn!4v1750252443662!5m2!1sfr!2stn"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
