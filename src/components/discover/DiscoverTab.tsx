
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TrendingUp, Users, Eye, Flame, Search, Gem, Play, BookOpen, Clock, Star, Crown, Zap, Sparkles } from 'lucide-react';
import TrendingPortfolioCard from './TrendingPortfolioCard';
import CreatorCard from './CreatorCard';
import MiniPoll from './MiniPoll';

const DiscoverTab = () => {
  const trendingPortfolios = [
    {
      id: 1,
      name: "AI Revolution",
      author: "Sarah Chen",
      return7d: 12.4,
      return1m: 34.2,
      followers: 2341,
      image: "🤖",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      id: 2,
      name: "Green Energy",
      author: "Mike Johnson", 
      return7d: 8.1,
      return1m: 28.7,
      followers: 1876,
      image: "🌱",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 3,
      name: "Crypto Alpha",
      author: "Alex Rivera",
      return7d: 15.2,
      return1m: 42.1,
      followers: 3124,
      image: "₿",
      gradient: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  const hotTags = [
    { label: "AI", icon: "🤖", count: 156 },
    { label: "ESG", icon: "🌱", count: 89 },
    { label: "Value", icon: "🏦", count: 234 },
    { label: "High Risk", icon: "🚀", count: 67 },
    { label: "Dividend", icon: "💰", count: 178 },
    { label: "Tech", icon: "💻", count: 298 }
  ];

  const topCreators = [
    { name: "Josh", followers: 5420, avgReturn: 45.2, portfolios: 8, rank: 1 },
    { name: "Sarah C.", followers: 3210, avgReturn: 38.7, portfolios: 5, rank: 2 },
    { name: "Mike J.", followers: 2890, avgReturn: 32.1, portfolios: 12, rank: 3 },
    { name: "Alex R.", followers: 2156, avgReturn: 28.9, portfolios: 6, rank: 4 }
  ];

  return (
    <div className="space-y-6">
      {/* SharpeMarket Spotlight - Condensed */}
      <div className="p-3 rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 backdrop-blur-sm shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-emerald-400" size={16} />
          <h3 className="text-sm font-bold text-foreground">SharpeMarket Spotlight</h3>
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
            Curated
          </Badge>
        </div>
        <div className="mb-3">
          <h4 className="font-bold text-foreground text-base mb-1">"AI Revolution"</h4>
          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
            Selected for its breakout AI theme & exceptional performance this month.
          </p>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="text-center">
              <div className="text-sm font-bold text-emerald-400">+34.2%</div>
              <div className="text-xs text-muted-foreground">1M Return</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-foreground">Sarah Chen</div>
              <div className="text-xs text-muted-foreground">Creator</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-foreground">2.3k</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
          </div>
        </div>
        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-1.5" style={{ borderRadius: '8px' }}>
          🔎 View Portfolio
        </Button>
      </div>

      {/* Trending Portfolios Carousel */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Flame className="text-orange-500" size={20} />
          <h3 className="text-lg font-bold text-foreground">Trending Portfolios</h3>
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
            Hot
          </Badge>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-3">
            {trendingPortfolios.map((portfolio) => (
              <CarouselItem key={portfolio.id} className="pl-2 md:pl-3 basis-auto">
                <TrendingPortfolioCard portfolio={portfolio} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Hot Tags */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
          <Zap className="text-yellow-500" size={20} />
          Hot Tags
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {hotTags.map((tag, index) => (
            <button
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-sm font-medium whitespace-nowrap hover:bg-card/80 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
              style={{ borderRadius: '12px' }}
            >
              <span className="text-base">{tag.icon}</span>
              {tag.label}
              <Badge variant="secondary" className="text-xs group-hover:bg-emerald-500/20 group-hover:text-emerald-400">
                {tag.count}
              </Badge>
            </button>
          ))}
        </div>
      </div>

      {/* Top Creators */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Crown className="text-yellow-500" size={20} />
          <h3 className="text-lg font-bold text-foreground">Top Creators This Week</h3>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {topCreators.map((creator, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[200px]">
                <CreatorCard creator={creator} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Mini Poll Widget */}
      <MiniPoll />
    </div>
  );
};

export default DiscoverTab;
