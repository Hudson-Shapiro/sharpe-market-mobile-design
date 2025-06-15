
import React from 'react';
import { Stock } from '@/data/stocks';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StockInfoDisplay: React.FC<{ stock: Stock }> = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <div>
      <p className="text-sm font-medium text-muted-foreground">{stock.symbol}</p>
      <h1 className="text-3xl font-bold text-foreground">{stock.name}</h1>
      <p className="text-4xl font-bold text-foreground mt-2">${stock.price.toFixed(2)}</p>
      <div className={`flex items-center gap-1 mt-1 text-md font-medium ${
          isPositive ? 'text-emerald-400' : 'text-red-400'
        }`}>
          {isPositive ? <TrendingUp size={18} className="inline-block" /> : <TrendingDown size={18} className="inline-block" />}
          <span> {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)</span>
      </div>
    </div>
  );
};

export default StockInfoDisplay;
