
import React from 'react';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

interface TopSectorsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TopSectorsSection = ({ isExpanded, onToggle }: TopSectorsSectionProps) => {
  const topSectors = [
    { name: 'Technology', percent: 42.3, avgAllocation: 28.7, change: 2.4, icon: '💻' },
    { name: 'Healthcare', percent: 15.8, avgAllocation: 12.1, change: -0.8, icon: '🧬' },
    { name: 'Financial', percent: 12.4, avgAllocation: 9.6, change: 1.2, icon: '🏦' },
    { name: 'Consumer Disc.', percent: 11.7, avgAllocation: 8.3, change: -1.5, icon: '🛒' },
    { name: 'Energy', percent: 8.9, avgAllocation: 6.2, change: 3.1, icon: '⚡' },
    { name: 'Industrial', percent: 5.2, avgAllocation: 4.1, change: 0.6, icon: '🏭' }
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
          📍 Top Sectors
          <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Updated</span>
        </h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {topSectors.map((sector, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
              <div className="flex items-center gap-3">
                <span className="text-lg">{sector.icon}</span>
                <div>
                  <div className="font-medium text-sm">{sector.name}</div>
                  <div className="text-xs text-muted-foreground">{sector.percent}% of portfolios</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 ${sector.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {sector.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span className="text-xs font-medium">{Math.abs(sector.change)}%</span>
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

export default TopSectorsSection;
