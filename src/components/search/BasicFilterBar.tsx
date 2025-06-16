
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface BasicFilterBarProps {
  timeFrame: string;
  setTimeFrame: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

const BasicFilterBar = ({ timeFrame, setTimeFrame, sortBy, setSortBy }: BasicFilterBarProps) => {
  const timeFrameOptions = [
    { id: '1W', label: '1W' },
    { id: '1M', label: '1M' },
    { id: '1Y', label: '1Y' },
    { id: 'Lifetime', label: 'All' }
  ];

  const toggleSort = () => {
    setSortBy(sortBy === 'highest' ? 'lowest' : 'highest');
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-secondary/10 border-b border-border/20">
      {/* Time Frame */}
      <div className="flex items-center gap-3">
        <div className="flex bg-secondary/30 backdrop-blur-sm p-1 text-xs border-0 gap-1" style={{ borderRadius: '12px' }}>
          {timeFrameOptions.map((frame) => (
            <button
              key={frame.id}
              onClick={() => setTimeFrame(frame.id)}
              className={`px-3 py-1.5 transition-all duration-300 font-medium ${
                timeFrame === frame.id 
                  ? "bg-white text-black shadow-lg font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              style={{ borderRadius: '12px' }}
            >
              {frame.label}
            </button>
          ))}
        </div>
      </div>

      {/* P&L Sort Button */}
      <button
        onClick={toggleSort}
        className="flex items-center gap-2 px-4 py-2 text-xs font-medium border border-border/40 bg-secondary/30 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-200"
        style={{ borderRadius: '12px' }}
      >
        <span>P&L</span>
        {sortBy === 'highest' ? (
          <ArrowUp size={14} className="text-muted-foreground" />
        ) : (
          <ArrowDown size={14} className="text-muted-foreground" />
        )}
      </button>
    </div>
  );
};

export default BasicFilterBar;
