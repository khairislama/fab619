"use client";

import { NAVIGATION } from "@/settings/navigation";
import MenuBtn from "./MenuBtn";

function DesktopNavigation() {
  return (
    <nav className="flex flex-col gap-6 mt-20 items-center">
      {NAVIGATION.map((item) => (
        <MenuBtn key={item.title} item={item} />
      ))}
    </nav>
  );
}

export default DesktopNavigation;
