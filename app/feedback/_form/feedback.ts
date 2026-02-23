import { z } from "zod";

export const FeedbackFormSchema = z.object({
  name: z.string().optional(),
  suggestion: z.string().min(1, "Saran harus diisi"),
  criticism: z.string().min(1, "Kritik harus diisi"),
});

export type FeedbackFormSchemaType = z.infer<typeof FeedbackFormSchema>;
