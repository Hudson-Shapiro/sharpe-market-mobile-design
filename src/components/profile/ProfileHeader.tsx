
import React from 'react';
import { Settings, Share } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="flex items-center justify-end p-4 bg-background">
      <div className="flex gap-2">
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Share size={24} />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
