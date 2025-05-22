
import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="p-4 pb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center mr-3">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">HS</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Home</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors relative">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-3">
          <button className="py-2 px-4 bg-emerald-500 text-white rounded-full text-sm font-medium whitespace-nowrap">
            All Portfolios
          </button>
          <button className="py-2 px-4 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
            Time Period
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="py-2 px-4 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
            Returns
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button className="py-2 px-4 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium whitespace-nowrap">
            Created by me
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
