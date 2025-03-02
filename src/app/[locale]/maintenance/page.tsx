import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import ContactForm from "@/src/components/ContactForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function MaintenancePage({ params }: Props) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const maintenanceT = useTranslations("Maintenance");
  const maintenanceST = useTranslations("Maintenance.services");

  return (
    <div className="h-[calc(100vh-6rem)] overflow-hidden">
      <Image
        src="/images/maintenance-background.webp"
        alt="Background"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full -z-20 absolute top-0 left-0"
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
      />
      <div className="absolute inset-0 bg-foreground/90 -z-10" />
      <div className="h-screen overflow-y-auto scrollbar-hide">
        <div className="container mx-auto flex flex-col items-center p-4 text-card">
          <Image
            src="/logo/fab-619-logo-white-min.svg"
            alt="Logo"
            width={134}
            height={150}
            className="animate-bounce mt-20"
          />

          <h1 className="text-3xl md:text-5xl font-bold my-4 uppercase text-center">
            {maintenanceT("title")}
          </h1>
          <div className="w-64 h-2 mx-auto bg-card" />
          <p className="my-4 text-justify text-lg font-semibold ">
            {maintenanceT("message")}
          </p>
          <ContactForm />
          <ContactForm />
          <div className="flex w-full max-w-sm items-center justify-around mt-24">
            <Link href="https://www.facebook.com/fab619" target="_blank">
              <div className="bg-red-500 h-6 w-6 text-xs">fb</div>
            </Link>
            <Link href="https://www.instagram.com/fab_619" target="_blank">
              <div className="bg-red-500 h-6 w-6 text-xs">ins</div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/fab619/"
              target="_blank"
            >
              <div className="bg-red-500 h-6 w-6 text-xs">lkn</div>
            </Link>
            <Link href="https://github.com/fab619" target="_blank">
              <div className="bg-red-500 h-6 w-6 text-xs">git</div>
            </Link>
          </div>
          <p className="text-xs font-extralight tracking-tighter">
            {maintenanceT("copyrights")}
          </p>
          <div className="hidden lg:block w-1/3">
            <div className="text-right flex flex-col gap-10 text-gray-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <p
                  key={i}
                  className="hover:text-white hover:scale-105 cursor-pointer transition-all ease-in-out"
                >
                  {maintenanceST(`${i + 1}`)}
                </p>
              ))}
            </div>
            <p className="text-sm">
              B125 ,Fabrique Entrepreneuriale,
              <br />
              Néotex Menzel Harb 5036 <br />
              Monastir ,Tunisie
            </p>
          </div>
          <div className="bg-green-400 w-60 h-44 ">sd</div>
        </div>
      </div>
    </div>
  );
}
