import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExerciseItemProps {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  variant?: "default" | "single";
}

const ExerciseItem = ({
  id,
  title,
  subtitle,
  progress,
  variant = "default",
}: ExerciseItemProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="b2-b text-neutral-n900">{title}</h4>
        <p
          className={`b3-r text-neutral-n500 ${
            variant === "default" ? "uppercase" : ""
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-neutral-n200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="b3-r text-neutral-n700">{progress}%</span>
      </div>

      {variant === "single" ? (
        <Link href={`/exercise/${id}/practice`}>
          <Button
            variant="outline"
            className="w-full text-primary border-primary hover:bg-primary/5 rounded-[10px] h-[37px] b2-b"
          >
            Start
          </Button>
        </Link>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <Link href={`/exercise/${id}/practice`}>
            <Button
              variant="outline"
              className="w-full text-primary border-primary hover:bg-primary/5 rounded-[10px] h-[37px]"
            >
              Ulangi
            </Button>
          </Link>
          <Link href={`/exercise/${id}/discussion`}>
            <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-[10px] h-[37px]">
              Pembahasan
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ExerciseItem;
