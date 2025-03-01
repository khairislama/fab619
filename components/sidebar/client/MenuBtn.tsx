"use client";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
  item: {
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
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
        setIsOpen && setIsOpen(false);
      }}
    >
      {item.title}
    </Link>
  );
}
