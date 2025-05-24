import React from 'react';
import { Search, TrendingUp, Users, Award, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search', { state: { from: 'explore' } });
  };

  const featuredPortfolios = [
    { id: '1', name: 'AI Revolution', creator: 'Ryan Masters', return: '34.52%' },
    { id: '2', name: 'Tech Innovators', creator: 'Emma Clark', return: '28.71%' },
    { id: '3', name: 'Green Energy', creator: 'Dr. Liu Wei', return: '22.35%' },
  ];

  const trendingCreators = [
    { id: '1', name: 'Ryan Masters', followers: '125K' },
    { id: '2', name: 'Emma Clark', followers: '95K' },
    { id: '3', name: 'Dr. Liu Wei', followers: '78K' },
  ];

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background pt-2">
        {/* Search Bar */}
        <div className="px-4 mb-6">
          <button 
            onClick={handleSearchClick}
            className="w-full flex items-center bg-secondary/50 rounded-full py-3 px-4 text-left border border-border/40 hover:bg-secondary/70 transition-colors"
          >
            <Search size={20} className="text-muted-foreground mr-3" />
            <span className="text-muted-foreground">Explore portfolios, creators, stocks...</span>
          </button>
        </div>

        {/* Featured Portfolios */}
        <div className="px-4 mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Featured Portfolios</h2>
            <Button variant="link" className="gap-1.5">
              See All
              <ChevronRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPortfolios.map((portfolio) => (
              <Card key={portfolio.id} className="bg-secondary/50 backdrop-blur-sm border border-border/40">
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1">{portfolio.name}</h3>
                  <p className="text-xs text-muted-foreground">by {portfolio.creator}</p>
                  <div className="flex items-center text-emerald-400 text-sm font-semibold mt-2">
                    <TrendingUp size={14} className="mr-1" />
                    <span>{portfolio.return}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Creators */}
        <div className="px-4 mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Trending Creators</h2>
            <Button variant="link" className="gap-1.5">
              See All
              <ChevronRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingCreators.map((creator) => (
              <Card key={creator.id} className="bg-secondary/50 backdrop-blur-sm border border-border/40">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-secondary/70 flex items-center justify-center">
                      <Users size={16} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-sm font-semibold">{creator.name}</h3>
                  </div>
                  <div className="flex items-center text-blue-400 text-xs font-medium">
                    <Award size={12} className="mr-1" />
                    <span>{creator.followers} Followers</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Discover;
