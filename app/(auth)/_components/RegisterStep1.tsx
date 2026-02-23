import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select-native";
import { Label } from "@/components/ui/label";
import {
  UseFormRegister,
  FieldErrors,
  Control,
  Controller,
} from "react-hook-form";
import { format } from "date-fns";
import { RegisterInput } from "../_form/register";
import ErrorMessage from "../../../components/ErrorMessage";

interface RegisterStep1Props {
  register: UseFormRegister<RegisterInput>;
  errors: FieldErrors<RegisterInput>;
  control: Control<RegisterInput>;
}

const RegisterStep1 = ({ register, errors, control }: RegisterStep1Props) => {
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

      <div className="grid grid-cols-2 gap-3 items-start">
        <div className="grid gap-2">
          <Label className="b2-r">Tempat Lahir</Label>
          <Input className="text-sm" {...register("birthPlace")} />
          <ErrorMessage message={errors.birthPlace?.message} />
        </div>

        <div className="grid gap-2">
          <Label className="b2-r">Tanggal Lahir</Label>
          <Controller
            control={control}
            name="birthDate"
            render={({ field }) => (
              <Input
                type="date"
                className="text-sm"
                value={field.value ? new Date(field.value) : undefined}
                onChange={(date: Date | undefined) =>
                  field.onChange(date ? format(date, "yyyy-MM-dd") : "")
                }
              />
            )}
          />
          <ErrorMessage message={errors.birthDate?.message} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 items-start">
        <div className="grid gap-2">
          <Label className="b2-r">Kelamin</Label>
          <NativeSelect
            className="text-sm"
            {...register("gender")}
            defaultValue=""
            options={["Laki-laki", "Perempuan"]}
            placeholder=""
          />
          <ErrorMessage message={errors.gender?.message} />
        </div>

        <div className="grid gap-2">
          <Label className="b2-r">Agama</Label>
          <NativeSelect
            className="text-sm"
            {...register("religion")}
            defaultValue=""
            options={[
              "Islam",
              "Kristen Protestan",
              "Kristen Katolik",
              "Hindu",
              "Buddha",
              "Khonghucu",
            ]}
            placeholder=""
          />
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
