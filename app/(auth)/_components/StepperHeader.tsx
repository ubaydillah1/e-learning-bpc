import { FileText, User, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperHeaderProps {
  step: number;
}

const StepperHeader = ({ step }: StepperHeaderProps) => {
  return (
    <div className="mb-4 space-y-4">
      {step < 4 ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-primary">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-blue-600">
              <FileText size={18} />
            </div>
            <h2 className="text-lg font-bold text-gray-900">Data Siswa</h2>
          </div>

          <div className="flex w-full items-center justify-between px-5">
            {["Data Pribadi 1", "Data Pribadi 2", "Info Tambahan"].map(
              (label, idx) => {
                const stepNum = idx + 1;
                const isActive = step >= stepNum;
                const isLast = idx === 2;

                return (
                  <div
                    key={stepNum}
                    className={cn("flex items-center", !isLast && "flex-1")}
                  >
                    <div className="relative flex flex-col items-center">
                      <div
                        className={cn(
                          "z-10 grid h-7 w-7 place-items-center rounded-full border-2 bg-white transition-colors duration-300",
                          isActive ? "border-accent-g500" : "border-gray-200",
                        )}
                      >
                        {isActive && (
                          <div className="h-3 w-3 rounded-full bg-accent-g500" />
                        )}
                      </div>
                      <span
                        className={cn(
                          "absolute top-8 w-32 text-center text-[10px] font-medium transition-colors duration-300",
                          isActive ? "text-accent-g500" : "text-gray-400",
                        )}
                      >
                        {label}
                      </span>
                    </div>

                    {!isLast && (
                      <div className="relative h-[2px] flex-1 bg-gray-200">
                        <div
                          className="absolute left-0 top-0 h-full bg-accent-g500 transition-all duration-300"
                          style={{
                            width: step > stepNum ? "100%" : "0%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </div>
      ) : step === 4 ? (
        <div className="flex items-center gap-4 text-primary">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-blue-600">
            <User size={18} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">
            Data Orang Tua/Wali
          </h2>
        </div>
      ) : (
        <div className="flex items-center gap-4 text-primary">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-blue-50 text-blue-600">
            <Hash size={18} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Token</h2>
        </div>
      )}
    </div>
  );
};

export default StepperHeader;
