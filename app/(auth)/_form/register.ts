import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  nickname: z.string().min(1, "Nama panggilan wajib diisi"),
  birthPlace: z.string().min(1, "Wajib diisi"),
  birthDate: z.string({ message: "Wajib diisi" }).min(1, "Wajib diisi"),
  gender: z.string().min(1, "Wajib diisi"),
  religion: z.string().min(1, "Wajib diisi"),
  address: z.string().min(1, "Alamat wajib diisi"),

  phone: z.string().min(10, "No HP tidak valid"),
  email: z.email("Email tidak valid"),
  childOrder: z.string().optional(),
  school: z.string().optional(),
  grade: z.string().optional(),

  branch: z.string().min(1, "Cabang bimbel wajib diisi"),
  source: z.string().optional(),
  weakness: z.string().optional(),
  lessonDay: z.string().optional(),
  lessonSession: z.string().optional(),

  parentName: z.string().min(1, "Nama orang tua wajib diisi"),
  parentPhone: z.string().min(10, "No HP tidak valid"),
  parentJob: z.string().optional(),
  parentAddress: z.string().optional(),

  token: z.string().min(1, "Token wajib diisi"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
