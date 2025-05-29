
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
      
      {/* Large Square Performance Cards - Side by Side */}
      <div className="grid grid-cols-2 gap-4 px-2 mb-6">
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-6 shadow-lg shadow-emerald-500/5 aspect-square flex flex-col justify-center" style={{ borderRadius: '16px' }}>
          <div className="text-center space-y-3">
            <TrendingUp size={24} className="text-emerald-400 mx-auto" />
            <div>
              <div className="text-gray-400 text-sm mb-1">Top Performer</div>
              <div className="font-bold text-lg text-white mb-2">IT Portfolio</div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-sm font-bold">
                ↑ +22.67%
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-6 shadow-lg shadow-blue-500/5 aspect-square flex flex-col justify-center" style={{ borderRadius: '16px' }}>
          <div className="text-center space-y-3">
            <BarChart3 size={24} className="text-blue-400 mx-auto" />
            <div>
              <div className="text-gray-400 text-sm mb-1">Average Return</div>
              <div className="font-bold text-2xl text-white mb-2">11.39%</div>
              <div className="text-gray-500 text-sm">across 5 portfolios</div>
            </div>
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
