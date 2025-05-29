
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
          <div className="p-4 cursor-pointer">
            {/* Header Row: Title + Dropdown + Return */}
            <div className="flex items-center justify-between mb-4">
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
                <h3 className="font-semibold text-foreground text-base">
                  {name}
                </h3>
                
                {/* Dropdown chevron right next to title */}
                <div className="text-muted-foreground/60">
                  {isExpanded ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
              </div>
              
              {/* Return percentage */}
              <div className={cn(
                "text-base font-bold flex items-center gap-1",
                isPositive ? "text-emerald-400" : "text-red-400"
              )}>
                <span className="text-sm">{isPositive ? "📈" : "📉"}</span>
                {isPositive ? "+" : ""}{portfolioReturn}%
              </div>
            </div>

            {/* Centered Graph Area */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-8">
                <svg width="100%" height="100%" viewBox="0 0 80 32">
                  <defs>
                    <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0.2" />
                      <stop offset="100%" stopColor={isPositive ? "#10b981" : "#ef4444"} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Gradient fill under the line */}
                  <polygon
                    fill={`url(#gradient-${id})`}
                    points={`0,32 ${chartData.map((value, index) => 
                      `${index * (80 / (chartData.length - 1))},${32 - (value / 60) * 32}`
                    ).join(' ')} 80,32`}
                  />
                  
                  {/* The main line */}
                  <polyline
                    fill="none"
                    stroke={isPositive ? "#10b981" : "#ef4444"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={chartData.map((value, index) => 
                      `${index * (80 / (chartData.length - 1))},${32 - (value / 60) * 32}`
                    ).join(' ')}
                  />
                </svg>
              </div>
            </div>

            {/* Meta Row: Dates + Ownership */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>📅 {createdDate}</span>
                <span>✏️ {lastEditedDate}</span>
              </div>
              
              {/* Ownership/Creator Info */}
              <div className="flex items-center">
                {isOwned && (
                  <span className="text-emerald-400 font-medium">✅ Your Portfolio</span>
                )}
                {author && isSubscribed && !isOwned && (
                  <span className="text-purple-400 font-medium">👤 by {author}</span>
                )}
                {author && !isSubscribed && !isOwned && (
                  <span className="text-muted-foreground">👤 by {author}</span>
                )}
              </div>
            </div>
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
