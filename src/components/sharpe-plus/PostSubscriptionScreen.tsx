
import React, { useState } from 'react';
import { Brain, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';
import TopHoldingsSection from './TopHoldingsSection';
import TopSectorsSection from './TopSectorsSection';

const PostSubscriptionScreen = () => {
  const [holdingsExpanded, setHoldingsExpanded] = useState(true);
  const [sectorsExpanded, setSectorsExpanded] = useState(false);

  const generateSparklineData = () => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* 
        Main Content Container - Reduced padding
      */}
      <div className="relative z-10 p-3 max-w-md mx-auto pb-16">
        {/* Header - More compact */}
        <div className="text-center mb-4 pt-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto mb-2">
            <Brain size={16} className="text-emerald-400" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-1">
            👋 Welcome to Sharpe+
          </h1>
          <p className="text-muted-foreground text-xs">Live allocation insights & detailed metrics.</p>
        </div>

        {/* Platform Summary - Compact */}
        <div className="bg-card/50 border border-border/40 backdrop-blur-sm p-3 mb-3 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-sm flex items-center gap-2">
              📊 Platform Summary
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 font-medium animate-pulse rounded-md">Live</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-background/40 rounded-md">
              <div className="text-xs text-muted-foreground mb-0.5">Net Flow</div>
              <div className="text-xs font-bold text-emerald-400">$2.4B Buy</div>
            </div>
            <div className="p-2 bg-background/40 rounded-md">
              <div className="text-xs text-muted-foreground mb-0.5">Most Added</div>
              <div className="text-xs font-bold">NVDA <span className="text-emerald-400">+5.2%</span></div>
            </div>
            <div className="p-2 bg-background/40 rounded-md">
              <div className="text-xs text-muted-foreground mb-0.5">Sector Leader</div>
              <div className="text-xs font-bold">Tech <span className="text-emerald-400">+2.4%</span></div>
            </div>
          </div>
        </div>

        {/* Top Holdings Section - Compact spacing */}
        <div className="mb-3">
          <TopHoldingsSection 
            isExpanded={holdingsExpanded} 
            onToggle={() => setHoldingsExpanded(!holdingsExpanded)} 
          />
        </div>

        {/* Top Sectors Section - Compact spacing */}
        <div className="mb-3">
          <TopSectorsSection 
            isExpanded={sectorsExpanded} 
            onToggle={() => setSectorsExpanded(!sectorsExpanded)} 
          />
        </div>

        {/* Recent Allocation Shifts - Compact */}
        <div className="bg-card/50 border border-border/40 backdrop-blur-sm mb-3 rounded-lg">
          <div className="p-3 pb-1">
            <h2 className="font-bold text-sm mb-2 flex items-center gap-2">
              🔁 Recent Allocation Shifts
              <span className="text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 font-medium rounded-md">1h</span>
            </h2>
          </div>
          <div className="px-3 pb-3 space-y-1">
            {[
              { ticker: 'NVDA', change: '+1.3% avg allocation increase', type: 'add' },
              { ticker: 'AAPL', change: '-0.8% avg allocation decrease', type: 'sell' },
              { ticker: 'MSFT', change: '+0.5% avg allocation increase', type: 'add' }
            ].map((shift, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-background/40 rounded-md">
                <div className="flex items-center gap-2">
                  <Activity size={12} className={
                    shift.type === 'add' ? 'text-emerald-400' : 'text-red-400'
                  } />
                  <span className="font-medium text-xs">{shift.ticker}</span>
                </div>
                <span className={`text-xs ${
                  shift.type === 'add' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {shift.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Insights - Compact */}
        <div className="bg-card/40 border border-border/40 backdrop-blur-sm rounded-lg">
          <div className="p-3 pb-1">
            <h2 className="font-bold text-sm mb-2 flex items-center gap-2">
              🧠 Deep Insights
            </h2>
          </div>
          <div className="px-3 pb-3 space-y-1">
            <div className="p-2 bg-background/40 rounded-md">
              <h4 className="font-medium text-xs mb-0.5">📊 Allocation Trends</h4>
              <p className="text-xs text-muted-foreground">Tech average allocation up 0.8% this week, with NVDA leading at 12.3% avg</p>
            </div>
            <div className="p-2 bg-background/40 rounded-md">
              <h4 className="font-medium text-xs mb-0.5">⚡ Portfolio Penetration</h4>
              <p className="text-xs text-muted-foreground">78.4% of portfolios now hold NVDA, highest penetration in 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSubscriptionScreen;
