
import React from 'react';
import { TrendingUp, TrendingDown, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import MiniChart from '../discover/MiniChart';

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

// Generate sample chart data based on performance
const generateSampleData = (isPositive: boolean) => {
  const points = 7;
  const data = [];
  let value = 30;
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - (isPositive ? 0.3 : 0.7)) * 8;
    value += change;
    data.push(Math.max(10, Math.min(60, value)));
  }
  
  return data;
};

const getRankBadgeColor = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-400/30";
  if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30";
  if (rank === 3) return "bg-gradient-to-r from-amber-700 to-orange-600 text-white shadow-lg shadow-amber-700/30";
  return "bg-gray-800/80 text-gray-300 border border-gray-700/50";
};

const PortfolioCard = ({ 
  id, 
  name, 
  return: portfolioReturn, 
  sharpeRatio, 
  isOwned = false,
  isSubscribed = false,
  author,
  recentPurchases = [],
  rank
}: PortfolioCardProps) => {
  const isPositive = portfolioReturn >= 0;
  const chartData = generateSampleData(isPositive);
  
  return (
    <div className={cn(
      "bg-card border border-border p-4 mx-2 hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
      rank === 1 && "border-l-4 border-l-amber-500 shadow-amber-500/10",
      rank === 2 && "border-l-4 border-l-gray-400 shadow-gray-400/10",
      rank === 3 && "border-l-4 border-l-amber-700 shadow-amber-700/10"
    )} style={{ borderRadius: '12px' }}>
      
      {/* Top Row - Main Info */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3">
        {/* LEFT SECTION - Rank and Portfolio Info */}
        <div className="flex items-center gap-1 sm:gap-2 flex-1 min-w-0">
          {rank && (
            <div className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs font-bold flex-shrink-0 ${getRankBadgeColor(rank)}`} style={{ borderRadius: '10px' }}>
              {rank <= 3 ? (
                <Crown size={10} className="sm:w-3 sm:h-3" />
              ) : (
                rank
              )}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 mb-1">
              <h3 className="font-bold text-foreground text-sm sm:text-base truncate">{name}</h3>
              {rank && rank <= 3 && (
                <Star size={10} className="text-amber-400 fill-amber-400 flex-shrink-0 hidden sm:inline" />
              )}
              {isSubscribed && (
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0 sm:hidden" />
              )}
              {isSubscribed && (
                <span className="hidden sm:inline text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 border border-emerald-500/30 font-medium flex-shrink-0" style={{ borderRadius: '12px' }}>
                  Sub
                </span>
              )}
            </div>
            
            {author && !isOwned && (
              <p className="text-xs text-muted-foreground truncate">by {author}</p>
            )}
          </div>
        </div>

        {/* CENTER SECTION - Mini Chart */}
        <div className="hidden sm:flex flex-shrink-0 bg-secondary/30 p-2" style={{ borderRadius: '12px' }}>
          <MiniChart data={chartData} width={50} height={20} />
        </div>

        {/* RIGHT SECTION - Performance Stats */}
        <div className="text-right flex-shrink-0 min-w-[70px] sm:min-w-[85px]">
          <div className={cn(
            "text-base sm:text-lg font-bold flex items-center justify-end gap-1",
            isPositive ? "text-emerald-400" : "text-red-400"
          )}>
            {isPositive ? (
              <TrendingUp size={12} className="sm:w-4 sm:h-4" />
            ) : (
              <TrendingDown size={12} className="sm:w-4 sm:h-4" />
            )}
            <span className="text-sm sm:text-base">
              {isPositive ? '+' : ''}{portfolioReturn.toFixed(1)}%
            </span>
          </div>
          {isOwned && (
            <div className="text-xs text-muted-foreground mt-1">
              Your Portfolio
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row - Additional Info */}
      <div className="flex items-center justify-between gap-3">
        {/* Left: Recent Purchases */}
        <div className="flex-1 min-w-0">
          {recentPurchases.length > 0 && (
            <div className="text-xs text-muted-foreground">
              <span className="hidden sm:inline">Recent: </span>
              <span className="font-medium text-foreground">
                {recentPurchases.slice(0, 3).join(', ')}
                {recentPurchases.length > 3 && (
                  <span className="text-muted-foreground"> +{recentPurchases.length - 3}</span>
                )}
              </span>
            </div>
          )}
        </div>
        
        {/* Right: Sharpe Ratio */}
        {sharpeRatio && (
          <div className="text-xs text-muted-foreground flex-shrink-0">
            <span className="hidden sm:inline">Sharpe: </span>
            <span className="font-semibold text-blue-400">{sharpeRatio.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
