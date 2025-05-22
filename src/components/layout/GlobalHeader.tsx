
import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const GlobalHeader = () => {
  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3">
      <Link to="/profile">
        <Avatar className="h-10 w-10 bg-gray-800/50 hover:bg-gray-800/80 transition-all">
          <AvatarFallback className="text-base font-bold bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">
            HS
          </AvatarFallback>
        </Avatar>
      </Link>
      
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default GlobalHeader;
