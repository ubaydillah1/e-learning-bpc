"use client";

import BaseDialog from "@/components/dialog/BaseDialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon } from "@/public/assets/icons";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormInput, loginInputSchema } from "../_form/login";
import ErrorMessage from "../../../components/ErrorMessage";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username" className="b2-r">
            Username
          </Label>
          <Input
            id="username"
            type="username"
            placeholder="john due"
            className="text-sm"
            {...register("username")}
          />
          {errors.username && (
            <ErrorMessage message={errors.username?.message} />
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="b2-r">
              Password
            </Label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="text-sm"
              placeholder="********"
              {...register("password")}
            />

            <div
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <EyeIcon className="text-neutral-n700 size-4" />
            </div>
          </div>
          {errors.password && (
            <ErrorMessage message={errors.password?.message} />
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <Field orientation="horizontal">
            <Checkbox id="toggle-checkbox" name="toggle-checkbox" />
            <FieldLabel htmlFor="toggle-checkbox" className="b3-r">
              Ingat saya
            </FieldLabel>
          </Field>
        </div>

        <div className="flex flex-col gap-4 text-end">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Masuk
          </Button>

          <div
            className="text-sm text-primary cursor-pointer"
            onClick={() => setIsOpenDialog(true)}
          >
            Lupa Password?
          </div>

          <BaseDialog
            imagePath="/assets/illustrations/illu 9.png"
            title="Yuk Hubungi Tutor!"
            description="Kamu dapat menghubungi tutor jika lupa passwordmu"
            isOpen={isOpenDialog}
            setIsOpen={setIsOpenDialog}
            footer={
              <>
                <Button
                  variant={"outline"}
                  className="flex-1"
                  onClick={() => setIsOpenDialog(false)}
                >
                  Kembali
                </Button>
                <Button className="flex-1">Hubungi Tutor</Button>
              </>
            }
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
