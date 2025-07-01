
import React from 'react';
import { Clock } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TimeFrameSectionProps } from './types';

const timeFrameOptions = [
  { id: '1D', label: '1D' },
  { id: '1W', label: '1W' },
  { id: '1M', label: '1M' },
  { id: '1Y', label: '1Y' },
  { id: 'Lifetime', label: 'All' }
];

const TimeFrameSection = ({ timeFrame, onTimeFrameChange }: TimeFrameSectionProps) => {
  return (
    <div className="bg-card/50 p-2.5 rounded-xl border border-border/20">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
        <Clock className="text-orange-500" size={16} />
        Time Frame
      </h3>
      <ToggleGroup 
        type="single" 
        value={timeFrame} 
        onValueChange={(v) => v && onTimeFrameChange(v)} 
        className="w-full"
      >
        <div className="grid grid-cols-5 gap-1 w-full">
          {timeFrameOptions.map((frame) => (
            <ToggleGroupItem 
              key={frame.id} 
              value={frame.id} 
              className="px-1.5 py-2 h-9 rounded-full border border-border/40 data-[state=on]:bg-orange-500/15 data-[state=on]:border-orange-500/60 data-[state=on]:text-orange-400 text-xs font-medium bg-secondary/60"
            >
              {frame.label}
            </ToggleGroupItem>
          ))}
        </div>
      </ToggleGroup>
    </div>
  );
};

export default TimeFrameSection;
