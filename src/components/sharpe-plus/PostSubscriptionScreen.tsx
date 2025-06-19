
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
    <div className="min-h-full bg-transparent relative overflow-hidden">
      {/* 
        Main Content Container - Reduced spacing throughout
      */}
      <div className="relative z-10 p-4 max-w-md mx-auto pb-16">
        {/* Header - Reduced padding and margins */}
        <div className="text-center mb-4 pt-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto mb-2">
            <Brain size={18} className="text-emerald-400" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-1">
            👋 Welcome to Sharpe+
          </h1>
          <p className="text-muted-foreground text-xs">Live allocation insights & detailed metrics.</p>
        </div>

        {/* Platform Summary - Reduced padding and margins */}
        <div className="bg-card/40 border border-border/30 backdrop-blur-sm p-3 mb-3" style={{ borderRadius: '10px' }}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-sm flex items-center gap-2">
              📊 Platform Summary
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 font-medium animate-pulse" style={{ borderRadius: '8px' }}>Live</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground mb-0.5">Net Flow</div>
              <div className="text-sm font-bold text-emerald-400">$2.4B Buy</div>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground mb-0.5">Most Added</div>
              <div className="text-sm font-bold">NVDA <span className="text-emerald-400">+5.2%</span></div>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground mb-0.5">Sector Leader</div>
              <div className="text-xs font-bold">Tech <span className="text-emerald-400">+2.4%</span></div>
            </div>
          </div>
        </div>

        {/* Top Holdings Section - Reduced margin */}
        <div className="mb-3">
          <TopHoldingsSection 
            isExpanded={holdingsExpanded} 
            onToggle={() => setHoldingsExpanded(!holdingsExpanded)} 
          />
        </div>

        {/* Top Sectors Section - Reduced margin */}
        <div className="mb-3">
          <TopSectorsSection 
            isExpanded={sectorsExpanded} 
            onToggle={() => setSectorsExpanded(!sectorsExpanded)} 
          />
        </div>

        {/* Recent Allocation Shifts - Reduced padding */}
        <div className="bg-card/40 border border-border/30 backdrop-blur-sm mb-3" style={{ borderRadius: '10px' }}>
          <div className="p-2.5 pb-1.5">
            <h2 className="font-bold text-sm mb-2 flex items-center gap-2">
              🔁 Recent Allocation Shifts
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 font-medium" style={{ borderRadius: '8px' }}>1h</span>
            </h2>
          </div>
          <div className="px-2.5 pb-2.5 space-y-1.5">
            {[
              { ticker: 'NVDA', change: '+1.3% avg allocation increase', type: 'add' },
              { ticker: 'AAPL', change: '-0.8% avg allocation decrease', type: 'sell' },
              { ticker: 'MSFT', change: '+0.5% avg allocation increase', type: 'add' }
            ].map((shift, i) => (
              <div key={i} className="flex items-center justify-between p-1.5 bg-background/30" style={{ borderRadius: '8px' }}>
                <div className="flex items-center gap-2">
                  <Activity size={12} className={
                    shift.type === 'add' ? 'text-emerald-400' : 'text-red-400'
                  } />
                  <span className="font-medium text-sm">{shift.ticker}</span>
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

        {/* Deep Insights - Reduced padding */}
        <div className="bg-card/30 border border-border/30 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
          <div className="p-2.5 pb-1.5">
            <h2 className="font-bold text-sm mb-2 flex items-center gap-2">
              🧠 Deep Insights
            </h2>
          </div>
          <div className="px-2.5 pb-2.5 space-y-1.5">
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <h4 className="font-medium text-xs mb-0.5">📊 Allocation Trends</h4>
              <p className="text-xs text-muted-foreground">Tech average allocation up 0.8% this week, with NVDA leading at 12.3% avg</p>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
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
