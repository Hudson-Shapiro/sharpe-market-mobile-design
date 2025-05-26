
import React from 'react';
import { ChevronDown, ChevronUp, Target } from 'lucide-react';

interface WatchlistSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const WatchlistSection = ({ isExpanded, onToggle }: WatchlistSectionProps) => {
  const watchlistData = [
    { ticker: 'AAPL', addedPercent: 23.4, avgAllocation: 8.7 },
    { ticker: 'MSFT', addedPercent: 19.2, avgAllocation: 9.4 },
    { ticker: 'GOOGL', addedPercent: 15.8, avgAllocation: 7.2 },
    { ticker: 'AMZN', addedPercent: 12.3, avgAllocation: 5.9 },
    { ticker: 'TSLA', addedPercent: 11.7, avgAllocation: 6.8 }
  ];

  return (
    <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
      <button 
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          🔎 Most Added to Watchlists
          <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Week</span>
        </h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {watchlistData.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
              <div className="flex items-center gap-3">
                <Target size={16} className="text-amber-400" />
                <div>
                  <div className="font-medium text-sm">{item.ticker}</div>
                  <div className="text-xs text-muted-foreground">{item.addedPercent}% added this week</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Avg: {item.avgAllocation}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistSection;
