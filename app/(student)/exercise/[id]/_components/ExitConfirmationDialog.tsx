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

interface ExitConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ExitConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: ExitConfirmationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false} className="max-w-[348px] p-6">
        <div className="relative w-full aspect-square max-w-[200px] mx-auto">
          <Image
            src="/assets/illustrations/Illu 5.png"
            alt="Confirmation"
            fill
            className="object-contain"
          />
        </div>

        <DialogHeader className="space-y-1">
          <DialogTitle className="text-center h1-b">
            Apakah Kamu ingin Keluar?
          </DialogTitle>
          <DialogDescription className="text-center b2-r text-neutral-n500">
            Progress mu akan tetap tersimpan
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex gap-3 mt-4">
          <Button
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-[10px] h-11 b2-b"
            onClick={onConfirm}
          >
            Keluar
          </Button>
          <Button
            className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-[10px] h-11 b2-b"
            onClick={onClose}
          >
            Kembali
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitConfirmationDialog;
