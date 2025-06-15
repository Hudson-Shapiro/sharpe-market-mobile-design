
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden pb-20">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6 pt-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Brain size={20} className="text-emerald-400" />
            </div>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-1">
            👋 Welcome to Sharpe+
          </h1>
          <p className="text-sm text-muted-foreground">Live allocation insights & detailed metrics.</p>
        </div>

        {/* Platform Summary */}
        <div className="bg-card/60 border border-border backdrop-blur-sm p-4 mb-4" style={{ borderRadius: '12px' }}>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-sm flex items-center gap-2">
              📊 Platform Summary
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 font-medium animate-pulse" style={{ borderRadius: '8px' }}>Live</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground">Net Flow</div>
              <div className="text-sm font-bold text-emerald-400">$2.4B Buy</div>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground">Most Added</div>
              <div className="text-sm font-bold">NVDA <span className="text-emerald-400">+5.2%</span></div>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground">Sector Leader</div>
              <div className="text-xs">Tech <span className="text-emerald-400">+2.4%</span></div>
            </div>
          </div>
        </div>

        {/* Top Holdings Section */}
        <div className="mb-4">
          <TopHoldingsSection 
            isExpanded={holdingsExpanded} 
            onToggle={() => setHoldingsExpanded(!holdingsExpanded)} 
          />
        </div>

        {/* Top Sectors Section */}
        <div className="mb-4">
          <TopSectorsSection 
            isExpanded={sectorsExpanded} 
            onToggle={() => setSectorsExpanded(!sectorsExpanded)} 
          />
        </div>

        {/* Recent Allocation Shifts */}
        <div className="bg-card/50 border border-border backdrop-blur-sm mb-4" style={{ borderRadius: '12px' }}>
          <div className="p-4 pb-2">
            <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
              🔁 Recent Allocation Shifts
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 font-medium" style={{ borderRadius: '8px' }}>1h</span>
            </h2>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {[
              { ticker: 'NVDA', change: '+1.3% avg allocation increase', type: 'add' },
              { ticker: 'AAPL', change: '-0.8% avg allocation decrease', type: 'sell' },
              { ticker: 'MSFT', change: '+0.5% avg allocation increase', type: 'add' }
            ].map((shift, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-background/30" style={{ borderRadius: '8px' }}>
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

        {/* Deep Insights */}
        <div className="bg-card/30 border border-border backdrop-blur-sm" style={{ borderRadius: '12px' }}>
          <div className="p-4 pb-2">
            <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
              🧠 Deep Insights
            </h2>
          </div>
          <div className="px-4 pb-4 space-y-2">
            <div className="p-3 bg-background/30" style={{ borderRadius: '8px' }}>
              <h4 className="font-medium text-xs mb-1">📊 Allocation Trends</h4>
              <p className="text-xs text-muted-foreground">Tech average allocation up 0.8% this week, with NVDA leading at 12.3% avg</p>
            </div>
            <div className="p-3 bg-background/30" style={{ borderRadius: '8px' }}>
              <h4 className="font-medium text-xs mb-1">⚡ Portfolio Penetration</h4>
              <p className="text-xs text-muted-foreground">78.4% of portfolios now hold NVDA, highest penetration in 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSubscriptionScreen;
