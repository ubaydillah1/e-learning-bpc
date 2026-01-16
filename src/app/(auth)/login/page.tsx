import Image from "next/image";
import LoginForm from "../_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen overflow-hidden text-center flex-center flex-col gap-14">
      <header className="w-full">
        <Image
          alt="logo"
          src={"/assets/illustrations/logo.webp"}
          width={120}
          height={120}
          priority
          className="mx-auto my-4"
        />

        <h1 className="font-bold b1-b my-1">Selamat Datang Kembali!</h1>
        <p className="b2-r">Mau belajar apa hari ini?</p>
      </header>

      <main className="w-full">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
