
import React from 'react';

const chartTimeRanges = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

interface ChartTimeRangeSelectorProps {
  selectedRange: string;
  onRangeChange: (range: string) => void;
}

const ChartTimeRangeSelector: React.FC<ChartTimeRangeSelectorProps> = ({ selectedRange, onRangeChange }) => {
  return (
    <div className="flex space-x-2">
      {chartTimeRanges.map((period) => (
        <button 
          key={period}
          onClick={() => onRangeChange(period)}
          className={`px-3 py-1 text-sm font-bold rounded-full transition-all duration-200 ${
            selectedRange === period 
              ? "bg-foreground text-background" 
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {period}
        </button>
      ))}
    </div>
  );
};

export default ChartTimeRangeSelector;
