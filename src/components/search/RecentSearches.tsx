
import React from 'react';
import { X } from 'lucide-react';

interface RecentSearchesProps {
  recentSearches: string[];
  setSearchQuery: (query: string) => void;
  clearRecentSearches: () => void;
}

const RecentSearches = ({ recentSearches, setSearchQuery, clearRecentSearches }: RecentSearchesProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Recent Searches</h2>
        <button 
          className="text-emerald-400 text-sm"
          onClick={clearRecentSearches}
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search, idx) => (
          <button 
            key={idx}
            className="flex items-center gap-1 bg-secondary text-secondary-foreground py-1.5 px-3 rounded-full text-sm"
            onClick={() => setSearchQuery(search)}
          >
            <span>{search}</span>
            <X size={14} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
