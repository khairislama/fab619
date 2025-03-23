// import { use } from "react";
// import { setRequestLocale } from "next-intl/server";
// import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Slideshow from "@/src/components/slideshow";

// type Props = {
//   params: Promise<{ locale: string }>;
// };

// should I ?
const Grid = dynamic(() => import("@/src/components/grid"), {
  loading: () => <p>Loading...</p>,
});

export default function MaintenancePage() {
  // { params }: Props
  // const { locale } = use(params);

  // // Enable static rendering
  // setRequestLocale(locale);

  // const t = useTranslations("home");
  return <Slideshow />;
}
