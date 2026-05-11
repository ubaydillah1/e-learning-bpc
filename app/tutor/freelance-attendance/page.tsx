"use client";

import React from 'react';
import PageHeader from "@/components/PageHeader";

const FreelanceAttendancePage = () => {
  return (
    <div className="min-h-screen bg-neutral-n100">
      <PageHeader
        title="Absensi Tutor Freelance"
        fallbackHref="/tutor"
      />
      <main className="p-5">
        <p className="b2-r text-neutral-n700">Halaman absensi untuk tutor freelance (Isi masih kosong).</p>
      </main>
    </div>
  );
};

export default FreelanceAttendancePage;
