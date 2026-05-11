import { CalendarIcon, ChevronRightIcon } from "@/public/assets/icons";
import Link from "next/link";

const InformationAcademicCTA = () => {
  return (
    <div className="py-[10px] px-5">
      <Link
        href="/academic-information"
        className="flex items-center justify-between px-4 py-3 bg-primary-p100 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <CalendarIcon className="text-primary size-4" />
          <div>
            <p>Informasi Akademik</p>
            <div></div>
          </div>
        </div>
        <ChevronRightIcon className="text-primary size-5" />
      </Link>
    </div>
  );
};

export default InformationAcademicCTA;
