import { ThumbsUpIcon } from "@/public/assets/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FeedbackBanner = () => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-accent-g100 rounded-full">
          <ThumbsUpIcon className="w-5 h-5 text-accent-g500" />
        </div>
        <h3 className="b1-b text-neutral-n900">Kritik dan saran</h3>
      </div>
      <p className="b3-r text-neutral-n700">
        Berikan kritik dan saranmu agar BPC menjadi lebih baik!
      </p>
      <Link href="/feedback" className="block w-full">
        <Button className="w-full bg-primary-p500 hover:bg-primary-p400 text-white py-6 rounded-xl b2-b">
          Isi Kritik dan Saran
        </Button>
      </Link>
    </div>
  );
};
