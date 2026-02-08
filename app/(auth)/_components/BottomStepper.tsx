import { cn } from "@/lib/utils";

interface BottomStepperProps {
  step: number;
}

const BottomStepper = ({ step }: BottomStepperProps) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      <div
        className={cn(
          "h-2 w-2 rounded-full transition-colors duration-300",
          step <= 3 ? "bg-primary" : "bg-gray-200",
        )}
      />
      <div
        className={cn(
          "h-2 w-2 rounded-full transition-colors duration-300",
          step === 4 ? "bg-primary" : "bg-gray-200",
        )}
      />
      <div
        className={cn(
          "h-2 w-2 rounded-full transition-colors duration-300",
          step === 5 ? "bg-primary" : "bg-gray-200",
        )}
      />
    </div>
  );
};

export default BottomStepper;
