import { BookIcon } from "@/public/assets/icons";

const InformationCard = () => {
  return (
    <section className="bg-white p-5 rounded-lg space-y-3">
      <div className="flex gap-3 items-center">
        <div className="bg-accent-g100 flex-center size-6 rounded-full">
          <BookIcon className="size-3 text-accent-g500" />
        </div>
        <p className="b1-b">Latihan Soal - Kelas 9</p>
      </div>
      <div className="b2-r text-neutral-n700">
        Berikut beberapa latihan soal untuk mengasah kemampuanmu
      </div>
    </section>
  );
};

export default InformationCard;
