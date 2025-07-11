"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lang = pathname.split("/")[1] || "en";
    switch (lang) {
      case "en":
        setCurrentLang("English");
        break;
      case "fr":
        setCurrentLang("Français");
        break;

      default:
        setCurrentLang("English");
        break;
    }
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    setIsOpen(false);
    const isHomepage =
      pathname === "/" || pathname === `/${pathname.split("/")[1]}`;
    const newPath = isHomepage ? `/${lang}` : `/${lang}${pathname.slice(3)}`;
    router.push(newPath);
  };
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        aria-label="Open language menu"
        className="flex items-center px-2 focus:border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={"/language-icon.svg"}
          alt="language icon"
          width={38}
          height={19}
          className="w-8 mr-2"
        />
        {currentLang}
        <ChevronDown className="h-4 w-4 ml-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-6 shadow-lg">
        <DropdownMenuLabel className="text-lg">Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="transition duration-200 ease-out text-lg hover:cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            EN
          </DropdownMenuItem>
          <DropdownMenuItem
            className="transition duration-200 ease-out text-lg hover:cursor-pointer"
            onClick={() => changeLanguage("fr")}
          >
            FR
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
