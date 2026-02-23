import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between pt-3 pb-1 px-5 items-center sticky top-0 z-10 bg-white">
      <div className="flex flex-col gap-[2px]">
        <p className="b3-r">Selamat jumpa,</p>
        <strong className="h4">Affandy Affan</strong>
        <div className="flex gap-4 b3-b">
          <p>Bimbel BPC Koja</p>
          <div>•</div>
          <p>Kelas 9</p>
        </div>
      </div>

      <div className="relative size-14">
        <Image
          src="/assets/images/profile-default.png"
          alt="Profile"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
