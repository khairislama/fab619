"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "./MotionDiv";
import { NAVIGATION, SOCIAL } from "@/settings/navigation";
import Link from "next/link";
import MenuBtn from "./MenuBtn";
import Logo from "../Logo";
import NavLanguage from "../NavLanguage";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar for Mobile */}
      <header className="xl:hidden fixed top-0 left-0 w-full bg-card text-card-foreground flex justify-between p-4 items-center h-24 z-50">
        {/* Burger Button */}
        <button onClick={() => setIsOpen(true)}>
          <div className="flex items-center justify-center gap-3 text-xl sm:hover:text-card-foreground/60 transition-colors duration-500 ease-in-out">
            <Menu className="w-8 h-8" />
          </div>
        </button>
        {/* Logo */}
        <Logo />
        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          {SOCIAL.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hover:text-card-foreground/60 transition-colors duration-200 ease-in-out"
            >
              <item.icon className="w-6 h-6" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>
      </header>

      {/* Mobile Sidebar */}
      {/* AnimatePresence ensures exit animations work */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            <MotionDiv>
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 sm:hover:text-card-foreground/60 transition-colors duration-200 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              {/* Nav Links */}
              <nav className="flex flex-col gap-6 mt-24 ml-2">
                {NAVIGATION.map((item) => (
                  <MenuBtn key={item.title} item={item} setIsOpen={setIsOpen} />
                ))}
              </nav>
              <div className="w-full mt-20 text-xl">
                <NavLanguage />
              </div>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
