import PageHeader from "@/components/PageHeader";
import InformationCard from "./_components/InformationCard";
import BodyWrapper from "./_components/BodyWrapper";

const ConsultationSchedulePage = () => {
  return (
    <div className="bg-neutral-n100">
      <PageHeader />

      <main className="px-5 py-4 space-y-4">
        <InformationCard />
        <BodyWrapper />
      </main>
    </div>
  );
};

export default ConsultationSchedulePage;
