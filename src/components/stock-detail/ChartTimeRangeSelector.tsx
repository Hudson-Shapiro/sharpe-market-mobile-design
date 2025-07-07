
import React from 'react';

const chartTimeRanges = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

interface ChartTimeRangeSelectorProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

const ChartTimeRangeSelector: React.FC<ChartTimeRangeSelectorProps> = ({ selectedRange, onRangeChange }) => {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-6 bg-card/50 backdrop-blur-sm p-2 rounded-full border border-border/40">
        {chartTimeRanges.map((period) => (
          <button 
            key={period}
            onClick={() => onRangeChange(period)}
            className={`px-4 py-2 text-sm font-semibold rounded-full min-w-[3rem] transition-all duration-200 ${
              selectedRange === period 
                ? "bg-foreground text-background shadow-sm" 
                : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartTimeRangeSelector;
