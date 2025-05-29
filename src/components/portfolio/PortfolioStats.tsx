
import React from 'react';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

interface PortfolioStatsProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
}

const PortfolioStats = ({ timeRange, setTimeRange }: PortfolioStatsProps) => {
  return (
    <>
      {/* Time Range Filter */}
      <div className="flex justify-between items-center mb-4">
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
      
      {/* Three Compact Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {/* Top Performer Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-3 shadow-lg" style={{ borderRadius: '12px' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp size={12} className="text-emerald-400" />
              <span className="text-xs text-gray-400">Top Performer</span>
            </div>
            <div className="text-sm font-bold text-emerald-400">IT Portfolio</div>
            <div className="text-lg font-bold text-emerald-400">+22.67%</div>
          </div>
        </div>
        
        {/* Average Return Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-3 shadow-lg" style={{ borderRadius: '12px' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <BarChart3 size={12} className="text-blue-400" />
              <span className="text-xs text-gray-400">Average Return</span>
            </div>
            <div className="text-lg font-bold text-white">+11.39%</div>
            <div className="text-xs text-gray-500">across 5 portfolios</div>
          </div>
        </div>
        
        {/* Most Active Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-3 shadow-lg" style={{ borderRadius: '12px' }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Activity size={12} className="text-purple-400" />
              <span className="text-xs text-gray-400">Most Active</span>
            </div>
            <div className="text-sm font-bold text-white">Auto Portfolio</div>
            <div className="text-xs text-gray-500">12 trades this week</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioStats;
