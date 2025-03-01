import { shimmer, toBase64 } from "@/src/components/lib/image";
import { cn } from "@/src/components/lib/utils";
import { SITE_LOGO } from "@/settings/navigation";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default function Logo() {
  const { large, mobile } = SITE_LOGO;

  return (
    <Link href="/">
      <Image
        src={mobile.url}
        alt={mobile.alt}
        width={mobile.width}
        height={mobile.height}
        className="py-2 md:hidden max-h-16"
        sizes="30vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(mobile.width, mobile.height)
        )}`}
      />
      {/* Desktop Logo (hidden on screens smaller than md) */}
      <Image
        src={large.url}
        alt={large.alt}
        width={large.width}
        height={large.height}
        className={cn("py-2 max-h-16 hidden md:block h-auto xl:max-h-20")}
        sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(large.width, large.height)
        )}`}
      />
    </Link>
  );
}
