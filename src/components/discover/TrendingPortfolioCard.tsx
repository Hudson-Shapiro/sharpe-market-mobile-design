
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users } from 'lucide-react';

interface Portfolio {
  id: number;
  name: string;
  author: string;
  return7d: number;
  return1m: number;
  followers: number;
  image: string;
  gradient: string;
}

interface TrendingPortfolioCardProps {
  portfolio: Portfolio;
}

const TrendingPortfolioCard = ({ portfolio }: TrendingPortfolioCardProps) => {
  return (
    <Card className={`bg-gradient-to-br ${portfolio.gradient} border-border hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 group cursor-pointer w-full max-w-[280px]`} style={{ borderRadius: '12px' }}>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-lg bg-background/20 backdrop-blur-sm p-1.5" style={{ borderRadius: '8px' }}>
            {portfolio.image}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground truncate text-sm">{portfolio.name}</h4>
            <p className="text-xs text-muted-foreground truncate">by {portfolio.author}</p>
          </div>
        </div>
        
        <div className="space-y-1.5 mb-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">7D</span>
            <div className="flex items-center gap-1 text-emerald-400 font-bold text-sm">
              <TrendingUp size={10} />
              +{portfolio.return7d}%
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">1M</span>
            <span className="text-emerald-400 font-bold text-sm">+{portfolio.return1m}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users size={10} />
            <span className="text-xs">{portfolio.followers > 999 ? `${(portfolio.followers/1000).toFixed(1)}k` : portfolio.followers}</span>
          </div>
          <Button 
            size="sm" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-2 py-1 h-auto group-hover:shadow-lg group-hover:shadow-emerald-500/30"
            style={{ borderRadius: '8px' }}
          >
            Follow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingPortfolioCard;
