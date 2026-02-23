"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionNavigation from "./QuestionNavigation";
import QuestionListSheet from "./QuestionListSheet";
import ConfirmationDialog from "./ConfirmationDialog";
import ExitConfirmationDialog from "./ExitConfirmationDialog";
import DiscussionView from "./DiscussionView";
import DiscussionNavigation from "./DiscussionNavigation";
import { ArrowLeftIcon } from "@/public/assets/icons";

const mockQuestions = [
  {
    id: 1,
    question:
      "Harga 3 buah buku dan 2 buah penggaris Rp18.000,00. Jika harga sebuah buku Rp1.000,00 lebih mahal dari sebuah penggaris, harga 2 buah buku dan 5 buah penggaris adalah",
    options: [
      { id: "a", label: "Rp19.000" },
      { id: "b", label: "Rp23.000" },
      { id: "c", label: "Rp25.000" },
      { id: "d", label: "Rp27.000" },
      { id: "e", label: "Rp30.000" },
    ],
    correctAnswer: "Rp23.000",
    explanation: [
      { id: 1, text: "Misalkan:\nHarga buku = x\nHarga penggaris = y" },
      { id: 2, text: "Diketahui:\n3x + 2y = 18.000\nx = y + 1.000" },
      {
        id: 3,
        text: "Substitusi persamaan 2 ke persamaan 1:\n3(y+1.000) + 2y = 18.000\n3y + 3.000 + 2y = 18.000\n5y = 15.000\ny = 3.000",
      },
      {
        id: 4,
        text: "Cari nilai x:\nx = y + 1.000\nx = 3.000 + 1.000 = 4.000",
      },
      {
        id: 5,
        text: "Hitung harga 2 buku dan 5 penggaris:\n= 2x + 5y\n= 2(4.000) + 5(3.000)\n= 8.000 + 15.000\n= 23.000",
      },
    ],
  },
  {
    id: 2,
    question: "Hasil dari (2x + 3)(x - 5) adalah...",
    options: [
      { id: "a", label: "2x² - 7x - 15" },
      { id: "b", label: "2x² + 7x - 15" },
      { id: "c", label: "2x² - 13x - 15" },
      { id: "d", label: "2x² + 13x - 15" },
      { id: "e", label: "2x² - 7x + 15" },
    ],
    correctAnswer: "2x² - 7x - 15",
    explanation: [
      { id: 1, text: "Gunakan perkalian pelangi:\n(2x + 3)(x - 5)" },
      { id: 2, text: "= 2x(x) + 2x(-5) + 3(x) + 3(-5)" },
      { id: 3, text: "= 2x² - 10x + 3x - 15" },
      { id: 4, text: "= 2x² - 7x - 15" },
    ],
  },
  {
    id: 3,
    question: "Jika f(x) = 3x - 2, maka nilai f(4) adalah...",
    options: [
      { id: "a", label: "8" },
      { id: "b", label: "10" },
      { id: "c", label: "12" },
      { id: "d", label: "14" },
      { id: "e", label: "16" },
    ],
    correctAnswer: "10",
    explanation: [
      { id: 1, text: "Substitusi x = 4 ke dalam fungsi f(x):" },
      { id: 2, text: "f(4) = 3(4) - 2" },
      { id: 3, text: "f(4) = 12 - 2" },
      { id: 4, text: "f(4) = 10" },
    ],
  },
];

interface ExerciseDetailClientProps {
  mode: "practice" | "discussion";
}

const ExerciseDetailClient = ({ mode }: ExerciseDetailClientProps) => {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [isDiscussionMode, setIsDiscussionMode] = useState(
    mode === "discussion",
  );

  const currentQuestion = mockQuestions[currentIdx] || mockQuestions[0];
  const isFirst = currentIdx === 0;
  const isLast = currentIdx === mockQuestions.length - 1;
  const answeredNumbers = Object.keys(answers).map(Number);
  const selectedOption = answers[currentQuestion.id];

  const handleSelectOption = (id: string) => {
    if (isDiscussionMode) return;
    setAnswers({ ...answers, [currentQuestion.id]: id });
  };

  const handleNext = () => {
    if (!isLast) setCurrentIdx(currentIdx + 1);
  };

  const handlePrev = () => {
    if (!isFirst) setCurrentIdx(currentIdx - 1);
  };

  const handleConfirmFinish = () => {
    setShowConfirm(false);
    setIsDiscussionMode(true);
    setCurrentIdx(0); // Start discussion from question 1
  };

  return (
    <div className="bg-neutral-n100 min-h-screen pb-24">
      <header className="sticky top-0 bg-white p-5 flex items-center gap-4 z-10 shadow-sm">
        <button onClick={() => setShowExitConfirm(true)}>
          <ArrowLeftIcon className="size-6 text-neutral-n900" />
        </button>
        <h1 className="b1-b">
          {isDiscussionMode ? "Pembahasan" : "Latihan Soal"}
        </h1>
      </header>

      <main className="p-5 space-y-4 max-w-[500px] mx-auto">
        <QuestionHeader
          title="Matematika"
          subtitle="Aljabar Linear"
          onShowQuestionList={() => setShowQuestionList(true)}
        />

        <QuestionContent
          number={currentIdx + 1}
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />

        {isDiscussionMode && (
          <DiscussionView
            userAnswer={
              currentQuestion.options.find((o) => o.id === selectedOption)
                ?.label || "-"
            }
            correctAnswer={currentQuestion.correctAnswer}
            isCorrect={
              currentQuestion.options.find((o) => o.id === selectedOption)
                ?.label === currentQuestion.correctAnswer
            }
            explanation={currentQuestion.explanation}
          />
        )}
      </main>

      {isDiscussionMode ? (
        <DiscussionNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          onFinish={() => router.push("/exercise")}
          isFirst={isFirst}
          isLast={isLast}
        />
      ) : (
        <QuestionNavigation
          onPrev={handlePrev}
          onNext={handleNext}
          onFinish={() => setShowConfirm(true)}
          isFirst={isFirst}
          isLast={isLast}
          canFinish={answeredNumbers.length === mockQuestions.length}
        />
      )}

      <QuestionListSheet
        isOpen={showQuestionList}
        onClose={() => setShowQuestionList(false)}
        totalQuestions={mockQuestions.length} // Actual total from mock data
        currentNumber={currentIdx + 1}
        answeredNumbers={answeredNumbers}
        onSelectQuestion={(num) => setCurrentIdx(num - 1)}
      />

      <ConfirmationDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmFinish}
      />

      <ExitConfirmationDialog
        isOpen={showExitConfirm}
        onClose={() => setShowExitConfirm(false)}
        onConfirm={() => router.push("/exercise")}
      />
    </div>
  );
};

export default ExerciseDetailClient;
