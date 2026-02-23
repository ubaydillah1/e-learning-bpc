import { GridIcon } from "@/public/assets/icons";

interface QuestionHeaderProps {
  title: string;
  subtitle: string;
  onShowQuestionList: () => void;
}

const QuestionHeader = ({
  title,
  subtitle,
  onShowQuestionList,
}: QuestionHeaderProps) => {
  return (
    <header className="bg-white rounded-lg p-5 flex justify-between items-center shadow-xs">
      <div className="space-y-1">
        <h2 className="b1-b text-neutral-n900">{title}</h2>
        <p className="b3-r text-neutral-n500">{subtitle}</p>
      </div>
      <button
        onClick={onShowQuestionList}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-n200 b3-r text-neutral-n900 hover:bg-neutral-n100 transition-colors"
      >
        Daftar Soal
        <GridIcon className="size-4" />
      </button>
    </header>
  );
};

export default QuestionHeader;
