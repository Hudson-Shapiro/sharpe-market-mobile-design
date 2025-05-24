
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

interface PerformanceOverviewProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  performanceData: Array<{
    name: string;
    Dividend: number;
    Tech: number;
  }>;
  chartConfig: any;
}

const PerformanceOverview = ({ timeRange, setTimeRange, performanceData, chartConfig }: PerformanceOverviewProps) => {
  return (
    <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 shadow-xl shadow-emerald-500/5 rounded-2xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-white">Performance Overview</h3>
        <div className="flex bg-secondary/30 backdrop-blur-sm rounded-full p-1 text-xs border-0">
          {["LTD", "YTD", "3M", "1D"].map((period) => (
            <button 
              key={period}
              onClick={() => setTimeRange(period)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 font-medium ${
                timeRange === period 
                  ? "bg-white text-black shadow-lg font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[180px] w-full">
        <ChartContainer config={chartConfig}>
          <LineChart data={performanceData}>
            <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 11 }} />
            <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} />
            <Line
              type="monotone"
              dataKey="Dividend"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#10b981', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }}
            />
            <Line
              type="monotone"
              dataKey="Tech"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: '#3b82f6', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-800/40">
        <div className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
          Overall: +28.5% YTD
        </div>
        <div className="text-xs text-gray-400">
          Last updated: May 22, 2025
        </div>
      </div>
    </Card>
  );
};

export default PerformanceOverview;
