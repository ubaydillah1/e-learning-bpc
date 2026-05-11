import { UserIcon } from "@/public/assets/icons";
import { NativeSelect } from "@/components/ui/select-native";

interface AttendanceFilterCardProps {
  month: string;
  selectedClass: string;
  setMonth: (value: string) => void;
  setSelectedClass: (value: string) => void;
}

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const classes = ["7", "8", "9", "10", "11", "12", "Gap Year"];

const AttendanceFilterCard = ({
  month,
  selectedClass,
  setMonth,
  setSelectedClass,
}: AttendanceFilterCardProps) => {
  return (
    <section className="bg-white p-5 rounded-2xl space-y-4">
      <div className="flex gap-3 items-center">
        <div className="bg-accent-y100 flex-center size-8 rounded-full">
          <UserIcon className="size-4.5 text-accent-y500" />
        </div>
        <p className="b1-b text-neutral-n900">Absensi Siswa</p>
      </div>

      <div className="space-y-2 px-1">
        <div className="flex items-center gap-2">
          <div className="flex w-20 justify-between items-center">
            <p className="b2-b text-neutral-n900">Bulan</p>
            <span className="b2-b text-neutral-n900">:</span>
          </div>
          <div className="flex-1">
            <NativeSelect
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              options={months}
              className="border-none shadow-none h-auto py-1 px-0 b2-r text-neutral-n900 bg-transparent focus:border-none focus:ring-0 [&+svg]:right-0"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex w-20 justify-between items-center">
            <p className="b2-b text-neutral-n900">Kelas</p>
            <span className="b2-b text-neutral-n900">:</span>
          </div>
          <div className="flex-1">
            <NativeSelect
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              options={classes}
              className="border-none shadow-none h-auto py-1 px-0 b2-r text-neutral-n900 bg-transparent focus:border-none focus:ring-0 [&+svg]:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceFilterCard;
