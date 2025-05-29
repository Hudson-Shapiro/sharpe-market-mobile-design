
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DiscoverHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchFocus = () => {
    navigate('/search');
  };

  return (
    <div className="p-4 pb-2 flex items-center justify-between space-x-3 bg-background">
      <Link to="/profile">
        <img 
          src="/lovable-uploads/d0d2a007-8b8d-40cf-a33e-0d80b7c030db.png" 
          alt="App Logo" 
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </Link>
      
      {/* Search Bar positioned in the middle */}
      <div className="flex-1 relative">
        <div className="flex items-center bg-card rounded-xl py-2.5 px-4">
          <Search size={20} className="text-muted-foreground mr-2" />
          <Input 
            type="text" 
            placeholder="Search portfolios, users, stocks..." 
            className="bg-transparent border-none focus:outline-none w-full h-auto p-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell size={20} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default DiscoverHeader;
