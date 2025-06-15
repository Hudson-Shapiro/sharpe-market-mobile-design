
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Briefcase, Users, Star } from 'lucide-react';

const ActivitySummary = () => {
  const summaryData = {
    totalPortfolios: 6,
    subscribedPortfolios: 12,
    bestPerformingPortfolio: 'Tech Fund'
  };

  return (
    <Card className="mb-6 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-600/10 border-emerald-500/20 backdrop-blur-sm shadow-2xl shadow-emerald-500/5" style={{ borderRadius: '12px' }}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-emerald-400/20 to-green-500/20 shadow-lg" style={{ borderRadius: '12px' }}>
              <Trophy className="text-emerald-400 drop-shadow-sm" size={16} />
            </div>
            <h3 className="text-base font-bold text-foreground">Activity Summary</h3>
          </div>
        </div>
        
        {/* Updated Grid Layout */}
        <div className="grid grid-cols-3 gap-4">
          {/* My Portfolios */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg hover:scale-105 transition-transform duration-200">
              <div className="p-1 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors" style={{ borderRadius: '12px' }}>
                <Briefcase size={12} className="drop-shadow-sm" />
              </div>
              <span className="font-mono text-base">{summaryData.totalPortfolios}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">My Portfolios</p>
          </div>

          {/* Subscribed */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-blue-400 font-bold text-lg hover:scale-105 transition-transform duration-200">
              <div className="p-1 bg-blue-500/20 hover:bg-blue-500/30 transition-colors" style={{ borderRadius: '12px' }}>
                <Users size={12} className="drop-shadow-sm" />
              </div>
              <span className="font-mono text-base">{summaryData.subscribedPortfolios}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Subscribed</p>
          </div>
          
          {/* Best Performing */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-purple-400 font-bold text-lg hover:scale-105 transition-transform duration-200">
              <div className="p-1 bg-purple-500/20 hover:bg-purple-500/30 transition-colors" style={{ borderRadius: '12px' }}>
                <Star size={12} className="drop-shadow-sm" />
              </div>
            </div>
            <div className="text-foreground font-bold text-sm truncate hover:scale-105 transition-transform duration-200">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-sm">
                {summaryData.bestPerformingPortfolio}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">Best Performing</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
