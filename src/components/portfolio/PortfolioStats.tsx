
import React from 'react';
import { ArrowUp } from 'lucide-react';

interface PortfolioStatsProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
}

const PortfolioStats = ({ timeRange, setTimeRange }: PortfolioStatsProps) => {
  return (
    <>
      {/* Time Range Filter */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-white">Performance</h3>
        <div className="flex bg-secondary/30 backdrop-blur-sm rounded-2xl p-1 text-xs border-0">
          {["LTD", "YTD", "3M", "1D"].map((period) => (
            <button 
              key={period}
              onClick={() => setTimeRange(period)}
              className={`px-3 py-1.5 rounded-xl transition-all duration-300 font-medium ${
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
      
      {/* Portfolio Rankings Overview */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 rounded-lg shadow-lg shadow-blue-500/5">
          <div className="text-xs text-gray-400 mb-2">Top Performer</div>
          <div className="font-bold text-white text-lg">IT Portfolio</div>
          <div className="flex items-center text-emerald-400 text-sm font-semibold bg-emerald-500/10 w-fit px-2 py-1 rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
            <ArrowUp size={14} className="mr-1" />
            <span>22.67%</span>
          </div>
        </div>
        
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 rounded-lg shadow-lg shadow-blue-500/5">
          <div className="text-xs text-gray-400 mb-2">Average Return</div>
          <div className="font-bold text-white text-lg">11.39%</div>
          <div className="flex items-center text-gray-400 text-xs">
            <span>across 5 portfolios</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioStats;
