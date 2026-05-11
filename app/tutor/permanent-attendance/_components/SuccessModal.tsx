"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SuccessModal = ({ isOpen, setIsOpen }: SuccessModalProps) => {
  const router = useRouter();

  const handleBack = () => {
    setIsOpen(false);
    router.push("/tutor");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent showCloseButton={false} className="max-w-[340px] p-6 text-center">
        <DialogTitle className="sr-only">Absensi Berhasil</DialogTitle>
        <DialogDescription className="sr-only">
          Konfirmasi bahwa absensi tutor telah berhasil dicatat.
        </DialogDescription>
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/assets/illustrations/Illu 6.png"
            alt="Absensi Berhasil"
            width={240}
            height={240}
            className="mx-auto"
          />
          
          <div className="space-y-2">
            <h3 className="b1-b text-neutral-n900">Absensi Berhasil</h3>
            <p className="b2-r text-neutral-n700 px-4">
              Data kedatanganmu telah dicatat
            </p>
          </div>

          <Button
            onClick={handleBack}
            className="w-full font-bold h-11"
          >
            Kembali
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
