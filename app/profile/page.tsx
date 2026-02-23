"use client";

import { useState } from "react";
import { ProfileHeader } from "./_components/ProfileHeader";
import { ProfileCard } from "./_components/ProfileCard";
import { FeedbackBanner } from "./_components/FeedbackBanner";
import { ProfileMenu } from "./_components/ProfileMenu";
import BaseDialog from "@/components/dialog/BaseDialog";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleLogoutConfirm = () => {
    // Implement logout logic here
    console.log("Logged out");
    setIsLogoutOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-n100">
      <div className="relative bg-white pt-12 pb-6 px-5 rounded-b-[2.5rem] shadow-sm">
        <ProfileHeader />
        <ProfileCard
          name="Affandy Affan"
          bimbel="Bimbel BPC Koja"
          kelas="Kelas 9"
          avatarUrl="https://github.com/shadcn.png"
        />
      </div>

      <main className="flex-1 px-5 py-6 space-y-6">
        <FeedbackBanner />

        <ProfileMenu onLogoutClick={() => setIsLogoutOpen(true)} />
      </main>

      <BaseDialog
        isOpen={isLogoutOpen}
        setIsOpen={setIsLogoutOpen}
        imagePath="/assets/illustrations/Illu 5.png"
        title="Apakah Kamu ingin Keluar?"
        description="Kamu bisa login kapan aja"
        footer={
          <div className="flex w-full gap-4">
            <Button
              variant="outline"
              onClick={() => setIsLogoutOpen(false)}
              className="flex-1 b2-r"
            >
              Kembali
            </Button>
            <Button onClick={handleLogoutConfirm} className="flex-1 b2-b">
              Keluar
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default ProfilePage;
