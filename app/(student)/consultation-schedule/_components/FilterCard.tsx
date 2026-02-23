import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select-native";

const FilterCard = () => {
  return (
    <div className="bg-white p-4 rounded-[12px] space-y-4">
      <div className="flex gap-4">
        <div className="grid gap-2 flex-1">
          <label htmlFor="date">Tanggal</label>
          <Input type="date" id="date" className="text-sm" />
        </div>
        <div className="grid gap-2 flex-1">
          <label htmlFor="date">Sesi</label>
          <NativeSelect
            className="text-sm"
            defaultValue=""
            options={["Laki-laki", "Perempuan"]}
            placeholder=""
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="date">Mata Pelajaran</label>
        <NativeSelect
          className="text-sm"
          defaultValue=""
          options={["Laki-laki", "Perempuan"]}
          placeholder="Semua mata pelajaran"
        />
      </div>
    </div>
  );
};

export default FilterCard;
