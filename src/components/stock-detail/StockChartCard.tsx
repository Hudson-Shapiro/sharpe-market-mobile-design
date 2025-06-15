
import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Stock } from '@/data/stocks';

type ChartData = Stock['chartData']['1D'];

interface StockChartCardProps {
  chartData: ChartData;
}

const StockChartCard: React.FC<StockChartCardProps> = ({ chartData }) => {
  const isPositive = chartData.length > 1 ? chartData[chartData.length-1].price >= chartData[0].price : true;
  const strokeColor = isPositive ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)';
  const gradientId = isPositive ? 'priceGradientGreen' : 'priceGradientRed';
  
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="priceGradientGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="priceGradientRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(239, 68, 68)" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="rgb(239, 68, 68)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip 
            cursor={false}
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgb(51, 65, 85)',
              borderRadius: '12px',
            }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, null]}
            labelFormatter={(label) => <span className="text-muted-foreground">{label}</span>}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke={strokeColor}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            dot={false}
            activeDot={{ r: 6, fill: strokeColor, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChartCard;
