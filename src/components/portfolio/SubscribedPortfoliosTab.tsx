import React from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioStats from './PortfolioStats';
import { Users } from 'lucide-react';

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
      <PortfolioStats timeRange={timeRange} setTimeRange={setTimeRange} />
      
      {/* Subscribed Portfolios Header */}
      <div className="flex items-center gap-2 px-2 mb-3">
        <Users size={18} className="text-emerald-400" />
        <h3 className="font-bold text-lg text-foreground">Subscribed Portfolios</h3>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      </div>
      
      {/* Subscribed Portfolio Cards with proper spacing */}
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
