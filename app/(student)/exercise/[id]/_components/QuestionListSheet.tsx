import { XIcon } from "@/public/assets/icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QuestionListSheetProps {
  isOpen: boolean;
  onClose: () => void;
  totalQuestions: number;
  currentNumber: number;
  answeredNumbers: number[];
  onSelectQuestion: (num: number) => void;
}

const QuestionListSheet = ({
  isOpen,
  onClose,
  totalQuestions,
  currentNumber,
  answeredNumbers,
  onSelectQuestion,
}: QuestionListSheetProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[348px] p-6" showCloseButton={false}>
        <DialogHeader className="flex flex-row justify-between items-center space-y-0">
          <DialogTitle className="b1-b text-neutral-n900">
            Daftar Soal
          </DialogTitle>
          <button
            onClick={onClose}
            className="hover:bg-neutral-n100 p-1 rounded-full transition-colors"
          >
            <XIcon className="size-6 text-neutral-n900" />
          </button>
        </DialogHeader>

        <div className="grid grid-cols-6 gap-3 mx-auto w-fit">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map(
            (num) => {
              const isCurrent = num === currentNumber;
              const isAnswered = answeredNumbers.includes(num);

              return (
                <button
                  key={num}
                  onClick={() => {
                    onSelectQuestion(num);
                    onClose();
                  }}
                  className={`w-10 h-10 rounded-lg flex flex-center b3-b border transition-all ${
                    isCurrent
                      ? "bg-primary border-primary text-white"
                      : isAnswered
                        ? "bg-neutral-n800 border-neutral-n800 text-white"
                        : "bg-white border-neutral-n200 text-neutral-n700 hover:border-neutral-n400"
                  }`}
                >
                  {num}
                </button>
              );
            },
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionListSheet;
