"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import AttendanceSummaryCard from "./_components/AttendanceSummaryCard";
import AttendanceTable from "./_components/AttendanceTable";

// Dummy Data
const PERMANENT_ATTENDANCE = Array.from({ length: 9 }, (_, i) => ({
  no: i + 1,
  date: `${i + 1} Jan 2026`,
  arrival: "13.00",
  departure: "20.00",
}));

const FREELANCE_ATTENDANCE = Array.from({ length: 9 }, (_, i) => ({
  no: i + 1,
  date: `${i + 1} Jan 2026`,
  grade: (9 - i).toString(),
  session: (i + 2).toString(),
}));

const AttendanceListPage = () => {
  const [type] = useState<"PERMANENT" | "FREELANCE">("FREELANCE");
  const [month, setMonth] = useState("Januari");

  const data =
    type === "PERMANENT" ? PERMANENT_ATTENDANCE : FREELANCE_ATTENDANCE;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100 pb-10">
      <PageHeader fallbackHref="/tutor" />

      <main className="px-5 pt-6 space-y-6 max-w-md mx-auto w-full">
        <AttendanceSummaryCard
          type={type}
          tutorName="Kak Jua"
          month={month}
          onMonthChange={setMonth}
          total={data.length}
        />

        <AttendanceTable type={type} data={data} />
      </main>
    </div>
  );
};

export default AttendanceListPage;
