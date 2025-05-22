
import React from 'react';
import { Search, Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-950">
      <div>
        <h1 className="text-2xl font-bold text-white">Home</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Search size={24} />
        </button>
        <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
          <Bell size={24} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
