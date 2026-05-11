"use client";

import { Button } from "@/components/ui/button";
import { QrcodeIcon, UserIcon } from "@/public/assets/icons";
import Image from "next/image";
import { useState } from "react";
import GenerateQRDialog from "../dialog/GenerateQRDialog";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AbsentSection = () => {
  const [isGenerateQROpen, setIsGenerateQROpen] = useState(false);
  const router = useRouter();

  return (
    <div className="space-y-5">
      <section className="bg-white p-5 rounded-lg space-y-4">
        <div className="flex gap-3">
          <div className="bg-accent-r100 flex-center size-6 rounded-full p-1">
            <QrcodeIcon className="size-4 text-accent-r500" />
          </div>
          <p className="b1-b">Absensi Siswa</p>
        </div>

        <p className="b2-r text-neutral-n700">
          Generate kode QR untuk absensi siswa
        </p>

        <Image
          src="/assets/illustrations/illu 1.png"
          alt="Ilustrasi Absensi"
          width={280}
          height={280}
          className="mx-auto"
        />

        <div className="flex flex-col gap-2">
          <Link href="/tutor/manual-attendance">
            <Button variant="outline" className="w-full">
              Absensi Manual
            </Button>
          </Link>
          <Button
            onClick={() => setIsGenerateQROpen(true)}
            className="w-full bg-primary-p500 hover:bg-primary-p400 text-white"
          >
            Generate QR
          </Button>
        </div>
      </section>

      <section className="bg-white p-5 rounded-lg space-y-4">
        <div className="flex gap-3">
          <div className="bg-accent-y100 flex-center size-6 rounded-full p-1">
            <UserIcon className="size-4 text-accent-y500" />
          </div>
          <p className="b1-b">Absensi Tutor</p>
        </div>

        <p className="b2-r text-neutral-n700">
          Silahkan melakukan absensi tutor setelah mengajar
        </p>

        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full">
            List Absen
          </Button>
          <Button
            onClick={() => router.push("/tutor/permanent-attendance")}
            className="w-full bg-primary-p500 hover:bg-primary-p400 text-white"
          >
            Absen Sesi Ini
          </Button>
        </div>
      </section>

      <GenerateQRDialog
        isOpen={isGenerateQROpen}
        setIsOpen={setIsGenerateQROpen}
      />
    </div>
  );
};

export default AbsentSection;
