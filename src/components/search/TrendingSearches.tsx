
import React from 'react';
import { TrendingUp, ArrowUp } from 'lucide-react';

interface TrendingSearchesProps {
  trendingSearches: string[];
  setSearchQuery: (query: string) => void;
}

const TrendingSearches = ({ trendingSearches, setSearchQuery }: TrendingSearchesProps) => {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-2">
        <h2 className="text-lg font-bold">Trending Searches</h2>
        <TrendingUp size={16} className="text-emerald-400" />
      </div>
      <div className="space-y-3">
        {trendingSearches.map((item, idx) => (
          <button 
            key={idx}
            className="flex justify-between items-center w-full py-2 border-b border-border/80"
            onClick={() => setSearchQuery(item)}
          >
            <div className="flex items-center gap-2">
              <span className="bg-secondary w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {idx + 1}
              </span>
              <span>{item}</span>
            </div>
            <ArrowUp size={16} className="text-emerald-400" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingSearches;
