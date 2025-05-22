
import React from 'react';
import { Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="p-4 pb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-3">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L18 32L32 4" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Home</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors relative">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
