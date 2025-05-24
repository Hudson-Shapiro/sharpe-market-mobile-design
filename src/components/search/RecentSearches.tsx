
import React from 'react';
import { X, Clock } from 'lucide-react';

interface RecentSearchesProps {
  recentSearches: string[];
  setSearchQuery: (query: string) => void;
  clearRecentSearches: () => void;
}

const RecentSearches = ({ recentSearches, setSearchQuery, clearRecentSearches }: RecentSearchesProps) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Recent</h2>
        </div>
        <button 
          className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
          onClick={clearRecentSearches}
        >
          Clear All
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((search, idx) => (
          <button 
            key={idx}
            className="group flex items-center gap-2 bg-secondary/70 hover:bg-secondary text-secondary-foreground py-2 px-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
            onClick={() => setSearchQuery(search)}
          >
            <span className="font-medium">{search}</span>
            <X size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        ))}
      </div>
      
      {recentSearches.length >= 4 && (
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Show more recent searches...
        </button>
      )}
    </div>
  );
};

export default RecentSearches;
