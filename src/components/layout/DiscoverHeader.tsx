
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DiscoverHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSearchFocus = () => {
    setIsSearchExpanded(true);
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleCancel = () => {
    setIsSearchExpanded(false);
    setSearchQuery("");
  };

  const handleNotificationsClick = () => {
    navigate('/notifications');
  };

  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3 bg-background relative overflow-hidden">
      {/* Logo - hidden when search is expanded */}
      <div className={`transition-all duration-300 ${isSearchExpanded ? 'opacity-0 -translate-x-4 pointer-events-none absolute' : 'opacity-100 translate-x-0'}`}>
        <Link to="/profile">
          <img 
            src="/lovable-uploads/d0d2a007-8b8d-40cf-a33e-0d80b7c030db.png" 
            alt="App Logo" 
            className="w-8 h-8 hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      
      {/* Search Bar - expands to fill space when focused */}
      <div className={`relative transition-all duration-300 ${
        isSearchExpanded 
          ? 'flex-1 ml-0' 
          : 'flex-1 ml-12'
      }`}>
        <div className="flex items-center bg-card rounded-xl py-2.5 px-4">
          <Search size={20} className="text-muted-foreground mr-2" />
          <Input 
            type="text" 
            placeholder="Search portfolios, users, stocks..." 
            className="bg-transparent border-none focus:outline-none w-full h-auto p-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onClick={handleSearchClick}
          />
        </div>
      </div>
      
      {/* Right side - Bell icon or Cancel button */}
      <div className="flex items-center">
        {isSearchExpanded ? (
          <button 
            onClick={handleCancel}
            className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            Cancel
          </button>
        ) : (
          <button 
            onClick={handleNotificationsClick}
            className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative"
          >
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default DiscoverHeader;
