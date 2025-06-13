
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, TrendingUp, BarChart3, Crown, Star } from 'lucide-react';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

const CreatorProfile = () => {
  const { creatorId } = useParams();
  const navigate = useNavigate();

  // Mock creator data - in a real app this would be fetched based on creatorId
  const creatorData = {
    name: "Sarah Chen",
    followers: 3210,
    avgReturn: 38.7,
    portfolios: 5,
    rank: 2,
    bio: "AI and technology investor with 8+ years of experience. Focus on emerging tech companies with strong fundamentals."
  };

  const creatorPortfolios = [
    {
      id: "1",
      name: "AI Revolution",
      return: 34.2,
      sharpeRatio: 2.1,
      author: "Sarah Chen",
      isOwned: false,
      isSubscribed: true
    },
    {
      id: "2", 
      name: "Tech Growth Leaders",
      return: 28.5,
      sharpeRatio: 1.8,
      author: "Sarah Chen",
      isOwned: false,
      isSubscribed: false
    },
    {
      id: "3",
      name: "Cloud Computing Giants", 
      return: 42.1,
      sharpeRatio: 2.3,
      author: "Sarah Chen",
      isOwned: false,
      isSubscribed: true
    },
    {
      id: "4",
      name: "Robotics & Automation",
      return: 19.8,
      sharpeRatio: 1.5,
      author: "Sarah Chen", 
      isOwned: false,
      isSubscribed: false
    },
    {
      id: "5",
      name: "Quantum Computing Pioneers",
      return: 56.3,
      sharpeRatio: 2.7,
      author: "Sarah Chen",
      isOwned: false,
      isSubscribed: true
    }
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-blue-400 to-blue-600";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4">
          {/* Header with Back Button */}
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary/50 rounded-lg"
            >
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-xl font-bold text-foreground">Creator Profile</h1>
          </div>

          {/* Creator Info Card - Updated to match theme */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="relative">
                <Avatar className="h-16 w-16 bg-gradient-to-br from-purple-400 to-emerald-400">
                  <AvatarFallback className="text-white font-bold bg-transparent text-lg">
                    {creatorData.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {creatorData.rank <= 3 && (
                  <div className={`absolute -top-1 -right-1 w-8 h-8 rounded-lg bg-gradient-to-r ${getRankColor(creatorData.rank)} flex items-center justify-center shadow-lg`}>
                    <Crown size={14} className="text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-foreground">{creatorData.name}</h2>
                  <Badge 
                    className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                    style={{ borderRadius: '12px' }}
                  >
                    Rank #{creatorData.rank} ⭐
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {creatorData.bio}
                </p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-400 font-bold text-lg">
                      <Users size={14} />
                      <span>{creatorData.followers.toLocaleString()}</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Followers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
                      <TrendingUp size={14} />
                      <span>+{creatorData.avgReturn}%</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Avg Return</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-foreground font-bold text-lg">
                      <BarChart3 size={14} />
                      <span>{creatorData.portfolios}</span>
                    </div>
                    <p className="text-muted-foreground text-xs">Portfolios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolios Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="text-foreground" size={20} />
              Active Portfolios
            </h3>
            
            <div className="space-y-3">
              {creatorPortfolios.map((portfolio) => (
                <PortfolioCard 
                  key={portfolio.id}
                  {...portfolio}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CreatorProfile;
