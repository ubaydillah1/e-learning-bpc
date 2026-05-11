"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ClockIcon } from "@/public/assets/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GenerateQRDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const GenerateQRDialog = ({ isOpen, setIsOpen }: GenerateQRDialogProps) => {
  const [timeLeft, setTimeLeft] = useState(179);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}.${secs.toString().padStart(2, "0")}`;
  };

  const code = "ABC123";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent showCloseButton={false} className="max-w-[340px]">
        <DialogTitle className="sr-only">Generate QR Code Absensi</DialogTitle>
        <DialogDescription className="sr-only">
          Menampilkan kode QR untuk absensi siswa dengan timer pembaruan.
        </DialogDescription>
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-full aspect-square border-4 border-primary/10 rounded-2xl p-4 flex items-center justify-center bg-white shadow-sm overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${code}`}
                alt="QR Code"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 py-2 border-t border-neutral-n200 w-full justify-center">
            <span className="b1-b text-neutral-n900">{code}</span>
            <div className="flex items-center gap-2 text-accent-r500">
              <ClockIcon className="size-4" />
              <span className="b3-b">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="flex gap-4 w-full">
            <Button
              variant="outline"
              className="flex-1 py-6 rounded-xl border-primary-p500 text-primary-p500 hover:bg-primary-p100"
              onClick={() => setIsOpen(false)}
            >
              Kembali
            </Button>
            <Button
              className="flex-1 py-6 rounded-xl bg-primary-p500 hover:bg-primary-p400 text-white"
              onClick={() => setTimeLeft(179)}
            >
              Refresh QR
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateQRDialog;
