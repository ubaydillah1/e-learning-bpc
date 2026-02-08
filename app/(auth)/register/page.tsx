import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className=" overflow-hidden text-center flex-center flex-col gap-14 py-5">
      <header className="w-full">
        <Image
          alt="logo"
          src={"/assets/illustrations/logo.webp"}
          width={120}
          height={120}
          priority
          className="mx-auto my-4"
        />

        <h1 className="font-bold b1-b my-1">Buat akun</h1>
        <p className="b2-r">Raih prestasimu bersama BPC!</p>
      </header>

      <main className="w-full">
        <RegisterForm />
      </main>

      <footer className="b2-r fixed flex-center bottom-0 h-10 w-full bg-white">
        Sudah punya akun?&nbsp;
        <Link href={"/login"} className="text-primary">
          Login
        </Link>
      </footer>
    </div>
  );
};

export default RegisterPage;
