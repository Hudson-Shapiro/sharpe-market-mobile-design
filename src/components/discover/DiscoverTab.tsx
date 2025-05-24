
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Eye } from 'lucide-react';

const DiscoverTab = () => {
  const featuredPortfolios = [
    {
      name: "Tech Growth Fund",
      author: "Sarah Chen",
      description: "Focused on high-growth technology companies",
      followers: 1234,
      views: 12500,
      return: 45.2,
      tags: ["Tech", "Growth", "Large Cap"]
    },
    {
      name: "ESG Leaders",
      author: "Mike Johnson",
      description: "Sustainable investing with strong ESG principles",
      followers: 987,
      views: 8900,
      return: 32.1,
      tags: ["ESG", "Sustainable", "Long Term"]
    },
    {
      name: "Dividend Kings",
      author: "Alex Rivera",
      description: "Reliable dividend-paying companies",
      followers: 756,
      views: 6700,
      return: 18.9,
      tags: ["Dividend", "Income", "Stable"]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Featured Portfolios</h2>
        <div className="space-y-4">
          {featuredPortfolios.map((portfolio, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4 hover:bg-card/80 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{portfolio.name}</h3>
                  <p className="text-muted-foreground text-sm">by {portfolio.author}</p>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold text-lg flex items-center gap-1">
                    <TrendingUp size={16} />
                    +{portfolio.return}%
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">{portfolio.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {portfolio.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {portfolio.followers} followers
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    {portfolio.views.toLocaleString()} views
                  </span>
                </div>
                <button className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverTab;
