
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Stock } from '@/data/stocks';

type ChartData = Stock['chartData']['1D'];

interface StockChartCardProps {
  chartData: ChartData;
  chartTimeRange: string;
  onTimeRangeChange: (range: string) => void;
}

const chartTimeRanges = ["1D", "1W", "1M", "3M", "1Y", "5Y", "Max"];

const StockChartCard: React.FC<StockChartCardProps> = ({ chartData, chartTimeRange, onTimeRangeChange }) => {
  return (
    <Card className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border-border/30" style={{ borderRadius: '16px' }}>
      <CardContent className="p-4">
        <div className="flex justify-center mb-4">
          <div className="flex bg-secondary/30 rounded-full p-1 backdrop-blur-sm">
            {chartTimeRanges.map((period) => (
              <button 
                key={period}
                onClick={() => onTimeRangeChange(period)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  chartTimeRange === period 
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg transform scale-105" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-48 relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgb(55 65 81)" opacity={0.2} />
              <XAxis 
                dataKey="time" 
                stroke="rgb(156 163 175)"
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke="rgb(156 163 175)"
                fontSize={12}
                domain={['dataMin - 5', 'dataMax + 5']}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgb(15 23 42)',
                  border: '1px solid rgb(51 65 85)',
                  borderRadius: '12px',
                  color: 'white',
                  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="rgb(34, 197, 94)"
                strokeWidth={3}
                fill="url(#priceGradient)"
                dot={false}
                activeDot={{ r: 8, fill: "rgb(34, 197, 94)", strokeWidth: 0, className: "animate-pulse" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockChartCard;
