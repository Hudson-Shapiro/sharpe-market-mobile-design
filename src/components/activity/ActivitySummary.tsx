
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Activity, Trophy, DollarSign } from 'lucide-react';

const ActivitySummary = () => {
  const summaryData = {
    netGain: 1250,
    totalTrades: 24,
    mostActivePortfolio: 'Tech Fund',
    bestTrade: 325
  };

  return (
    <Card className="mb-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Trophy className="text-emerald-400" size={20} />
          <h3 className="text-lg font-bold text-foreground">Activity Summary</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
              <DollarSign size={16} />
              +{summaryData.netGain.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Net Gain</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-foreground font-bold text-lg">
              <Activity size={16} />
              {summaryData.totalTrades}
            </div>
            <p className="text-xs text-muted-foreground">Total Trades</p>
          </div>
          
          <div className="text-center">
            <div className="text-foreground font-bold text-sm truncate">
              {summaryData.mostActivePortfolio}
            </div>
            <p className="text-xs text-muted-foreground">Most Active</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
              <TrendingUp size={16} />
              +{summaryData.bestTrade}
            </div>
            <p className="text-xs text-muted-foreground">Best Trade</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
