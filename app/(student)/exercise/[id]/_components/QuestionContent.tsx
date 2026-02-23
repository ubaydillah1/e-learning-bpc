"use client";

interface Option {
  id: string;
  label: string;
}

interface QuestionContentProps {
  number: number;
  question: string;
  options: Option[];
  selectedOption?: string;
  onSelectOption: (id: string) => void;
}

const QuestionContent = ({
  number,
  question,
  options,
  selectedOption,
  onSelectOption,
}: QuestionContentProps) => {
  return (
    <div className="bg-white rounded-lg p-5 space-y-6">
      <div className="inline-block px-3 py-1 bg-neutral-n100 rounded-[4px] b4-b text-neutral-n700">
        Nomor {number}
      </div>

      <p className="b2-r text-neutral-n900 leading-relaxed">{question}</p>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg border transition-all text-left ${
              selectedOption === option.id
                ? "bg-[#FFF2E0] border-primary"
                : "bg-white border-neutral-n200 hover:border-neutral-n300"
            }`}
          >
            <div
              className={`size-5 rounded-full border-2 flex flex-center transition-colors ${
                selectedOption === option.id
                  ? "border-primary"
                  : "border-neutral-n300"
              }`}
            >
              {selectedOption === option.id && (
                <div className="size-2.5 rounded-full bg-primary" />
              )}
            </div>
            <span className={`b2-b text-neutral-n900`}>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionContent;
