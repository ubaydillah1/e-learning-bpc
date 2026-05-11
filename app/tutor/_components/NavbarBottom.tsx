"use client";

import { HomeIcon, GradeIcon, FileTextIcon } from "@/public/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarBottom = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Beranda",
      href: "/tutor",
      Icon: HomeIcon,
    },
    {
      label: "Nilai",
      href: "/tutor/grade",
      Icon: GradeIcon,
    },
    {
      label: "Ujian",
      href: "/tutor/exam",
      Icon: FileTextIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-n200 rounded-[16px]">
      <div className="grid grid-cols-3 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-center flex-col gap-1 cursor-pointer",
                isActive ? "text-primary" : "text-neutral-n400",
              )}
            >
              <item.Icon className="size-5" />
              <span className={cn(isActive ? "l3-b" : "l3-r")}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarBottom;
