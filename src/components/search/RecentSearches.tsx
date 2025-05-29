
import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface RecentSearchesProps {
  recentSearches: string[];
  setSearchQuery: (query: string) => void;
  clearRecentSearches: () => void;
}

const RecentSearches = ({ recentSearches, setSearchQuery, clearRecentSearches }: RecentSearchesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displaySearches = isExpanded ? recentSearches : recentSearches.slice(0, 3);
  const hasMore = recentSearches.length > 3;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Recent Searches</h3>
        </div>
        <button 
          className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
          onClick={clearRecentSearches}
        >
          Clear All
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {displaySearches.map((search, idx) => (
          <button 
            key={idx}
            className="flex items-center gap-2 bg-secondary/70 hover:bg-secondary border border-border text-secondary-foreground py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:border-emerald-500/30"
            onClick={() => setSearchQuery(search)}
          >
            <span>{search}</span>
          </button>
        ))}
      </div>
      
      {hasMore && (
        <button 
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={14} />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              Show {recentSearches.length - 3} more
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default RecentSearches;
