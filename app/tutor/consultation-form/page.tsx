"use client";

import PageHeader from "@/components/PageHeader";
import ConsultationInformationCard from "./_components/ConsultationInformationCard";
import ConsultationForm from "./_components/ConsultationForm";

const ConsultationFormPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100 pb-10">
      <PageHeader fallbackHref="/tutor" />

      <main className="px-5 pt-6 space-y-6 max-w-md mx-auto w-full">
        <ConsultationInformationCard />
        <ConsultationForm />
      </main>
    </div>
  );
};

export default ConsultationFormPage;
