
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  id: string;
  name: string;
  return: number;
  sharpeRatio?: number;
  isOwned?: boolean;
  isSubscribed?: boolean;
  author?: string;
}

const PortfolioCard = ({ 
  id, 
  name, 
  return: portfolioReturn, 
  sharpeRatio, 
  isOwned = false,
  isSubscribed = false,
  author 
}: PortfolioCardProps) => {
  const isPositive = portfolioReturn >= 0;
  
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:bg-gray-900/70 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-gray-400 font-mono">#{id}</span>
            {isSubscribed && (
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                Subscribed
              </span>
            )}
          </div>
          <h3 className="text-white font-semibold text-lg leading-tight">{name}</h3>
          {author && !isOwned && (
            <p className="text-gray-400 text-sm mt-1">{author}</p>
          )}
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp size={16} className="text-emerald-400" />
            ) : (
              <TrendingDown size={16} className="text-red-400" />
            )}
            <span className={cn(
              "font-semibold text-lg",
              isPositive ? "text-emerald-400" : "text-red-400"
            )}>
              {isPositive ? '+' : ''}{portfolioReturn.toFixed(2)}%
            </span>
          </div>
          {sharpeRatio && (
            <div className="text-xs text-gray-400 mt-1">
              Sharpe: {sharpeRatio.toFixed(2)}
            </div>
          )}
        </div>
      </div>
      
      {!isOwned && (
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            Follow
          </button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
