"use client";

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

interface Props {
  item: {
    title: string;
    url: string;
  };
  setIsOpen?: (isOpen: boolean) => void;
}

export default function MenuBtn({ item, setIsOpen }: Readonly<Props>) {
  const t = useTranslations("Common.navigation");
  return (
    <Link
      href={{
        pathname: "/",
        hash: item.url,
      }}
      className="text-2xl capitalize transition-all duration-300 ease-in-out sm:hover:text-card-foreground/60"
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {t(item.title)}
    </Link>
  );
}
