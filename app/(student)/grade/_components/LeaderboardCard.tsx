import { Button } from "@/components/ui/button";
import { EyeIcon } from "@/public/assets/icons";
import Image from "next/image";
import Link from "next/link";

const LeaderboardCard = () => {
  return (
    <div className="bg-white rounded-[12px] p-4 space-y-6">
      <div className="space-y-1">
        <h3 className="b1-b">Leaderboard TO TKA 6 - Kelas 9</h3>
        <p className="b3-r">BPC Koja</p>
      </div>

      <div className="flex justify-between items-center pb-5 pt-3">
        <div className="flex items-center gap-2 flex-col relative top-7">
          <div className="relative flex-1">
            <div className="flex-center rounded-full size-7 bg-accent-r500 text-white font-semibold left-1/2 -translate-x-1/2 absolute -top-5">
              3
            </div>
            <div className="size-20 bg-accent-r500 rounded-full mx-auto flex-center p-1 relative">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <Image
                  src={"/assets/images/profile-default.png"}
                  alt="profile-image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="b2-b">Rina Ayu</h3>
            <p className="b2-r">Rerata: 80.1</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col">
          <div className="relative flex-1">
            <div className="flex-center rounded-full size-7 bg-accent-y500 text-white font-semibold left-1/2 -translate-x-1/2 absolute -top-5">
              1
            </div>
            <div className="size-20 bg-accent-y500 rounded-full mx-auto flex-center p-1 relative">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <Image
                  src={"/assets/images/profile-default.png"}
                  alt="profile-image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="b2-b">Rina Ayu</h3>
            <p className="b2-r">Rerata: 80.1</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-col relative top-4">
          <div className="relative flex-1">
            <div className="flex-center rounded-full size-7 bg-accent-b300 text-white font-semibold left-1/2 -translate-x-1/2 absolute -top-5">
              2
            </div>
            <div className="size-20 bg-accent-b300 rounded-full mx-auto flex-center p-1 relative">
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <Image
                  src={"/assets/images/profile-default.png"}
                  alt="profile-image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="b2-b">Rina Ayu</h3>
            <p className="b2-r">Rerata: 80.1</p>
          </div>
        </div>
      </div>

      <Link href="/grade/leaderboard">
        <Button variant={"outline"}>
          Lihat Semua <EyeIcon />
        </Button>
      </Link>
    </div>
  );
};

export default LeaderboardCard;
