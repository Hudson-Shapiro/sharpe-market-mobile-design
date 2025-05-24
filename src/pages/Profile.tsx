
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import ProfileCard from '@/components/profile/ProfileCard';
import UserStats from '@/components/profile/UserStats';
import SharpePlusCard from '@/components/profile/SharpePlusCard';
import SettingsMenu from '@/components/profile/SettingsMenu';
import SignOutSection from '@/components/profile/SignOutSection';

const Profile = () => {
  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background text-foreground">
        <ProfileCard />
        <UserStats />
        <Separator className="mb-4" />
        <SharpePlusCard />
        <SettingsMenu />
        <div className="px-4">
          <SignOutSection />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Profile;
