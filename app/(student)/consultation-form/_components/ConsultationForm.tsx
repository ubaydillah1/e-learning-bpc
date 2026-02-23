"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ConsultationFormSchema,
  ConsultationFormSchemaType,
} from "../_form/consultation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateInput } from "@/components/ui/date-input";
import { NativeSelect } from "@/components/ui/select-native";
import ErrorMessage from "@/components/ErrorMessage";
import BaseDialog from "@/components/dialog/BaseDialog";
import { useState } from "react";
import ErrorDialog from "@/components/dialog/ErrorDialog";

const SESSIONS = [
  { value: "Sesi 1", label: "Sesi 1 (13.00-14.30)" },
  { value: "Sesi 2", label: "Sesi 2 (15.30-17.00)" },
];

const SUBJECTS = [
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Bahasa Indonesia",
  "Bahasa Inggris",
];

const CLASSES = ["10 SMA", "11 SMA", "12 SMA", "Gap Year"];

const ConsultationForm = () => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const [formData, setFormData] = useState<ConsultationFormSchemaType | null>(
    null,
  );
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);

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

  const onSubmit = async (data: ConsultationFormSchemaType) => {
    setFormData(data);
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmSubmit = async () => {
    if (!formData) return;

    setIsConfirmationDialogOpen(false);
    
    // Simulate API call
    try {
      // Mock submission - replace with actual API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Improve this mock to randomly succeed or fail for testing if needed
          // For now, always succeed
          resolve(true); 
          // To test error: reject(new Error("Failed"));
        }, 1000);
      });

      setIsSuccessDialogOpen(true);
    } catch (error) {
      console.error(error);
      setIsErrorDialogOpen(true);
    }
  };

  return (
    <section className="bg-white p-5 rounded-lg mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-3 items-start">
          <div className="grid gap-2">
            <Label htmlFor="date" className="b2-r">
              Tanggal
            </Label>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DateInput
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full"
                />
              )}
            />
            {errors.date && <ErrorMessage message={errors.date.message} />}
          </div>

          <div className="grid gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="session" className="b2-r">
                Sesi
              </Label>
              <span className="text-xs text-muted-foreground">0/5 siswa</span>
            </div>
            <NativeSelect
              id="session"
              {...register("session")}
              options={SESSIONS}
              placeholder=""
            />
            {errors.session && (
              <ErrorMessage message={errors.session.message} />
            )}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="subject">Mata Pelajaran</Label>
          <NativeSelect
            id="subject"
            {...register("subject")}
            options={SUBJECTS}
            placeholder=""
          />
          {errors.subject && <ErrorMessage message={errors.subject.message} />}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="material">Materi</Label>
          <Input id="material" {...register("material")} />
          {errors.material && (
            <ErrorMessage message={errors.material.message} />
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="fullName">Nama Lengkap</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <ErrorMessage message={errors.fullName.message} />
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="className">Kelas</Label>
          <NativeSelect
            id="className"
            {...register("className")}
            options={CLASSES}
            placeholder=""
          />
          {errors.className && (
            <ErrorMessage message={errors.className.message} />
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phoneNumber">No WA</Label>
          <Input id="phoneNumber" type="tel" {...register("phoneNumber")} />
          {errors.phoneNumber && (
            <ErrorMessage message={errors.phoneNumber.message} />
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Mengirim..." : "Kirim Formulir"}
        </Button>
      </form>

      <BaseDialog
        title="Apakah sudah benar?"
        description="Coba cek kembali sebelum dikirim"
        alt="Confirmation Illustration"
        imagePath="/assets/illustrations/Illu 7.png"
        isOpen={isConfirmationDialogOpen}
        setIsOpen={setIsConfirmationDialogOpen}
        footer={
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              onClick={() => setIsConfirmationDialogOpen(false)}
              className="flex-1"
            >
              Kembali
            </Button>
            <Button
              onClick={handleConfirmSubmit}
              className="flex-1"
            >
              Kirim
            </Button>
          </div>
        }
      />

      <BaseDialog
        title="Berhasil Dikirim!"
        description="Formulir konsultasimu berhasil dikirim!"
        alt="Success Illustration"
        imagePath="/assets/illustrations/Illu 6.png"
        isOpen={isSuccessDialogOpen}
        setIsOpen={setIsSuccessDialogOpen}
        footer={
          <Button onClick={() => setIsSuccessDialogOpen(false)}>Kembali</Button>
        }
      />

      <ErrorDialog
        isOpen={isErrorDialogOpen}
        setIsOpen={setIsErrorDialogOpen}
      />
    </section>
  );
};

export default ConsultationForm;
