"use client";

import AnnouncementSection from "./_components/AnnouncementSection";
import AcademicCalendarSection from "./_components/AcademicCalendarSection";
import PageHeader from "@/components/PageHeader";

const AcademicInformationPage = () => {
  // Mock Data
  const announcements = [
    {
      id: "1",
      title: "ACC Test akan diadakan minggu depan",
      date: "23 Sept 2025",
      time: "13.15",
    },
    {
      id: "2",
      title: "ACC Test akan diadakan minggu depan",
      date: "23 Sept 2025",
      time: "13.15",
    },
  ];

  const events = [
    {
      id: "1",
      title: "ACC Test 2 Bimbel BPC",
      startDate: new Date(2025, 8, 7),
      endDate: new Date(2025, 8, 11),
      color: "orange",
    },
    {
      id: "2",
      title: "Pembagian Raport BPC",
      startDate: new Date(2025, 8, 25),
      endDate: new Date(2025, 8, 25),
      color: "blue",
    },
  ];

  return (
    <main className="bg-neutral-n100 min-h-screen">
      <PageHeader title="Informasi Akademik" />

      <div className="py-5 px-5 flex flex-col gap-5">
        <AnnouncementSection announcements={announcements} />
        <AcademicCalendarSection events={events} />
      </div>
    </main>
  );
};

export default AcademicInformationPage;
