import { Button } from "@/components/ui/button";
import Footer from "@/src/components/Footer";
import PageHeader from "@/src/components/page-header";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations("ProjectsPage");
  return (
    <main className="container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] py-12">
      <PageHeader pageName={"ProjectsPage"} />
      <div className="relative w-full overflow-hidden mx-auto">
        <div className="w-full">
          <Image
            src="/images/projects-header.webp"
            alt="Blueprint background"
            width={1568}
            height={187}
            priority
            quality={80}
            className="h-44 object-cover mx-auto"
            sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="max-w-md md:max-w-lg">
              <h2 className="text-sm sm:text-lg md:text-xl font-medium">
                {t("subtitle")}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-20">
        <h1 className="text-4xl font-bold mb-4"> {t("not-found.title")} </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t("not-found.subtitle")}
        </p>
        <Link href="/projects">
          <Button>{t("not-found.return")}</Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
