
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
    <Card className="mb-6 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-600/10 border-emerald-500/20 backdrop-blur-sm shadow-2xl shadow-emerald-500/5 rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-400/20 to-green-500/20 shadow-lg">
              <Trophy className="text-emerald-400 drop-shadow-sm" size={16} />
            </div>
            <h3 className="text-base font-bold text-foreground">Activity Summary</h3>
          </div>
        </div>
        
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Row: Net Gain | Best Trade */}
          <div 
            className="text-center cursor-pointer group relative"
            onClick={() => handleStatClick('netGain')}
          >
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg group-hover:scale-105 transition-transform duration-200">
              <div className="p-1 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                <DollarSign size={12} className="drop-shadow-sm" />
              </div>
              <span className="font-mono text-base">+{summaryData.netGain.toLocaleString()}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Net Gain</p>
            
            {expandedStat === 'netGain' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-card border border-emerald-500/20 rounded-lg shadow-xl z-20 min-w-[200px] animate-fade-in">
                <p className="text-xs text-muted-foreground">{getTooltipContent('netGain')}</p>
              </div>
            )}
          </div>

          <div 
            className="text-center cursor-pointer group relative"
            onClick={() => handleStatClick('bestTrade')}
          >
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg group-hover:scale-105 transition-transform duration-200">
              <div className="p-1 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                <TrendingUp size={12} className="drop-shadow-sm" />
              </div>
              <span className="font-mono text-base">+{summaryData.bestTrade}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Best Trade</p>
            
            {expandedStat === 'bestTrade' && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-card border border-emerald-500/20 rounded-lg shadow-xl z-20 min-w-[160px] animate-fade-in">
                <p className="text-xs text-muted-foreground">{getTooltipContent('bestTrade')}</p>
              </div>
            )}
          </div>

          {/* Bottom Row: Total Trades | Most Active */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-foreground font-bold text-lg hover:scale-105 transition-transform duration-200">
              <div className="p-1 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors">
                <Activity size={12} className="text-blue-400 drop-shadow-sm" />
              </div>
              <span className="font-mono text-base">{summaryData.totalTrades}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Trades</p>
          </div>
          
          <div className="text-center">
            <div className="text-foreground font-bold text-sm truncate hover:scale-105 transition-transform duration-200">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-base">
                {summaryData.mostActivePortfolio}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Most Active</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
