
import React from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Area, AreaChart } from 'recharts';

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

// Sample chart data - in real app, this would come from props
const generateSampleData = (isPositive: boolean) => {
  const points = 20;
  const data = [];
  let value = 100;
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - (isPositive ? 0.4 : 0.6)) * 5;
    value += change;
    data.push({ value: Math.max(50, value) });
  }
  
  return data;
};

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
  const chartData = generateSampleData(isPositive);
  
  return (
    <div className={cn(
      "group bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-3 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl active:scale-[0.98]",
      "hover:bg-gray-900/80 hover:border-gray-700/80",
      isPositive && "hover:shadow-emerald-500/10",
      !isPositive && "hover:shadow-red-500/10",
      rank === 1 && "border-l-4 border-l-amber-500 shadow-amber-500/10",
      rank === 2 && "border-l-4 border-l-gray-400 shadow-gray-400/10",
      rank === 3 && "border-l-4 border-l-amber-700 shadow-amber-700/10",
    )}>
      {/* Top Row: Rank, Name, Subscription Badge */}
      <div className="flex items-center gap-2 mb-2">
        {rank && (
          <span className="text-xs bg-gray-800/80 backdrop-blur-sm text-gray-300 w-5 h-5 rounded-full flex items-center justify-center font-semibold border border-gray-700/50">
            {rank}
          </span>
        )}
        <h3 className="text-white font-semibold text-sm group-hover:text-gray-100 transition-colors flex-1">{name}</h3>
        {rank && rank <= 3 && (
          <Star size={12} className="text-amber-400 fill-amber-400 drop-shadow-lg" />
        )}
        {isSubscribed && (
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 font-medium">
            Sub
          </span>
        )}
      </div>
      
      {/* Chart positioned between name and return */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-16 h-6 group-hover:scale-105 transition-transform duration-300">
          <AreaChart width={64} height={24} data={chartData} margin={{ top: 1, right: 1, left: 1, bottom: 1 }}>
            <defs>
              <linearGradient id={`chartGradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={isPositive ? "#10b981" : "#ef4444"} 
              strokeWidth={1.5}
              fill={`url(#chartGradient-${id})`} 
              dot={false}
              animationDuration={0}
            />
          </AreaChart>
        </div>
        
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg font-semibold text-sm transition-all duration-300",
          isPositive 
            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10" 
            : "text-red-400 bg-red-500/10 border border-red-500/20 shadow-lg shadow-red-500/10"
        )}>
          {isPositive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          <span className="text-xs">
            {isPositive ? '+' : ''}{portfolioReturn.toFixed(1)}%
          </span>
        </div>
      </div>
      
      {/* Bottom Row: Author and Sharpe Ratio */}
      <div className="flex items-center justify-between">
        <div>
          {author && !isOwned && (
            <p className="text-gray-400 text-xs">by {author}</p>
          )}
        </div>
        {sharpeRatio && (
          <div className="text-xs text-gray-400">
            Sharpe: <span className={cn(
              "font-semibold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20",
              "shadow-sm shadow-blue-500/10"
            )}>{sharpeRatio.toFixed(1)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
