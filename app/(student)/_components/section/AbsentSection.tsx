import { Button } from "@/components/ui/button";
import { QrcodeIcon } from "@/public/assets/icons";
import Image from "next/image";
import { useState } from "react";
import InputCodeDialog from "../dialog/InputCodeDialog";
import CameraDialog from "../dialog/CameraDialog";

const AbsentSection = () => {
  const [isInputCodeOpen, setIsInputCodeOpen] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  return (
    <section className="bg-white p-5 rounded-lg space-y-4">
      <div className="flex gap-3">
        <div className="bg-accent-r100 flex-center size-6 rounded-full p-1">
          <QrcodeIcon className="size-4 text-accent-r500" />
        </div>
        <p className="b1-b">Absensi</p>
      </div>

      <p className="b3-r">
        Scan QR code yang diberikan kakak tutor untuk mencatat kehadiranmu
      </p>

      <Image
        src="/assets/illustrations/illu 1.png"
        alt="Ilustrasi Absensi"
        width={280}
        height={280}
        className="mx-auto"
      />

      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => setIsInputCodeOpen(true)}>
          Input Kode Manual
        </Button>
        <Button onClick={() => setIsCameraOpen(true)}>Buka Kamera</Button>
      </div>

      <InputCodeDialog
        isOpen={isInputCodeOpen}
        setIsOpen={setIsInputCodeOpen}
      />

      <CameraDialog isOpen={isCameraOpen} setIsOpen={setIsCameraOpen} />
    </section>
  );
};

export default AbsentSection;
