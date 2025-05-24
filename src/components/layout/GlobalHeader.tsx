
import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalHeader = () => {
  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3">
      <Link to="/profile">
        <img 
          src="/lovable-uploads/d0d2a007-8b8d-40cf-a33e-0d80b7c030db.png" 
          alt="App Logo" 
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </Link>
      
      {/* Removed search bar */}
      <div className="flex-1"></div>
      
      <div className="flex items-center">
        <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default GlobalHeader;
