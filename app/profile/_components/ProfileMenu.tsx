import {
  User,
  Lock,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: "default" | "destructive";
}

const MenuItem = ({
  icon,
  label,
  onClick,
  variant = "default",
}: MenuItemProps) => (
  <button
    onClick={onClick}
    className="flex items-center justify-between w-full p-4 hover:bg-neutral-n100 transition-colors border-b border-neutral-n200 last:border-b-0"
  >
    <div className="flex items-center space-x-4">
      <div
        className={cn(
          "p-2 rounded-lg",
          variant === "destructive" ? "text-accent-r500" : "text-neutral-n700",
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "b2-r",
          variant === "destructive" ? "text-accent-r500" : "text-neutral-n900",
        )}
      >
        {label}
      </span>
    </div>
    <ChevronRight
      className={cn(
        "w-5 h-5",
        variant === "destructive" ? "text-accent-r500" : "text-neutral-n400",
      )}
    />
  </button>
);

interface ProfileMenuProps {
  onLogoutClick: () => void;
}

export const ProfileMenu = ({ onLogoutClick }: ProfileMenuProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-neutral-n200">
      <MenuItem icon={<User className="w-5 h-5" />} label="Edit Akun" />
      <MenuItem icon={<Lock className="w-5 h-5" />} label="Ganti Password" />
      <MenuItem icon={<HelpCircle className="w-5 h-5" />} label="Bantuan" />
      <MenuItem icon={<Info className="w-5 h-5" />} label="Tentang Kami" />
      <MenuItem
        icon={<LogOut className="w-5 h-5" />}
        label="Keluar"
        variant="destructive"
        onClick={onLogoutClick}
      />
    </div>
  );
};
