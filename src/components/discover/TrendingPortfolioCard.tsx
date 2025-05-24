
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
    <Card className={`bg-gradient-to-br ${portfolio.gradient} border-border hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 group cursor-pointer rounded-lg`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-2xl bg-background/20 rounded-lg p-2 backdrop-blur-sm">
            {portfolio.image}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-foreground truncate">{portfolio.name}</h4>
            <p className="text-xs text-muted-foreground">by {portfolio.author}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">7D Return</span>
            <div className="flex items-center gap-1 text-emerald-400 font-bold">
              <TrendingUp size={12} />
              +{portfolio.return7d}%
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">1M Return</span>
            <span className="text-emerald-400 font-bold">+{portfolio.return1m}%</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users size={12} />
            {portfolio.followers.toLocaleString()}
          </div>
          <Button 
            size="sm" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-3 py-1 h-auto group-hover:shadow-lg group-hover:shadow-emerald-500/30 rounded-lg"
          >
            Follow
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingPortfolioCard;
