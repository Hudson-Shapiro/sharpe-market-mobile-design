
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="px-4 mb-4">
      <div className="bg-card border border-border p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 shadow-lg" style={{ borderRadius: '16px' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
              JD
            </div>
            <div>
              <h2 className="text-foreground font-bold text-2xl">John Doe</h2>
              <p className="text-muted-foreground text-sm">@johndoe</p>
              <p className="text-muted-foreground text-xs">Joined March 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
