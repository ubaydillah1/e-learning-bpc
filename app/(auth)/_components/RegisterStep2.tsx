import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "./ErrorMessage";

interface RegisterStep2Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep2 = ({ register, errors }: RegisterStep2Props) => {
  return (
    <>
      <div className="grid gap-2">
        <Label className="b2-r">No HP</Label>
        <Input className="text-sm" {...register("phone")} />
        <ErrorMessage message={errors.phone?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Email</Label>
        <Input className="text-sm" {...register("email")} />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Anak ke-</Label>
        <Input className="text-sm" {...register("childOrder")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Asal Sekolah</Label>
        <Input className="text-sm" {...register("school")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Kelas</Label>
        <Input className="text-sm" {...register("grade")} />
      </div>
    </>
  );
};

export default RegisterStep2;
