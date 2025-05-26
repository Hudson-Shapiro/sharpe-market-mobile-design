
import React from 'react';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

interface BehavioralMoversSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const BehavioralMoversSection = ({ isExpanded, onToggle }: BehavioralMoversSectionProps) => {
  const behavioralMovers = [
    { ticker: 'TSLA', change: '+14.5% allocation increase', portfolios: '6.2% of portfolios', trend: 'up' },
    { ticker: 'AMD', change: '+8.3% allocation increase', portfolios: '3.8% of portfolios', trend: 'up' },
    { ticker: 'NVDA', change: '-2.1% allocation decrease', portfolios: '78.4% of portfolios', trend: 'down' },
    { ticker: 'META', change: '+5.7% allocation increase', portfolios: '4.6% of portfolios', trend: 'up' }
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
          🔄 Investor Shifts Today
          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>24h</span>
        </h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {behavioralMovers.map((mover, i) => (
              <div key={i} className="min-w-[200px] p-3 bg-background/30 flex-shrink-0" style={{ borderRadius: '10px' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-sm">{mover.ticker}</span>
                  {mover.trend === 'up' ? 
                    <TrendingUp size={12} className="text-emerald-400" /> : 
                    <TrendingDown size={12} className="text-red-400" />
                  }
                </div>
                <div className="text-xs text-muted-foreground mb-1">{mover.change}</div>
                <div className="text-xs text-muted-foreground">{mover.portfolios}</div>
                <div className="mt-2 w-full h-4">
                  <MiniChart data={generateSparklineData()} width={160} height={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BehavioralMoversSection;
