
import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  id: string;
  name: string;
  return: number;
  sharpeRatio?: number;
  isOwned?: boolean;
  isSubscribed?: boolean;
  author?: string;
  recentPurchases?: string[];
  rank?: number;
}

const PortfolioCard = ({ 
  id, 
  name, 
  return: portfolioReturn, 
  sharpeRatio, 
  isOwned = false,
  isSubscribed = false,
  author,
  recentPurchases,
  rank
}: PortfolioCardProps) => {
  const isPositive = portfolioReturn >= 0;
  
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-3.5 hover:bg-gray-900/70 transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-2xs text-emerald-400 font-mono bg-emerald-500/20 rounded-full px-1.5 py-0.5">#{id}</span>
            {isSubscribed && (
              <span className="text-2xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">
                Subscribed
              </span>
            )}
            {rank && (
              <span className={`text-2xs ${rank <= 3 ? 'bg-amber-500/20 text-amber-400' : 'bg-gray-800 text-gray-300'} px-1.5 py-0.5 rounded-full`}>
                #{rank} Rank
              </span>
            )}
          </div>
          <h3 className="text-white font-semibold leading-tight">{name}</h3>
          {author && !isOwned && (
            <p className="text-gray-400 text-xs mt-0.5">{author}</p>
          )}
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-0.5 justify-end">
            {isPositive ? (
              <TrendingUp size={14} className="text-emerald-400" />
            ) : (
              <TrendingDown size={14} className="text-red-400" />
            )}
            <span className={cn(
              "font-semibold",
              isPositive ? "text-emerald-400" : "text-red-400"
            )}>
              {isPositive ? '+' : ''}{portfolioReturn.toFixed(2)}%
            </span>
          </div>
          {sharpeRatio && (
            <div className="text-2xs text-gray-400 mt-0.5">
              Sharpe: {sharpeRatio.toFixed(2)}
            </div>
          )}
        </div>
      </div>
      
      {recentPurchases && (
        <div className="flex gap-1 mt-2 mb-2.5 overflow-x-auto no-scrollbar">
          {recentPurchases.map((ticker, idx) => (
            <div key={idx} className="text-2xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full whitespace-nowrap">
              ${ticker}
            </div>
          ))}
        </div>
      )}
      
      {!isOwned && (
        <div className="flex gap-1.5 mt-3">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 px-3 rounded-lg text-sm font-medium transition-colors">
            Subscribe
          </button>
          <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-1.5 px-2 rounded-lg text-sm transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
