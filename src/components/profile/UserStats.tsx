
import React from 'react';

const UserStats = () => {
  return (
    <div className="px-4 mb-3 grid grid-cols-3 gap-2 text-center">
      <div className="py-3">
        <p className="text-muted-foreground text-sm">Subscribed</p>
        <p className="text-2xl font-bold">12</p>
      </div>
      
      <div className="py-3">
        <p className="text-muted-foreground text-sm">Subscribers</p>
        <p className="text-2xl font-bold">30</p>
      </div>
      
      <div className="py-3">
        <p className="text-muted-foreground text-sm">Portfolios</p>
        <p className="text-2xl font-bold">7</p>
      </div>
    </div>
  );
};

export default UserStats;
