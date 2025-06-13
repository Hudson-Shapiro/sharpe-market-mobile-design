
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
    <div className="flex items-center justify-between gap-3 p-3 bg-secondary/10 border-b border-border/30">
      {/* Time Frame */}
      <div className="flex items-center gap-2">
        <Clock size={14} className="text-muted-foreground" />
        <ToggleGroup type="single" value={timeFrame} onValueChange={setTimeFrame} className="gap-1">
          {timeFrameOptions.map((frame) => (
            <ToggleGroupItem
              key={frame.id}
              value={frame.id}
              className="px-2.5 py-1.5 text-xs font-medium rounded-full border border-border/40 transition-all duration-200 hover:border-emerald-500/50 data-[state=on]:bg-emerald-500/15 data-[state=on]:border-emerald-500/60 data-[state=on]:text-emerald-400 bg-card/60 backdrop-blur-sm"
            >
              {frame.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Sort by P&L */}
      <div className="flex items-center gap-2">
        <TrendingDown size={14} className="text-muted-foreground" />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[130px] h-8 text-xs font-medium border border-border/40 bg-card/60 backdrop-blur-sm rounded-full hover:border-emerald-500/50 transition-all duration-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card/95 backdrop-blur-md border border-border/40 rounded-xl shadow-xl">
            <SelectItem value="highest" className="rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
              Highest P&L
            </SelectItem>
            <SelectItem value="lowest" className="rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors">
              Lowest P&L
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BasicFilterBar;
