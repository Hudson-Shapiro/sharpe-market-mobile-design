
import React from 'react';
import { Lock, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';
import type { ChartConfig } from '@/types';

interface TeaserHolding {
  ticker: string;
  portfolios: string;
  avg: string;
  change: string;
  trend: 'up' | 'down';
}

const TEASER_HOLDINGS: TeaserHolding[] = [
  { ticker: 'NVDA', portfolios: '78.4%', avg: '12.3%', change: '+5.2%', trend: 'up' },
  { ticker: 'AAPL', portfolios: '72.1%', avg: '8.7%', change: '-2.1%', trend: 'down' },
  { ticker: 'MSFT', portfolios: '68.9%', avg: '9.4%', change: '+3.7%', trend: 'up' },
  { ticker: 'TSLA', portfolios: '55.2%', avg: '6.8%', change: '-4.3%', trend: 'down' },
];

interface KeyMetric {
  label: string;
  desc: string;
  color: string;
}

const KEY_METRICS: KeyMetric[] = [
  { 
    label: 'Avg Allocation %', 
    desc: 'Average allocation across portfolios', 
    color: 'text-blue-400' 
  },
  { 
    label: '% of Portfolios', 
    desc: 'Percentage of portfolios holding', 
    color: 'text-emerald-400' 
  },
  { 
    label: 'Day Change %', 
    desc: 'Daily allocation change', 
    color: 'text-purple-400' 
  },
];

interface FeatureBenefit {
  icon: string;
  text: string;
}

const FEATURE_BENEFITS: FeatureBenefit[] = [
  { icon: '📊', text: 'Detailed allocation percentages' },
  { icon: '🔄', text: 'Daily allocation change tracking' },
  { icon: '📈', text: 'Portfolio penetration metrics' },
  { icon: '⚡', text: 'Real-time sector rotations' },
];

const PreSubscriptionScreen: React.FC = () => {
  const generateSparklineData = (): number[] => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  const handleSubscribe = () => {
    console.log('Starting subscription flow...');
  };

  return (
    <div className="min-h-full bg-transparent relative overflow-hidden">
      {/* 
        Main Content Container - More compact spacing
      */}
      <div className="relative z-10 p-4 max-w-md mx-auto pb-20">
        {/* 
          Hero Section - Reduced padding and spacing
        */}
        <div className="text-center mb-6 pt-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto mb-3">
            <div className="text-xl">📊</div>
          </div>
          
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Unlock Sharpe+
          </h1>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            See how investors are allocating capital — with detailed metrics.
          </p>
        </div>

        {/* 
          Key Metrics Preview Section - More compact
        */}
        <div className="mb-4">
          <h2 className="text-base font-bold mb-3 flex items-center gap-2">
            📊 Get These Key Metrics
          </h2>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            {KEY_METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-card/40 border border-border/30 backdrop-blur-sm" 
                style={{ borderRadius: '8px' }}
              >
                <div className={`text-xs font-bold ${metric.color} mb-1`}>
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Data Preview Section - More compact
        */}
        <div className="mb-4">
          <h2 className="text-base font-bold mb-3 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Top Holdings Preview */}
          <div className="bg-card/50 border border-border/30 backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '10px' }}>
            <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px] flex items-center justify-center z-10" style={{ borderRadius: '10px' }}>
              <div className="text-center">
                <Lock size={16} className="text-emerald-400 animate-pulse mx-auto mb-1" />
                <p className="text-xs text-emerald-400 font-medium">Live Data</p>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                📈 Top Holdings Analysis
              </h3>
              
              <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground font-medium mb-2 px-1">
                <div>Stock</div>
                <div className="text-center">% Portfolios</div>
                <div className="text-center">Avg Alloc %</div>
                <div className="text-center">Day Change</div>
              </div>
              
              <div className="space-y-1.5">
                {TEASER_HOLDINGS.map((holding, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs bg-background/20 p-2 rounded-lg">
                    <span className="font-bold">{holding.ticker}</span>
                    <span className="text-center font-medium">{holding.portfolios}</span>
                    <span className="text-center text-blue-400 font-medium">{holding.avg}</span>
                    <span className={`text-center font-medium ${holding.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {holding.change}
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

        {/* 
          Feature Benefits Section - More compact grid
        */}
        <div className="mb-6">
          <h2 className="text-base font-bold text-center mb-3">What You Get</h2>
          <div className="grid grid-cols-2 gap-2">
            {FEATURE_BENEFITS.map((feature, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors" 
                style={{ borderRadius: '10px' }}
              >
                <div className="text-center">
                  <div className="text-base mb-1">{feature.icon}</div>
                  <span className="text-xs font-medium">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Premium Badge Section - More compact
        */}
        <div className="bg-gradient-to-r from-purple-500/15 to-emerald-500/15 border border-purple-500/25 p-3 mb-4 relative overflow-hidden" style={{ borderRadius: '10px' }}>
          <div className="absolute top-2 right-2">
            <Sparkles size={12} className="text-amber-400 animate-pulse" />
          </div>
          
          <h3 className="font-bold text-sm mb-1 flex items-center gap-2">
            🧠 Sharpe+ Analytics
          </h3>
          <p className="text-xs text-muted-foreground">
            Advanced portfolio allocation insights & trends
          </p>
        </div>
      </div>

      {/* 
        Fixed Footer CTA - Floating subscribe button
        Robinhood Gold style with gradient fade
      */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        {/* Gradient fade to eliminate harsh line */}
        <div className="h-16 bg-gradient-to-t from-background via-background/95 to-transparent" />
        
        {/* CTA Button Container */}
        <div className="bg-background/95 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="max-w-md mx-auto">
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-3 text-base font-bold shadow-xl border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{ borderRadius: '12px' }}
            >
              🔓 Subscribe to Sharpe+ — $9.99/month
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

PreSubscriptionScreen.displayName = 'PreSubscriptionScreen';

export default PreSubscriptionScreen;
