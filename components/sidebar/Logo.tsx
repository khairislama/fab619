import { shimmer, toBase64 } from "@/lib/image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default function Logo({
  url,
  mobileUrl,
}: {
  url: string;
  mobileUrl?: string;
}) {
  return (
    <div className="flex">
      <Link href="/" className="origin-left">
        {!!mobileUrl && (
          <Image
            src={mobileUrl}
            alt="Strong cast Mobile Logo"
            width={48}
            height={35}
            className="py-2 md:hidden h-auto"
            sizes="30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(48, 35)
            )}`}
          />
        )}
        {/* Desktop Logo (hidden on screens smaller than md) */}
        <Image
          src={url}
          alt="Strong cast Logo"
          width={200}
          height={35}
          className={cn("py-2", !!mobileUrl && "hidden md:block h-auto")}
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(200, 35)
          )}`}
        />
      </Link>
    </div>
  );
}
