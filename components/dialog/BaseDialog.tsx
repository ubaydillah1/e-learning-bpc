"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const BaseDialog = ({
  imagePath,
  title,
  description,
  footer,
  alt = "normal-illustration",
  isOpen,
  setIsOpen,
}: {
  imagePath: string;
  title: string;
  description: string;
  alt?: string;
  footer?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent showCloseButton={false}>
        <Image
          alt={alt}
          src={imagePath}
          width={200}
          height={200}
          className="mx-auto"
        />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BaseDialog;
