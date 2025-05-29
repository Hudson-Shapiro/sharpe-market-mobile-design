
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
          <TabsList className="grid w-full grid-cols-3 bg-secondary/30 backdrop-blur-sm border-0 mb-6 shadow-lg p-1.5 rounded-2xl">
            <TabsTrigger 
              value="leaderboard" 
              className="text-sm font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold rounded-xl px-4 py-2.5"
            >
              <Trophy size={16} />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger 
              value="discover" 
              className="text-sm font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold rounded-xl px-4 py-2.5"
            >
              <Search size={16} />
              Discover
            </TabsTrigger>
            <TabsTrigger 
              value="market" 
              className="text-sm font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold rounded-xl px-4 py-2.5"
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
    </div>
  );
};

export default Discover;
