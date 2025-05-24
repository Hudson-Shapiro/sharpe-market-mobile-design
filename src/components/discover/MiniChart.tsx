
import React from 'react';

interface MiniChartProps {
  data: number[];
  width?: number;
  height?: number;
}

const MiniChart = ({ data, width = 60, height = 24 }: MiniChartProps) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative">
      <svg width={width} height={height} className="overflow-visible">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Gradient fill under the line */}
        <polygon
          points={`0,${height} ${points} ${width},${height}`}
          fill="url(#chartGradient)"
        />
        
        {/* The line itself */}
        <polyline
          points={points}
          fill="none"
          stroke="rgb(34, 197, 94)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MiniChart;
