
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="px-4 mb-4">
      <div className="bg-card border border-border rounded-xl p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <h2 className="text-foreground font-bold text-lg">John Doe</h2>
            <p className="text-muted-foreground">@johndoe</p>
            <p className="text-muted-foreground">Joined March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
