
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, TrendingUp, BarChart3, Calendar, MapPin } from 'lucide-react';
import PortfolioCard from '@/components/portfolio/PortfolioCard';

const PublicProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  // Mock user data - in a real app this would be fetched based on username
  const getUserData = (username: string) => {
    const users = {
      'mark-cuban': {
        name: "Mark Cuban",
        username: "@markcuban",
        followers: 125000,
        following: 342,
        location: "Dallas, TX",
        joinedDate: "March 2022",
        bio: "Entrepreneur, investor, and owner of the Dallas Mavericks. Focus on disruptive technology and innovative business models.",
        totalPortfolios: 8,
        avgReturn: 25.8,
        bestReturn: 47.2
      },
      'lisa-su': {
        name: "Lisa Su",
        username: "@lisasu",
        followers: 95000,
        following: 156,
        location: "Silicon Valley, CA",
        joinedDate: "January 2023",
        bio: "CEO & tech executive with deep expertise in semiconductors and emerging technologies. Long-term value investor.",
        totalPortfolios: 6,
        avgReturn: 42.1,
        bestReturn: 58.9
      },
      'warren-buffet': {
        name: "Warren Buffet",
        username: "@warrenbuffet",
        followers: 210000,
        following: 89,
        location: "Omaha, NE",
        joinedDate: "December 2021",
        bio: "Value investor focused on fundamentally sound businesses with strong competitive advantages and excellent management.",
        totalPortfolios: 4,
        avgReturn: 18.9,
        bestReturn: 31.4
      }
    };
    
    return users[username as keyof typeof users] || users['mark-cuban'];
  };

  const userData = getUserData(username || 'mark-cuban');

  // Mock portfolios for the user
  const userPortfolios = [
    {
      id: "1",
      name: "Tech Disruption Leaders",
      return: userData.bestReturn,
      sharpeRatio: 2.4,
      author: userData.name,
      isOwned: false,
      isSubscribed: false
    },
    {
      id: "2", 
      name: "AI & Machine Learning",
      return: userData.avgReturn,
      sharpeRatio: 1.9,
      author: userData.name,
      isOwned: false,
      isSubscribed: false
    },
    {
      id: "3",
      name: "Sustainable Energy",
      return: 22.3,
      sharpeRatio: 1.7,
      author: userData.name,
      isOwned: false,
      isSubscribed: false
    },
    {
      id: "4",
      name: "Healthcare Innovation",
      return: 19.1,
      sharpeRatio: 1.5,
      author: userData.name,
      isOwned: false,
      isSubscribed: false
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
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
            <h1 className="text-xl font-bold text-foreground">Profile</h1>
          </div>

          {/* User Profile Card */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-20 w-20 bg-gradient-to-br from-blue-400 to-emerald-400">
                <AvatarFallback className="text-white font-bold bg-transparent text-xl">
                  {getInitials(userData.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-foreground">{userData.name}</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{userData.username}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Joined {userData.joinedDate}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-bold text-foreground">{userData.followers.toLocaleString()}</span>
                    <span className="text-muted-foreground ml-1">Followers</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">{userData.following}</span>
                    <span className="text-muted-foreground ml-1">Following</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {userData.bio}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm pt-4 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-foreground font-bold text-lg">
                  <BarChart3 size={14} />
                  <span>{userData.totalPortfolios}</span>
                </div>
                <p className="text-muted-foreground text-xs">Portfolios</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-lg">
                  <TrendingUp size={14} />
                  <span>+{userData.avgReturn}%</span>
                </div>
                <p className="text-muted-foreground text-xs">Avg Return</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-400 font-bold text-lg">
                  <TrendingUp size={14} />
                  <span>+{userData.bestReturn}%</span>
                </div>
                <p className="text-muted-foreground text-xs">Best Return</p>
              </div>
            </div>
          </div>

          {/* Public Portfolios Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="text-foreground" size={20} />
              Public Portfolios
            </h3>
            
            <div className="space-y-3">
              {userPortfolios.slice(0, userData.totalPortfolios).map((portfolio) => (
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

export default PublicProfile;
