import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function RequestSection({ children }: Props) {
  const translation = useTranslations("contact");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-3 overflow-hidden">
      {/* Form Section */}
      <div className="mb-3 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4 uppercase">
          {translation("request")}
        </h2>
        {children}
      </div>

      {/* Image Section */}
      <div className="relative h-full min-h-[400px]">
        <Image
          src="/images/address.webp"
          alt="Location map"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
