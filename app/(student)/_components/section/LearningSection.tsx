import { Button } from "@/components/ui/button";
import { BookIcon, BookOpenIcon } from "@/public/assets/icons";
import Link from "next/link";

const LearningSection = () => {
  return (
    <section className="space-y-5">
      <div className="bg-white p-5 rounded-lg space-y-4">
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <div className="bg-accent-y100 flex-center size-6 rounded-full">
              <BookOpenIcon className="size-3 text-accent-y500" />
            </div>
            <p className="b1-b">Baca Modul Online</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
        <div className="flex justify-between gap-4">
          <p className="b2-r flex-1 truncate">Modul BPC Calistung</p>
          <Link href="/" className="b2-r text-[#278ECF]">
            Klik Disini
          </Link>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg space-y-4">
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <div className="bg-accent-g100 flex-center size-6 rounded-full">
              <BookIcon className="size-3 text-accent-g500" />
            </div>
            <p className="b1-b">Latihan soal</p>
          </div>

          <p className="b3-r">
            Perbanyak latihan soal untuk memperkaya pengetahuanmu
          </p>
        </div>

        <Link href="/exercise">
          <Button>Latihan Soal</Button>
        </Link>
      </div>
    </section>
  );
};

export default LearningSection;
