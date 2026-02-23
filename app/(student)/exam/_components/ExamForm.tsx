import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileTextIcon } from "@/public/assets/icons";
import { NativeSelect } from "@/components/ui/select-native";

const CLASSES = ["10 SMA", "11 SMA", "12 SMA", "Gap Year"];
const SUBJECTS = ["Matematika", "Fisika", "Kimia", "Biologi"];

const ExamForm = () => {
  return (
    <form className="bg-white p-4 rounded-lg w-full flex gap-4 flex-col">
      <header className="flex gap-3">
        <div className="size-6 bg-accent-b100 p-1 rounded-full flex-center">
          <FileTextIcon className="size-3 text-accent-b500" />
        </div>
        <h1 className="b1-b">Ujian</h1>
      </header>
      <div className="grid gap-2">
        <Label htmlFor="name">Nama Siswa</Label>
        <Input id="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="class">Kelas</Label>
        <NativeSelect id="class" options={CLASSES} placeholder="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Mata Pelajaran</Label>
        <NativeSelect id="subject" options={SUBJECTS} placeholder="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="date">Tanggal Ujian</Label>
        <Input id="date" type="date" />
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <Label htmlFor="token">Token</Label>
          <span className="b3-r text-neutral-n500">Tanyakan tutor</span>
        </div>
        <Input id="token" type="text" />
      </div>
    </form>
  );
};

export default ExamForm;
