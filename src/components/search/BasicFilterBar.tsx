
import React from 'react';
import { Clock, TrendingDown } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-secondary/10 border-b border-border/20">
      {/* Time Frame */}
      <div className="flex items-center gap-3">
        <Clock size={16} className="text-muted-foreground" />
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

      {/* Sort by P&L */}
      <div className="flex items-center gap-3">
        <TrendingDown size={16} className="text-muted-foreground" />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px] h-9 text-xs font-medium border border-border/40 bg-secondary/30 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-200" style={{ borderRadius: '12px' }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card/95 backdrop-blur-md border border-border/40 shadow-xl" style={{ borderRadius: '12px' }}>
            <SelectItem value="highest" className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px' }}>
              Highest P&L
            </SelectItem>
            <SelectItem value="lowest" className="hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors" style={{ borderRadius: '8px' }}>
              Lowest P&L
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BasicFilterBar;
