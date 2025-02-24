"use client";

import React from "react";
import { SidebarHeader, useSidebar } from "../ui/sidebar";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

export const runtime = "edge";

const logoProps = {
  large: {
    url: "/logo/fab-619-logo.svg",
    alt: "Fab 619 Logo",
    width: 300,
    height: 114,
  },
  minimal: {
    url: "/logo/fab-619-logo-min.svg",
    alt: "Fab 619 Logo",
    width: 134,
    height: 150,
  },
  mobile: {
    url: "/logo/fab-619-mobile-logo.svg",
    alt: "Fab 619 Mobile Logo",
    width: 104,
    height: 150,
  },
};

export default function AppSidebarHeader() {
  const { state } = useSidebar();

  return (
    <SidebarHeader className="h-1/4 p-8">
      {/* <Logo large={logoProps.large} mobile={logoProps.mobile} /> */}
      Hello
    </SidebarHeader>
  );
}
