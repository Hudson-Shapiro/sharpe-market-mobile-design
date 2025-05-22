
import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
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
  rank
}: PortfolioCardProps) => {
  const isPositive = portfolioReturn >= 0;
  
  return (
    <div className={cn(
      "bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-2.5 hover:bg-gray-900/70 transition-all duration-200",
      rank === 1 && "border-l-4 border-l-amber-500",
      rank === 2 && "border-l-4 border-l-gray-400",
      rank === 3 && "border-l-4 border-l-amber-700",
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {rank && (
            <span className={`text-xs ${
              rank <= 3 ? 'bg-gray-800 text-gray-300' : 'bg-gray-800 text-gray-300'
            } w-5 h-5 rounded-full flex items-center justify-center mr-1`}>
              {rank}
            </span>
          )}
          <h3 className="text-white font-semibold text-sm">{name}</h3>
          {rank && rank <= 3 && (
            <Star size={12} className="text-amber-400 fill-amber-400" />
          )}
          {isSubscribed && (
            <span className="text-2xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">
              Sub
            </span>
          )}
        </div>
        
        <div>
          {sharpeRatio && (
            <div className="text-xs text-white">
              Sharpe: <span className="font-medium">{sharpeRatio.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-1">
        <div>
          {author && !isOwned && (
            <p className="text-gray-400 text-xs">by {author}</p>
          )}
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-0.5 justify-end">
            {isPositive ? (
              <TrendingUp size={12} className="text-emerald-400" />
            ) : (
              <TrendingDown size={12} className="text-red-400" />
            )}
            <span className={cn(
              "font-semibold text-sm",
              isPositive ? "text-emerald-400" : "text-red-400"
            )}>
              {isPositive ? '+' : ''}{portfolioReturn.toFixed(1)}%
            </span>
          </div>
          {rank && (
            <p className="text-2xs text-gray-400">+{(portfolioReturn * 0.85).toFixed(1)}% vs S&P</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
