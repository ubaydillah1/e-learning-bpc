import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SuccesfullyRegisterPage = () => {
  return (
    <div className="h-screen flex-center">
      <Card className="w-full">
        <div className="flex gap-3">
          <div className="flex-center size-6 bg-accent-g100 rounded-full p-1">
            <CheckCircle className="text-accent-g500 w-full" />
          </div>
          <h1 className="b1-b">Akunmu Berhasil Dibuat!</h1>
        </div>
        <p>Silakan login untuk mengakses layanan pembelajaran</p>
        <Image
          src="/assets/illustrations/illu 6.png"
          alt="illu-6"
          width={280}
          height={280}
          className="mx-auto"
        />
        <Link href="/login">
          <Button className="w-full">Login</Button>
        </Link>
      </Card>
    </div>
  );
};

export default SuccesfullyRegisterPage;
