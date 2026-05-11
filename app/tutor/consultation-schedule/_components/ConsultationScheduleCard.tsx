"use client";

interface ConsultationScheduleCardProps {
  date: string;
  session: string;
  time: string;
  subject: string;
  tutor: string;
  students: string[];
  materials: string[];
}

const ConsultationScheduleCard = ({
  date,
  session,
  time,
  subject,
  tutor,
  students,
  materials,
}: ConsultationScheduleCardProps) => {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden border border-neutral-n200">
      <div className="space-y-1 p-4 bg-linear-to-r from-[#FFF2E0] to-[#FFB966]">
        <p className="b3-r text-neutral-n800">{date}</p>
        <h2 className="b1-b text-neutral-n900 tracking-tight">
          Sesi {session} ({time})
        </h2>
        <p className="b2-b text-primary-p500">{subject}</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="b2-b text-neutral-n900">Tutor:</p>
          <p className="b2-r text-neutral-n700">{tutor}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h4 className="b2-b text-neutral-n900">Daftar siswa:</h4>
            <ul className="space-y-1">
              {students.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 b2-r text-neutral-n700"
                >
                  <div className="size-1 rounded-full bg-neutral-n700 mt-1.5 shrink-0" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <h4 className="b2-b text-neutral-n900">Materi:</h4>
            <ul className="space-y-1">
              {materials.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 b2-r text-neutral-n700"
                >
                  <div className="size-1 rounded-full bg-neutral-n700 mt-1.5 shrink-0" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationScheduleCard;
