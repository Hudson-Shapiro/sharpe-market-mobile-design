
import React from 'react';
import { TrendingUp, TrendingDown, Star, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import MiniChart from '../discover/MiniChart';

interface PortfolioCardHeaderProps {
  rank?: number;
  name: string;
  portfolioReturn: number;
  chartData: number[];
}

const getRankBadgeColor = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg shadow-amber-400/30";
  if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30";
  if (rank === 3) return "bg-gradient-to-r from-amber-700 to-orange-600 text-white shadow-lg shadow-amber-700/30";
  return "bg-gray-800/80 text-gray-300 border border-gray-700/50";
};

const PortfolioCardHeader = ({ rank, name, portfolioReturn, chartData }: PortfolioCardHeaderProps) => {
  const isPositive = portfolioReturn >= 0;

  return (
    <div className="flex items-center gap-2 mb-2">
      {/* Rank Badge */}
      {rank && (
        <div className={`w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 ${getRankBadgeColor(rank)}`} style={{ borderRadius: '8px' }}>
          {rank <= 3 ? (
            <Crown size={8} />
          ) : (
            rank
          )}
        </div>
      )}
      
      {/* Portfolio Name */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <h3 className="font-bold text-foreground text-sm truncate">{name}</h3>
          {rank && rank <= 3 && (
            <Star size={8} className="text-amber-400 fill-amber-400 flex-shrink-0" />
          )}
        </div>
      </div>

      {/* Mini Chart */}
      <div className="flex-shrink-0 bg-secondary/20 p-1" style={{ borderRadius: '6px' }}>
        <MiniChart data={chartData} width={32} height={12} />
      </div>

      {/* Performance */}
      <div className={cn(
        "text-sm font-bold flex items-center gap-1 flex-shrink-0 min-w-[60px] justify-end",
        isPositive ? "text-emerald-400" : "text-red-400"
      )}>
        {isPositive ? (
          <TrendingUp size={10} />
        ) : (
          <TrendingDown size={10} />
        )}
        <span className="text-xs">
          {isPositive ? '+' : ''}{portfolioReturn.toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

export default PortfolioCardHeader;
