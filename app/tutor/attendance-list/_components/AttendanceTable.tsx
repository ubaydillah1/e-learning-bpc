"use client";

import { EyeIcon } from "@/public/assets/icons";

interface AttendanceTableProps {
  type: "PERMANENT" | "FREELANCE";
  data: any[];
}

const AttendanceTable = ({ type, data }: AttendanceTableProps) => {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center pt-20 text-neutral-n400">
        <p className="b2-r">Tidak ada data mengajar bulan ini</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-neutral-n200">
      <table className="w-full text-sm">
        <thead className="bg-[#E9EEF5] text-neutral-n500">
          <tr>
            <th className="py-3 px-4 font-normal text-left">No</th>
            <th className="py-3 px-2 font-normal text-left">Tanggal</th>
            {type === "PERMANENT" ? (
              <>
                <th className="py-3 px-2 font-normal text-center">Datang</th>
                <th className="py-3 px-2 font-normal text-center">Pulang</th>
              </>
            ) : (
              <>
                <th className="py-3 px-2 font-normal text-center">Kelas</th>
                <th className="py-3 px-2 font-normal text-center">Sesi</th>
                <th className="py-3 px-2 font-normal text-center">Detail</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-n100">
          {data.map((item, idx) => (
            <tr key={idx} className="text-neutral-n700">
              <td className="py-4 px-4">{item.no}</td>
              <td className="py-4 px-2 whitespace-nowrap">{item.date}</td>
              {type === "PERMANENT" ? (
                <>
                  <td className="py-4 px-2 text-center">{item.arrival}</td>
                  <td className="py-4 px-2 text-center">{item.departure}</td>
                </>
              ) : (
                <>
                  <td className="py-4 px-2 text-center">{item.grade}</td>
                  <td className="py-4 px-2 text-center">{item.session}</td>
                  <td className="py-4 px-2 text-center">
                    <button className="text-neutral-n500 hover:text-primary-p500 transition-colors">
                      <EyeIcon className="size-5 mx-auto" />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
