
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
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-2.5 hover:bg-gray-900/70 transition-all duration-200">
      <div className="flex items-center justify-between mb-0.5">
        <div className="flex items-center gap-1.5">
          <span className="text-2xs text-emerald-400 font-mono bg-emerald-500/20 rounded-full px-1.5 py-0.5">#{id}</span>
          {isSubscribed && (
            <span className="text-2xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">
              Subscribed
            </span>
          )}
          {rank && (
            <span className={`text-2xs ${rank <= 3 ? 'bg-amber-500/20 text-amber-400' : 'bg-gray-800 text-gray-300'} px-1.5 py-0.5 rounded-full`}>
              #{rank}
            </span>
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
        </div>
      </div>
      
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white font-semibold leading-tight">{name}</h3>
          {author && !isOwned && (
            <p className="text-gray-400 text-xs">{author}</p>
          )}
        </div>
        
        {sharpeRatio && (
          <div className="text-2xs text-gray-400">
            Sharpe: <span className="text-white">{sharpeRatio.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      {recentPurchases && (
        <div className="flex flex-wrap gap-1 mt-2">
          {recentPurchases.map((ticker, idx) => (
            <div key={idx} className="text-2xs bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded-full whitespace-nowrap">
              ${ticker}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
