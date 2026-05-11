"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ClockIcon } from "@/public/assets/icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ErrorMessage from "@/components/ErrorMessage";
import { NativeSelect } from "@/components/ui/select-native";
import { TIME_OPTIONS } from "./AttendanceForm";

const workingHoursSchema = z.object({
  arrivalTime: z.string().min(1, "Jam datang harus diisi"),
  departureTime: z.string().min(1, "Jam pulang harus diisi"),
});

type WorkingHoursFormValues = z.infer<typeof workingHoursSchema>;

interface WorkingHoursModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onSave: (values: WorkingHoursFormValues) => void;
  defaultValues?: WorkingHoursFormValues;
}

const WorkingHoursModal = ({
  isOpen,
  setIsOpen,
  onSave,
  defaultValues,
}: WorkingHoursModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkingHoursFormValues>({
    resolver: zodResolver(workingHoursSchema),
    mode: "onChange",
    defaultValues: defaultValues || {
      arrivalTime: "",
      departureTime: "",
    },
  });

  const onSubmit = (data: WorkingHoursFormValues) => {
    onSave(data);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[340px] px-5 py-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-accent-y100 p-1.5 rounded-full">
            <ClockIcon className="size-4 text-accent-y500" />
          </div>
          <DialogTitle className="b1-b text-neutral-n900">
            Default Jam Kerja
          </DialogTitle>
        </div>
        <DialogDescription className="sr-only">
          Atur jam datang dan pulang default untuk memudahkan absensi.
        </DialogDescription>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2 text-left">
              <Label className="b2-r">Jam Datang</Label>
              <NativeSelect
                className="text-sm h-11"
                {...register("arrivalTime")}
                options={TIME_OPTIONS}
                placeholder="Pilih jam"
              />
              <ErrorMessage message={errors.arrivalTime?.message} />
            </div>

            <div className="grid gap-2 text-left">
              <Label className="b2-r">Jam Pulang</Label>
              <NativeSelect
                className="text-sm h-11"
                {...register("departureTime")}
                options={TIME_OPTIONS}
                placeholder="Pilih jam"
              />
              <ErrorMessage message={errors.departureTime?.message} />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 h-11"
            >
              Kembali
            </Button>
            <Button type="submit" className="flex-1 h-11">
              Simpan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WorkingHoursModal;
