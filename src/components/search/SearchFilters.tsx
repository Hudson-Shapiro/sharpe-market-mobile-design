
import React from 'react';
import { BarChart3, Users, LineChart, SlidersHorizontal } from 'lucide-react';

interface SearchFiltersProps {
  searchFilter: string;
  setSearchFilter: (filter: string) => void;
  onInteractiveFilter: () => void;
}

const SearchFilters = ({ searchFilter, setSearchFilter, onInteractiveFilter }: SearchFiltersProps) => {
  return (
    <div className="flex p-3 gap-2 border-b border-border/40 justify-between items-center">
      <div className="flex gap-1.5 bg-secondary/30 p-1 rounded-full">
        <button 
          className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            searchFilter === 'portfolios' 
              ? 'bg-white text-black shadow-lg' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
          }`}
          onClick={() => setSearchFilter('portfolios')}
        >
          <BarChart3 size={14} className="mr-1.5" />
          Portfolios
        </button>
        <button 
          className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            searchFilter === 'users' 
              ? 'bg-white text-black shadow-lg' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
          }`}
          onClick={() => setSearchFilter('users')}
        >
          <Users size={14} className="mr-1.5" />
          Users
        </button>
        <button 
          className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            searchFilter === 'stocks' 
              ? 'bg-white text-black shadow-lg' 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
          }`}
          onClick={() => setSearchFilter('stocks')}
        >
          <LineChart size={14} className="mr-1.5" />
          Stocks
        </button>
      </div>
      
      <button 
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-all duration-300 border border-border/40"
        onClick={onInteractiveFilter}
      >
        <SlidersHorizontal size={14} />
        Interactive Filter
      </button>
    </div>
  );
};

export default SearchFilters;
