import React from 'react';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

interface TopHoldingsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TopHoldingsSection = ({ isExpanded, onToggle }: TopHoldingsSectionProps) => {
  const topHoldings = [
    { ticker: 'NVDA', name: 'NVIDIA Corp', portfolioPercent: 78.4, avgAllocation: 12.3, dayChange: 5.2, logo: '🟢' },
    { ticker: 'AAPL', name: 'Apple Inc', portfolioPercent: 72.1, avgAllocation: 8.7, dayChange: -2.1, logo: '🍎' },
    { ticker: 'MSFT', name: 'Microsoft', portfolioPercent: 68.9, avgAllocation: 9.4, dayChange: 3.7, logo: '🔷' },
    { ticker: 'TSLA', name: 'Tesla Inc', portfolioPercent: 55.2, avgAllocation: 6.8, dayChange: -4.3, logo: '⚡' },
    { ticker: 'GOOGL', name: 'Alphabet Inc', portfolioPercent: 51.8, avgAllocation: 7.2, dayChange: 1.9, logo: '🌈' },
    { ticker: 'AMZN', name: 'Amazon', portfolioPercent: 49.3, avgAllocation: 5.9, dayChange: 2.8, logo: '📦' }
  ];

  const generateSparklineData = () => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  return (
    <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden rounded-xl">
      <button 
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          📍 Top Holdings
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 font-medium rounded-xl">Live</span>
        </h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {/* Headers */}
          <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground font-medium px-3 py-2 bg-background/20 rounded-xl">
            <div>Stock</div>
            <div className="text-center">% of Portfolios</div>
            <div className="text-center">Avg Allocation %</div>
            <div className="text-center">Day Change %</div>
          </div>
          
          {topHoldings.map((holding, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 items-center p-3 bg-background/30 rounded-xl">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg">{holding.logo}</span>
                <div className="min-w-0">
                  <div className="font-medium text-sm">{holding.ticker}</div>
                  <div className="text-xs text-muted-foreground truncate">{holding.name}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium">{holding.portfolioPercent}%</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium text-blue-400">{holding.avgAllocation}%</div>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                <div className={`flex items-center gap-1 ${holding.dayChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {holding.dayChange >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span className="text-sm font-medium">{Math.abs(holding.dayChange)}%</span>
                </div>
                <div className="w-6 h-3 ml-1">
                  <MiniChart data={generateSparklineData()} width={24} height={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopHoldingsSection;
