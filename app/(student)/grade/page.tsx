import PageHeader from "@/components/PageHeader";
import NavbarBottom from "../_components/NavbarBottom";
import AccTestCard from "./_components/AccTestCard";
import LeaderboardCard from "./_components/LeaderboardCard";
import TryoutCard from "./_components/TryoutCard";

const GradePage = () => {
  return (
    <>
      <PageHeader title="Nilai" showBackButton={false} />

      <main className="px-5 py-5 pb-20 bg-neutral-n100 space-y-5">
        <LeaderboardCard />
        <TryoutCard />
        <AccTestCard />
      </main>
      <NavbarBottom />
    </>
  );
};

export default GradePage;
