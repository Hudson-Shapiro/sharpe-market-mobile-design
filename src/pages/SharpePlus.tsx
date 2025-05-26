
import React, { useState } from 'react';
import { Lock, ToggleLeft, ToggleRight, TrendingUp, TrendingDown, Star, Crown, ChevronDown, ChevronUp, Sparkles, Brain, Target, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';

const SharpePlus = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    holdings: true,
    sectors: true,
    behavioralMovers: true,
    watchlist: true
  });

  // Enhanced sample data for the improved dashboard
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

  const behavioralMovers = [
    { ticker: 'TSLA', change: '+14.5% allocation increase', portfolios: '6.2% of portfolios', trend: 'up' },
    { ticker: 'AMD', change: '+8.3% allocation increase', portfolios: '3.8% of portfolios', trend: 'up' },
    { ticker: 'NVDA', change: '-2.1% allocation decrease', portfolios: '78.4% of portfolios', trend: 'down' },
    { ticker: 'META', change: '+5.7% allocation increase', portfolios: '4.6% of portfolios', trend: 'up' }
  ];

  const watchlistData = [
    { ticker: 'AAPL', addedPercent: 23.4, avgAllocation: 8.7 },
    { ticker: 'MSFT', addedPercent: 19.2, avgAllocation: 9.4 },
    { ticker: 'GOOGL', addedPercent: 15.8, avgAllocation: 7.2 },
    { ticker: 'AMZN', addedPercent: 12.3, avgAllocation: 5.9 },
    { ticker: 'TSLA', addedPercent: 11.7, avgAllocation: 6.8 }
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

  const PostSubscriptionScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden pb-20">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Brain size={24} className="text-emerald-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Welcome to Sharpe+
          </h1>
          <p className="text-muted-foreground">You're now seeing how thousands are trading.</p>
        </div>

        {/* Analytics Dashboard */}
        <div className="space-y-6 mb-8">
          {/* Top Holdings Section */}
          <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
            <button 
              onClick={() => toggleSection('holdings')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                📍 Top Holdings
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Live</span>
              </h2>
              {expandedSections.holdings ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.holdings && (
              <div className="px-4 pb-4 space-y-2">
                {topHoldings.slice(0, 6).map((holding, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span className="text-lg">{holding.logo}</span>
                      <div className="min-w-0">
                        <div className="font-medium text-sm">{holding.ticker}</div>
                        <div className="text-xs text-muted-foreground">{holding.portfolioPercent}% of portfolios</div>
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
          <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
            <button 
              onClick={() => toggleSection('sectors')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                📍 Top Sectors
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Updated</span>
              </h2>
              {expandedSections.sectors ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.sectors && (
              <div className="px-4 pb-4 space-y-2">
                {topSectors.map((sector, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
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

          {/* Behavioral Movers Section */}
          <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
            <button 
              onClick={() => toggleSection('behavioralMovers')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                🔄 Investor Shifts Today
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>24h</span>
              </h2>
              {expandedSections.behavioralMovers ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.behavioralMovers && (
              <div className="px-4 pb-4">
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {behavioralMovers.map((mover, i) => (
                    <div key={i} className="min-w-[200px] p-3 bg-background/30 flex-shrink-0" style={{ borderRadius: '10px' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-sm">{mover.ticker}</span>
                        {mover.trend === 'up' ? 
                          <TrendingUp size={12} className="text-emerald-400" /> : 
                          <TrendingDown size={12} className="text-red-400" />
                        }
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{mover.change}</div>
                      <div className="text-xs text-muted-foreground">{mover.portfolios}</div>
                      <div className="mt-2 w-full h-4">
                        <MiniChart data={generateSparklineData()} width={160} height={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sharpe+ Watchlist Section */}
          <div className="bg-card/50 border border-border backdrop-blur-sm overflow-hidden" style={{ borderRadius: '10px' }}>
            <button 
              onClick={() => toggleSection('watchlist')}
              className="w-full p-4 flex items-center justify-between hover:bg-background/30 transition-colors"
            >
              <h2 className="text-lg font-bold flex items-center gap-2">
                🔎 Most Added to Watchlists
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 font-medium" style={{ borderRadius: '10px' }}>Week</span>
              </h2>
              {expandedSections.watchlist ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {expandedSections.watchlist && (
              <div className="px-4 pb-4 space-y-2">
                {watchlistData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-background/30" style={{ borderRadius: '10px' }}>
                    <div className="flex items-center gap-3">
                      <Target size={16} className="text-amber-400" />
                      <div>
                        <div className="font-medium text-sm">{item.ticker}</div>
                        <div className="text-xs text-muted-foreground">{item.addedPercent}% added this week</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Avg: {item.avgAllocation}%
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Deep Dives Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold flex items-center gap-2">
              🧠 Deep Dives
            </h3>
            
            <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                📊 Sector Rotation Summary
              </h4>
              <p className="text-xs text-muted-foreground mb-2">Technology leading outflows, Energy seeing inflows</p>
              <div className="flex gap-2">
                <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1" style={{ borderRadius: '10px' }}>Tech -2.4%</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1" style={{ borderRadius: '10px' }}>Energy +3.1%</span>
              </div>
            </div>

            <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                📈 Daily ETF Flow Trends
              </h4>
              <p className="text-xs text-muted-foreground mb-2">SPY seeing consistent inflows, QQQ mixed</p>
              <div className="flex gap-2">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1" style={{ borderRadius: '10px' }}>SPY +$2.4B</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1" style={{ borderRadius: '10px' }}>QQQ ±$0.8B</span>
              </div>
            </div>

            <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Activity size={16} className="text-purple-400" />
                Hedge vs Retail Shift Tracker
              </h4>
              <p className="text-xs text-muted-foreground">Retail increasing tech allocation while institutions rotate</p>
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
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background px-4 py-2 flex items-center gap-2 shadow-lg"
          style={{ borderRadius: '999px' }}
        >
          {isSubscribed ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
          <span className="text-xs font-medium">Preview Mode</span>
        </Button>
      </div>

      {/* Screen Content */}
      {isSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
    </div>
  );
};

export default SharpePlus;
