
import React from 'react';
import { Lock, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';

const PreSubscriptionScreen = () => {
  const generateSparklineData = () => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-6 pt-16">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <div className="text-2xl">📊</div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Unlock Sharpe+
          </h1>
          <p className="text-muted-foreground mb-6">
            See how investors are allocating capital — in real time.
          </p>
        </div>

        {/* What You're Missing Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Trending Tickers - Blurred with Movement */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <Lock size={18} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-3 blur-sm">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                📈 Trending Tickers
              </h3>
              <div className="space-y-2">
                {['TSLA', 'NVDA', 'AAPL'].map((ticker, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-medium text-sm">{ticker}</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={12} className="text-emerald-400" />
                      <div className="w-12 h-3">
                        <MiniChart data={generateSparklineData()} width={48} height={12} />
                      </div>
                      <span className="text-xs text-emerald-400">+•.•%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sector Rotations - Horizontal tiles */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <Lock size={18} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-3 blur-sm">
              <h3 className="font-medium text-sm mb-2">🔄 Sector Rotations</h3>
              <div className="flex gap-2">
                {[
                  { name: 'Tech', trend: 'up' },
                  { name: 'Energy', trend: 'down' },
                  { name: 'Health', trend: 'up' }
                ].map((sector, i) => (
                  <div key={i} className="flex-1 p-2 bg-background/30 text-center" style={{ borderRadius: '8px' }}>
                    <div className="text-xs font-medium">{sector.name}</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      {sector.trend === 'up' ? 
                        <TrendingUp size={10} className="text-emerald-400" /> : 
                        <TrendingDown size={10} className="text-red-400" />
                      }
                      <span className="text-xs">•.•%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock size={12} className="text-emerald-400" />
              See the full picture with Sharpe+
            </p>
          </div>
        </div>

        {/* What You Get - Tighter Layout */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-center mb-4">What You Get</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: '📊', text: 'Track top investor trades' },
              { icon: '🔄', text: 'Monitor allocation shifts' },
              { icon: '📈', text: 'See sector-level rotation trends' },
              { icon: '⚡', text: 'Spot momentum before market reacts' }
            ].map((feature, i) => (
              <div key={i} className="p-3 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors" style={{ borderRadius: '12px' }}>
                <div className="text-center">
                  <div className="text-lg mb-1">{feature.icon}</div>
                  <span className="text-xs font-medium">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sharpe+ Watchlist Badge */}
        <div className="bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-500/30 p-3 mb-6 relative overflow-hidden" style={{ borderRadius: '12px' }}>
          <div className="absolute top-2 right-2">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
          </div>
          <h3 className="font-bold text-sm mb-1 flex items-center gap-2">
            🧠 Sharpe+ Watchlist
          </h3>
          <p className="text-xs text-muted-foreground">
            Curated watchlists from top performers
          </p>
        </div>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-4 text-lg font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02]"
            style={{ borderRadius: '12px' }}
          >
            🔓 Subscribe Now — $9.99/month
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreSubscriptionScreen;
