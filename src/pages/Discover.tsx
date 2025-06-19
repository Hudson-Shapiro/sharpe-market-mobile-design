
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, ToggleLeft, ToggleRight } from 'lucide-react';
import DiscoverHeader from '@/components/layout/DiscoverHeader';
import LeaderboardTab from '@/components/discover/LeaderboardTab';
import MarketTab from '@/components/discover/MarketTab';
import PreSubscriptionScreen from '@/components/sharpe-plus/PreSubscriptionScreen';
import PostSubscriptionScreen from '@/components/sharpe-plus/PostSubscriptionScreen';

const Discover = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [isSharpePlusSubscribed, setIsSharpePlusSubscribed] = useState(false);

  // Check for tab parameter in URL
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'sharpe-plus') {
      setActiveTab('sharpe-plus');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-[calc(100vh-72px)]">
        <DiscoverHeader />
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/30 backdrop-blur-sm border-0 mb-6 shadow-lg p-1" style={{ borderRadius: '12px' }}>
              <TabsTrigger 
                value="leaderboard" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <Trophy size={18} />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger 
                value="market" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <TrendingUp size={18} />
                Market
              </TabsTrigger>
              <TabsTrigger 
                value="sharpe-plus" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <span 
                  style={{
                    textShadow: activeTab === 'sharpe-plus' 
                      ? '0 0 8px rgba(16, 185, 129, 0.6), 0 0 16px rgba(16, 185, 129, 0.3), 0 0 24px rgba(16, 185, 129, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.8)'
                      : '0 0 8px rgba(16, 185, 129, 0.6), 0 0 16px rgba(16, 185, 129, 0.3), 0 0 24px rgba(16, 185, 129, 0.2)'
                  }}
                  className="text-emerald-400"
                >
                  Sharpe+
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="animate-fade-in">
              <LeaderboardTab />
            </TabsContent>

            <TabsContent value="market" className="animate-fade-in">
              <MarketTab />
            </TabsContent>

            <TabsContent value="sharpe-plus" className="animate-fade-in">
              <div className="relative -mx-4 -mb-4">
                {/* Floating Toggle Button */}
                <div className="absolute top-4 right-4 z-50">
                  <Button
                    onClick={() => setIsSharpePlusSubscribed(!isSharpePlusSubscribed)}
                    variant="outline"
                    size="sm"
                    className="bg-background/95 backdrop-blur-sm border-border/50 hover:bg-background/80 px-3 py-1.5 flex items-center gap-2 shadow-md text-xs"
                    style={{ borderRadius: '20px' }}
                  >
                    {isSharpePlusSubscribed ? 
                      <ToggleRight size={14} className="text-emerald-400" /> : 
                      <ToggleLeft size={14} className="text-muted-foreground" />
                    }
                    <span className="font-medium">
                      {isSharpePlusSubscribed ? 'Live' : 'Preview'}
                    </span>
                  </Button>
                </div>

                {/* Screen Content */}
                <div className="min-h-[70vh]">
                  {isSharpePlusSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Discover;
