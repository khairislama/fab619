import { AppSidebar } from "@/src/components/sidebar";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function PreviewLayout({ children }: Props) {
  return (
    <>
      <AppSidebar />
      <main className="mt-24 xl:mt-0 xl:ml-60 xl:w-[calc(100vw-15rem)] relative font-poppins">
        {children}
      </main>
      <Toaster />
    </>
  );
}
