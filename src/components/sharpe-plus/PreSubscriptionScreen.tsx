
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
            See how investors are allocating capital — with detailed metrics.
          </p>
        </div>

        {/* Key Metrics Preview */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            📊 Get These Key Metrics
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'Avg Allocation %', desc: 'Average allocation across portfolios', color: 'text-blue-400' },
              { label: '% of Portfolios', desc: 'Percentage of portfolios holding', color: 'text-emerald-400' },
              { label: 'Day Change %', desc: 'Daily allocation change', color: 'text-purple-400' }
            ].map((metric, i) => (
              <div key={i} className="p-2 bg-card/30 border border-border/20" style={{ borderRadius: '8px' }}>
                <div className={`text-xs font-bold ${metric.color} mb-1`}>{metric.label}</div>
                <div className="text-xs text-muted-foreground leading-tight">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What You're Missing Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Top Holdings Preview - Blurred with detailed metrics */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <Lock size={18} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-3 blur-sm">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                📈 Top Holdings Analysis
              </h3>
              <div className="space-y-2">
                {[
                  { ticker: 'NVDA', portfolios: '78.4%', avg: '12.3%', change: '+5.2%' },
                  { ticker: 'AAPL', portfolios: '72.1%', avg: '8.7%', change: '-2.1%' },
                  { ticker: 'MSFT', portfolios: '68.9%', avg: '9.4%', change: '+3.7%' }
                ].map((holding, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs">
                    <span className="font-medium">{holding.ticker}</span>
                    <span className="text-center">{holding.portfolios}</span>
                    <span className="text-center text-blue-400">{holding.avg}</span>
                    <span className={`text-center ${holding.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {holding.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Sectors Preview - Blurred with detailed metrics */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <Lock size={18} className="text-emerald-400 animate-pulse" />
            </div>
            <div className="p-3 blur-sm">
              <h3 className="font-medium text-sm mb-2">🔄 Sector Allocation Trends</h3>
              <div className="space-y-2">
                {[
                  { name: 'Technology', portfolios: '42.3%', avg: '28.7%', change: '+2.4%' },
                  { name: 'Healthcare', portfolios: '15.8%', avg: '12.1%', change: '-0.8%' },
                  { name: 'Financial', portfolios: '12.4%', avg: '9.6%', change: '+1.2%' }
                ].map((sector, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs">
                    <span className="font-medium truncate">{sector.name}</span>
                    <span className="text-center">{sector.portfolios}</span>
                    <span className="text-center text-blue-400">{sector.avg}</span>
                    <span className={`text-center ${sector.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {sector.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock size={12} className="text-emerald-400" />
              See detailed allocation metrics with Sharpe+
            </p>
          </div>
        </div>

        {/* What You Get - Enhanced with specific metrics */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-center mb-4">What You Get</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: '📊', text: 'Detailed allocation percentages' },
              { icon: '🔄', text: 'Daily allocation change tracking' },
              { icon: '📈', text: 'Portfolio penetration metrics' },
              { icon: '⚡', text: 'Real-time sector rotations' }
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
            🧠 Sharpe+ Analytics
          </h3>
          <p className="text-xs text-muted-foreground">
            Advanced portfolio allocation insights & trends
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
