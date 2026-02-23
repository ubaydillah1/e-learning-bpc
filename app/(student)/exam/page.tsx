import NavbarBottom from "../_components/NavbarBottom";
import ExamForm from "./_components/ExamForm";

const ExamPage = () => {
  return (
    <>
      <main className="px-5 py-5 pb-20 bg-neutral-n100 space-y-5 min-h-screen flex-center">
        <ExamForm />
      </main>
      <NavbarBottom />
    </>
  );
};

export default ExamPage;