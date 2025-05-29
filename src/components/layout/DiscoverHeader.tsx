
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DiscoverHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleSearchFocus = () => {
    setIsSearchActive(true);
    // Delay navigation to allow animation to complete
    setTimeout(() => {
      navigate('/search');
    }, 300);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchActive(false);
    }
  };

  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3 bg-background relative overflow-hidden">
      {/* Logo with fade animation */}
      <Link 
        to="/profile" 
        className={`transition-opacity duration-300 ${isSearchActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <img 
          src="/lovable-uploads/d0d2a007-8b8d-40cf-a33e-0d80b7c030db.png" 
          alt="App Logo" 
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </Link>
      
      {/* Search Bar with expansion animation */}
      <div className={`relative transition-all duration-300 ${isSearchActive ? 'flex-1 mr-16' : 'flex-1'}`}>
        <div className={`flex items-center bg-card rounded-xl py-2.5 px-4 transition-all duration-300 ${
          isSearchActive 
            ? 'ring-2 ring-emerald-500/30 shadow-lg shadow-emerald-500/10 border border-emerald-500/20' 
            : 'border border-transparent'
        }`}>
          <Search size={20} className="text-muted-foreground mr-2" />
          <Input 
            type="text" 
            placeholder="Search portfolios, users, stocks..." 
            className="bg-transparent border-none focus:outline-none w-full h-auto p-0 focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </div>
      </div>

      {/* Cancel button with fade animation - only show during search activation */}
      {isSearchActive && (
        <button 
          className="text-emerald-400 font-semibold hover:text-emerald-300 transition-all duration-300 absolute right-4 animate-fade-in"
          onClick={() => {
            setIsSearchActive(false);
            setSearchQuery("");
          }}
        >
          Cancel
        </button>
      )}
      
      {/* Notification Bell with fade animation */}
      <div className={`flex items-center transition-opacity duration-300 ${isSearchActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default DiscoverHeader;
