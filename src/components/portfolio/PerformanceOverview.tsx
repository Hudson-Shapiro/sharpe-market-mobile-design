
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { TrendingUp, BarChart3, Clock } from 'lucide-react';

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
    <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 shadow-xl shadow-emerald-500/5" style={{ borderRadius: '12px' }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-white">Performance</h3>
        <div className="flex bg-secondary/30 backdrop-blur-sm p-1 text-xs border-0" style={{ borderRadius: '12px' }}>
          {["LTD", "YTD", "3M", "1D"].map((period) => (
            <button 
              key={period}
              onClick={() => setTimeRange(period)}
              className={`px-3 py-1.5 transition-all duration-300 font-medium ${
                timeRange === period 
                  ? "bg-white text-black shadow-lg font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
              style={{ borderRadius: '12px' }}
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
      
      {/* Summary Section */}
      <div className="space-y-2 mt-3 pt-3 border-t border-gray-800/40">
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp size={14} className="text-emerald-400" />
          <span className="text-gray-400">Top Portfolio:</span>
          <span className="font-semibold text-emerald-400">Tech Growth Portfolio</span>
          <span className="text-emerald-400 font-bold">↑ +32.5%</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <BarChart3 size={14} className="text-blue-400" />
          <span className="text-gray-400">Avg Return:</span>
          <span className="font-semibold text-white">+29.3%</span>
          <span className="text-gray-500">across 2 portfolios</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Clock size={14} className="text-gray-400" />
          <span className="text-gray-400">Last Trade:</span>
          <span className="text-gray-300">May 22, 2025</span>
        </div>
      </div>
    </Card>
  );
};

export default PerformanceOverview;
