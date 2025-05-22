
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
      "bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-2 hover:bg-gray-900/70 transition-all duration-200",
      rank === 1 && "border-l-4 border-l-amber-500",
      rank === 2 && "border-l-4 border-l-gray-400",
      rank === 3 && "border-l-4 border-l-amber-700",
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {rank && (
            <span className="text-xs bg-gray-800 text-gray-300 w-5 h-5 rounded-full flex items-center justify-center">
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
        
        <div className={cn(
          "flex items-center gap-0.5",
          isPositive ? "text-emerald-400" : "text-red-400"
        )}>
          {isPositive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          <span className="font-semibold text-sm">
            {isPositive ? '+' : ''}{portfolioReturn.toFixed(1)}%
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-1">
        <div>
          {author && !isOwned && (
            <p className="text-gray-400 text-xs">by {author}</p>
          )}
          {sharpeRatio && (
            <div className="text-xs text-gray-400">
              Sharpe: <span className="text-white">{sharpeRatio.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        {/* Mini chart */}
        <div className="w-16 h-8">
          <AreaChart width={64} height={32} data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`chartGradient-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity={0.3}/>
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
      </div>
    </div>
  );
};

export default PortfolioCard;
