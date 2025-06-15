
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';
import { Stock } from '@/data/stocks';

interface StockHeaderProps {
  stock: Stock;
  isWatchlisted: boolean;
  onWatchlistToggle: () => void;
  onGoBack: () => void;
}

const StockHeader: React.FC<StockHeaderProps> = ({ stock, isWatchlisted, onWatchlistToggle, onGoBack }) => (
  <div className="sticky top-0 z-50 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b border-border/30">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={onGoBack}
          className="rounded-full w-10 h-10 hover:bg-secondary/50 transition-all duration-200"
        >
          <ArrowLeft size={20} />
        </Button>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{stock.logo}</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {stock.symbol}
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">{stock.name}</p>
        </div>
      </div>
      <Button 
        size="sm" 
        variant={isWatchlisted ? "default" : "outline"} 
        className="rounded-full transition-all duration-300 hover:scale-105"
        onClick={onWatchlistToggle}
      >
        <Star size={16} className={isWatchlisted ? "fill-current" : ""} />
      </Button>
    </div>
  </div>
);

export default StockHeader;
