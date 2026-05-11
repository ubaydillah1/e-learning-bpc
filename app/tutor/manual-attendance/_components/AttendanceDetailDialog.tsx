"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
  XCircleIcon,
  ChevronDownIcon,
} from "@/public/assets/icons";
import { cn } from "@/lib/utils";

interface AttendanceDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  student: {
    name: string;
    count: number;
    total: number;
  } | null;
  month: string;
  setMonth: (value: string) => void;
}

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const initialAttendanceData = [
  { date: "31 Jan 2026", tutor: "Kak Jasmine", status: "present" },
  { date: "01 Feb 2026", tutor: "Kak Affan", status: "present" },
  { date: "02 Feb 2026", tutor: "Kak Najwa", status: "present" },
  { date: "03 Feb 2026", tutor: "Kak Ardel", status: "present" },
  { date: "04 Feb 2026", tutor: "Kak Maryam", status: "present" },
  { date: "05 Feb 2026", tutor: "Kak Atiqah", status: "present" },
  { date: "05 Feb 2026", tutor: "Kak Atiqah", status: "present" },
  { date: "05 Feb 2026", tutor: "Kak Atiqah", status: "present" },
  { date: "05 Feb 2026", tutor: "Kak Atiqah", status: "present" },
  { date: "05 Feb 2026", tutor: "Kak Atiqah", status: "present" },
  { date: "06 Feb 2026", tutor: "-", status: "absent" },
  { date: "07 Feb 2026", tutor: "-", status: "empty" },
];

const AttendanceDetailDialog = ({
  open,
  onOpenChange,
  student,
  month,
  setMonth,
}: AttendanceDetailDialogProps) => {
  const [attendance, setAttendance] = useState(initialAttendanceData);

  if (!student) return null;

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(month);
    const prevIndex = (currentIndex - 1 + months.length) % months.length;
    setMonth(months[prevIndex]);
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(month);
    const nextIndex = (currentIndex + 1) % months.length;
    setMonth(months[nextIndex]);
  };

  const updateStatus = (index: number, status: string) => {
    const newAttendance = [...attendance];
    newAttendance[index].status = status;
    setAttendance(newAttendance);
  };

  const statusOptions = [
    { value: "present", label: "Hadir", icon: CheckCircleIcon, color: "text-accent-g500 bg-accent-g100" },
    { value: "absent", label: "Absen", icon: XCircleIcon, color: "text-accent-r500 bg-accent-r100" },
    { value: "empty", label: "Kosong", icon: null, color: "text-neutral-n400 bg-neutral-n100" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-white rounded-3xl overflow-hidden max-w-sm sm:max-w-[360px] w-[calc(100%-40px)] shadow-2xl">
        <DialogHeader className="bg-neutral-n100/50 p-6 pb-4 text-center relative">
          <DialogTitle className="h4 text-neutral-n900">
            {student.name} (9E)
          </DialogTitle>
          <p className="b3-r text-neutral-n600">Senin kamis - Sesi 4</p>
        </DialogHeader>

        <div className="px-5 pb-4 space-y-3 max-h-[300px] overflow-y-auto no-scrollbar">
          {attendance.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="b3-r text-neutral-n800 w-20 shrink-0">
                {item.date}
              </span>

              <div className="flex items-center gap-2 flex-1">
                <UserIcon className="size-4 text-neutral-n400" />
                <span className="b3-r text-neutral-n400 truncate">
                  {item.tutor}
                </span>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center justify-between gap-1 px-3 py-1.5 rounded-full min-w-[80px] transition-all active:scale-95 cursor-pointer",
                      item.status === "present" && "bg-accent-g100 text-accent-g500",
                      item.status === "absent" && "bg-accent-r100 text-accent-r500",
                      item.status === "empty" && "bg-neutral-n100 text-neutral-n400"
                    )}
                  >
                    <div className="flex-1 flex-center">
                      {item.status === "present" && (
                        <CheckCircleIcon className="size-4" />
                      )}
                      {item.status === "absent" && (
                        <XCircleIcon className="size-4" />
                      )}
                      {item.status === "empty" && <div className="h-4" />}
                    </div>
                    <ChevronDownIcon className="size-3.5 opacity-50" />
                  </button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-32 p-1 rounded-xl shadow-xl border-neutral-n200">
                  <div className="flex flex-col gap-1">
                    {statusOptions.map((opt) => (
                      <PopoverClose asChild key={opt.value}>
                        <button
                          onClick={() => updateStatus(index, opt.value)}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-lg text-left b3-b transition-colors",
                            item.status === opt.value ? "bg-neutral-n100" : "hover:bg-neutral-n50"
                          )}
                        >
                          {opt.icon && <opt.icon className={cn("size-4", opt.color.split(' ')[0])} />}
                          <span className={opt.color.split(' ')[0]}>{opt.label}</span>
                        </button>
                      </PopoverClose>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>

        <div className="px-5 pb-6 space-y-6">
          <div className="flex items-center justify-between p-3 bg-neutral-n100 rounded-xl">
            <span className="b3-r text-neutral-n800">Total kehadiran:</span>
            <div className="flex items-center gap-1 b3-b">
              <span className="text-accent-g500">{student.count}</span>
              <span className="text-neutral-n400">/</span>
              <span className="text-neutral-n400">{student.total}</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <button
              onClick={handlePrevMonth}
              className="text-neutral-n900 hover:scale-110 p-2 rounded-full hover:bg-neutral-n100 transition-all active:scale-95"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <span className="b2-b text-neutral-n900 w-28 text-center">{month} 2026</span>
            <button
              onClick={handleNextMonth}
              className="text-neutral-n900 hover:scale-110 p-2 rounded-full hover:bg-neutral-n100 transition-all active:scale-95"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDetailDialog;
