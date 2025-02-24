"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBtn({
  link,
  setIsOpen,
}: Readonly<{
  link: string;
  setIsOpen: (isOpen: boolean) => void;
}>) {
  const pathname = usePathname();
  return (
    <Link
      key={link}
      href={link === "home" ? "/" : `/${link}`}
      className={cn(
        "text-xl capitalize transition-colors duration-300 ease-in-out",
        pathname === link
          ? "font-bold translate-x-1"
          : "hover:text-card-foreground/60",
        link === "home" && pathname === "/" && "font-bold translate-x-1"
      )}
      onClick={() => setIsOpen(false)}
    >
      {link}
    </Link>
  );
}
