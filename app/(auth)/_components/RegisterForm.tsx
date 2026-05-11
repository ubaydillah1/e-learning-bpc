"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { RegisterInput, registerSchema } from "../_form/register";
import StepperHeader from "./StepperHeader";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";
import RegisterStep4 from "./RegisterStep4";
import RegisterStep5 from "./RegisterStep5";
import BottomStepper from "./BottomStepper";
import { Card } from "@/components/ui/card";

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const stepFields: Record<number, (keyof RegisterInput)[]> = {
    1: [
      "fullName",
      "nickname",
      "birthPlace",
      "birthDate",
      "gender",
      "religion",
      "address",
    ],
    2: ["phone", "email", "childOrder", "school", "grade"],
    3: ["branch"],
    4: ["parentName", "parentPhone"],
    5: ["token"],
  };

  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (!valid) return;
    setStep((s) => Math.min(s + 1, 5));
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit = (data: RegisterInput) => {
    console.log("REGISTER DATA:", data);
  };

  return (
    <div className="mb-10 flex flex-col gap-4">
      <Card>
        <StepperHeader step={step} />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {step === 1 && (
            <RegisterStep1
              register={register}
              errors={errors}
              control={control}
            />
          )}
          {step === 2 && <RegisterStep2 register={register} errors={errors} />}
          {step === 3 && <RegisterStep3 register={register} errors={errors} />}
          {step === 4 && <RegisterStep4 register={register} errors={errors} />}
          {step === 5 && <RegisterStep5 register={register} errors={errors} />}

          <div className="flex gap-3 pt-2">
            {step > 1 && (
              <Button type="button" variant="outline" className="flex-1" onClick={back}>
                Kembali
              </Button>
            )}

            {step < 5 ? (
              <Button type="button" className="flex-1" onClick={next}>
                Selanjutnya
              </Button>
            ) : (
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                Kirim
              </Button>
            )}
          </div>
        </form>
      </Card>

      <BottomStepper step={step} />
    </div>
  );
};

export default RegisterForm;
