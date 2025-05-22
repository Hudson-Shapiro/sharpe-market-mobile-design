
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface GlobalHeaderProps {
  hideSearch?: boolean;
}

const GlobalHeader = ({ hideSearch = false }: GlobalHeaderProps) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3">
      <div className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">HS</span>
      </div>
      
      <div className="flex items-center gap-3">
        {!hideSearch && (
          <button 
            onClick={handleSearchClick}
            className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            <Search size={20} />
          </button>
        )}
        <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default GlobalHeader;
