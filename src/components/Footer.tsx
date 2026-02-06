import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Footer({ className }: { className?: string }) {
  const t = useTranslations("Common.Footer");
  return (
    <footer
      className={cn(
        "container 2k:max-w-[1750px] 2.5k:max-w-[1900px] 4k:max-w-[2300px] pt-12 mb-8",
        className,
      )}
    >
      {/* <div className="h-1 w-full bg-foreground my-6 scrollbar-hide" /> */}
      <div className="flex-row md:flex items-center justify-between text-xs lg:text-sm 2xl:text-base">
        <p className="w-full text-center md:text-left mb-3 md:mb-0">
          {t("rights")}
        </p>
        <p className="w-full text-center md:text-right">
          <Link href="mailto:contact@fab619.tn" className="hover:underline">
            contact@fab619.tn
          </Link>{" "}
          |{" "}
          <Link href="tef:+21654544731" className="hover:underline">
            {t("tel")}. 54 544 731
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
