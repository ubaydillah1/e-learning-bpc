"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/ErrorMessage";
import BaseDialog from "@/components/dialog/BaseDialog";
import { useState } from "react";

const schema = z.object({
  code: z.string().min(1, "Kode tidak boleh kosong"),
});

type FormValues = z.infer<typeof schema>;

const InputCodeDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}) => {
  const [isBaseDialogOpen, setIsBaseDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
    setIsOpen(false);
    setIsBaseDialogOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-left b1-b">Input kode</DialogTitle>
              <DialogDescription className="grid gap-2">
                <Input
                  className="text-sm"
                  {...register("code", {
                    onChange: (e) =>
                      setValue("code", e.target.value.toUpperCase(), {
                        shouldValidate: true,
                      }),
                  })}
                />
                <ErrorMessage message={errors.code?.message} />
              </DialogDescription>
              <DialogFooter>
                <Button type="submit">Selesai</Button>
              </DialogFooter>
            </DialogHeader>
          </form>
        </DialogContent>
      </Dialog>
      <BaseDialog
        imagePath="/assets/illustrations/illu 6.png"
        title="Absensi Berhasil"
        description="Data kehadiranmu telah dicatat"
        alt="Ilustrasi Absensi"
        isOpen={isBaseDialogOpen}
        setIsOpen={setIsBaseDialogOpen}
        footer={
          <Button className="w-full" onClick={() => setIsBaseDialogOpen(false)}>
            Kembali
          </Button>
        }
      />
    </>
  );
};

export default InputCodeDialog;
