"use client";
import { useState } from "react";
import { X, Menu, Github, Linkedin, Twitter } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "./client/MotionDiv";
import { NAVIGATION } from "@/settings/navigation";
import Link from "next/link";
import MenuBtn from "./client/MenuBtn";
import Logo from "./Logo";

const socialItems = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

const logoProps = {
  large: {
    url: "/logo/fab-619-logo.svg",
    alt: "Fab 619 Logo",
    width: 300,
    height: 114,
  },
  mobile: {
    url: "/logo/fab-619-mobile-logo.svg",
    alt: "Fab 619 Mobile Logo",
    width: 104,
    height: 150,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 bg-gray-900 text-white p-6 flex-col justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>
        {/* Nav Links */}
        <nav className="flex flex-col gap-4">
          {["Home", "Projects", "About", "Contact"].map((link) => (
            <a key={link} href="#" className="hover:text-gray-400">
              {link}
            </a>
          ))}
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#">🔗</a>
          <a href="#">🔗</a>
          <a href="#">🔗</a>
        </div>
      </aside>

      {/* Top Navbar for Mobile */}
      <header className="lg:hidden fixed top-0 left-0 w-full bg-card text-card-foreground flex justify-between p-4 items-center">
        {/* Burger Button */}
        <button onClick={() => setIsOpen(true)}>
          <div className="flex items-center justify-center gap-3 text-xl hover:text-card-foreground/60 transition-colors duration-500 ease-in-out">
            <Menu className="w-8 h-8" /> <span>Menu</span>
          </div>
        </button>
        {/* Logo */}
        <Logo large={logoProps.large} mobile={logoProps.mobile} />
        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          {socialItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-card-foreground/60 transition-colors duration-200 ease-in-out"
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
          <div className="fixed inset-0 z-50">
            <MotionDiv>
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 hover:text-card-foreground/60 transition-colors duration-200 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              {/* Nav Links */}
              <nav className="flex flex-col gap-6 mt-24 ml-6">
                {NAVIGATION.map((link) => (
                  <MenuBtn key={link} link={link} setIsOpen={setIsOpen} />
                ))}
              </nav>
            </MotionDiv>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
