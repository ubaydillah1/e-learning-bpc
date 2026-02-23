import Image from "next/image";

interface ProfileCardProps {
  name: string;
  bimbel: string;
  kelas: string;
  avatarUrl?: string;
}

export const ProfileCard = ({
  name,
  bimbel,
  kelas,
  avatarUrl,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-4">
      <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-n200">
        {avatarUrl ? (
          <Image src={avatarUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-n500 b1-b">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="text-center space-y-1">
        <h2 className="h4 text-neutral-n900 font-bold">{name}</h2>
        <div className="flex items-center justify-center b3-r text-neutral-n600">
          <span>{bimbel}</span>
          <span className="mx-2 text-neutral-n400">•</span>
          <span>{kelas}</span>
        </div>
      </div>
    </div>
  );
};
