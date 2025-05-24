
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

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowActions(!showActions);
  };

  return (
    <Card 
      className={`border border-border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
        activity.type === 'BUY' 
          ? 'bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20' 
          : 'bg-red-500/5 hover:bg-red-500/10 border-red-500/20'
      }`}
      onClick={handleCardClick}
    >
      <CardContent className="p-4">
        {/* Main Content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            {/* Portfolio & Stock Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground text-sm truncate">
                  {activity.portfolio}
                </h3>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${
                  activity.type === 'BUY' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {activity.type === 'BUY' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {activity.type}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-foreground">{activity.stock}</span>
                <span className={`font-semibold ${
                  activity.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {activity.type === 'BUY' ? '+' : '-'}${activity.amount.toLocaleString()}
                </span>
              </div>
              
              <p className="text-xs text-muted-foreground">
                {activity.date} • {activity.quantity} @ ${activity.price}
              </p>
            </div>
          </div>

          {/* Actions Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleActionsClick}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <MoreHorizontal size={16} />
            </Button>
            
            {showActions && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg z-20 min-w-[120px]">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  <RefreshCw size={12} className="mr-2" />
                  Repeat Trade
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  View Details
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-muted-foreground">Execution Time:</p>
                <p className="text-foreground font-medium">2:34 PM EST</p>
              </div>
              <div>
                <p className="text-muted-foreground">Order Type:</p>
                <p className="text-foreground font-medium">Market Order</p>
              </div>
              <div>
                <p className="text-muted-foreground">Commission:</p>
                <p className="text-foreground font-medium">$0.00</p>
              </div>
              <div>
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
