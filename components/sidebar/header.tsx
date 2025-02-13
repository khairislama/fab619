import React from "react";
import { SidebarHeader } from "../ui/sidebar";
import Link from "next/link";

function AppSidebarHeader() {
  return (
    <SidebarHeader className="p-4">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold">Logo</span>
      </Link>
    </SidebarHeader>
  );
}

export default AppSidebarHeader;
