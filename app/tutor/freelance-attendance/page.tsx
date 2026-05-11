"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FreelanceAttendanceForm from "./_components/FreelanceAttendanceForm";
import SuccessModal from "../permanent-attendance/_components/SuccessModal";

const FreelanceAttendancePage = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleAttendanceSubmit = (values: any) => {
    console.log("Freelance attendance submitted:", values);
    setIsSuccessOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100">
      <PageHeader fallbackHref="/tutor" />
      <main className="flex flex-1 justify-center items-center px-5 py-6 pb-[64px]">
        <div className="w-full max-w-md">
          <FreelanceAttendanceForm onSubmit={handleAttendanceSubmit} />
        </div>
      </main>

      <SuccessModal isOpen={isSuccessOpen} setIsOpen={setIsSuccessOpen} />
    </div>
  );
};

export default FreelanceAttendancePage;
