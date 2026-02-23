const ScheduleCard = () => {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm border border-neutral-n200">
      <div className="space-y-1 p-4 bg-linear-to-r from-[#FFF2E0] to-[#FFB966]">
        <p className="b3-r text-neutral-n800">Rabu, 7 Januari 2026</p>
        <h2 className="b1-b text-neutral-n900 tracking-tight">
          Sesi 4 (16.30-18.00)
        </h2>
        <p className="b2-b text-primary">Matematika & B. Inggris</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="b2-b text-neutral-n900">Tutor:</p>
          <p className="b2-r text-neutral-n700">Kak Affan</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h4 className="b2-b text-neutral-n900">Daftar siswa:</h4>
            <ul>
              {[
                "Affandy (9A)",
                "Sandy (9B)",
                "Fadil (9C)",
                "Fanny (9E)",
                "Rendy (9F)",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 b2-r text-neutral-n700"
                >
                  <div className="size-1 rounded-full bg-neutral-n700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <h4 className="b2-b text-neutral-n900">Materi:</h4>
            <ul>
              {[
                "Kongruen",
                "Phytagoras",
                "Sudut",
                "Past tense",
                "Future tense",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 b2-r text-neutral-n700"
                >
                  <div className="size-1 rounded-full bg-neutral-n700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
