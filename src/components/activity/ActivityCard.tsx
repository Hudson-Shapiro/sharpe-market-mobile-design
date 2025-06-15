
import React from 'react';
import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className = '' }) => {
  const isBuy = activity.type === 'BUY';
  const sign = isBuy ? '+' : '-';
  const amountColor = isBuy ? 'text-emerald-400' : 'text-red-400';
  const cardBg = isBuy ? 'bg-emerald-500/10' : 'bg-red-500/10';
  const iconBg = isBuy ? 'bg-emerald-500/20' : 'bg-red-500/20';
  const iconColor = isBuy ? 'text-emerald-400' : 'text-red-400';

  return (
    <Card className={`overflow-hidden rounded-xl border-border/20 ${cardBg} ${className}`}>
      <Collapsible>
        <CollapsibleTrigger className="w-full text-left p-3 block group transition-colors hover:bg-white/5">
          <div className="flex items-center justify-between gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
              {isBuy ? (
                <TrendingUp className={iconColor} size={20} />
              ) : (
                <TrendingDown className={iconColor} size={20} />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-base truncate">{activity.stock}</p>
              <p className="text-sm text-muted-foreground truncate">{activity.portfolio.name}</p>
            </div>

            <div className="text-right flex-shrink-0 ml-2">
              <p className={`font-bold text-base ${amountColor}`}>
                {sign}${activity.amount.toLocaleString()}
              </p>
              <div className="flex items-center justify-end gap-1 text-muted-foreground">
                 <p className="text-sm">
                  {`${activity.quantity} @ $${activity.price.toFixed(2)}`}
                </p>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </div>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
          <div className="border-t border-border/40 mx-3"></div>
          <div className="p-3 pt-2 grid grid-cols-3 divide-x divide-border/40 text-center">
            <div className="px-1">
              <p className="text-xs text-muted-foreground">Allocation %</p>
              <p className="font-semibold text-sm text-foreground">{activity.allocation.toFixed(2)}%</p>
            </div>
            <div className="px-1">
              <p className="text-xs text-muted-foreground">SM Price</p>
              <p className="font-semibold text-sm text-foreground">${activity.smPrice.toFixed(2)}</p>
            </div>
            <div className="px-1">
              <p className="text-xs text-muted-foreground">Current Price</p>
              <p className="font-semibold text-sm text-foreground">${activity.currentPrice.toFixed(2)}</p>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

ActivityCard.displayName = 'ActivityCard';

export default ActivityCard;
