
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
      
      {/* Compact Bubble Cards - Side by Side */}
      <div className="space-y-3 px-2 mb-6">
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-3 shadow-lg shadow-emerald-500/5" style={{ borderRadius: '12px' }}>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-gray-400">Top:</span>
            <span className="font-semibold text-emerald-400">IT Portfolio</span>
            <span className="text-emerald-400 font-bold">↑ +22.67%</span>
          </div>
        </div>
        
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-3 shadow-lg shadow-blue-500/5" style={{ borderRadius: '12px' }}>
          <div className="flex items-center gap-2 text-sm">
            <BarChart3 size={14} className="text-blue-400" />
            <span className="text-gray-400">Avg Return:</span>
            <span className="font-semibold text-white">+11.39%</span>
            <span className="text-gray-500">across 5 portfolios</span>
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
