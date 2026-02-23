"use client";

import { BookOpenIcon, QrcodeIcon, UsersIcon } from "@/public/assets/icons";
import { cn } from "@/lib/utils";
import { ActiveTabType } from "./BodyWrapper";

interface NavbarProps {
  activeTab: ActiveTabType;
  onTabChange: (tab: ActiveTabType) => void;
  isSticky?: boolean;
}

const NavbarTop = ({
  activeTab,
  onTabChange,
  isSticky = false,
}: NavbarProps) => {
  const tabs = [
    { id: "ABSENSI", label: "Absensi", icon: QrcodeIcon },
    { id: "KONSULTASI", label: "Konsultasi", icon: UsersIcon },
    { id: "BELAJAR", label: "Belajar", icon: BookOpenIcon },
  ];

  return (
    <nav
      className={cn(
        "flex justify-around relative",
        "transition-[gap,padding] duration-300 ease-out",
        isSticky ? "py-0" : "pt-1 pb-3",
      )}
      style={{ willChange: "contents" }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        if (isSticky) {
          return (
            <div
              key={tab.id}
              onClick={() => onTabChange(tab.id as ActiveTabType)}
              className={cn(
                "flex-1 text-center py-3 cursor-pointer relative",
                "transition-colors duration-200 ease-out",
                isActive ? "text-primary" : "text-neutral-n400",
              )}
            >
              <span className="l3-b">{tab.label}</span>
            </div>
          );
        }

        return (
          <div
            key={tab.id}
            onClick={() => onTabChange(tab.id as ActiveTabType)}
            className={cn(
              "w-full rounded-lg cursor-pointer flex-center flex-col gap-1 p-2",
              "transition-[background-color] duration-200 ease-out",
              isActive ? "bg-primary-p100" : "bg-transparent",
            )}
          >
            <Icon
              className={cn(
                "size-5 transition-colors duration-200 ease-out",
                isActive ? "text-primary" : "text-neutral-n400",
              )}
            />
            <span
              className={cn(
                "l3-b transition-colors duration-200 ease-out",
                isActive ? "text-primary" : "text-neutral-n400",
              )}
            >
              {tab.label}
            </span>
          </div>
        );
      })}

      {isSticky && (
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-primary rounded-full"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${tabs.findIndex((t) => t.id === activeTab) * 100}%) translateZ(0)`,
            transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-primary rounded-full" />
        </div>
      )}
    </nav>
  );
};

export default NavbarTop;
