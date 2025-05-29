import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';
interface PortfolioStatsProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
}
const PortfolioStats = ({
  timeRange,
  setTimeRange
}: PortfolioStatsProps) => {
  return <>
      {/* Inline Header Row - Title and Time Range Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg text-foreground">Performance</h3>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>
        
        <div className="flex bg-secondary/30 backdrop-blur-sm p-1 text-xs border-0 gap-1.5" style={{
        borderRadius: '12px'
      }}>
          {["LTD", "YTD", "3M", "1D"].map(period => <button key={period} onClick={() => setTimeRange(period)} className={`px-3 py-1.5 transition-all duration-300 font-medium ${timeRange === period ? "bg-white text-black shadow-lg font-bold" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`} style={{
          borderRadius: '12px'
        }}>
              {period}
            </button>)}
        </div>
      </div>
      
      {/* Two Large Horizontal Metric Cards */}
      <div className="flex gap-3 mb-4">
        {/* Top Performer Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-6 shadow-lg flex-1" style={{
        borderRadius: '12px'
      }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <TrendingUp size={16} className="text-emerald-400" />
              <span className="text-sm text-gray-400">Top Performer</span>
            </div>
            <div className="text-lg font-bold text-emerald-400 mb-2">IT Portfolio</div>
            <div className="text-2xl font-bold text-emerald-400">+22.67%</div>
          </div>
        </div>
        
        {/* Average Return Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-6 shadow-lg flex-1" style={{
        borderRadius: '12px'
      }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <BarChart3 size={16} className="text-blue-400" />
              <span className="text-sm text-gray-400">Avg Return</span>
            </div>
            <div className="text-2xl font-bold text-white mb-2">+11.39%</div>
            <div className="text-sm text-gray-500">5 portfolios</div>
          </div>
        </div>
      </div>
    </>;
};
export default PortfolioStats;