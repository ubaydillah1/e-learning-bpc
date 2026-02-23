"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ErrorMessage from "@/components/ErrorMessage";
import BaseDialog from "@/components/dialog/BaseDialog";
import { FeedbackFormSchema, FeedbackFormSchemaType } from "../_form/feedback";

const FeedbackForm = () => {
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormSchemaType>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
      name: "",
      suggestion: "",
      criticism: "",
    },
  });

  const onSubmit = async (data: FeedbackFormSchemaType) => {
    console.log("Feedback submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccessDialogOpen(true);
    reset();
  };

  return (
    <section className="bg-white p-5 rounded-lg mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="b2-r">
              Nama
            </Label>
            <span className="text-xs text-muted-foreground italic">
              Opsional
            </span>
          </div>
          <Input
            id="name"
            placeholder="Masukkan namamu"
            {...register("name")}
          />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="suggestion" className="b2-r">
            Saran untuk BPC
          </Label>
          <Textarea
            id="suggestion"
            placeholder="Tulis saranmu di sini..."
            {...register("suggestion")}
            className="min-h-[120px]"
          />
          {errors.suggestion && (
            <ErrorMessage message={errors.suggestion.message} />
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="criticism" className="b2-r">
            Kritik untuk BPC
          </Label>
          <Textarea
            id="criticism"
            placeholder="Tulis kritikmu di sini..."
            {...register("criticism")}
            className="min-h-[120px]"
          />
          {errors.criticism && (
            <ErrorMessage message={errors.criticism.message} />
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Mengirim..." : "Kirim"}
        </Button>
      </form>

      <BaseDialog
        title="Terima kasih!"
        description="Kami akan tetap mempertahankan dan meningkatkan kualitas bimbel BPC"
        imagePath="/assets/illustrations/Illu 2.png"
        isOpen={isSuccessDialogOpen}
        setIsOpen={setIsSuccessDialogOpen}
        footer={
          <Button
            className="w-full"
            onClick={() => setIsSuccessDialogOpen(false)}
          >
            Kembali
          </Button>
        }
      />
    </section>
  );
};

export default FeedbackForm;
