import Footer from "@/src/components/Footer";
import { AppSidebar } from "@/src/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children }: Props) {
  return (
    <>
      <AppSidebar />
      <div className="mt-24 xl:mt-0 xl:ml-60 xl:w-[calc(100vw-15rem)]">
        <div className="scrollbar-hide overflow-y-auto h-screen">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
