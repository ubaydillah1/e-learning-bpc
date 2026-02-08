import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "./ErrorMessage";

interface RegisterStep4Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep4 = ({ register, errors }: RegisterStep4Props) => {
  return (
    <>
      <div className="grid gap-2">
        <Label className="b2-r">Nama Orang Tua/Wali</Label>
        <Input className="text-sm" {...register("parentName")} />
        <ErrorMessage message={errors.parentName?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">No HP</Label>
        <Input className="text-sm" {...register("parentPhone")} />
        <ErrorMessage message={errors.parentPhone?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Pekerjaan</Label>
        <Input className="text-sm" {...register("parentJob")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Alamat</Label>
        <Input className="text-sm" {...register("parentAddress")} />
      </div>
    </>
  );
};

export default RegisterStep4;
