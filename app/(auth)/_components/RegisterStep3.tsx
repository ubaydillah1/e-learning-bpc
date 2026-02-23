import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "../../../components/ErrorMessage";

interface RegisterStep3Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep3 = ({ register, errors }: RegisterStep3Props) => {
  return (
    <>
      <div className="grid gap-2">
        <Label className="b2-r">Cabang Bimbel</Label>
        <Input className="text-sm" {...register("branch")} />
        <ErrorMessage message={errors.branch?.message} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Dari mana tahu BPC</Label>
        <Input className="text-sm" {...register("source")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Kelemahan belajar</Label>
        <Input className="text-sm" {...register("weakness")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Hari Les</Label>
        <Input className="text-sm" {...register("lessonDay")} />
      </div>

      <div className="grid gap-2">
        <Label className="b2-r">Sesi Les</Label>
        <Input className="text-sm" {...register("lessonSession")} />
      </div>
    </>
  );
};

export default RegisterStep3;
