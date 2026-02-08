import z from "zod";

export const loginInputSchema = z.object({
  username: z
    .string()
    .min(1, "Username tidak boleh kosong")
    .min(3, "Username minimal 3 karakter")
    .max(20, "Username maksimal 20 karakter"),
  password: z
    .string()
    .min(1, "Password tidak boleh kosong")
    .min(8, "Password minimal 8 karakter"),
});

export type LoginFormInput = z.infer<typeof loginInputSchema>;
