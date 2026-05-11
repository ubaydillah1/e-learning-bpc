"use client";

import { useState } from "react";
import { EyeIcon } from "@/public/assets/icons";
import AttendanceDetailDialog from "./AttendanceDetailDialog";

const students = [
  { id: 1, name: "Affandy Affan", count: 6, total: 8 },
  { id: 2, name: "Affandy Affan", count: 7, total: 8 },
  { id: 3, name: "Affandy Affan", count: 7, total: 8 },
  { id: 4, name: "Affandy Affan", count: 7, total: 8 },
  { id: 5, name: "Affandy Affan", count: 7, total: 8 },
];

const StudentAttendanceList = ({
  month,
  setMonth,
}: {
  month: string;
  setMonth: (value: string) => void;
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null);

  const handleOpenDetail = (student: (typeof students)[0]) => {
    setSelectedStudent(student);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border border-neutral-n200 shadow-sm">
        <div className="bg-linear-to-r to-primary-p200 from-primary-p100 p-4 flex justify-between items-center text-neutral-n900">
          <div>
            <p className="b2-b">Kelas 9A</p>
            <p className="b3-r text-neutral-n700">Senin Kamis</p>
          </div>
          <div className="text-right">
            <p className="b2-b">Sesi 4 (16.30-18.00)</p>
          </div>
        </div>

        <div className="px-5 py-3 divide-y divide-neutral-n200">
          {students.map((student, index) => (
            <div key={index} className="flex items-center justify-between py-3.5 first:pt-2 last:pb-2">
              <div className="flex items-center gap-4">
                <span className="b2-r text-neutral-n900 font-medium w-4">{student.id}</span>
                <span className="b2-r text-neutral-n900">{student.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 b2-r">
                  <span className="text-accent-g500 font-bold">
                    {student.count}
                  </span>
                  <span className="text-neutral-n500">/</span>
                  <span className="text-neutral-n500">{student.total}</span>
                </div>
                <button
                  onClick={() => handleOpenDetail(student)}
                  className="text-neutral-n500 hover:text-primary-p500 hover:bg-primary-p100 p-2 rounded-xl transition-all active:scale-95"
                >
                  <EyeIcon className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AttendanceDetailDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        student={selectedStudent}
        month={month}
        setMonth={setMonth}
      />
    </>
  );
};

export default StudentAttendanceList;
