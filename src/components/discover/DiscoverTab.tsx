
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { TrendingUp, Users, Eye, Flame, Search, Gem, Play, BookOpen, Clock, Star, Crown, Zap } from 'lucide-react';
import TrendingPortfolioCard from './TrendingPortfolioCard';
import CreatorCard from './CreatorCard';
import QuickActionCard from './QuickActionCard';
import MiniPoll from './MiniPoll';

const DiscoverTab = () => {
  const [activeCategory, setActiveCategory] = useState('trending');

  const categories = [
    { id: 'trending', label: 'Trending Now', icon: Flame, color: 'from-orange-500 to-red-500' },
    { id: 'curated', label: 'Curated Categories', icon: Search, color: 'from-blue-500 to-purple-500' },
    { id: 'hidden', label: 'Hidden Gems', icon: Gem, color: 'from-emerald-500 to-teal-500' }
  ];

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

  const quickActions = [
    {
      title: "Build Your First Portfolio",
      description: "Get started in 5 minutes",
      icon: Play,
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Watch Portfolio Breakdown",
      description: "Learn from the pros",
      icon: BookOpen,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Learn Sharpe Ratios",
      description: "Master in 30 seconds",
      icon: Clock,
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Header */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
              }`}
            >
              <Icon size={16} />
              {category.label}
            </button>
          );
        })}
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
          <CarouselContent className="-ml-2 md:-ml-4">
            {trendingPortfolios.map((portfolio) => (
              <CarouselItem key={portfolio.id} className="pl-2 md:pl-4 basis-[280px]">
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
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium whitespace-nowrap hover:bg-card/80 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group"
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

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-3">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} action={action} />
          ))}
        </div>
      </div>

      {/* Mini Poll Widget */}
      <MiniPoll />

      {/* Portfolio of the Day */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="text-sm font-medium text-purple-400">Portfolio of the Day</span>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
              +32.1%
            </Badge>
          </div>
          <h4 className="font-bold text-foreground mb-1">ESG Growth Leaders</h4>
          <p className="text-sm text-muted-foreground mb-3">Sustainable companies driving the future</p>
          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            View Portfolio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscoverTab;
