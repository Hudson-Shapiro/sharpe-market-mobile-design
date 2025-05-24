
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ActivityCardProps {
  activity: {
    portfolio: string;
    stock: string;
    date: string;
    quantity: number;
    price: number;
    amount: number;
    type: 'BUY' | 'SELL';
  };
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAmountAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('-');
    return `${month}/${day}`;
  };

  return (
    <Card 
      className={`border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer relative overflow-hidden group ${
        activity.type === 'BUY' 
          ? 'bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 hover:from-emerald-500/10 hover:to-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 hover:shadow-emerald-500/10' 
          : 'bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 hover:from-red-500/10 hover:to-red-500/10 border-red-500/20 hover:border-red-500/30 hover:shadow-red-500/10 bg-card/95'
      }`}
      onClick={handleCardClick}
    >
      {/* Subtle left edge stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
        activity.type === 'BUY' ? 'bg-gradient-to-b from-emerald-400/60 to-green-500/40' : 'bg-gradient-to-b from-red-400/60 to-red-600/40'
      } group-hover:w-1 group-hover:shadow-lg ${
        activity.type === 'BUY' ? 'group-hover:shadow-emerald-500/30' : 'group-hover:shadow-red-500/30'
      }`} />
      
      <CardContent className="p-3 pl-4">
        {/* Main Content - Streamlined Layout */}
        <div className="space-y-2">
          {/* Top Row: Portfolio Name + Action Chip */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground text-sm truncate flex-1 mr-3">
              {activity.portfolio}
            </h3>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
              activity.type === 'BUY' 
                ? 'bg-gradient-to-r from-emerald-500/30 to-green-500/40 text-emerald-400 shadow-md shadow-emerald-500/20' 
                : 'bg-gradient-to-r from-red-500/30 to-red-600/40 text-red-400 shadow-md shadow-red-500/20'
            }`}>
              {activity.type === 'BUY' ? <TrendingUp size={10} className="drop-shadow-sm" /> : <TrendingDown size={10} className="drop-shadow-sm" />}
              {activity.type}
            </span>
          </div>
          
          {/* Bottom Row: Ticker + Qty x Price + Date | PnL (right-aligned) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-bold text-foreground">{activity.stock}</span>
              <span className="text-muted-foreground font-mono text-xs">
                {activity.quantity} × ${activity.price.toFixed(2)}
              </span>
              <span className="text-muted-foreground text-xs">
                {formatDate(activity.date)}
              </span>
            </div>
            
            <div 
              className={`font-bold text-base font-mono transition-all duration-300 ${
                activity.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'
              } ${isAnimating ? 'scale-110 drop-shadow-lg' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleAmountAnimation();
              }}
            >
              {activity.type === 'BUY' ? '+' : '-'}${activity.amount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <p className="text-muted-foreground">Execution Time:</p>
                <p className="text-foreground font-medium">2:34 PM EST</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Order Type:</p>
                <p className="text-foreground font-medium">Market Order</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Commission:</p>
                <p className="text-emerald-400 font-medium">$0.00</p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground">Source:</p>
                <p className="text-foreground font-medium">Manual</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
