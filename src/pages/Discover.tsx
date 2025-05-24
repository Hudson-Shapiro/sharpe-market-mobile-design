
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
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-secondary/50 p-1 rounded-xl">
              <TabsTrigger 
                value="leaderboard" 
                className="flex items-center gap-2 rounded-lg transition-all duration-300 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Trophy size={16} />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger 
                value="discover" 
                className="flex items-center gap-2 rounded-lg transition-all duration-300 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Search size={16} />
                Discover
              </TabsTrigger>
              <TabsTrigger 
                value="market" 
                className="flex items-center gap-2 rounded-lg transition-all duration-300 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
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
