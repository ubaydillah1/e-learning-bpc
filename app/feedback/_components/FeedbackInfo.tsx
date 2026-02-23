import { ThumbsUpIcon } from "@/public/assets/icons";

const FeedbackInfo = () => {
  return (
    <section className="bg-white p-5 rounded-lg space-y-4">
      <div className="flex gap-3">
        <div className="bg-accent-g100 flex-center size-6 rounded-full">
          <ThumbsUpIcon className="size-3 text-accent-g500" />
        </div>
        <p className="b1-b text-neutral-n900">Kritik dan saran</p>
      </div>
      <div className="b2-r text-neutral-n700">
        Berikan kritik dan saranmu agar BPC menjadi lebih baik!
      </div>
    </section>
  );
};

export default FeedbackInfo;
