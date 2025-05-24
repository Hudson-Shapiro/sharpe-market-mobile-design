
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Index {
  name: string;
  symbol: string;
  value: string;
  change: number;
  flag: string;
}

const GlobalIndices = () => {
  const indices: Index[] = [
    { name: "S&P 500", symbol: "^GSPC", value: "4,567.89", change: 0.34, flag: "🇺🇸" },
    { name: "NASDAQ", symbol: "^IXIC", value: "14,234.56", change: 0.67, flag: "🇺🇸" },
    { name: "DOW", symbol: "^DJI", value: "34,789.12", change: -0.12, flag: "🇺🇸" },
    { name: "FTSE", symbol: "^FTSE", value: "7,234.56", change: 0.23, flag: "🇬🇧" },
    { name: "Nikkei", symbol: "^N225", value: "28,567.89", change: -0.45, flag: "🇯🇵" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
        🌍 Global Markets
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {indices.map((index) => (
          <Card 
            key={index.symbol}
            className={`min-w-[140px] hover:scale-[1.02] transition-all duration-200 ${
              index.change >= 0 
                ? 'border-emerald-500/30 shadow-emerald-500/10' 
                : 'border-red-500/30 shadow-red-500/10'
            }`}
          >
            <CardContent className="p-3">
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-sm">{index.flag}</span>
                  <span className="font-semibold text-foreground text-xs">{index.name}</span>
                </div>
                <div className="text-sm font-bold text-foreground">{index.value}</div>
                <div className={`text-xs font-medium ${
                  index.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GlobalIndices;
