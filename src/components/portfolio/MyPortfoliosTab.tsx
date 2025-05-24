
import React from 'react';
import { PlusCircle } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import PerformanceOverview from './PerformanceOverview';

interface Portfolio {
  id: string;
  name: string;
  return: number;
  isOwned: boolean;
  sharpeRatio: number;
  recentPurchases: string[];
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
    <div className="space-y-6">
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
        <div className="relative flex justify-between items-center bg-background px-2">
          <h3 className="font-semibold text-lg text-white bg-background pr-4">My Portfolios</h3>
          <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm py-2.5 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 backdrop-blur-sm border border-emerald-400/20">
            <PlusCircle size={16} className="mr-2" />
            Create
          </button>
        </div>
      </div>
      
      {/* My Portfolio Cards */}
      <div className="grid gap-4 pb-6">
        {myPortfolios.length === 0 ? (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 text-center shadow-xl">
            <h3 className="font-semibold text-lg mb-3 text-white">No portfolios yet</h3>
            <p className="text-gray-400 text-sm mb-6">Create your first portfolio to track your investments</p>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95">
              <PlusCircle size={18} />
              Create Portfolio
            </button>
          </div>
        ) : (
          myPortfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyPortfoliosTab;
