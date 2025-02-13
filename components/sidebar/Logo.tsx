import { shimmer, toBase64 } from "@/lib/image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

interface Props {
  large: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  mobile?: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
}

export default function Logo({ large, mobile }: Props) {
  return (
    <div className="flex w-full items-center justify-center">
      <Link href="/">
        {!!mobile && (
          <Image
            src={mobile.url}
            alt={mobile.alt}
            width={mobile.width}
            height={mobile.height}
            className="py-2 md:hidden h-auto"
            sizes="30vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(mobile.width, mobile.height)
            )}`}
          />
        )}
        {/* Desktop Logo (hidden on screens smaller than md) */}
        <Image
          src={large.url}
          alt={large.alt}
          width={large.width}
          height={large.height}
          className={cn("py-2", !!mobile && "hidden md:block h-auto")}
          sizes="100vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(large.width, large.height)
          )}`}
        />
      </Link>
    </div>
  );
}
