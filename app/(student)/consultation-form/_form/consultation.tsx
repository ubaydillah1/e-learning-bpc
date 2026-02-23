import z from "zod";

export const ConsultationFormSchema = z.object({
  date: z.date({
    message: "Wajib diisi",
  }),
  session: z.string({
    message: "Wajib diisi",
  }).min(1, "Wajib diisi"),
  subject: z.string({
    message: "Mata pelajaran wajib dipilih",
  }).min(1, "Mata pelajaran wajib dipilih"),
  material: z.string().min(1, "Materi konsultasi wajib diisi"),
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  className: z.string({
    message: "Kelas wajib dipilih",
  }).min(1, "Kelas wajib dipilih"),
  phoneNumber: z.string().min(1, "Nomor WhatsApp wajib diisi"),
});

export type ConsultationFormSchemaType = z.infer<typeof ConsultationFormSchema>;
