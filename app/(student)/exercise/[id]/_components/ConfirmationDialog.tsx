import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false} className="max-w-[350px]">
        <div className="relative w-full aspect-square max-w-[200px] mx-auto mt-2">
          <Image
            src="/assets/illustrations/Illu 5.png"
            alt="Confirmation"
            fill
            className="object-contain"
          />
        </div>

        <DialogHeader className="space-y-2">
          <DialogTitle className="text-center">Sudah selesai?</DialogTitle>
          <DialogDescription className="text-center">
            Tekan tombol selesai untuk keluar
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-3 mt-2">
          <Button
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-[8px] h-11"
            onClick={onClose}
          >
            Kembali
          </Button>
          <Button
            className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-[8px] h-11"
            onClick={onConfirm}
          >
            Selesai
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
