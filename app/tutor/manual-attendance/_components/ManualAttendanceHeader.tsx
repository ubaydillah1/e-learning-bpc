"use client";

import { ArrowLeftIcon, SearchIcon } from "@/public/assets/icons";
import { useRouter } from "next/navigation";

const ManualAttendanceHeader = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full flex items-center gap-4 px-5 py-4 bg-white z-20 shadow-sm">
      <button onClick={() => router.back()} className="p-1">
        <ArrowLeftIcon className="size-6 text-neutral-n900" />
      </button>
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Cari nama siswa"
          className="w-full h-11 pl-4 pr-10 rounded-xl border border-neutral-n200 b2-r focus:outline-none focus:border-primary-p500 transition-colors"
        />
        <SearchIcon className="size-5 text-neutral-n400 absolute right-3 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
};

export default ManualAttendanceHeader;
