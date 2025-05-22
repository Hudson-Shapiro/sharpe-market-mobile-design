
import React, { useState } from 'react';
import { Bell, Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const GlobalHeader = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchFocus = () => {
    setIsSearchActive(true);
    navigate('/discover');
  };

  const handleSearchCancel = () => {
    setIsSearchActive(false);
    setSearchQuery("");
  };

  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3">
      <Link to="/profile">
        <Avatar className="h-10 w-10 bg-gray-800/50 hover:bg-gray-800/80 transition-all">
          <AvatarFallback className="text-base font-bold bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">
            HS
          </AvatarFallback>
        </Avatar>
      </Link>
      
      <div className="flex-1 mx-2">
        <div className="relative">
          <div className="flex items-center bg-gray-800/70 rounded-xl py-2.5 px-4">
            <Search size={20} className="text-gray-400 mr-2" />
            <Input 
              type="text" 
              placeholder="Search portfolios, users, stocks..." 
              className="bg-transparent border-none text-white focus:outline-none w-full h-auto p-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-gray-400">
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
      
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
