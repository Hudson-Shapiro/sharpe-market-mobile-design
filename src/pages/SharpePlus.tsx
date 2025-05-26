
import React, { useState } from 'react';
import { Lock, ToggleLeft, ToggleRight, TrendingUp, TrendingDown, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';

const SharpePlus = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Sample data for dashboard
  const topHoldings = [
    { ticker: 'NVDA', name: 'NVIDIA Corp', portfolioPercent: 78.4, avgAllocation: 12.3, change: 5.2, logo: '🟢' },
    { ticker: 'AAPL', name: 'Apple Inc', portfolioPercent: 72.1, avgAllocation: 8.7, change: -2.1, logo: '🍎' },
    { ticker: 'MSFT', name: 'Microsoft', portfolioPercent: 68.9, avgAllocation: 9.4, change: 3.7, logo: '🔷' },
    { ticker: 'TSLA', name: 'Tesla Inc', portfolioPercent: 55.2, avgAllocation: 6.8, change: -4.3, logo: '⚡' },
    { ticker: 'GOOGL', name: 'Alphabet Inc', portfolioPercent: 51.8, avgAllocation: 7.2, change: 1.9, logo: '🌈' },
    { ticker: 'AMZN', name: 'Amazon', portfolioPercent: 49.3, avgAllocation: 5.9, change: 2.8, logo: '📦' },
    { ticker: 'META', name: 'Meta Platforms', portfolioPercent: 42.7, avgAllocation: 4.6, change: -1.5, logo: '👥' },
    { ticker: 'SPY', name: 'SPDR S&P 500', portfolioPercent: 38.4, avgAllocation: 15.2, change: 0.7, logo: '📈' },
    { ticker: 'QQQ', name: 'Invesco QQQ', portfolioPercent: 35.9, avgAllocation: 11.8, change: 1.4, logo: '🔺' },
    { ticker: 'AMD', name: 'AMD Inc', portfolioPercent: 31.6, avgAllocation: 3.8, change: 6.1, logo: '🔴' }
  ];

  const topSectors = [
    { name: 'Technology', percent: 42.3, avgAllocation: 28.7, change: 2.4, icon: '💻' },
    { name: 'Healthcare', percent: 15.8, avgAllocation: 12.1, change: -0.8, icon: '🧬' },
    { name: 'Financial', percent: 12.4, avgAllocation: 9.6, change: 1.2, icon: '🏦' },
    { name: 'Consumer Disc.', percent: 11.7, avgAllocation: 8.3, change: -1.5, icon: '🛒' },
    { name: 'Energy', percent: 8.9, avgAllocation: 6.2, change: 3.1, icon: '⚡' },
    { name: 'Industrial', percent: 5.2, avgAllocation: 4.1, change: 0.6, icon: '🏭' }
  ];

  const generateSparklineData = () => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  const PreSubscriptionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="mb-4">
            <Crown size={48} className="text-amber-400 mx-auto mb-4" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Unlock Sharpe+
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gain access to the most powerful market insights — powered by real investor behavior.
          </p>
          
          {/* Preview Cards - Blurred */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 relative">
            <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                <Lock size={32} className="text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-bold text-lg mb-4">🔝 Top Holdings</h3>
              <div className="space-y-3 blur-sm">
                {topHoldings.slice(0, 5).map((holding, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{holding.logo}</span>
                      <span className="font-medium">{holding.ticker}</span>
                    </div>
                    <span className="text-emerald-400">••••</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                <Lock size={32} className="text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-bold text-lg mb-4">🏛️ Top Sectors</h3>
              <div className="space-y-3 blur-sm">
                {topSectors.slice(0, 5).map((sector, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{sector.icon}</span>
                      <span className="font-medium">{sector.name}</span>
                    </div>
                    <span className="text-emerald-400">••••</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
          >
            Upgrade to Sharpe+ — $9.99/month
          </Button>
        </div>

        {/* What You'll Unlock */}
        <div className="bg-card/30 border border-border rounded-xl p-8 backdrop-blur-sm mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">What You'll Unlock</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "See what thousands of investors are buying and selling",
              "Track shifts in sector allocation in real time",
              "Identify emerging sentiment trends from daily position flows",
              "View average position size across the platform"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock size={14} className="text-emerald-400" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Today Tease */}
        <div className="bg-card/30 border border-border rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🔥 Trending Today
            <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">Premium Only</span>
          </h3>
          <div className="space-y-3">
            {['TSLA', 'NVDA', 'AAPL'].map((ticker, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                <span className="font-medium">{ticker}</span>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">Allocation Change: <span className="text-emerald-400">•••••</span></span>
                  <span className="text-muted-foreground">% of Portfolios: <span className="text-emerald-400">•••••</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const PostSubscriptionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown size={32} className="text-amber-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Sharpe+ Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground">Real-time market insights from thousands of investors</p>
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Holdings */}
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              🔝 Top Holdings
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Live</span>
            </h2>
            <div className="space-y-3">
              {topHoldings.map((holding, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-lg">{holding.logo}</span>
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{holding.ticker}</div>
                      <div className="text-xs text-muted-foreground truncate">{holding.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="text-right">
                      <div className="font-medium">{holding.portfolioPercent}%</div>
                      <div className="text-muted-foreground">of portfolios</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{holding.avgAllocation}%</div>
                      <div className="text-muted-foreground">avg allocation</div>
                    </div>
                    <div className={`flex items-center gap-1 ${holding.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {holding.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      <span className="font-medium">{Math.abs(holding.change)}%</span>
                    </div>
                    <div className="w-12 h-6">
                      <MiniChart data={generateSparklineData()} width={48} height={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Sectors */}
          <div className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              🏛️ Top Sectors
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Updated</span>
            </h2>
            <div className="space-y-4">
              {topSectors.map((sector, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{sector.icon}</span>
                    <div>
                      <div className="font-medium text-sm">{sector.name}</div>
                      <div className="text-xs text-muted-foreground">{sector.avgAllocation}% avg allocation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="text-right">
                      <div className="font-medium">{sector.percent}%</div>
                      <div className="text-muted-foreground">of portfolios</div>
                    </div>
                    <div className={`flex items-center gap-1 ${sector.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {sector.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      <span className="font-medium">{Math.abs(sector.change)}%</span>
                    </div>
                    <div className="w-12 h-6">
                      <MiniChart data={generateSparklineData()} width={48} height={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Modules */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card/30 border border-border rounded-xl p-6 backdrop-blur-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              📈 Biggest Movers
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">24h</span>
            </h3>
            <div className="space-y-3">
              {['TSLA', 'AMD', 'NVDA'].map((ticker, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                  <span className="font-medium text-sm">{ticker}</span>
                  <span className="text-emerald-400 text-sm font-medium">+12.4%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6 backdrop-blur-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              🕵️ Most Added
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Week</span>
            </h3>
            <div className="space-y-3">
              {['AAPL', 'MSFT', 'GOOGL'].map((ticker, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                  <span className="font-medium text-sm">{ticker}</span>
                  <span className="text-blue-400 text-sm font-medium">+847</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-6 backdrop-blur-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              📊 ETFs vs Stocks
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Trend</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                <span className="font-medium text-sm">ETFs</span>
                <span className="text-purple-400 text-sm font-medium">34.2%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-background/30 rounded-lg">
                <span className="font-medium text-sm">Stocks</span>
                <span className="text-emerald-400 text-sm font-medium">65.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsSubscribed(!isSubscribed)}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 flex items-center gap-2"
        >
          {isSubscribed ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
          <span className="text-xs">{isSubscribed ? 'Subscribed' : 'Preview'}</span>
        </Button>
      </div>

      {/* Screen Content */}
      {isSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
    </div>
  );
};

export default SharpePlus;
