import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "../../../components/ErrorMessage";

interface RegisterStep5Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
}

const RegisterStep5 = ({ register, errors }: RegisterStep5Props) => {
  return (
    <>
      <div className="grid gap-2">
        <p className="b2-r text-left">Ketikkan token yang didapat dari tutor</p>
        <Input className="text-sm" {...register("token")} />
        <ErrorMessage message={errors.token?.message} />
      </div>
    </>
  );
};

export default RegisterStep5;
