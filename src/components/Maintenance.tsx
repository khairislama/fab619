import { ChevronsDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import ContactForm from "./ContactForm";

function Maintenance({ locale }: { locale: string }) {
  // Enable static rendering
  setRequestLocale(locale);

  const maintenanceT = useTranslations("Maintenance");
  const maintenanceST = useTranslations("Maintenance.services");

  return (
    <div className="h-full">
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
        <div className="container mx-auto flex flex-col items-center p-4 text-card relative min-h-screen">
          <Image
            src="/logo/fab-619-logo-white-min.svg"
            alt="Logo"
            width={134}
            height={150}
            className="animate-bounceSlow mt-24 xm:my-20 2xl:my-24"
          />

          <h1 className="text-3xl md:text-5xl font-bold my-6 uppercase text-center">
            {maintenanceT("title")}
          </h1>
          <div className="w-64 h-2 mx-auto bg-card" />
          <p className="my-8 text-justify text-sm">{maintenanceT("message")}</p>
          <ChevronsDown className="h-20 w-20 animate-bounceFast my-4" />
          <ContactForm />
          <ChevronsDown className="h-20 w-20 animate-bounceFast my-4" />
          <div className="flex flex-col items-center my-10 gap-6 mb-40 grow">
            {Array.from({ length: 5 }).map((_, i) => (
              <p
                key={i}
                className="sm:hover:text-white sm:hover:scale-105 cursor-pointer transition-all ease-in-out text-sm sm:text-xl md:text-3xl"
              >
                {maintenanceST(`${i + 1}`)}
              </p>
            ))}
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs sm:text-sm lg:text-lg font-extralight tracking-tighter text-muted basis-1/2">
              {maintenanceT("copyrights")}
            </p>
            <p className="text-xs sm:text-sm lg:text-lg font-extralight tracking-tighter text-muted text-end basis-1/2">
              B125 ,Fabrique Entrepreneuriale,
              <br />
              Néotex Menzel Harb 5036 <br />
              Monastir ,Tunisie
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
