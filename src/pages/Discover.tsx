
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Trophy, TrendingUp, DollarSign, ToggleLeft, ToggleRight } from 'lucide-react';
import DiscoverHeader from '@/components/layout/DiscoverHeader';
import LeaderboardTab from '@/components/discover/LeaderboardTab';
import MarketTab from '@/components/discover/MarketTab';
import PreSubscriptionScreen from '@/components/sharpe-plus/PreSubscriptionScreen';
import PostSubscriptionScreen from '@/components/sharpe-plus/PostSubscriptionScreen';

const Discover = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");
  const [isSharpePlusSubscribed, setIsSharpePlusSubscribed] = useState(false);

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
                <DollarSign size={18} />
                Sharpe+
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
                {/* Floating Toggle Button - Better positioning and styling */}
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

                {/* Screen Content - Remove conflicting background */}
                <div className="min-h-[80vh]">
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
