"use client";

import { ArrowLeftIcon } from "@/public/assets/icons";
import { useRouter } from "next/navigation";

export const ProfileHeader = () => {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-5 py-4 z-10">
      <button
        onClick={() => router.back()}
        className="p-2 -ml-2 hover:bg-neutral-n200 rounded-full transition-colors"
      >
        <ArrowLeftIcon className="w-6 h-6 text-neutral-n900" />
      </button>
      <div className="w-10" />
    </div>
  );
};
