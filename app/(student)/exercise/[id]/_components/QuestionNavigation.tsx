import { ChevronLeftIcon, ChevronRightIcon } from "@/public/assets/icons";
import { Button } from "@/components/ui/button";

interface QuestionNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  isFirst: boolean;
  isLast: boolean;
  canFinish: boolean;
}

const QuestionNavigation = ({
  onPrev,
  onNext,
  onFinish,
  isFirst,
  isLast,
  canFinish,
}: QuestionNavigationProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-n200 px-5 py-4 flex items-center justify-between z-50 max-w-[500px] mx-auto">
      {!isFirst ? (
        <button
          onClick={onPrev}
          className="p-2 rounded-lg transition-colors text-neutral-n900 hover:bg-neutral-n100"
        >
          <ChevronLeftIcon className="size-6" />
        </button>
      ) : (
        <div className="size-10" />
      )}

      <Button
        onClick={onFinish}
        disabled={!canFinish}
        className={`w-[200px] h-[44px] rounded-[10px] b2-b ${
          canFinish
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-primary-p200 text-white cursor-not-allowed opacity-50"
        }`}
      >
        Selesai Latihan
      </Button>

      {!isLast ? (
        <button
          onClick={onNext}
          className="p-2 rounded-lg transition-colors text-neutral-n900 hover:bg-neutral-n100"
        >
          <ChevronRightIcon className="size-6" />
        </button>
      ) : (
        <div className="size-10" />
      )}
    </footer>
  );
};

export default QuestionNavigation;
