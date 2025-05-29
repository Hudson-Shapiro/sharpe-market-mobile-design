
import React from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioStats from './PortfolioStats';

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
