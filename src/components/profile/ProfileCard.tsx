
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="px-4 mb-3">
      <div className="bg-card border border-border p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30" style={{ borderRadius: '12px' }}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <h2 className="text-foreground font-bold text-xl">John Doe</h2>
            <p className="text-muted-foreground text-sm">@johndoe</p>
            <p className="text-muted-foreground text-sm">Joined March 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
