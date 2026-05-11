import { UsersIcon } from "@/public/assets/icons";

const ConsultationInformationCard = () => {
  return (
    <section className="bg-white p-5 rounded-lg space-y-4 border border-neutral-n100 shadow-none">
      <div className="flex gap-3">
        <div className="bg-accent-b100 flex-center size-6 rounded-full">
          <UsersIcon className="size-3 text-accent-b500" />
        </div>
        <p className="b1-b text-neutral-n900">Isi Formulir Konsultasi</p>
      </div>
      <div className="b2-r text-neutral-n700">
        Isi formulir di bawah untuk mengatur jadwal konsultasimu
      </div>
    </section>
  );
};

export default ConsultationInformationCard;
