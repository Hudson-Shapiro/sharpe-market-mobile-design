
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, TrendingUp, BarChart3, Crown } from 'lucide-react';

interface Creator {
  name: string;
  followers: number;
  avgReturn: number;
  portfolios: number;
  rank: number;
}

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  const navigate = useNavigate();

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-blue-400 to-blue-600";
  };

  const handleClick = () => {
    // Navigate to creator profile with a mock ID based on name
    const creatorId = creator.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/creator/${creatorId}`);
  };

  return (
    <Card 
      className="hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 group cursor-pointer"
      onClick={handleClick}
      style={{ borderRadius: '8px' }}
    >
      <CardContent className="p-4 text-center">
        <div className="relative mb-3">
          <Avatar className="h-12 w-12 mx-auto bg-gradient-to-br from-purple-400 to-emerald-400">
            <AvatarFallback className="text-white font-bold bg-transparent">
              {creator.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          {creator.rank <= 3 && (
            <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${getRankColor(creator.rank)} flex items-center justify-center shadow-lg`} style={{ borderRadius: '8px' }}>
              <Crown size={10} className="text-white" />
            </div>
          )}
        </div>
        
        <h4 className="font-bold text-foreground mb-1">{creator.name}</h4>
        <Badge variant="secondary" className="text-xs mb-3" style={{ borderRadius: '12px' }}>
          Rank #{creator.rank}
        </Badge>
        
        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <Users size={10} />
              Followers
            </span>
            <span className="font-medium">{creator.followers.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <TrendingUp size={10} />
              Avg Return
            </span>
            <span className="font-medium text-emerald-400">+{creator.avgReturn}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <BarChart3 size={10} />
              Portfolios
            </span>
            <span className="font-medium">{creator.portfolios}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;
