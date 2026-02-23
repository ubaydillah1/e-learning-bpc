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
    <header className="sticky top-0 flex items-center gap-4 px-5 py-4 z-20 bg-white">
      {showBackButton && (
        <button onClick={handleBack} aria-label="Kembali">
          <ArrowLeftIcon className="size-6 text-neutral-n900" />
        </button>
      )}
      {title && typeof title === "string" ? (
        <h1 className="b1-b">{title}</h1>
      ) : (
        title
      )}
    </header>
  );
}
