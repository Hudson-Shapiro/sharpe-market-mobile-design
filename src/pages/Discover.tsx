
import React, { useState } from 'react';
import { Search, TrendingUp, Users, Award, ChevronRight, Info, Trophy, Sparkles, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Discover = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSearchClick = () => {
    navigate('/search', { state: { from: 'explore' } });
  };

  const featuredPortfolios = [
    { 
      id: '1', 
      name: 'AI Revolution', 
      creator: 'Ryan Masters', 
      return: 34.52,
      sharpeRatio: 2.8,
      rank: 1,
      topPercent: 1,
      vsSpReturn: 51.2,
      isVerified: true
    },
    { 
      id: '2', 
      name: 'Tech Innovators', 
      creator: 'Emma Clark', 
      return: 28.71,
      sharpeRatio: 2.1,
      rank: 2,
      topPercent: 2,
      vsSpReturn: 34.8,
      isVerified: false
    },
    { 
      id: '3', 
      name: 'Green Energy', 
      creator: 'Dr. Liu Wei', 
      return: 22.35,
      sharpeRatio: 1.9,
      rank: 3,
      topPercent: 5,
      vsSpReturn: 28.3,
      isVerified: true
    },
  ];

  const trendingCreators = [
    { id: '1', name: 'Ryan Masters', followers: '125K', isVerified: true },
    { id: '2', name: 'Emma Clark', followers: '95K', isVerified: false },
    { id: '3', name: 'Dr. Liu Wei', followers: '78K', isVerified: true },
  ];

  const getTopPercentBadgeColor = (percent: number) => {
    if (percent <= 1) return 'from-amber-400 to-yellow-500 text-amber-900';
    if (percent <= 5) return 'from-emerald-400 to-green-500 text-emerald-900';
    if (percent <= 10) return 'from-teal-400 to-cyan-500 text-teal-900';
    return 'from-blue-400 to-indigo-500 text-blue-900';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <Trophy size={12} className="text-amber-400" />;
    return null;
  };

  const generateSparklineData = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      value: 50 + Math.sin(i * 0.5) * 20 + Math.random() * 10
    }));
  };

  return (
    <TooltipProvider>
      <ScrollArea className="h-full">
        <div className="min-h-screen bg-background pt-2">
          {/* Enhanced Search Bar */}
          <div className="px-4 mb-6 sticky top-2 z-10">
            <button 
              onClick={handleSearchClick}
              className="w-full flex items-center bg-secondary/60 backdrop-blur-md rounded-2xl py-3.5 px-5 text-left border border-border/50 hover:bg-secondary/80 hover:border-border/70 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Search size={20} className="text-muted-foreground mr-3 group-hover:text-foreground transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Explore portfolios, creators, stocks...</span>
              <Filter size={16} className="text-muted-foreground ml-auto group-hover:text-foreground transition-colors" />
            </button>
          </div>

          {/* Featured Portfolios with Enhanced Cards */}
          <div className="px-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Top Performers
              </h2>
              <Button variant="link" className="gap-1.5 hover:gap-2 transition-all">
                See All
                <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="space-y-4">
              {featuredPortfolios.map((portfolio) => (
                <Card 
                  key={portfolio.id} 
                  className={cn(
                    "relative bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer hover:bg-secondary/60 hover:border-border/70 hover:shadow-xl hover:-translate-y-1",
                    hoveredCard === portfolio.id && "scale-[1.02]"
                  )}
                  onMouseEnter={() => setHoveredCard(portfolio.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Rank Badge with Enhanced Design */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg",
                        portfolio.rank <= 3 
                          ? "bg-gradient-to-br from-amber-400 to-amber-600 text-amber-900" 
                          : "bg-gradient-to-br from-gray-600 to-gray-800 text-gray-200"
                      )}>
                        {portfolio.rank}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-foreground">{portfolio.name}</h3>
                          {portfolio.isVerified && (
                            <Sparkles size={14} className="text-blue-400 fill-blue-400" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">by {portfolio.creator}</p>
                      </div>
                    </div>
                    
                    <Badge className={cn(
                      "bg-gradient-to-r text-xs font-bold px-2 py-1 shadow-lg hover:shadow-xl transition-all",
                      getTopPercentBadgeColor(portfolio.topPercent)
                    )}>
                      Top {portfolio.topPercent}%
                    </Badge>
                  </div>

                  {/* Performance Stats Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-emerald-400 text-lg font-bold">
                        <TrendingUp size={16} className="mr-1" />
                        <span>+{portfolio.return.toFixed(1)}%</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>Sharpe:</span>
                        <span className="font-semibold text-blue-400">{portfolio.sharpeRatio}</span>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={12} className="text-muted-foreground hover:text-foreground cursor-help" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-48">
                              The Sharpe ratio measures risk-adjusted returns. Higher values indicate better performance per unit of risk.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    {/* Enhanced vs S&P Display */}
                    <div className="flex items-center gap-1 text-sm">
                      <TrendingUp size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">
                        Beat S&P by {portfolio.vsSpReturn}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <Progress 
                      value={Math.min(portfolio.return * 2, 100)} 
                      className="h-2 bg-secondary/60"
                    />
                  </div>

                  {/* Mini Sparkline Graph */}
                  <div className="flex justify-end">
                    <div className="w-20 h-8 relative">
                      <svg viewBox="0 0 80 32" className="w-full h-full">
                        <defs>
                          <linearGradient id={`sparkline-${portfolio.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,20 Q20,10 40,15 T80,12"
                          stroke="#10b981"
                          strokeWidth="2"
                          fill="none"
                          className="drop-shadow-sm"
                        />
                        <path
                          d="M0,20 Q20,10 40,15 T80,12 L80,32 L0,32 Z"
                          fill={`url(#sparkline-${portfolio.id})`}
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Trending Creators */}
          <div className="px-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Trending Creators
              </h2>
              <Button variant="link" className="gap-1.5 hover:gap-2 transition-all">
                See All
                <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingCreators.map((creator) => (
                <Card 
                  key={creator.id} 
                  className="bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-2xl p-4 transition-all duration-300 cursor-pointer hover:bg-secondary/60 hover:border-border/70 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <Users size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold">{creator.name}</h3>
                        {creator.isVerified && (
                          <Sparkles size={12} className="text-blue-400 fill-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-400 text-xs font-medium">
                      <Award size={12} className="mr-1" />
                      <span>{creator.followers} Followers</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-7 px-3 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                      Follow
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </TooltipProvider>
  );
};

export default Discover;
