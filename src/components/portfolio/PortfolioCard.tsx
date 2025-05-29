
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import PortfolioCardHeader from './PortfolioCardHeader';
import PortfolioCardFooter from './PortfolioCardFooter';
import PortfolioCardDetails from './PortfolioCardDetails';

interface PortfolioCardProps {
  id: string;
  name: string;
  return: number;
  sharpeRatio?: number;
  sortinioRatio?: number;
  isOwned?: boolean;
  isSubscribed?: boolean;
  author?: string;
  rank?: number;
  createdDate?: string;
  lastEditedDate?: string;
  benchmark?: string;
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

const PortfolioCard = ({ 
  id, 
  name, 
  return: portfolioReturn, 
  sharpeRatio, 
  sortinioRatio,
  isOwned = false,
  isSubscribed = false,
  author,
  rank,
  createdDate = "May 10",
  lastEditedDate = "2 days ago",
  benchmark = "SPY"
}: PortfolioCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPositive = portfolioReturn >= 0;
  const chartData = generateSampleData(isPositive);
  
  return (
    <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
      <div className={cn(
        "bg-card border border-border mx-2 hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] shadow-sm relative",
        rank === 1 && "border-l-4 border-l-amber-500 shadow-amber-500/10",
        rank === 2 && "border-l-4 border-l-gray-400 shadow-gray-400/10",
        rank === 3 && "border-l-4 border-l-amber-700 shadow-amber-700/10"
      )} style={{ borderRadius: '10px' }}>
        
        <CollapsibleTrigger asChild>
          <div className="p-3 cursor-pointer">
            {/* Portfolio Header with integrated dropdown indicator */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* Rank badge if applicable */}
                {rank && rank <= 3 && (
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white",
                    rank === 1 && "bg-amber-500",
                    rank === 2 && "bg-gray-400", 
                    rank === 3 && "bg-amber-700"
                  )}>
                    {rank}
                  </div>
                )}
                
                {/* Portfolio name with dropdown indicator */}
                <h3 className="font-semibold text-foreground flex items-center gap-1">
                  {name}
                  <div className="text-muted-foreground/60">
                    {isExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                </h3>
              </div>
              
              {/* Return percentage */}
              <div className={cn(
                "text-sm font-bold flex items-center gap-1",
                isPositive ? "text-emerald-400" : "text-red-400"
              )}>
                <span className="text-xs">{isPositive ? "↗" : "↘"}</span>
                {isPositive ? "+" : ""}{portfolioReturn}%
              </div>
            </div>

            {/* Chart and other content */}
            <div className="flex items-center justify-between">
              {/* Mini chart */}
              <div className="w-16 h-8">
                <svg width="100%" height="100%" viewBox="0 0 64 32">
                  <polyline
                    fill="none"
                    stroke={isPositive ? "#10b981" : "#ef4444"}
                    strokeWidth="1.5"
                    points={chartData.map((value, index) => 
                      `${index * (64 / (chartData.length - 1))},${32 - (value / 60) * 32}`
                    ).join(' ')}
                  />
                </svg>
              </div>
              
              {/* Ownership/subscription status */}
              <div className="text-xs text-muted-foreground">
                {isOwned && "Your Portfolio"}
                {isSubscribed && !isOwned && "Subscribed"}
                {author && !isOwned && !isSubscribed && `by ${author}`}
              </div>
            </div>

            <PortfolioCardFooter 
              createdDate={createdDate}
              lastEditedDate={lastEditedDate}
              isOwned={isOwned}
              isSubscribed={isSubscribed}
              author={author}
            />
          </div>
        </CollapsibleTrigger>

        {/* Expandable Content */}
        <CollapsibleContent>
          <PortfolioCardDetails 
            sharpeRatio={sharpeRatio}
            sortinioRatio={sortinioRatio}
            benchmark={benchmark}
            createdDate={createdDate}
          />
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default PortfolioCard;
