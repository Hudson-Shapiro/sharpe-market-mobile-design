
import React from 'react';

const UserStats = () => {
  return (
    <div className="px-4 mb-4 grid grid-cols-3 gap-2 text-center">
      <div className="py-2">
        <p className="text-muted-foreground text-xs">Subscribed</p>
        <p className="text-lg font-bold">12</p>
      </div>
      
      <div className="py-2">
        <p className="text-muted-foreground text-xs">Subscribers</p>
        <p className="text-lg font-bold">30</p>
      </div>
      
      <div className="py-2">
        <p className="text-muted-foreground text-xs">Portfolios</p>
        <p className="text-lg font-bold">7</p>
      </div>
    </div>
  );
};

export default UserStats;
