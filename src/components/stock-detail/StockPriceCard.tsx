
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '@/data/stocks';

interface StockPriceCardProps {
  stock: Stock;
  lastUpdated: Date;
}

const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
};

const StockPriceCard: React.FC<StockPriceCardProps> = ({ stock, lastUpdated }) => {
  const isPositive = stock.change >= 0;

  return (
    <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/30" style={{ borderRadius: '16px' }}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-3xl font-bold text-foreground animate-pulse-slow">
            ${stock.price.toFixed(2)}
          </div>
          <div className="text-right">
            <div className={`flex items-center gap-2 text-lg font-bold transition-all duration-300 ${
              isPositive ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {isPositive ? <TrendingUp size={20} className="animate-bounce" /> : <TrendingDown size={20} className="animate-bounce" />}
              {isPositive ? '+' : ''}${stock.change.toFixed(2)}
            </div>
            <div className={`text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%) Today
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>Live • Last updated {formatTime(lastUpdated)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockPriceCard;
