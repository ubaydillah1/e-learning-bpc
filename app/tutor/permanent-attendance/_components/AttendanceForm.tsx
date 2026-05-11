"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateInput } from "@/components/ui/date-input";
import { Card } from "@/components/ui/card";
import { UserIcon } from "@/public/assets/icons";
import ErrorMessage from "@/components/ErrorMessage";

const attendanceSchema = z.object({
  tutorName: z.string().min(1, "Nama tutor harus diisi"),
  teachingDate: z.date({
    message: "Tanggal mengajar harus diisi",
  }),
  arrivalTime: z.string().min(1, "Jam datang harus diisi"),
  departureTime: z.string().min(1, "Jam pulang harus diisi"),
});

type AttendanceFormValues = z.infer<typeof attendanceSchema>;

interface AttendanceFormProps {
  onSubmit: (values: AttendanceFormValues) => void;
  onOpenDefaultHours: () => void;
  defaultHours: { arrivalTime: string; departureTime: string };
}

const AttendanceForm = ({
  onSubmit,
  onOpenDefaultHours,
  defaultHours,
}: AttendanceFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AttendanceFormValues>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      tutorName: "",
      arrivalTime: "",
      departureTime: "",
    },
  });

  return (
    <Card className="px-5 py-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent-y100 flex-center size-6 rounded-full">
          <UserIcon className="size-3 text-accent-y500" />
        </div>
        <p className="b1-b text-neutral-n900">Isi Formulir Absensi</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-y-4 text-left">
          {/* Tutor Name */}
          <div className="grid gap-2">
            <Label className="b2-r">Nama Tutor</Label>
            <Input
              className="text-sm"
              {...register("tutorName")}
            />
            <ErrorMessage message={errors.tutorName?.message} />
          </div>

          {/* Teaching Date */}
          <div className="grid gap-2">
            <Label className="b2-r">Tanggal Mengajar</Label>
            <Controller
              control={control}
              name="teachingDate"
              render={({ field }) => (
                <DateInput
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full"
                />
              )}
            />
            <ErrorMessage message={errors.teachingDate?.message} />
          </div>

          <div className="grid grid-cols-2 gap-3 items-start">
            <div className="grid gap-2">
              <Label className="b2-r">Jam Datang</Label>
              <Input
                className="text-sm text-center"
                {...register("arrivalTime")}
              />
              <ErrorMessage message={errors.arrivalTime?.message} />
            </div>
            <div className="grid gap-2">
              <Label className="b2-r">Jam Pulang</Label>
              <Input
                className="text-sm text-center"
                {...register("departureTime")}
              />
              <ErrorMessage message={errors.departureTime?.message} />
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={onOpenDefaultHours}
              className="text-primary font-semibold"
            >
              Atur Default
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full font-bold h-11">
          Kirim Absen
        </Button>
      </form>
    </Card>
  );
};

export default AttendanceForm;
