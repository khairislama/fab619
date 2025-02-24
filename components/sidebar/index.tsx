import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Goal, Home, Menu, Presentation, Send, Users } from "lucide-react";
import Link from "next/link";
import AppSidebarHeader from "./header";
import AppSidebarFooter from "./footer";
import SidebarMenuBtn from "./client/SidebarMenuBtn";

// Menu items.
const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Users,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    icon: Presentation,
  },
  {
    title: "Services",
    url: "/services",
    icon: Goal,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Send,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 top-0 z-40 h-screen w-64 bg-background text-foreground transition-transform duration-300 ease-in-out md:translate-x-0"
    >
      {/* <AppSidebarHeader /> */}
      <SidebarContent className="flex flex-col justify-between h-full">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url} passHref legacyBehavior>
                <SidebarMenuBtn url={item.url}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </SidebarMenuBtn>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      {/* <AppSidebarFooter /> */}
    </Sidebar>
  );
}

export function PortfolioSidebar() {
  return (
    <SidebarProvider>
      <SidebarTrigger asChild>
        <button className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md md:hidden">
          <Menu size={24} />
        </button>
      </SidebarTrigger>
      <SidebarContent />
    </SidebarProvider>
  );
}
