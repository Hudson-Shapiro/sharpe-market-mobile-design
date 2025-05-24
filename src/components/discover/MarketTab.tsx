
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';
import TopMoversCarousel from './TopMoversCarousel';
import IndustryHeatmap from './IndustryHeatmap';
import GlobalIndices from './GlobalIndices';

const MarketTab = () => {
  const [sectorFilter, setSectorFilter] = useState("");

  const marketData = [
    {
      symbol: "SPY",
      name: "SPDR S&P 500 ETF",
      price: 445.67,
      change: 2.34,
      changePercent: 0.53,
      volume: "45.2M"
    },
    {
      symbol: "QQQ",
      name: "Invesco QQQ Trust",
      price: 378.92,
      change: -1.45,
      changePercent: -0.38,
      volume: "28.7M"
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 189.45,
      change: 3.21,
      changePercent: 1.72,
      volume: "67.1M"
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 378.85,
      change: -0.89,
      changePercent: -0.23,
      volume: "23.4M"
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.32,
      change: 15.67,
      changePercent: 1.82,
      volume: "89.3M"
    }
  ];

  const handleSectorFilter = (sector: string) => {
    setSectorFilter(sector);
  };

  return (
    <div className="space-y-6">
      {/* Top Movers Carousel */}
      <TopMoversCarousel />

      {/* Industry Heatmap */}
      <IndustryHeatmap onSectorFilter={handleSectorFilter} />

      {/* Global Indices */}
      <GlobalIndices />

      {/* Market Overview Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-foreground">Market Overview</h2>
          <Badge variant="outline" className="text-muted-foreground animate-pulse">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            Live
          </Badge>
        </div>

        <div className="space-y-3">
          {marketData.map((stock, index) => (
            <div key={index} className="bg-card border border-border p-4 hover:bg-card/80 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg" style={{ borderRadius: '12px' }}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground">{stock.symbol}</h3>
                    <Badge variant="secondary" className="text-xs" style={{ borderRadius: '12px' }}>
                      Vol: {stock.volume}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{stock.name}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-foreground">
                    ${stock.price.toFixed(2)}
                  </div>
                  <div className={`flex items-center gap-1 justify-end transition-all duration-200 ${
                    stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    <span className="text-sm font-medium">
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors border border-emerald-400/30 hover:bg-emerald-400/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" style={{ borderRadius: '12px' }}>
          View All Markets
        </button>
      </div>
    </div>
  );
};

export default MarketTab;
