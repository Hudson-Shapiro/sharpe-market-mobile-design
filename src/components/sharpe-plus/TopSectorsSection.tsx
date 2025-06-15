
import React from 'react';
import { ChevronDown, ChevronUp, TrendingUp, TrendingDown } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

interface TopSectorsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const TopSectorsSection = ({ isExpanded, onToggle }: TopSectorsSectionProps) => {
  const topSectors = [
    { name: 'Technology', portfolioPercent: 42.3, avgAllocation: 28.7, dayChange: 2.4, icon: '💻' },
    { name: 'Healthcare', portfolioPercent: 15.8, avgAllocation: 12.1, dayChange: -0.8, icon: '🧬' },
    { name: 'Financial', portfolioPercent: 12.4, avgAllocation: 9.6, dayChange: 1.2, icon: '🏦' },
    { name: 'Consumer Disc.', portfolioPercent: 11.7, avgAllocation: 8.3, dayChange: -1.5, icon: '🛒' },
    { name: 'Energy', portfolioPercent: 8.9, avgAllocation: 6.2, dayChange: 3.1, icon: '⚡' },
    { name: 'Industrial', portfolioPercent: 5.2, avgAllocation: 4.1, dayChange: 0.6, icon: '🏭' }
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
          {/* Headers */}
          <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground font-medium px-3 py-2 bg-background/20" style={{ borderRadius: '8px' }}>
            <div>Sector</div>
            <div className="text-center">% of Portfolios</div>
            <div className="text-center">Avg Allocation %</div>
            <div className="text-center">Day Change %</div>
          </div>
          
          {topSectors.map((sector, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 items-center p-3 bg-background/30" style={{ borderRadius: '10px' }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{sector.icon}</span>
                <div>
                  <div className="font-medium text-sm">{sector.name}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium">{sector.portfolioPercent}%</div>
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium text-blue-400">{sector.avgAllocation}%</div>
              </div>
              
              <div className="flex items-center justify-center gap-1">
                <div className={`flex items-center gap-1 ${sector.dayChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {sector.dayChange >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  <span className="text-sm font-medium">{Math.abs(sector.dayChange)}%</span>
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

export default TopSectorsSection;
