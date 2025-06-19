
import React from 'react';
import { Card } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { TrendingUp, BarChart3, Clock } from 'lucide-react';

interface Portfolio {
  id: string;
  name: string;
  return: number;
  sharpeRatio: number;
  isOwned: boolean;
}

interface PerformanceOverviewProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  performanceData: Array<Record<string, any>>;
  chartConfig: any;
  topPortfolios: Portfolio[];
}

const PerformanceOverview = ({ timeRange, setTimeRange, performanceData, chartConfig, topPortfolios }: PerformanceOverviewProps) => {
  // Get colors for each portfolio line
  const portfolioColors = ['#10b981', '#3b82f6', '#f59e0b']; // emerald, blue, amber
  
  // Calculate average return across top portfolios
  const avgReturn = topPortfolios.length > 0 
    ? (topPortfolios.reduce((sum, p) => sum + p.return, 0) / topPortfolios.length).toFixed(1)
    : '0.0';

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
            {topPortfolios.map((portfolio, index) => (
              <Line
                key={portfolio.name}
                type="monotone"
                dataKey={portfolio.name}
                stroke={portfolioColors[index]}
                strokeWidth={3}
                dot={false}
                activeDot={{ 
                  r: 6, 
                  stroke: portfolioColors[index], 
                  strokeWidth: 2, 
                  fill: portfolioColors[index], 
                  filter: `drop-shadow(0 0 8px ${portfolioColors[index]}60)` 
                }}
              />
            ))}
            <ChartTooltip content={<ChartTooltipContent />} />
          </LineChart>
        </ChartContainer>
      </div>
      
      {/* Summary Section */}
      <div className="space-y-2 mt-3 pt-3 border-t border-gray-800/40">
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp size={14} className="text-emerald-400" />
          <span className="text-gray-400">Top Portfolio:</span>
          <span className="font-semibold text-emerald-400">{topPortfolios[0]?.name}</span>
          <span className="text-emerald-400 font-bold">↑ +{topPortfolios[0]?.return}%</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <BarChart3 size={14} className="text-blue-400" />
          <span className="text-gray-400">Avg Return:</span>
          <span className="font-semibold text-white">+{avgReturn}%</span>
          <span className="text-gray-500">across {topPortfolios.length} portfolios</span>
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
