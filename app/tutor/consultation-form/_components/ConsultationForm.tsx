"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/select-native";
import { DateInput } from "@/components/ui/date-input";
import ErrorMessage from "@/components/ErrorMessage";
import BaseDialog from "@/components/dialog/BaseDialog";
import { useState } from "react";
import Image from "next/image";
import z from "zod";

const ConsultationFormSchema = z.object({
  date: z.date({
    message: "Wajib diisi",
  }),
  session: z.string().min(1, "Wajib diisi"),
  subject: z.string().min(1, "Mata pelajaran wajib dipilih"),
  material: z.string().min(1, "Materi konsultasi wajib diisi"),
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  className: z.string().min(1, "Kelas wajib dipilih"),
  phoneNumber: z.string().min(1, "Nomor WhatsApp wajib diisi"),
});

type ConsultationFormSchemaType = z.infer<typeof ConsultationFormSchema>;

const SESSIONS = [
  { value: "1", label: "1 (13.00-14.30)" },
  { value: "2", label: "2 (14.30-16.00)" },
];

const SUBJECTS = ["Matematika", "Fisika", "Kimia", "Biologi", "B. Inggris"];
const CLASSES = ["10 SMA", "11 SMA", "12 SMA"];

const ConsultationForm = () => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormSchemaType>({
    resolver: zodResolver(ConsultationFormSchema),
    defaultValues: {
      session: "",
      subject: "",
      className: "",
    },
  });

  const onSubmit = (data: ConsultationFormSchemaType) => {
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsConfirmationDialogOpen(false);
    setIsSuccessDialogOpen(true);
  };

  return (
    <section className="bg-white p-5 rounded-lg border border-neutral-n100 shadow-none">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-3 items-start">
          <div className="grid gap-1.5">
            <Label htmlFor="date" className="b3-b text-neutral-n900">
              Tanggal
            </Label>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DateInput
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full h-10"
                />
              )}
            />
            {errors.date && <ErrorMessage message={errors.date.message} />}
          </div>

          <div className="grid gap-1.5">
            <div className="flex justify-between items-center">
              <Label htmlFor="session" className="b3-b text-neutral-n900">
                Sesi
              </Label>
              <span className="text-[10px] text-neutral-n400">0/5 siswa</span>
            </div>
            <NativeSelect
              id="session"
              {...register("session")}
              options={SESSIONS}
              placeholder=""
              className="h-10 text-sm"
            />
            {errors.session && (
              <ErrorMessage message={errors.session.message} />
            )}
          </div>
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="subject" className="b3-b text-neutral-n900">
            Mata Pelajaran
          </Label>
          <NativeSelect
            id="subject"
            {...register("subject")}
            options={SUBJECTS}
            placeholder=""
            className="h-10 text-sm"
          />
          {errors.subject && <ErrorMessage message={errors.subject.message} />}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="material" className="b3-b text-neutral-n900">
            Materi
          </Label>
          <Input
            id="material"
            {...register("material")}
            className="h-10 text-sm"
          />
          {errors.material && (
            <ErrorMessage message={errors.material.message} />
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="fullName" className="b3-b text-neutral-n900">
            Nama Lengkap
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            className="h-10 text-sm"
          />
          {errors.fullName && (
            <ErrorMessage message={errors.fullName.message} />
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="className" className="b3-b text-neutral-n900">
            Kelas
          </Label>
          <NativeSelect
            id="className"
            {...register("className")}
            options={CLASSES}
            placeholder=""
            className="h-10 text-sm"
          />
          {errors.className && (
            <ErrorMessage message={errors.className.message} />
          )}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="phoneNumber" className="b3-b text-neutral-n900">
            No WA
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            {...register("phoneNumber")}
            className="h-10 text-sm"
          />
          {errors.phoneNumber && (
            <ErrorMessage message={errors.phoneNumber.message} />
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary-p500 hover:bg-primary-p400 text-white h-12 b2-b mt-4"
        >
          Kirim Formulir
        </Button>
      </form>

      {/* Confirmation Dialog */}
      <BaseDialog
        isOpen={isConfirmationDialogOpen}
        setIsOpen={setIsConfirmationDialogOpen}
        imagePath="/assets/illustrations/illu 5.png"
        alt="Confirmation"
        title="Apakah sudah benar?"
        description="Coba cek kembali sebelum dikirim"
        footer={
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => setIsConfirmationDialogOpen(false)}
              className="flex-1 h-11"
            >
              Kembali
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              className="flex-1 bg-primary-p500 hover:bg-primary-p400 text-white h-11"
            >
              Kirim
            </Button>
          </div>
        }
      />

      {/* Success Dialog */}
      <BaseDialog
        isOpen={isSuccessDialogOpen}
        setIsOpen={setIsSuccessDialogOpen}
        imagePath="/assets/illustrations/illu 6.png"
        alt="Success"
        title="Berhasil Dikirim!"
        description="Formulir konsultasimu berhasil dikirim!"
        footer={
          <Button
            onClick={() => setIsSuccessDialogOpen(false)}
            className="w-full bg-primary-p500 hover:bg-primary-p400 text-white h-11"
          >
            Kembali
          </Button>
        }
      />
    </section>
  );
};

export default ConsultationForm;
