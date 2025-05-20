"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function VideoLink({ url }: { url: string }) {
  const t = useTranslations("home.carousel");
  return (
    <div className="mb-8 ml-4">
      <Link href={url} target="_blank">
        <Button
          variant="link"
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-white/90 text-sm font-medium"
          aria-label={t("video-aria")}
        >
          <Sparkles className="w-4 h-4" />
          {t("video-link")}
        </Button>
      </Link>
    </div>
  );
}
