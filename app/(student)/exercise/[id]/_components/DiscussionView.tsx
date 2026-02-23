"use client";

import { CheckCircleIcon, XCircleIcon } from "@/public/assets/icons";

interface Step {
  id: number;
  text: string | React.ReactNode;
}

interface DiscussionViewProps {
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: Step[];
}

const DiscussionView = ({
  userAnswer,
  correctAnswer,
  isCorrect,
  explanation,
}: DiscussionViewProps) => {
  return (
    <div className="space-y-4 pb-24">
      <div className="bg-white rounded-lg p-5 space-y-4">
        <div className="space-y-3">
          <p className="b3-r text-neutral-n500">Jawaban kamu</p>
          <div
            className={`flex items-center gap-3 p-3 rounded-lg border ${
              isCorrect
                ? "bg-[#C5F4C7] border-accent-g500 text-accent-g500"
                : "bg-[#FFD3D3] border-accent-r500 text-accent-r500"
            }`}
          >
            {isCorrect ? (
              <CheckCircleIcon className="size-5" />
            ) : (
              <XCircleIcon className="size-5" />
            )}
            <span className="b2-b">{userAnswer}</span>
          </div>
        </div>

        {!isCorrect && (
          <div className="space-y-3">
            <p className="b3-r text-neutral-n500">Jawaban benar</p>
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-[#C5F4C7] border-accent-g500 text-accent-g500">
              <CheckCircleIcon className="size-5" />
              <span className="b2-b">{correctAnswer}</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg p-5 space-y-5">
        <div className="inline-block px-3 py-1 bg-neutral-n100 rounded-[4px] b4-b text-neutral-n700">
          Pembahasan
        </div>

        <div className="space-y-6">
          {explanation.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex-none size-5 rounded-full bg-accent-y100 flex flex-center b4-b text-accent-y500">
                {step.id}
              </div>
              <div className="flex-1 b3-r text-neutral-n900 leading-relaxed pt-0.5">
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionView;
