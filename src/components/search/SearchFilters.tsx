
import React from 'react';
import { BarChart3, Users, LineChart } from 'lucide-react';

interface SearchFiltersProps {
  searchFilter: string;
  setSearchFilter: (filter: string) => void;
}

const SearchFilters = ({ searchFilter, setSearchFilter }: SearchFiltersProps) => {
  return (
    <div className="flex p-3 gap-2 border-b border-border/40">
      <button 
        className={`flex items-center justify-center px-3 py-1.5 rounded-full text-sm ${searchFilter === 'portfolios' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        onClick={() => setSearchFilter('portfolios')}
      >
        <BarChart3 size={14} className="mr-1.5" />
        Portfolios
      </button>
      <button 
        className={`flex items-center justify-center px-3 py-1.5 rounded-full text-sm ${searchFilter === 'users' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        onClick={() => setSearchFilter('users')}
      >
        <Users size={14} className="mr-1.5" />
        Users
      </button>
      <button 
        className={`flex items-center justify-center px-3 py-1.5 rounded-full text-sm ${searchFilter === 'stocks' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
        onClick={() => setSearchFilter('stocks')}
      >
        <LineChart size={14} className="mr-1.5" />
        Stocks
      </button>
    </div>
  );
};

export default SearchFilters;
