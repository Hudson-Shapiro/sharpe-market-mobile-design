
import React from 'react';
import PortfolioCard from './PortfolioCard';
import { Users, TrendingUp, BarChart3 } from 'lucide-react';

interface SubscribedPortfolio {
  id: string;
  name: string;
  return: number;
  isOwned: boolean;
  author: string;
  sharpeRatio: number;
  sortinioRatio: number;
  rank: number;
  createdDate: string;
  lastEditedDate: string;
  benchmark: string;
}

interface SubscribedPortfoliosTabProps {
  subscribedPortfolios: SubscribedPortfolio[];
  timeRange: string;
  setTimeRange: (range: string) => void;
}

const SubscribedPortfoliosTab = ({ subscribedPortfolios, timeRange, setTimeRange }: SubscribedPortfoliosTabProps) => {
  return (
    <div className="space-y-4 pb-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 px-2 mb-4">
        <Users size={18} className="text-emerald-400" />
        <h3 className="font-bold text-lg text-foreground">Subscribed Portfolios</h3>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      </div>
      
      {/* Key Insights - Top Performer and Average Return */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2 mb-6">
        {/* Top Portfolio Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 shadow-lg shadow-emerald-500/5" style={{ borderRadius: '12px' }}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-emerald-400" />
            <span className="text-sm font-medium text-gray-400">Top Portfolio</span>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-emerald-400">IT Portfolio</div>
            <div className="text-emerald-400 font-bold text-lg">↑ +22.67%</div>
          </div>
        </div>
        
        {/* Average Return Card */}
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 shadow-lg shadow-blue-500/5" style={{ borderRadius: '12px' }}>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-gray-400">Average Return</span>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white text-lg">+11.39%</div>
            <div className="text-gray-500 text-sm">across 5 portfolios</div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Cards */}
      <div className="space-y-3">
        {subscribedPortfolios.map((portfolio, index) => (
          <PortfolioCard 
            key={index} 
            {...portfolio} 
            isSubscribed={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscribedPortfoliosTab;
