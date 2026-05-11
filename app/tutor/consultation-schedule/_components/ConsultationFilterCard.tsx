"use client";

import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select-native";

const ConsultationFilterCard = () => {
  return (
    <div className="bg-white p-4 rounded-[12px] space-y-4 border border-neutral-n100">
      <div className="flex gap-4">
        <div className="grid gap-1.5 flex-1">
          <label htmlFor="date" className="b3-b text-neutral-n900">
            Tanggal
          </label>
          <Input type="date" id="date" className="text-sm h-10" />
        </div>
        <div className="grid gap-1.5 flex-1">
          <label htmlFor="session" className="b3-b text-neutral-n900">
            Sesi
          </label>
          <NativeSelect
            id="session"
            className="text-sm h-10"
            options={[
              { value: "1", label: "1 (13.00-14.30)" },
              { value: "2", label: "2 (14.30-16.00)" },
              { value: "3", label: "3 (16.00-17.30)" },
              { value: "4", label: "4 (16.30-18.00)" },
            ]}
            placeholder="Pilih sesi"
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="subject" className="b3-b text-neutral-n900">
          Mata Pelajaran
        </label>
        <NativeSelect
          id="subject"
          className="text-sm h-10"
          options={[
            "Semua mata pelajaran",
            "Matematika",
            "B. Inggris",
            "Ilmu Pengetahuan Alam",
            "Ilmu Pengetahuan Sosial",
          ]}
          placeholder="Semua mata pelajaran"
        />
      </div>
    </div>
  );
};

export default ConsultationFilterCard;
