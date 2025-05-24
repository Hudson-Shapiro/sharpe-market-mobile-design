
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, MoreHorizontal, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const [showActions, setShowActions] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowActions(!showActions);
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
      className={`border border-border transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer relative overflow-hidden group ${
        activity.type === 'BUY' 
          ? 'bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 hover:from-emerald-500/10 hover:to-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/10' 
          : 'bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 hover:from-red-500/10 hover:to-red-500/10 border-red-500/20 hover:border-red-500/40 hover:shadow-red-500/10'
      }`}
      onClick={handleCardClick}
    >
      {/* Left edge color stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
        activity.type === 'BUY' ? 'bg-gradient-to-b from-emerald-400 to-green-500' : 'bg-gradient-to-b from-red-400 to-red-600'
      } group-hover:w-1.5`} />
      
      <CardContent className="p-4 pl-6">
        {/* Main Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Portfolio & Stock Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold text-foreground text-sm truncate">
                  {activity.portfolio}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  activity.type === 'BUY' 
                    ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20' 
                    : 'bg-gradient-to-r from-red-500/20 to-red-600/30 text-red-400 shadow-lg shadow-red-500/20'
                }`}>
                  {activity.type === 'BUY' ? <TrendingUp size={12} className="drop-shadow-sm" /> : <TrendingDown size={12} className="drop-shadow-sm" />}
                  {activity.type}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-bold text-foreground text-base">{activity.stock}</span>
                  <span className="text-muted-foreground font-mono">
                    {activity.quantity} × ${activity.price.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {formatDate(activity.date)}
                  </span>
                </div>
                
                <div 
                  className={`font-bold text-lg font-mono transition-all duration-300 ${
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
          </div>

          {/* Actions Menu */}
          <div className="relative ml-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleActionsClick}
              className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              <MoreHorizontal size={16} />
            </Button>
            
            {showActions && (
              <div className="absolute right-0 top-full mt-1 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-2xl z-20 min-w-[140px] animate-fade-in">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs hover:bg-secondary/50 transition-colors">
                  <RefreshCw size={12} className="mr-2" />
                  Repeat Trade
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs hover:bg-secondary/50 transition-colors">
                  View Details
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="grid grid-cols-2 gap-4 text-xs">
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
