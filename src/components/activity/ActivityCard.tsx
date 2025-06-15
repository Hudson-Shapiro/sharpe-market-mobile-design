
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, ChevronDown, ChevronUp, Percent, DollarSign } from 'lucide-react';

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
  
  const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('-');
    return `${month}/${day}`;
  };

  // Calculate price change if we have both SM Price and Current Price
  const priceChange = activity.smPrice && activity.currentPrice 
    ? ((activity.currentPrice - activity.smPrice) / activity.smPrice * 100)
    : null;

  return (
    <Card 
      className={`border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg relative overflow-hidden group ${
        activity.type === 'BUY' 
          ? 'bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 hover:from-emerald-500/10 hover:to-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 hover:shadow-emerald-500/10' 
          : 'bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 hover:from-red-500/10 hover:to-red-500/10 border-red-500/20 hover:border-red-500/30 hover:shadow-red-500/10'
      }`}
      style={{ borderRadius: '12px' }}
    >
      {/* Subtle left edge stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
        activity.type === 'BUY' ? 'bg-gradient-to-b from-emerald-400/60 to-green-500/40' : 'bg-gradient-to-b from-red-400/60 to-red-600/40'
      } group-hover:w-1 group-hover:shadow-lg ${
        activity.type === 'BUY' ? 'group-hover:shadow-emerald-500/30' : 'group-hover:shadow-red-500/30'
      }`} />
      
      <CardContent className="p-3 pl-4">
        {/* Main Row Layout */}
        <div className="flex items-center justify-between">
          {/* Left Side: Action Type + Portfolio/Stock Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold transition-all duration-300 ${
              activity.type === 'BUY' 
                ? 'bg-gradient-to-r from-emerald-500/30 to-green-500/40 text-emerald-400 shadow-md shadow-emerald-500/20' 
                : 'bg-gradient-to-r from-red-500/30 to-red-600/40 text-red-400 shadow-md shadow-red-500/20'
            }`} style={{ borderRadius: '8px' }}>
              {activity.type === 'BUY' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {activity.type}
            </span>
            
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-foreground text-sm">{activity.stock}</span>
                {activity.allocation && (
                  <span className="text-xs bg-secondary/50 text-muted-foreground px-1.5 py-0.5 rounded-md font-mono">
                    {activity.allocation}%
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground truncate">
                {activity.portfolio}
              </div>
            </div>
          </div>
          
          {/* Center: Quantity & Price Info */}
          <div className="flex flex-col items-center px-3 min-w-0">
            <div className="text-xs font-mono text-foreground">
              {activity.quantity} × ${activity.price.toFixed(2)}
            </div>
            <div className="text-xs text-muted-foreground">
              {formatDate(activity.date)}
            </div>
          </div>
          
          {/* Right Side: Amount + Expand Button */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className={`font-bold text-base font-mono ${
                activity.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {activity.type === 'BUY' ? '+' : '-'}${activity.amount.toLocaleString()}
              </div>
              {priceChange && (
                <div className={`text-xs font-medium ${
                  priceChange >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(1)}%
                </div>
              )}
            </div>
            
            {(activity.smPrice || activity.currentPrice) && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-secondary/50 rounded-md transition-colors"
              >
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (activity.smPrice || activity.currentPrice) && (
          <div className="mt-3 pt-3 border-t border-border/30 animate-fade-in">
            <div className="grid grid-cols-2 gap-4 text-xs">
              {activity.smPrice && (
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-blue-500/20 rounded">
                    <DollarSign size={10} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">SM Price</p>
                    <p className="font-mono text-foreground">${activity.smPrice.toFixed(2)}</p>
                  </div>
                </div>
              )}
              
              {activity.currentPrice && (
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-purple-500/20 rounded">
                    <TrendingUp size={10} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Current Price</p>
                    <p className="font-mono text-foreground">${activity.currentPrice.toFixed(2)}</p>
                  </div>
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
