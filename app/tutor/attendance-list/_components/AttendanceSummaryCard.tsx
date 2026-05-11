"use client";

import { Card } from "@/components/ui/card";
import { UserIcon } from "@/public/assets/icons";
import MonthSelector from "./MonthSelector";

interface AttendanceSummaryCardProps {
  type: "PERMANENT" | "FREELANCE";
  tutorName: string;
  month: string;
  onMonthChange: (month: string) => void;
  total: number;
}

const AttendanceSummaryCard = ({
  type,
  tutorName,
  month,
  onMonthChange,
  total,
}: AttendanceSummaryCardProps) => {
  return (
    <Card className="p-5 gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-accent-y100 flex-center size-6 rounded-full">
          <UserIcon className="size-3 text-accent-y500" />
        </div>
        <p className="b1-b text-neutral-n900">
          List Absen Tutor {type === "PERMANENT" ? "Tetap" : "Freelance"}
        </p>
      </div>

      <div className="grid grid-cols-[100px_1fr] gap-y-0.5 text-sm">
        <span className="b2-b">Nama Tutor</span>
        <span className="b2-r">: {tutorName}</span>

        <span className="b2-b flex items-center">Bulan</span>
        <div className="flex items-center gap-1">
          <span>: </span>
          <MonthSelector value={month} onChange={onMonthChange} />
        </div>

        <span className="b2-b">Total</span>
        <span className="b2-r">: {total}</span>
      </div>
    </Card>
  );
};

export default AttendanceSummaryCard;
