
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Search, TrendingUp } from 'lucide-react';
import LeaderboardTab from '@/components/discover/LeaderboardTab';
import DiscoverTab from '@/components/discover/DiscoverTab';
import MarketTab from '@/components/discover/MarketTab';

const Discover = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/30 backdrop-blur-sm border-0 mb-6 shadow-lg rounded-2xl p-1">
              <TabsTrigger 
                value="leaderboard" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg rounded-xl flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
              >
                <Trophy size={16} />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger 
                value="discover" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg rounded-xl flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
              >
                <Search size={16} />
                Discover
              </TabsTrigger>
              <TabsTrigger 
                value="market" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg rounded-xl flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
              >
                <TrendingUp size={16} />
                Market
              </TabsTrigger>
            </TabsList>

            <TabsContent value="leaderboard" className="animate-fade-in">
              <LeaderboardTab />
            </TabsContent>

            <TabsContent value="discover" className="animate-fade-in">
              <DiscoverTab />
            </TabsContent>

            <TabsContent value="market" className="animate-fade-in">
              <MarketTab />
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Discover;
