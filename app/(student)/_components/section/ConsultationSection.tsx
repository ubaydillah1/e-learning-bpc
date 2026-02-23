"use client";

import BaseDialog from "@/components/dialog/BaseDialog";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, UsersIcon } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const handleContactTutor = () => {
  const phoneNumber = "6281287373318";
  const message = encodeURIComponent(
    "Halo kak, saya mau konsultasi terkait les. Apakah kakak ada waktu untuk diskusi lebih lanjut? Terima kasih 🙏",
  );

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
};

const ConsultationSection = () => {
  const [isBaseDialogOpen, setIsBaseDialogOpen] = useState(false);

  return (
    <section className="bg-white p-5 rounded-lg space-y-4">
      <div className="flex gap-3">
        <div className="bg-accent-b100 flex-center size-6 rounded-full">
          <UsersIcon className="size-3 text-accent-b500" />
        </div>
        <p className="b1-b">Konsultasi Siswa</p>
      </div>

      <p className="b3-r">
        Belajar di luar jadwal les dengan efektif bareng tutor keren BPC
      </p>

      {/* <div>
        <div className="rounded-t-[12px] bg-accent-r500 text-white b2-b p-2 text-center">
          Pengisian formulir paling lambat:
        </div>
        <div className="rounded-b-[12px] border border-x-accent-r500 border-b-accent-r500 b2-r p-2 gap-1 px-7ada">
          <div className="flex gap-2">
            <CalendarIcon className="size-5 text-accent-r500" />
            Senin, 1 Januari 2026
          </div>
          <div className="flex gap-2">
            <ClockIcon className="size-5 text-accent-r500" />
            19.00 - 20.00 WIB
          </div>
        </div>
      </div> */}

      <Image
        src="/assets/illustrations/illu 10.png"
        alt="Ilustrasi Absensi"
        width={280}
        height={280}
        className="mx-auto"
      />

      {/* 
      <div className="flex flex-col gap-2">
        <Button onClick={() => setIsBaseDialogOpen(true)}>
          Ingin Konsultasi
        </Button>
      </div> */}

      <div className="flex flex-col gap-2">
        <Link href="/consultation-schedule">
          <Button variant="outline">Jadwal Konsultasi</Button>
        </Link>
        <Link href="/consultation-form">
          <Button>Isi Formulir</Button>
        </Link>
      </div>

      <BaseDialog
        imagePath="/assets/illustrations/illu 6.png"
        title="Permintaan Konsultasi"
        description="Permintaan konsultasi kamu telah dicatat"
        alt="Ilustrasi Konsultasi"
        isOpen={isBaseDialogOpen}
        setIsOpen={setIsBaseDialogOpen}
        footer={
          <div className="flex gap-4 w-full">
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => setIsBaseDialogOpen(false)}
            >
              Kembali
            </Button>
            <Button className="flex-1" onClick={handleContactTutor}>
              Hubungi Tutor
            </Button>
          </div>
        }
      />
    </section>
  );
};

export default ConsultationSection;
