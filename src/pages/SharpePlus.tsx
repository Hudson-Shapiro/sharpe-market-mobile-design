
import React, { useState } from 'react';
import { Lock, ToggleLeft, ToggleRight, TrendingUp, TrendingDown, Star, Crown, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';

const SharpePlus = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    holdings: true,
    sectors: true
  });

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

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const PreSubscriptionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 pt-16">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <Crown size={32} className="text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Unlock Sharpe+
          </h1>
          <p className="text-lg text-muted-foreground mb-8 px-4">
            Access platform-wide insights. See what real investors are doing in real time.
          </p>
          
          {/* Preview Data - Blurred */}
          <div className="space-y-4 mb-8 relative">
            <div className="bg-card/50 border border-border rounded-xl p-4 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                <Lock size={24} className="text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-bold text-sm mb-3 blur-sm">🔝 Top Holdings</h3>
              <div className="space-y-2 blur-sm">
                {topHoldings.slice(0, 3).map((holding, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span>{holding.logo}</span>
                      <span className="font-medium">{holding.ticker}</span>
                    </div>
                    <span className="text-emerald-400">••••</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/50 border border-border rounded-xl p-4 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center">
                <Lock size={24} className="text-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-bold text-sm mb-3 blur-sm">🏛️ Top Sectors</h3>
              <div className="space-y-2 blur-sm">
                {topSectors.slice(0, 3).map((sector, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
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
        </div>

        {/* Benefits Section */}
        <div className="space-y-3 mb-8">
          <h2 className="text-xl font-bold text-center mb-6">What You'll Unlock</h2>
          {[
            { icon: '🔓', text: 'See what tickers thousands of investors are buying' },
            { icon: '📈', text: 'Track allocation shifts across sectors' },
            { icon: '🔥', text: 'Spot fast-moving sentiment daily' },
            { icon: '📊', text: 'View average position sizes' }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">{feature.icon}</span>
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Tease Block */}
        <div className="bg-card/30 border border-border rounded-xl p-4 backdrop-blur-sm mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🔥 You're missing out on today's trends
          </h3>
          <div className="space-y-3">
            {['TSLA', 'NVDA', 'Energy Sector'].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-background/50 rounded-xl">
                <span className="font-medium">{item}</span>
                <div className="flex items-center gap-2">
                  <Lock size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">•••••</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-4 text-lg font-bold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
        >
          Upgrade to Sharpe+ — $9.99/month
        </Button>
      </div>
    </div>
  );

  const PostSubscriptionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Crown size={24} className="text-amber-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Welcome to Sharpe+
          </h1>
          <p className="text-muted-foreground">Real-time investor insights, just for you.</p>
        </div>

        {/* Analytics Dashboard */}
        <div className="space-y-4 mb-8">
          {/* Top Holdings Section */}
          <div className="bg-card/50 border border-border rounded-xl backdrop-blur-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('holdings')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                🔝 Top Holdings
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Live</span>
              </h2>
              {expandedSections.holdings ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.holdings && (
              <div className="px-4 pb-4 space-y-2">
                {topHoldings.slice(0, 6).map((holding, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/30 rounded-xl">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-lg">{holding.logo}</span>
                      <div className="min-w-0">
                        <div className="font-medium text-sm">{holding.ticker}</div>
                        <div className="text-xs text-muted-foreground truncate">{holding.portfolioPercent}% of portfolios</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 ${holding.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {holding.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        <span className="text-xs font-medium">{Math.abs(holding.change)}%</span>
                      </div>
                      <div className="w-8 h-4">
                        <MiniChart data={generateSparklineData()} width={32} height={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Top Sectors Section */}
          <div className="bg-card/50 border border-border rounded-xl backdrop-blur-sm overflow-hidden">
            <button 
              onClick={() => toggleSection('sectors')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                🏛️ Top Sectors
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Updated</span>
              </h2>
              {expandedSections.sectors ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.sectors && (
              <div className="px-4 pb-4 space-y-2">
                {topSectors.map((sector, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{sector.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{sector.name}</div>
                        <div className="text-xs text-muted-foreground">{sector.percent}% of portfolios</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`flex items-center gap-1 ${sector.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {sector.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        <span className="text-xs font-medium">{Math.abs(sector.change)}%</span>
                      </div>
                      <div className="w-8 h-4">
                        <MiniChart data={generateSparklineData()} width={32} height={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Explore Modules */}
        <div className="space-y-3">
          <div className="bg-card/30 border border-border rounded-xl p-4 backdrop-blur-sm">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              📈 Biggest Daily Movers
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full">24h</span>
            </h3>
            <div className="space-y-2">
              {['TSLA', 'AMD', 'NVDA'].map((ticker, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-background/30 rounded-xl">
                  <span className="font-medium text-sm">{ticker}</span>
                  <span className="text-emerald-400 text-sm font-medium">+12.4%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-4 backdrop-blur-sm">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              🕵️ Sharpe+ Watchlist
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Week</span>
            </h3>
            <div className="space-y-2">
              {['AAPL', 'MSFT', 'GOOGL'].map((ticker, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-background/30 rounded-xl">
                  <span className="font-medium text-sm">{ticker}</span>
                  <span className="text-blue-400 text-sm font-medium">+847 adds</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/30 border border-border rounded-xl p-4 backdrop-blur-sm">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              📊 Fastest Growing Sectors
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">Trend</span>
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-background/30 rounded-xl">
                <span className="font-medium text-sm">⚡ Energy</span>
                <span className="text-purple-400 text-sm font-medium">+8.2%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-background/30 rounded-xl">
                <span className="font-medium text-sm">🧬 Healthcare</span>
                <span className="text-emerald-400 text-sm font-medium">+5.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Floating Toggle Button */}
      <div className="fixed top-6 right-4 z-50">
        <Button
          onClick={() => setIsSubscribed(!isSubscribed)}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
        >
          {isSubscribed ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
          <span className="text-xs font-medium">{isSubscribed ? 'Subscribed' : 'Preview Mode'}</span>
        </Button>
      </div>

      {/* Screen Content */}
      {isSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
    </div>
  );
};

export default SharpePlus;
