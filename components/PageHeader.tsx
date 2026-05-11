"use client";

import { ArrowLeftIcon } from "@/public/assets/icons";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title?: string | React.ReactNode;
  fallbackHref?: string;
  showBackButton?: boolean;
}

export default function PageHeader({
  title,
  fallbackHref,
  showBackButton = true,
}: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (fallbackHref) {
      router.push(fallbackHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 flex items-center px-5 py-4 z-20 bg-white min-h-[64px]">
      {showBackButton && (
        <button className="z-10" onClick={handleBack} aria-label="Kembali">
          <ArrowLeftIcon className="size-6 text-neutral-n900" />
        </button>
      )}

      {title && typeof title === "string" ? (
        <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <h1 className="b1-b">{title}</h1>
        </div>
      ) : title ? (
        <div className="flex-1 min-w-0 ml-3">{title}</div>
      ) : null}
    </header>
  );
}
