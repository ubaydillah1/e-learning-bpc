"use client";

import { Button } from "@/components/ui/button";
import { UsersIcon, CalendarIcon, ClockIcon } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ConsultationSection = () => {
  const isExamWeek = true;

  return (
    <div className="space-y-5">
      <section className="bg-white p-5 rounded-lg space-y-4">
        <div className="flex gap-3">
          <div className="bg-accent-b100 flex-center size-6 rounded-full p-1">
            <UsersIcon className="size-4 text-accent-b500" />
          </div>
          <p className="b1-b">Konsultasi Siswa</p>
        </div>

        <p className="b2-r text-neutral-n700">
          {isExamWeek
            ? "Belajar di luar jadwal les bareng tutor-tutor keren BPC"
            : "Mengajar di luar jadwal les bareng siswa-siswi keren BPC"}
        </p>

        {isExamWeek && (
          <div className="rounded-xl overflow-hidden border border-accent-r500">
            <div className="bg-accent-r500 py-2 px-4">
              <p className="b3-b text-white text-center">
                Pengisian formulir paling lambat:
              </p>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-3">
                <CalendarIcon className="size-4 text-accent-r500" />
                <p className="b3-r text-neutral-n700">Senin, 1 Januari 2026</p>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="size-4 text-accent-r500" />
                <p className="b3-r text-neutral-n700">20.00 WIB</p>
              </div>
            </div>
          </div>
        )}

        <Image
          src="/assets/illustrations/illu 10.png"
          alt="Ilustrasi Konsultasi"
          width={280}
          height={280}
          className="mx-auto"
        />

        <div className="flex flex-col gap-2">
          <Link href="/tutor/consultation-schedule">
            <Button
              variant={isExamWeek ? "outline" : "default"}
              className={cn(
                "w-full",
                !isExamWeek &&
                  "bg-primary-p500 hover:bg-primary-p400 text-white",
              )}
            >
              Jadwal Konsultasi
            </Button>
          </Link>

          {isExamWeek && (
            <Link href="/tutor/consultation-form">
              <Button className="w-full bg-primary-p500 hover:bg-primary-p400 text-white">
                Isi Formulir
              </Button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default ConsultationSection;
