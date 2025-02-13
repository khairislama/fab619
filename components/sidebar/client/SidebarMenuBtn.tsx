"use client";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SidebarMenuBtn({
  children,
  url,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  const pathname = usePathname();
  return (
    <SidebarMenuButton
      className={cn(
        "flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200",
        pathname === url ? "bg-gray-800 text-white" : "hover:bg-gray-800"
      )}
    >
      {children}
    </SidebarMenuButton>
  );
}
