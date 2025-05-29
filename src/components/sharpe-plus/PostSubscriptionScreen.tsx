
import React, { useState } from 'react';
import { Brain, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';

const PostSubscriptionScreen = () => {
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
          <p className="text-sm text-muted-foreground">You're now seeing how thousands are trading live.</p>
        </div>

        {/* Top Movement Summary Bar */}
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
              <div className="text-sm font-bold">TSLA <span className="text-emerald-400">+6.3%</span></div>
            </div>
            <div className="p-2 bg-background/30" style={{ borderRadius: '8px' }}>
              <div className="text-xs text-muted-foreground">Sector Flow</div>
              <div className="text-xs">Tech ↑ Consumer ↓</div>
            </div>
          </div>
        </div>

        {/* Top Holdings - Tightened */}
        <div className="bg-card/50 border border-border backdrop-blur-sm mb-4" style={{ borderRadius: '12px' }}>
          <div className="p-4 pb-2">
            <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
              📍 Top Holdings
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 font-medium" style={{ borderRadius: '8px' }}>Live</span>
            </h2>
          </div>
          <div className="px-4 pb-4 space-y-2">
            {[
              { ticker: 'NVDA', percent: 78.4, change: 5.2, logo: '🟢' },
              { ticker: 'AAPL', percent: 72.1, change: 2.1, logo: '🍎' },
              { ticker: 'GOOGL', percent: 51.8, change: -1.3, logo: '🌈' },
              { ticker: 'MSFT', percent: 68.9, change: 3.7, logo: '🔷' }
            ].map((holding, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-background/30" style={{ borderRadius: '8px' }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{holding.logo}</span>
                  <div>
                    <div className="font-medium text-sm">{holding.ticker}</div>
                    <div className="text-xs text-muted-foreground">{holding.percent}% of portfolios</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1 ${holding.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {holding.change >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                    <span className="text-xs font-medium">{Math.abs(holding.change)}%</span>
                  </div>
                  <div className="w-6 h-3">
                    <MiniChart data={generateSparklineData()} width={24} height={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Sector Shifts - Horizontal Tiles */}
        <div className="bg-card/50 border border-border backdrop-blur-sm mb-4" style={{ borderRadius: '12px' }}>
          <div className="p-4 pb-2">
            <h2 className="font-bold text-sm mb-3 flex items-center gap-2">
              🔄 Sector Shifts Today
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 font-medium" style={{ borderRadius: '8px' }}>24h</span>
            </h2>
          </div>
          <div className="px-4 pb-4">
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'Technology', change: 3.2, icon: '💻' },
                { name: 'Energy', change: -2.1, icon: '⚡' },
                { name: 'Industrial', change: 1.8, icon: '🏭' }
              ].map((sector, i) => (
                <div key={i} className="p-2 bg-background/30 text-center" style={{ borderRadius: '8px' }}>
                  <div className="text-sm mb-1">{sector.icon}</div>
                  <div className="text-xs font-medium mb-1">{sector.name}</div>
                  <div className={`flex items-center justify-center gap-1 ${sector.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {sector.change >= 0 ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                    <span className="text-xs font-bold">{Math.abs(sector.change)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              { ticker: 'TSLA', change: '+18% more users added', type: 'add' },
              { ticker: 'XOM', change: '-12% users sold', type: 'sell' },
              { ticker: 'AAPL', change: 'stable allocation', type: 'stable' }
            ].map((shift, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-background/30" style={{ borderRadius: '8px' }}>
                <div className="flex items-center gap-2">
                  <Activity size={12} className={
                    shift.type === 'add' ? 'text-emerald-400' : 
                    shift.type === 'sell' ? 'text-red-400' : 'text-gray-400'
                  } />
                  <span className="font-medium text-sm">{shift.ticker}</span>
                </div>
                <span className={`text-xs ${
                  shift.type === 'add' ? 'text-emerald-400' : 
                  shift.type === 'sell' ? 'text-red-400' : 'text-gray-400'
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
              <h4 className="font-medium text-xs mb-1">📊 Sector Rotation Alert</h4>
              <p className="text-xs text-muted-foreground">Tech outflows accelerating, Energy seeing institutional inflows</p>
            </div>
            <div className="p-3 bg-background/30" style={{ borderRadius: '8px' }}>
              <h4 className="font-medium text-xs mb-1">⚡ Momentum Shift</h4>
              <p className="text-xs text-muted-foreground">Retail increasing tech allocation while institutions rotate out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSubscriptionScreen;
