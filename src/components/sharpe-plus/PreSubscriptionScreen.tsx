
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
        Main Content Container
      */}
      <div className="relative z-10 p-6 max-w-md mx-auto pb-32">
        {/* 
          Hero Section
        */}
        <div className="text-center mb-8 pt-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/15 to-purple-500/15 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <div className="text-2xl">📊</div>
          </div>
          
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Unlock Sharpe+
          </h1>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            See how investors are allocating capital — with detailed metrics.
          </p>
        </div>

        {/* 
          Key Metrics Preview Section
        */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            📊 Get These Key Metrics
          </h2>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            {KEY_METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="p-4 bg-card/60 border border-border/40 backdrop-blur-sm rounded-xl"
              >
                <div className={`text-sm font-bold ${metric.color} mb-2`}>
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Data Preview Section
        */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Top Holdings Preview */}
          <div className="bg-card/60 border border-border/40 backdrop-blur-sm relative overflow-hidden mb-4 rounded-xl">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-xl">
              <div className="text-center">
                <Lock size={20} className="text-emerald-400 animate-pulse mx-auto mb-2" />
                <p className="text-sm text-emerald-400 font-medium">Live Data</p>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-base mb-3 flex items-center gap-2">
                📈 Top Holdings Analysis
              </h3>
              
              <div className="grid grid-cols-4 gap-3 text-sm text-muted-foreground font-medium mb-3 px-2">
                <div>Stock</div>
                <div className="text-center">% Portfolios</div>
                <div className="text-center">Avg Alloc %</div>
                <div className="text-center">Day Change</div>
              </div>
              
              <div className="space-y-2">
                {TEASER_HOLDINGS.map((holding, i) => (
                  <div key={i} className="grid grid-cols-4 gap-3 items-center text-sm bg-background/30 p-3 rounded-lg">
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
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lock size={14} className="text-emerald-400" />
              See detailed allocation metrics with Sharpe+
            </p>
          </div>
        </div>

        {/* 
          Feature Benefits Section
        */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-center mb-4">What You Get</h2>
          <div className="grid grid-cols-2 gap-3">
            {FEATURE_BENEFITS.map((feature, i) => (
              <div 
                key={i} 
                className="p-4 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors rounded-xl"
              >
                <div className="text-center">
                  <div className="text-lg mb-2">{feature.icon}</div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Premium Badge Section
        */}
        <div className="bg-gradient-to-r from-purple-500/15 to-emerald-500/15 border border-purple-500/25 p-4 relative overflow-hidden rounded-xl">
          <div className="absolute top-3 right-3">
            <Sparkles size={16} className="text-amber-400 animate-pulse" />
          </div>
          
          <h3 className="font-bold text-base mb-2 flex items-center gap-2">
            🧠 Sharpe+ Analytics
          </h3>
          <p className="text-sm text-muted-foreground">
            Advanced portfolio allocation insights & trends
          </p>
        </div>
      </div>

      {/* 
        Fixed Footer CTA
      */}
      <div className="fixed bottom-16 left-0 right-0 z-30 pointer-events-none">
        <div className="h-6 bg-gradient-to-t from-background to-transparent" />
        
        <div className="bg-background/95 backdrop-blur-sm p-6 pointer-events-auto">
          <div className="max-w-md mx-auto">
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-4 text-base font-bold shadow-xl border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-xl"
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
