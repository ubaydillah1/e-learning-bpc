"use client";

import PageHeader from "@/components/PageHeader";
import FeedbackInfo from "./_components/FeedbackInfo";
import FeedbackForm from "./_components/FeedbackForm";

const FeedbackPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100">
      <PageHeader title="Kritik dan Saran" />

      <main className="flex-1 px-5 py-5 space-y-6">
        <FeedbackInfo />
        <FeedbackForm />
      </main>
    </div>
  );
};

export default FeedbackPage;
