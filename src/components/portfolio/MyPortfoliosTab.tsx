import React from 'react';
import { Plus, FolderPlus } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import PerformanceOverview from './PerformanceOverview';

interface Portfolio {
  id: string;
  name: string;
  return: number;
  isOwned: boolean;
  sharpeRatio: number;
  sortinioRatio: number;
  createdDate: string;
  lastEditedDate: string;
  benchmark: string;
}

interface MyPortfoliosTabProps {
  myPortfolios: Portfolio[];
  timeRange: string;
  setTimeRange: (range: string) => void;
  performanceData: Array<{
    name: string;
    Dividend: number;
    Tech: number;
  }>;
  chartConfig: any;
}

const MyPortfoliosTab = ({ myPortfolios, timeRange, setTimeRange, performanceData, chartConfig }: MyPortfoliosTabProps) => {
  return (
    <div className="space-y-4">
      {/* Performance Overview */}
      {myPortfolios.length > 0 && (
        <PerformanceOverview 
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          performanceData={performanceData}
          chartConfig={chartConfig}
        />
      )}
      
      {/* Section Header with Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-800/40"></div>
        </div>
        <div className="relative flex justify-center bg-background px-4">
          <h3 className="font-semibold text-lg text-white bg-background px-4">Your Portfolios</h3>
        </div>
      </div>
      
      {/* Portfolio Cards */}
      <div className="grid gap-3 pb-4">
        {myPortfolios.length === 0 ? (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 p-6 text-center shadow-xl" style={{ borderRadius: '12px' }}>
            <h3 className="font-semibold text-lg mb-2 text-white">No portfolios yet</h3>
            <p className="text-gray-400 text-sm mb-4">Create your first portfolio to track your investments</p>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2.5 px-5 font-semibold transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95" style={{ borderRadius: '12px' }}>
              <Plus size={16} />
              Create Portfolio
            </button>
          </div>
        ) : (
          <>
            {/* Existing Portfolio Cards */}
            {myPortfolios.map((portfolio, index) => (
              <PortfolioCard key={index} {...portfolio} />
            ))}
            
            {/* Add New Portfolio Card with Enhanced Hover Animation */}
            <button className="w-full bg-transparent border-2 border-dashed border-emerald-500/60 hover:border-emerald-500 p-4 transition-all duration-300 hover:bg-emerald-500/5 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] group relative overflow-hidden" style={{ borderRadius: '12px' }}>
              {/* Animated background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderRadius: '12px' }}></div>
              
              <div className="relative flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" style={{ borderRadius: '12px' }}>
                  <FolderPlus size={20} className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    Add New Portfolio
                  </div>
                  <div className="text-xs text-emerald-500/70 group-hover:text-emerald-400/80 transition-colors duration-300">
                    Start building a new strategy
                  </div>
                </div>
              </div>
              
              {/* Subtle pulse animation */}
              <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/30 transition-all duration-700 group-hover:animate-pulse" style={{ borderRadius: '12px' }}></div>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyPortfoliosTab;
