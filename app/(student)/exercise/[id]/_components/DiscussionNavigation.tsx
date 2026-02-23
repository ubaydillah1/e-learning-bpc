import { Button } from "@/components/ui/button";

interface DiscussionNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onFinish: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const DiscussionNavigation = ({
  onPrev,
  onNext,
  onFinish,
  isFirst,
  isLast,
}: DiscussionNavigationProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-n200 px-5 py-4 flex gap-3 z-50 max-w-[500px] mx-auto">
      <Button
        variant="outline"
        disabled={isFirst}
        className="flex-1 border-primary text-primary hover:bg-primary/5 rounded-[8px] h-11 b2-b disabled:opacity-30"
        onClick={onPrev}
      >
        Sebelumnya
      </Button>

      {isLast ? (
        <Button
          className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-[8px] h-11 b2-b"
          onClick={onFinish}
        >
          Selesai
        </Button>
      ) : (
        <Button
          className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-[8px] h-11 b2-b"
          onClick={onNext}
        >
          Selanjutnya
        </Button>
      )}
    </footer>
  );
};

export default DiscussionNavigation;
