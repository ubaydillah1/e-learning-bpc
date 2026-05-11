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
import { NativeSelect } from "@/components/ui/select-native";

const freelanceSchema = z.object({
  tutorName: z.string().min(1, "Nama tutor harus diisi"),
  teachingDate: z.date({
    message: "Tanggal mengajar harus diisi",
  }),
  subject: z.string().min(1, "Mata pelajaran harus diisi"),
  grade: z.string().min(1, "Kelas harus diisi"),
  session: z.string().min(1, "Sesi harus diisi"),
  material: z.string().min(1, "Materi harus diisi"),
});

type FreelanceFormValues = z.infer<typeof freelanceSchema>;

interface FreelanceAttendanceFormProps {
  onSubmit: (values: FreelanceFormValues) => void;
}

const FreelanceAttendanceForm = ({
  onSubmit,
}: FreelanceAttendanceFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FreelanceFormValues>({
    resolver: zodResolver(freelanceSchema),
    mode: "onChange",
    defaultValues: {
      tutorName: "",
      subject: "",
      grade: "",
      session: "",
      material: "",
    },
  });

  return (
    <Card className="px-5 py-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent-y100 flex-center size-6 rounded-full">
          <UserIcon className="size-3 text-accent-y500" />
        </div>
        <p className="b1-b text-neutral-n900">Absensi Tutor Freelance</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <div className="space-y-4 text-left">
          {/* Tutor Name */}
          <div className="grid gap-2">
            <Label className="b2-r">Nama Tutor</Label>
            <Input
              className="text-sm"
              {...register("tutorName")}
              placeholder=""
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

          {/* Subject */}
          <div className="grid gap-2">
            <Label className="b2-r">Mata Pelajaran</Label>
            <NativeSelect
              className="text-sm"
              {...register("subject")}
              options={[
                "Matematika",
                "B. Indonesia",
                "B. Inggris",
                "IPA",
                "IPS",
                "Fisika",
                "Kimia",
                "Biologi",
              ]}
              placeholder=""
            />
            <ErrorMessage message={errors.subject?.message} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Grade */}
            <div className="grid gap-2">
              <Label className="b2-r">Kelas</Label>
              <NativeSelect
                className="text-sm"
                {...register("grade")}
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                ]}
                placeholder=""
              />
              <ErrorMessage message={errors.grade?.message} />
            </div>

            {/* Session */}
            <div className="grid gap-2">
              <Label className="b2-r">Sesi</Label>
              <NativeSelect
                className="text-sm"
                {...register("session")}
                options={[
                  "1 (10.00 - 11.30)",
                  "2 (13.00 - 14.30)",
                  "3 (15.30 - 17.00)",
                  "4 (18.30 - 20.00)",
                ]}
                placeholder=""
              />
              <ErrorMessage message={errors.session?.message} />
            </div>
          </div>

          {/* Material */}
          <div className="grid gap-2">
            <Label className="b2-r">Materi</Label>
            <Input
              className="text-sm"
              {...register("material")}
              placeholder=""
            />
            <ErrorMessage message={errors.material?.message} />
          </div>
        </div>

        <Button type="submit" className="w-full font-bold h-11 mt-2">
          Kirim Absen
        </Button>
      </form>
    </Card>
  );
};

export default FreelanceAttendanceForm;
