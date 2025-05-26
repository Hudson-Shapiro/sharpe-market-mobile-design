
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Star, Crown, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const isPositive = portfolioReturn >= 0;
  const chartData = generateSampleData(isPositive);
  
  return (
    <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
      <div className={cn(
        "bg-card border border-border mx-2 hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] shadow-sm",
        rank === 1 && "border-l-4 border-l-amber-500 shadow-amber-500/10",
        rank === 2 && "border-l-4 border-l-gray-400 shadow-gray-400/10",
        rank === 3 && "border-l-4 border-l-amber-700 shadow-amber-700/10"
      )} style={{ borderRadius: '10px' }}>
        
        <CollapsibleTrigger asChild>
          <div className="p-2.5 cursor-pointer">
            {/* Header Section - Compact Top Row */}
            <div className="flex items-center gap-2 mb-1">
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
              
              {/* Portfolio Name & Creator */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-foreground text-sm truncate">{name}</h3>
                  {rank && rank <= 3 && (
                    <Star size={8} className="text-amber-400 fill-amber-400 flex-shrink-0" />
                  )}
                </div>
                {/* Creator Info for Subscribed Portfolios */}
                {author && isSubscribed && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <p className="text-xs text-muted-foreground truncate">by {author}</p>
                  </div>
                )}
              </div>

              {/* Sharpe Ratio */}
              {sharpeRatio && (
                <div className="text-xs text-blue-400 font-semibold flex-shrink-0">
                  {sharpeRatio.toFixed(1)}
                </div>
              )}

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
              
              {/* Expand Icon */}
              <div className="ml-1 flex-shrink-0">
                {isExpanded ? (
                  <ChevronUp size={12} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={12} className="text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Holdings Pills Row */}
            {recentPurchases.length > 0 && (
              <div className="flex items-center gap-1 mb-1">
                <div className="flex gap-1 flex-wrap">
                  {recentPurchases.slice(0, 3).map((ticker, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary/40 text-foreground px-1.5 py-0.5 font-medium"
                      style={{ borderRadius: '999px' }}
                    >
                      {ticker}
                    </span>
                  ))}
                  {recentPurchases.length > 3 && (
                    <span
                      className="text-xs bg-secondary/40 text-muted-foreground px-1.5 py-0.5"
                      style={{ borderRadius: '999px' }}
                    >
                      +{recentPurchases.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Info Row - Compact */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>🧠 {sharpeRatio && sharpeRatio > 1.5 ? 'Moderate' : sharpeRatio && sharpeRatio > 1 ? 'Conservative' : 'Aggressive'}</span>
                <span>🕒 2d ago</span>
                {isOwned && (
                  <span className="text-emerald-400 font-medium">Your Portfolio</span>
                )}
              </div>
              <span className="text-emerald-400 text-xs font-medium hover:text-emerald-300 cursor-pointer">
                View Stats →
              </span>
            </div>
          </div>
        </CollapsibleTrigger>

        {/* Expandable Content */}
        <CollapsibleContent>
          <div className="px-2.5 pb-2.5 pt-0 border-t border-border/30 bg-secondary/5" style={{ borderRadius: '0 0 10px 10px' }}>
            <div className="space-y-2 pt-2">
              {/* Recent Holdings */}
              {recentPurchases.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-1">Recent Holdings</h4>
                  <div className="flex flex-wrap gap-1">
                    {recentPurchases.map((ticker, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary/50 text-foreground px-2 py-1 font-medium"
                        style={{ borderRadius: '10px' }}
                      >
                        {ticker}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Portfolio Info */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground mb-1">Portfolio Info</h4>
                <div className="space-y-0.5 text-xs text-muted-foreground">
                  <div>Strategy: {isOwned ? 'Personal portfolio' : `${author}'s strategy`}</div>
                  <div>Risk Level: {sharpeRatio && sharpeRatio > 1.5 ? 'Moderate' : sharpeRatio && sharpeRatio > 1 ? 'Conservative' : 'Aggressive'}</div>
                  <div>Last Updated: 2 days ago</div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="pt-1">
                <Button 
                  size="sm" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-7"
                  style={{ borderRadius: '10px' }}
                >
                  View Full Stats
                </Button>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default PortfolioCard;
