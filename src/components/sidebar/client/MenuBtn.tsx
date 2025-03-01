"use client";

import { UrlPath } from "@/settings/navigation";
import { cn } from "@/src/components/lib/utils";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    title: string;
    url: UrlPath;
  };
  setIsOpen?: (isOpen: boolean) => void;
}

export default function MenuBtn({ item, setIsOpen }: Readonly<Props>) {
  const pathname = usePathname();

  const t = useTranslations("Navigation");
  // Normalize pathname by removing "/en" or "/fr"
  const normalizedPath = pathname.replace(/^\/(en|fr)/, "");
  const normalizedUrl = item.url === "/" ? "" : item.url;
  return (
    <Link
      href={item.url}
      className={cn(
        "text-2xl capitalize transition-all duration-300 ease-in-out",
        normalizedPath === normalizedUrl
          ? "font-bold translate-x-1"
          : "hover:text-card-foreground/60"
      )}
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {t(item.title)}
    </Link>
  );
}
