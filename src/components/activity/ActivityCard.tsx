
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Percent, DollarSign, Calendar } from 'lucide-react';

interface ActivityCardProps {
  activity: {
    portfolio: string;
    stock: string;
    date: string;
    quantity: number;
    price: number;
    amount: number;
    type: 'BUY' | 'SELL';
    allocation?: number;
    smPrice?: number;
    currentPrice?: number;
  };
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const priceChange = activity.smPrice && activity.currentPrice 
    ? ((activity.currentPrice - activity.smPrice) / activity.smPrice * 100)
    : null;

  return (
    <Card 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl relative overflow-hidden group cursor-pointer ${
        activity.type === 'BUY' 
          ? 'bg-gradient-to-r from-emerald-900/10 via-transparent to-emerald-900/10 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10' 
          : 'bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 border-red-500/20 hover:border-red-500/40 hover:shadow-red-500/10'
      }`}
      style={{ borderRadius: '12px' }}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
        activity.type === 'BUY' ? 'bg-emerald-500/70' : 'bg-red-500/70'
      }`} />
      
      <CardContent className="p-3 pl-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full ${
              activity.type === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {activity.type === 'BUY' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            </div>
            
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-bold text-foreground text-sm truncate">{activity.stock}</span>
              <div className="text-xs text-muted-foreground truncate">
                {activity.portfolio}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end flex-shrink-0">
            <div className={`font-bold text-base font-mono ${
              activity.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {activity.type === 'BUY' ? '+' : '-'}${activity.amount.toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              {activity.quantity} @ ${activity.price.toFixed(2)}
            </div>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/20 animate-fade-in text-xs">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-1.5"><Calendar size={12}/> Date</span>
                <span className="font-mono text-foreground">{activity.date}</span>
              </div>
              {activity.allocation && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5"><Percent size={12}/> Allocation</span>
                  <span className="font-mono text-foreground">{activity.allocation.toFixed(2)}%</span>
                </div>
              )}
              {activity.smPrice && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5"><DollarSign size={12}/> SM Price</span>
                  <span className="font-mono text-foreground">${activity.smPrice.toFixed(2)}</span>
                </div>
              )}
              {activity.currentPrice && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5"><TrendingUp size={12}/> Current Price</span>
                  <span className="font-mono text-foreground">${activity.currentPrice.toFixed(2)}</span>
                </div>
              )}
               {priceChange !== null && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <TrendingUp size={12} className={priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'}/> Gain/Loss
                  </span>
                  <span className={`font-mono font-medium ${priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
