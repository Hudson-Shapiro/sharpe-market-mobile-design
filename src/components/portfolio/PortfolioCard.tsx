
import React, { useState } from 'react';
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
        "bg-card border border-border hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.01] shadow-sm",
        rank === 1 && "border-l-4 border-l-amber-500 shadow-amber-500/10",
        rank === 2 && "border-l-4 border-l-gray-400 shadow-gray-400/10",
        rank === 3 && "border-l-4 border-l-amber-700 shadow-amber-700/10"
      )} style={{ borderRadius: '10px' }}>
        
        <CollapsibleTrigger asChild>
          <div className="p-4 cursor-pointer">
            <PortfolioCardHeader 
              rank={rank}
              name={name}
              portfolioReturn={portfolioReturn}
              chartData={chartData}
            />

            <PortfolioCardFooter 
              createdDate={createdDate}
              lastEditedDate={lastEditedDate}
              isOwned={isOwned}
              isSubscribed={isSubscribed}
              author={author}
              isExpanded={isExpanded}
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
