import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "./ErrorMessage";

interface RegisterStep1Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep1 = ({ register, errors }: RegisterStep1Props) => {
  return (
    <>
      <div className="grid gap-2">
        <Label className="b2-r">Nama Lengkap</Label>
        <Input className="text-sm" {...register("fullName")} />
        <ErrorMessage message={errors.fullName?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Nama Panggilan</Label>
        <Input className="text-sm" {...register("nickname")} />
        <ErrorMessage message={errors.nickname?.message} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label className="b2-r">Tempat Lahir</Label>
          <Input className="text-sm" {...register("birthPlace")} />
          <ErrorMessage message={errors.birthPlace?.message} />
        </div>

        <div className="grid gap-2">
          <Label className="b2-r">Tanggal Lahir</Label>
          <Input type="date" className="text-sm" {...register("birthDate")} />
          <ErrorMessage message={errors.birthDate?.message} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label className="b2-r">Kelamin</Label>
          <Input className="text-sm" {...register("gender")} />
          <ErrorMessage message={errors.gender?.message} />
        </div>

        <div className="grid gap-2">
          <Label className="b2-r">Agama</Label>
          <Input className="text-sm" {...register("religion")} />
          <ErrorMessage message={errors.religion?.message} />
        </div>
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Alamat</Label>
        <Input className="text-sm" {...register("address")} />
        <ErrorMessage message={errors.address?.message} />
      </div>
    </>
  );
};

export default RegisterStep1;
