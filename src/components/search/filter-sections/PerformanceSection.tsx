
import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { PerformanceSectionProps } from './types';

const PerformanceSection = ({
  returnMin,
  returnMax,
  sharpeMin,
  onReturnMinChange,
  onReturnMaxChange,
  onSharpeMinChange
}: PerformanceSectionProps) => {
  return (
    <div className="bg-card/50 p-2.5 rounded-xl border border-border/20">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2.5">
        <TrendingUp className="text-emerald-500" size={16} />
        Performance
      </h3>
      <div className="space-y-2.5">
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">Annual Return</label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={returnMin}
              onChange={(e) => onReturnMinChange(e.target.value)}
              placeholder="Min"
              className="rounded-xl border-border/40 h-9 bg-secondary/60 text-xs"
            />
            <span className="text-xs text-muted-foreground">%</span>
            <span className="text-xs text-muted-foreground">to</span>
            <Input
              type="number"
              value={returnMax}
              onChange={(e) => onReturnMaxChange(e.target.value)}
              placeholder="Max"
              className="rounded-xl border-border/40 h-9 bg-secondary/60 text-xs"
            />
            <span className="text-xs text-muted-foreground">%</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1.5">
            Minimum Sharpe Ratio: {sharpeMin[0].toFixed(1)}+
          </label>
          <Slider
            value={sharpeMin}
            onValueChange={onSharpeMinChange}
            max={5}
            min={0}
            step={0.1}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceSection;
