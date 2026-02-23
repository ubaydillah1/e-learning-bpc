import PageHeader from "@/components/PageHeader";
import InformationCard from "./_components/InformationCard";
import ConsultationForm from "./_components/ConsultationForm";

const ConsultationFormPage = () => {
  return (
    <div className="bg-neutral-n100">
      <PageHeader />

      <main className="px-5 py-5">
        <InformationCard />
        <ConsultationForm />
      </main>
    </div>
  );
};

export default ConsultationFormPage;
