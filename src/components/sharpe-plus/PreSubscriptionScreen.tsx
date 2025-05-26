
import React from 'react';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreSubscriptionScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
    {/* Background glow effects */}
    <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
    
    <div className="relative z-10 p-4 max-w-md mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8 pt-16">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 animate-pulse-slow" style={{ borderRadius: '10px' }}>
            <div className="text-4xl">📊</div>
          </div>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-3">
          Unlock Sharpe+
        </h1>
        <p className="text-lg text-muted-foreground mb-8 px-4">
          See how investors are allocating capital — in real time.
        </p>
      </div>

      {/* What You're Missing - Horizontal Scroll */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>🔥</span> What You're Missing
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {/* Trending Tickers Card */}
          <div className="min-w-[280px] bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden" style={{ borderRadius: '10px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Lock size={20} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-4 blur-sm">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                🔥 Trending Tickers
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">TSLA</span>
                  <span className="text-emerald-400">•••% change</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">AAPL</span>
                  <span className="text-emerald-400">•••% portfolios</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Sectors Card */}
          <div className="min-w-[280px] bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden" style={{ borderRadius: '10px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Lock size={20} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-4 blur-sm">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                📈 Top Sectors
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">🧬 Health Care</span>
                  <span className="text-red-400">Locked</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">⚡ Energy</span>
                  <span className="text-red-400">Locked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Most Added Card */}
          <div className="min-w-[280px] bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden" style={{ borderRadius: '10px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Lock size={20} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-4 blur-sm">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                📊 Most Added This Week
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">•••••</span>
                  <span className="text-emerald-400">•••%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">•••••</span>
                  <span className="text-emerald-400">•••%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Lock size={14} className="text-emerald-400" />
            See the full picture with Sharpe+
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="space-y-3 mb-8">
        <h2 className="text-xl font-bold text-center mb-6">What You Get</h2>
        {[
          { icon: '✅', text: 'Track top investor trades' },
          { icon: '✅', text: 'Monitor sector rotation trends' },
          { icon: '✅', text: 'View daily allocation shifts' },
          { icon: '✅', text: 'Unlock behavioral alpha' }
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors" style={{ borderRadius: '10px' }}>
            <div className="w-10 h-10 bg-emerald-500/20 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '10px' }}>
              <span className="text-lg">{feature.icon}</span>
            </div>
            <span className="text-sm font-medium">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Sharpe+ Watchlist Badge Teaser */}
      <div className="bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-500/30 p-4 mb-8 relative overflow-hidden" style={{ borderRadius: '10px' }}>
        <div className="absolute top-2 right-2">
          <Sparkles size={16} className="text-amber-400 animate-pulse" />
        </div>
        <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
          🧠 Sharpe+ Watchlist
        </h3>
        <p className="text-xs text-muted-foreground">
          Get access to curated watchlists from top performers
        </p>
      </div>
    </div>

    {/* Sticky Footer CTA */}
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-sm">
      <div className="max-w-md mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-3">
          Unlock advanced insights and trade smarter.
        </p>
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-4 text-lg font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
          style={{ borderRadius: '10px' }}
        >
          Subscribe Now — $9.99/month
        </Button>
      </div>
    </div>
  </div>
);

export default PreSubscriptionScreen;
