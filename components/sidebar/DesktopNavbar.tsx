import { SOCIAL } from "@/settings/navigation";
import Logo from "./Logo";
import Link from "next/link";
import DesktopNavigation from "./client/DesktopNavigation";

function DesktopNavbar() {
  return (
    <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-60 bg-card text-card-foreground p-6 flex-col justify-between z-50">
      {/* Logo */}
      <div className="mt-10">
        <Logo />
      </div>
      {/* Nav Links */}
      <DesktopNavigation />
      {/* Social Icons */}
      <div className="flex justify-center space-x-4">
        {SOCIAL.map((item) => (
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
    </aside>
  );
}

export default DesktopNavbar;
