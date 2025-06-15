
import React from 'react';

interface MiniChartProps {
  data: number[];
  width?: number;
  height?: number;
  isPositive?: boolean;
}

const MiniChart = ({ data, width = 70, height = 30, isPositive = true }: MiniChartProps) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const strokeColor = isPositive ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)';
  const gradientId = `chartGradient-${isPositive ? 'positive' : 'negative'}`;
  const gradientColor = isPositive ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)';

  return (
    <div className="relative">
      <svg width={width} height={height} className="overflow-visible">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradientColor} stopOpacity="0.2" />
            <stop offset="100%" stopColor={gradientColor} stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Gradient fill under the line */}
        <polygon
          points={`0,${height} ${points} ${width},${height}`}
          fill={`url(#${gradientId})`}
        />
        
        {/* The line itself */}
        <polyline
          points={points}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default MiniChart;
