
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Activity, Trophy, DollarSign } from 'lucide-react';

const ActivitySummary = () => {
  const [expandedStat, setExpandedStat] = useState<string | null>(null);
  
  const summaryData = {
    netGain: 1250,
    totalTrades: 24,
    mostActivePortfolio: 'Tech Fund',
    bestTrade: 325
  };

  const handleStatClick = (statType: string) => {
    setExpandedStat(expandedStat === statType ? null : statType);
  };

  const getTooltipContent = (statType: string) => {
    switch (statType) {
      case 'netGain':
        return 'Tech: +$850, Healthcare: +$400, Real Estate: +$200, Auto: -$200';
      case 'bestTrade':
        return 'META +$325 on 05-17-2024';
      default:
        return '';
    }
  };

  return (
    <div className="mb-4 px-4">
      {/* Clean 2x2 Stats Grid */}
      <div className="bg-card/60 backdrop-blur-sm border border-border/50 p-4 shadow-sm" style={{ borderRadius: '12px' }}>
        {/* Top Row */}
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Net Gain */}
          <div 
            className="cursor-pointer group relative"
            onClick={() => handleStatClick('netGain')}
          >
            <div className="flex items-center gap-2 mb-1">
              <DollarSign size={14} className="text-emerald-400" />
              <span className="text-sm font-medium text-muted-foreground">Net Gain</span>
            </div>
            <div className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              +${summaryData.netGain.toLocaleString()}
            </div>
            
            {expandedStat === 'netGain' && (
              <div className="absolute top-full left-0 mt-2 p-3 bg-card border border-border shadow-lg z-20 min-w-[200px] animate-fade-in" style={{ borderRadius: '8px' }}>
                <p className="text-xs text-muted-foreground">{getTooltipContent('netGain')}</p>
              </div>
            )}
          </div>

          {/* Best Trade */}
          <div 
            className="cursor-pointer group relative"
            onClick={() => handleStatClick('bestTrade')}
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={14} className="text-emerald-400" />
              <span className="text-sm font-medium text-muted-foreground">Best Trade</span>
            </div>
            <div className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              +${summaryData.bestTrade}
            </div>
            
            {expandedStat === 'bestTrade' && (
              <div className="absolute top-full left-0 mt-2 p-3 bg-card border border-border shadow-lg z-20 min-w-[160px] animate-fade-in" style={{ borderRadius: '8px' }}>
                <p className="text-xs text-muted-foreground">{getTooltipContent('bestTrade')}</p>
              </div>
            )}
          </div>
        </div>

        {/* Subtle divider */}
        <div className="w-full h-px bg-border/30 mb-4"></div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-6">
          {/* Total Trades */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity size={14} className="text-blue-400" />
              <span className="text-sm font-medium text-muted-foreground">Trades</span>
            </div>
            <div className="text-xl font-bold text-foreground">
              {summaryData.totalTrades}
            </div>
          </div>
          
          {/* Most Active */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trophy size={14} className="text-purple-400" />
              <span className="text-sm font-medium text-muted-foreground">Most Active</span>
            </div>
            <div className="text-xl font-bold text-purple-400">
              {summaryData.mostActivePortfolio}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;
