
import React from 'react';
import { TrendingUp, BarChart3, Clock } from 'lucide-react';

interface PortfolioStatsProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
}

const PortfolioStats = ({ timeRange, setTimeRange }: PortfolioStatsProps) => {
  return (
    <>
      {/* Time Range Filter */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-white">Subscribed Portfolio Performance</h3>
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
      
      {/* Unified Portfolio Stats Overview */}
      <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 mb-4 shadow-lg shadow-blue-500/5" style={{ borderRadius: '12px' }}>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-gray-400">Top:</span>
            <span className="font-semibold text-emerald-400">IT Portfolio</span>
            <span className="text-emerald-400 font-bold">↑ +22.67%</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <BarChart3 size={14} className="text-blue-400" />
            <span className="text-gray-400">Avg Return:</span>
            <span className="font-semibold text-white">+11.39%</span>
            <span className="text-gray-500">across 5 followed portfolios</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Clock size={14} className="text-gray-400" />
            <span className="text-gray-400">Last Trade:</span>
            <span className="text-gray-300">May 22, 2025</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioStats;
