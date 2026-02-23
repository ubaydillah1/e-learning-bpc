import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="bg-white p-10 rounded-[12px] border border-neutral-n200 flex flex-center flex-col text-center space-y-4">
      <div className="relative w-full max-w-[280px] aspect-square">
        <Image
          src="/assets/illustrations/Illu 5.png"
          alt="Tidak Ditemukan"
          fill
          className="object-contain"
        />
      </div>
      <div className="space-y-1">
        <h3 className="b1-b text-neutral-n900">Tidak Ditemukan</h3>
        <p className="b2-r text-neutral-n700">
          Data konsultasi tidak ditemukan
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
