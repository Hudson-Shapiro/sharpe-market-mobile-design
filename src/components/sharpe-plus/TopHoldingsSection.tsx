
import React from 'react';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

interface TopHoldingsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TopHoldingsSection = ({ isExpanded, onToggle }: TopHoldingsSectionProps) => {
  const topHoldings = [
    { ticker: 'NVDA', name: 'NVIDIA Corp', portfolioPercent: 78.4, avgAllocation: 12.3, change: 5.2, logo: '🟢' },
    { ticker: 'AAPL', name: 'Apple Inc', portfolioPercent: 72.1, avgAllocation: 8.7, change: -2.1, logo: '🍎' },
    { ticker: 'MSFT', name: 'Microsoft', portfolioPercent: 68.9, avgAllocation: 9.4, change: 3.7, logo: '🔷' },
    { ticker: 'TSLA', name: 'Tesla Inc', portfolioPercent: 55.2, avgAllocation: 6.8, change: -4.3, logo: '⚡' },
    { ticker: 'GOOGL', name: 'Alphabet Inc', portfolioPercent: 51.8, avgAllocation: 7.2, change: 1.9, logo: '🌈' },
    { ticker: 'AMZN', name: 'Amazon', portfolioPercent: 49.3, avgAllocation: 5.9, change: 2.8, logo: '📦' }
  ];

  const generateSparklineData = () => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  return (
    <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
      <button 
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          📍 Top Holdings
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Live</span>
        </h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {topHoldings.map((holding, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-lg">{holding.logo}</span>
                <div className="min-w-0">
                  <div className="font-medium text-sm">{holding.ticker}</div>
                  <div className="text-xs text-muted-foreground">{holding.portfolioPercent}% of portfolios</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 ${holding.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {holding.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span className="text-xs font-medium">{Math.abs(holding.change)}%</span>
                </div>
                <div className="w-8 h-4">
                  <MiniChart data={generateSparklineData()} width={32} height={16} />
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
