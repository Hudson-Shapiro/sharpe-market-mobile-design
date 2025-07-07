import React, { useState } from 'react';
import { X, Users, TrendingUp, Crown, Star, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SubscriberDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriberDashboard = ({ isOpen, onClose }: SubscriberDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for subscriber metrics
  const subscriberMetrics = {
    total: 1247,
    thisMonth: 89,
    growthRate: 12.5,
    topPortfolio: "AI Revolution",
    topPortfolioSubs: 456
  };

  // Mock data for portfolio subscription breakdown
  const portfolioSubscriptions = [
    {
      name: "AI Revolution",
      subscribers: 456,
      growth: 23,
      return: "+34.5%",
      isTop: true
    },
    {
      name: "Tech Innovators",
      subscribers: 312,
      growth: 18,
      return: "+28.7%",
      isTop: false
    },
    {
      name: "Green Energy",
      subscribers: 289,
      growth: 15,
      return: "+22.3%",
      isTop: false
    },
    {
      name: "Blue Chip Focus",
      subscribers: 125,
      growth: 8,
      return: "+19.2%",
      isTop: false
    },
    {
      name: "Dividend Kings",
      subscribers: 65,
      growth: 5,
      return: "+15.6%",
      isTop: false
    }
  ];

  // Mock data for recent subscribers
  const recentSubscribers = [
    {
      name: "Alex Johnson",
      avatar: "👨‍💼",
      joinedDate: "2 hours ago",
      subscribedTo: "AI Revolution",
      isNewUser: true
    },
    {
      name: "Sarah Williams",
      avatar: "👩‍🔬",
      joinedDate: "5 hours ago", 
      subscribedTo: "Tech Innovators",
      isNewUser: false
    },
    {
      name: "Mike Chen",
      avatar: "👨‍💻",
      joinedDate: "1 day ago",
      subscribedTo: "Green Energy",
      isNewUser: true
    },
    {
      name: "Emma Davis",
      avatar: "👩‍💼",
      joinedDate: "2 days ago",
      subscribedTo: "AI Revolution",
      isNewUser: false
    },
    {
      name: "David Kim",
      avatar: "👨‍🎓",
      joinedDate: "3 days ago",
      subscribedTo: "Blue Chip Focus",
      isNewUser: true
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] bg-background/95 backdrop-blur-md border border-border/40 rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/20">
          <DialogTitle className="flex items-center gap-3 text-foreground text-xl font-bold">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center">
              <Users size={16} className="text-blue-500" />
            </div>
            Subscriber Dashboard
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary/30 backdrop-blur-sm border-0 m-4 mb-0" style={{ borderRadius: '12px' }}>
              <TabsTrigger 
                value="overview" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg"
                style={{ borderRadius: '12px' }}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="subscribers" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg"
                style={{ borderRadius: '12px' }}
              >
                Recent Subscribers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="p-4 pt-2">
              {/* Overview Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Card className="bg-blue-500/10 border-blue-500/20 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-blue-400" />
                    <span className="text-xs text-muted-foreground font-medium">Total Subscribers</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">{subscriberMetrics.total.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">+{subscriberMetrics.thisMonth} this month</div>
                </Card>

                <Card className="bg-emerald-500/10 border-emerald-500/20 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-emerald-400" />
                    <span className="text-xs text-muted-foreground font-medium">Growth Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">+{subscriberMetrics.growthRate}%</div>
                  <div className="text-xs text-muted-foreground">vs last month</div>
                </Card>
              </div>

              {/* Top Portfolio */}
              <Card className="bg-yellow-500/10 border-yellow-500/20 p-4 rounded-xl mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Crown size={16} className="text-yellow-400" />
                      <span className="text-xs text-muted-foreground font-medium">Most Popular Portfolio</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{subscriberMetrics.topPortfolio}</div>
                    <div className="text-sm text-muted-foreground">{subscriberMetrics.topPortfolioSubs} subscribers</div>
                  </div>
                  <ChevronRight size={20} className="text-muted-foreground" />
                </div>
              </Card>

              {/* Portfolio Breakdown */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground mb-2">Portfolio Breakdown</h3>
                {portfolioSubscriptions.map((portfolio, index) => (
                  <Card key={index} className="bg-card/50 border-border/40 p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{portfolio.name}</span>
                          {portfolio.isTop && <Star size={12} className="text-yellow-400 fill-yellow-400" />}
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-muted-foreground">{portfolio.subscribers} subscribers</span>
                          <Badge className="bg-blue-500/20 text-blue-400 text-xs">+{portfolio.growth} this month</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-emerald-400">{portfolio.return}</div>
                        <div className="text-xs text-muted-foreground">return</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="subscribers" className="p-4 pt-2">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground mb-2">Recent Subscribers</h3>
                {recentSubscribers.map((subscriber, index) => (
                  <Card key={index} className="bg-card/50 border-border/40 p-3 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/70 rounded-full flex items-center justify-center text-lg">
                        {subscriber.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{subscriber.name}</span>
                          {subscriber.isNewUser && (
                            <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">New User</Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Subscribed to {subscriber.subscribedTo} • {subscriber.joinedDate}
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-muted-foreground" />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriberDashboard;