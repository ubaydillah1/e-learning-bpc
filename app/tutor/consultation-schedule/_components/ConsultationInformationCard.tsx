import { DataIcon } from "@/public/assets/icons";

const ConsultationInformationCard = () => {
  return (
    <section className="bg-white p-5 rounded-lg space-y-4">
      <div className="flex gap-3">
        <div className="bg-accent-g100 flex-center size-6 rounded-full">
          <DataIcon className="size-3 text-accent-g500" />
        </div>
        <p className="b1-b">Daftar Jadwal Konsultasi</p>
      </div>
      <div className="b2-r text-neutral-n700">
        Berikut siswa yang mendaftar konsultasi dalam setiap sesi
      </div>
    </section>
  );
};

export default ConsultationInformationCard;
