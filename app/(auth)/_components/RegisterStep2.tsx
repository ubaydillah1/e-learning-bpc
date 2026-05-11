import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "../../../components/ErrorMessage";
import { NativeSelect } from "@/components/ui/select-native";

interface RegisterStep2Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep2 = ({ register, errors }: RegisterStep2Props) => {
  return (
    <>
      <div className="grid gap-2">
        <Label className="b2-r">No HP</Label>
        <Input className="text-sm" type="number" {...register("phone")} />
        <ErrorMessage message={errors.phone?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Email</Label>
        <Input className="text-sm" {...register("email")} />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Anak ke-</Label>
        <Input type="number" className="text-sm" {...register("childOrder")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Asal Sekolah</Label>
        <Input className="text-sm" {...register("school")} />
        <ErrorMessage message={errors.school?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Kelas</Label>
        <NativeSelect
          className="text-sm"
          {...register("grade")}
          defaultValue=""
          options={[
            "1 SD",
            "2 SD",
            "3 SD",
            "4 SD",
            "5 SD",
            "6 SD",
            "7 SMP",
            "8 SMP",
            "9 SMP",
            "10 SMA",
            "11 SMA",
            "12 SMA",
            "Alumni",
          ]}
          placeholder="Pilih kelas"
        />
        <ErrorMessage message={errors.grade?.message} />
      </div>
    </>
  );
};

export default RegisterStep2;
