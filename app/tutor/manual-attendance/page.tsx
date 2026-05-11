"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import AttendanceFilterCard from "./_components/AttendanceFilterCard";
import StudentAttendanceList from "./_components/StudentAttendanceList";
import EmptyState from "./_components/EmptyState";
import { SearchIcon } from "@/public/assets/icons";

const ManualAttendancePage = () => {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("Januari");
  const [selectedClass, setSelectedClass] = useState("9");

  return (
    <div className="flex flex-col h-[calc(100vh-70px)] bg-neutral-n100">
      <PageHeader
        title={
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Cari nama siswa"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-[40px] pl-4 pr-10 rounded-xl border border-neutral-n200 b2-r focus:outline-none focus:border-primary-p500 transition-colors"
            />
            <SearchIcon className="size-5 text-neutral-n400 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        }
      />

      <main className="flex-1 flex-col flex py-4 gap-4 px-5 overflow-hidden">
        <AttendanceFilterCard
          month={month}
          selectedClass={selectedClass}
          setMonth={setMonth}
          setSelectedClass={setSelectedClass}
        />
        <StudentAttendanceList month={month} setMonth={setMonth} />
      </main>

      {/* <div className="flex-1 flex-center px-5 overflow-hidden">
        <EmptyState
          title="Tidak Ditemukan"
          description="Nama siswa tidak ditemukan. Silahkan cari siswa lain"
          imagePath="/assets/illustrations/Illu 5.png"
        />
      </div> */}
    </div>
  );
};

export default ManualAttendancePage;
