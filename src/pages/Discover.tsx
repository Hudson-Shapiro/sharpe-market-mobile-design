
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Search, TrendingUp } from 'lucide-react';
import DiscoverHeader from '@/components/layout/DiscoverHeader';
import LeaderboardTab from '@/components/discover/LeaderboardTab';
import DiscoverTab from '@/components/discover/DiscoverTab';
import MarketTab from '@/components/discover/MarketTab';

const Discover = () => {
  const [activeTab, setActiveTab] = useState("leaderboard");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DiscoverHeader />
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex gap-1.5 bg-secondary/30 p-1.5 rounded-2xl mb-6">
            <TabsTrigger 
              value="leaderboard" 
              className="flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 data-[state=active]:font-bold"
            >
              <Trophy size={16} className="mr-2" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger 
              value="discover" 
              className="flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 data-[state=active]:font-bold"
            >
              <Search size={16} className="mr-2" />
              Discover
            </TabsTrigger>
            <TabsTrigger 
              value="market" 
              className="flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 data-[state=active]:font-bold"
            >
              <TrendingUp size={16} className="mr-2" />
              Market
            </TabsTrigger>
          </div>

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
    </div>
  );
};

export default Discover;
