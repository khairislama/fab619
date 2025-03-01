"use client";

import { cn } from "@/src/components/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: {
    title: string;
    url: string;
  };
  setIsOpen?: (isOpen: boolean) => void;
}

export default function MenuBtn({ item, setIsOpen }: Readonly<Props>) {
  const pathname = usePathname();
  return (
    <Link
      href={item.url}
      className={cn(
        "text-xl capitalize transition-colors duration-300 ease-in-out",
        pathname === item.url
          ? "font-bold translate-x-1"
          : "hover:text-card-foreground/60"
      )}
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {item.title}
    </Link>
  );
}
