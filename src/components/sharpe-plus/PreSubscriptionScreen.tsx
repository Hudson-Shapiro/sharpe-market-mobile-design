
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
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* 
        Main Content Container - Reduced padding
      */}
      <div className="relative z-10 p-3 max-w-md mx-auto pb-24">
        {/* 
          Hero Section - More compact
        */}
        <div className="text-center mb-3 pt-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto mb-2">
            <div className="text-base">📊</div>
          </div>
          
          <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-1">
            Unlock Sharpe+
          </h1>
          
          <p className="text-muted-foreground text-xs leading-relaxed mb-3">
            See how investors are allocating capital — with detailed metrics.
          </p>
        </div>

        {/* 
          Key Metrics Preview Section - More compact
        */}
        <div className="mb-3">
          <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
            📊 Get These Key Metrics
          </h2>
          
          <div className="grid grid-cols-1 gap-1.5 mb-3">
            {KEY_METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-card/60 border border-border/40 backdrop-blur-sm rounded-xl"
              >
                <div className={`text-xs font-bold ${metric.color} mb-0.5`}>
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Data Preview Section - Compact
        */}
        <div className="mb-3">
          <h2 className="text-sm font-bold mb-2 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Top Holdings Preview - Compact */}
          <div className="bg-card/60 border border-border/40 backdrop-blur-sm relative overflow-hidden mb-2 rounded-xl">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
              <div className="text-center">
                <Lock size={14} className="text-emerald-400 animate-pulse mx-auto mb-1" />
                <p className="text-xs text-emerald-400 font-medium">Live Data</p>
              </div>
            </div>
            
            <div className="p-2.5">
              <h3 className="font-semibold text-xs mb-2 flex items-center gap-2">
                📈 Top Holdings Analysis
              </h3>
              
              <div className="grid grid-cols-4 gap-1.5 text-xs text-muted-foreground font-medium mb-1.5 px-1">
                <div>Stock</div>
                <div className="text-center">% Portfolios</div>
                <div className="text-center">Avg Alloc %</div>
                <div className="text-center">Day Change</div>
              </div>
              
              <div className="space-y-1">
                {TEASER_HOLDINGS.map((holding, i) => (
                  <div key={i} className="grid grid-cols-4 gap-1.5 items-center text-xs bg-background/30 p-1.5 rounded-lg">
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
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              <Lock size={10} className="text-emerald-400" />
              See detailed allocation metrics with Sharpe+
            </p>
          </div>
        </div>

        {/* 
          Feature Benefits Section - Compact grid
        */}
        <div className="mb-3">
          <h2 className="text-sm font-bold text-center mb-2">What You Get</h2>
          <div className="grid grid-cols-2 gap-1.5">
            {FEATURE_BENEFITS.map((feature, i) => (
              <div 
                key={i} 
                className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors rounded-xl"
              >
                <div className="text-center">
                  <div className="text-sm mb-0.5">{feature.icon}</div>
                  <span className="text-xs font-medium text-foreground">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Premium Badge Section - Compact
        */}
        <div className="bg-gradient-to-r from-purple-500/15 to-emerald-500/15 border border-purple-500/25 p-2.5 relative overflow-hidden rounded-xl">
          <div className="absolute top-1.5 right-1.5">
            <Sparkles size={12} className="text-amber-400 animate-pulse" />
          </div>
          
          <h3 className="font-bold text-sm mb-0.5 flex items-center gap-2">
            🧠 Sharpe+ Analytics
          </h3>
          <p className="text-xs text-muted-foreground">
            Advanced portfolio allocation insights & trends
          </p>
        </div>
      </div>

      {/* 
        Fixed Footer CTA - Reduced spacing
      */}
      <div className="fixed bottom-16 left-0 right-0 z-30 pointer-events-none">
        <div className="h-3 bg-gradient-to-t from-background to-transparent" />
        
        <div className="bg-background/95 backdrop-blur-sm p-3 pointer-events-auto">
          <div className="max-w-md mx-auto">
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-2.5 text-sm font-bold shadow-xl border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-xl"
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
