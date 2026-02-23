import { UsersIcon } from "@/public/assets/icons";

const InformationCard = () => {
  return (
    <section className="bg-white p-5 rounded-lg space-y-4">
      <div className="flex gap-3">
        <div className="bg-accent-b100 flex-center size-6 rounded-full">
          <UsersIcon className="size-3 text-accent-b500" />
        </div>
        <p className="b1-b">Isi Formulir Konsultasi</p>
      </div>
      <div className="b2-r">
        Isi formulir di bawah untuk mengatur jadwal konsultasimu
      </div>
    </section>
  );
};

export default InformationCard;
