import PageHeader from "@/components/PageHeader";
import ConsultationInformationCard from "./_components/ConsultationInformationCard";
import ConsultationFilterCard from "./_components/ConsultationFilterCard";
import ConsultationScheduleCard from "./_components/ConsultationScheduleCard";

const DUMMY_SCHEDULES = [
  {
    date: "Rabu, 7 Januari 2026",
    session: "4",
    time: "16.30-18.00",
    subject: "Matematika & B. Inggris",
    tutor: "Kak Affan",
    students: [
      "Affandy (9A)",
      "Sandy (9B)",
      "Fadil (9C)",
      "Fanny (9E)",
      "Rendy (9F)",
    ],
    materials: [
      "Kongruen",
      "Phytagoras",
      "Sudut",
      "Past tense",
      "Future tense",
    ],
  },
  {
    date: "Rabu, 7 Januari 2026",
    session: "2",
    time: "13.00-14.30",
    subject: "Ilmu Pengetahuan Alam",
    tutor: "Kak Affan",
    students: ["Affandy (9A)", "Sandy (9B)", "Roni (9C)"],
    materials: ["Makhluk hidup", "Magnet"],
  },
  {
    date: "Rabu, 7 Januari 2026",
    session: "4",
    time: "16.30-18.00",
    subject: "Matematika & B. Inggris",
    tutor: "Kak Affan",
    students: ["Affandy (9A)", "Sandy (9B)"],
    materials: ["Kongruen"],
  },
];

const ConsultationSchedulePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100 pb-10">
      <PageHeader fallbackHref="/tutor" />

      <main className="px-5 py-4 space-y-4 max-w-md mx-auto w-full">
        <ConsultationInformationCard />
        <ConsultationFilterCard />

        <div className="space-y-4">
          {DUMMY_SCHEDULES.map((schedule, index) => (
            <ConsultationScheduleCard key={index} {...schedule} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ConsultationSchedulePage;
