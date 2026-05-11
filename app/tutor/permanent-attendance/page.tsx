"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import AttendanceForm from "./_components/AttendanceForm";
import SuccessModal from "./_components/SuccessModal";
import WorkingHoursModal from "./_components/WorkingHoursModal";
import { UserIcon } from "@/public/assets/icons";

const PermanentAttendancePage = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWorkingHoursOpen, setIsWorkingHoursOpen] = useState(false);
  const [defaultHours, setDefaultHours] = useState({
    arrivalTime: "13.00",
    departureTime: "20.00",
  });

  const handleAttendanceSubmit = (values: any) => {
    console.log("Attendance submitted:", values);
    setIsSuccessOpen(true);
  };

  const handleSaveDefaultHours = (hours: {
    arrivalTime: string;
    departureTime: string;
  }) => {
    console.log("Default hours saved:", hours);
    setDefaultHours(hours);
  };

  return (
    <div className="min-h-screen bg-neutral-n100 pb-10">
      <PageHeader fallbackHref="/tutor" />

      {/* Content */}
      <main className="px-5 pt-6 max-w-md mx-auto">
        <AttendanceForm
          onSubmit={handleAttendanceSubmit}
          onOpenDefaultHours={() => setIsWorkingHoursOpen(true)}
          defaultHours={defaultHours}
        />
      </main>

      {/* Modals */}
      <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />
      <WorkingHoursModal
        isOpen={isWorkingHoursOpen}
        setIsOpen={setIsWorkingHoursOpen}
        onSave={handleSaveDefaultHours}
        defaultValues={defaultHours}
      />
    </div>
  );
};

export default PermanentAttendancePage;
