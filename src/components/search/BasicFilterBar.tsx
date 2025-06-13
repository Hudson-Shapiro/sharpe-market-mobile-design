
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
    { id: '1D', label: '1D' },
    { id: '1W', label: '1W' },
    { id: '1M', label: '1M' },
    { id: '1Y', label: '1Y' },
    { id: 'Lifetime', label: 'All' }
  ];

  return (
    <div className="flex items-center gap-3 p-3 bg-secondary/20 border-b border-border/40">
      {/* Time Frame */}
      <div className="flex items-center gap-2">
        <Clock size={16} className="text-muted-foreground" />
        <ToggleGroup type="single" value={timeFrame} onValueChange={setTimeFrame} className="gap-1">
          {timeFrameOptions.map((frame) => (
            <ToggleGroupItem
              key={frame.id}
              value={frame.id}
              className="px-3 py-1.5 text-xs rounded-lg border border-border/50 transition-all duration-200 hover:border-orange-500/50 data-[state=on]:bg-orange-500/10 data-[state=on]:border-orange-500 bg-card"
            >
              {frame.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Sort by P&L */}
      <div className="flex items-center gap-2 ml-auto">
        <TrendingDown size={16} className="text-muted-foreground" />
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px] h-8 text-xs border-border/50 bg-card">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="highest">Highest P&L</SelectItem>
            <SelectItem value="lowest">Lowest P&L</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default BasicFilterBar;
