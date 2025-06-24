import { SOCIAL } from "@/settings/navigation";
import Logo from "./Logo";
import Link from "next/link";
import DesktopNavigation from "./client/DesktopNavigation";
import NavLanguage from "./NavLanguage";

function DesktopNavbar() {
  return (
    <aside className="hidden xl:flex fixed left-0 top-0 h-screen w-60 p-6 flex-col z-50 items-center justify-between">
      <div className="mt-8">
        <Logo />
      </div>
      <div className="-mt-20">
        <DesktopNavigation />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full text-lg text-center">
          <NavLanguage />
        </div>
        <div className="flex space-x-3 my-8">
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
      </div>
    </aside>
  );
}

export default DesktopNavbar;
