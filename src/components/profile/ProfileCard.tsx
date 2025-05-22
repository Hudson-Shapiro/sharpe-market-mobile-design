
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="px-4 mb-6">
      <div className="bg-card border border-border rounded-xl p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">JD</span>
          </div>
          <div className="flex-1">
            <h2 className="text-foreground font-bold text-xl">John Doe</h2>
            <p className="text-muted-foreground">@johndoe</p>
            <p className="text-muted-foreground text-sm mt-1">Joined March 2024</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Passionate investor focused on long-term growth and sustainable investing. 
          Love sharing insights with the community! 📈
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
