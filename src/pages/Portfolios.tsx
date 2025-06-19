import React, { useState } from 'react';
import { BarChart3, Users, DollarSign, ToggleLeft, ToggleRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import GlobalHeader from '@/components/layout/GlobalHeader';
import MyPortfoliosTab from '../components/portfolio/MyPortfoliosTab';
import SubscribedPortfoliosTab from '../components/portfolio/SubscribedPortfoliosTab';
import PreSubscriptionScreen from '@/components/sharpe-plus/PreSubscriptionScreen';
import PostSubscriptionScreen from '@/components/sharpe-plus/PostSubscriptionScreen';

const Portfolios = () => {
  const [timeRange, setTimeRange] = useState("LTD");
  const [isSharpePlusSubscribed, setIsSharpePlusSubscribed] = useState(false);
  
  const myPortfolios = [
    { 
      id: '124358', 
      name: 'Dividend Portfolio', 
      return: 26, 
      isOwned: true, 
      sharpeRatio: 1.8, 
      sortinioRatio: 2.1,
      createdDate: 'May 10',
      lastEditedDate: '2 days ago',
      benchmark: 'SPY'
    },
    { 
      id: '267943', 
      name: 'Tech Growth Portfolio', 
      return: 32.5, 
      isOwned: true, 
      sharpeRatio: 2.1, 
      sortinioRatio: 2.4,
      createdDate: 'Mar 15',
      lastEditedDate: '1 day ago',
      benchmark: 'QQQ'
    },
  ];

  const subscribedPortfolios = [
    { 
      id: '124358', 
      name: 'Real Estate Portfolio', 
      return: 14.05, 
      isOwned: false, 
      author: 'Emma Stone', 
      sharpeRatio: 1.2, 
      sortinioRatio: 1.5,
      rank: 12,
      createdDate: 'Jan 22',
      lastEditedDate: '3 days ago',
      benchmark: 'VNQ'
    },
    { 
      id: '346792', 
      name: 'Healthcare Portfolio', 
      return: -2.15, 
      isOwned: false, 
      author: 'Jacob Wilson', 
      sharpeRatio: 0.9, 
      sortinioRatio: 1.1,
      rank: 45,
      createdDate: 'Feb 8',
      lastEditedDate: '1 week ago',
      benchmark: 'XLV'
    },
    { 
      id: '578431', 
      name: 'Auto Portfolio', 
      return: 14.05, 
      isOwned: false, 
      author: 'Madison Gray', 
      sharpeRatio: 1.4, 
      sortinioRatio: 1.7,
      rank: 8,
      createdDate: 'Apr 3',
      lastEditedDate: '4 days ago',
      benchmark: 'CARZ'
    },
    { 
      id: '698752', 
      name: 'FMCG Portfolio', 
      return: 8.33, 
      isOwned: false, 
      author: 'Chris Evans', 
      sharpeRatio: 1.1, 
      sortinioRatio: 1.3,
      rank: 36,
      createdDate: 'Jun 12',
      lastEditedDate: '5 days ago',
      benchmark: 'XLP'
    },
    { 
      id: '789023', 
      name: 'IT Portfolio', 
      return: 22.67, 
      isOwned: false, 
      author: 'Robert Lopez', 
      sharpeRatio: 1.6, 
      sortinioRatio: 1.9,
      rank: 3,
      createdDate: 'Mar 28',
      lastEditedDate: '2 days ago',
      benchmark: 'XLK'
    },
  ];
  
  // Sample chart data for performance 
  const performanceData = [
    { name: 'Jan', Dividend: 30, Tech: 40 },
    { name: 'Feb', Dividend: 35, Tech: 45 },
    { name: 'Mar', Dividend: 32, Tech: 48 },
    { name: 'Apr', Dividend: 38, Tech: 41 },
    { name: 'May', Dividend: 42, Tech: 52 },
    { name: 'Jun', Dividend: 40, Tech: 49 },
    { name: 'Jul', Dividend: 45, Tech: 55 },
  ];

  const chartConfig = {
    Dividend: {
      label: "Dividend Portfolio",
      theme: {
        light: "#10b981",
        dark: "#10b981"
      }
    },
    Tech: {
      label: "Tech Growth Portfolio",
      theme: {
        light: "#3b82f6",
        dark: "#3b82f6"
      }
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background pt-2 relative">
        <GlobalHeader />
        
        {/* Main Content */}
        <div className="px-4">
          <Tabs defaultValue="my-portfolios" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary/30 backdrop-blur-sm border-0 mb-4 shadow-lg p-1" style={{ borderRadius: '12px' }}>
              <TabsTrigger 
                value="my-portfolios" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <BarChart3 size={16} />
                My Portfolios
              </TabsTrigger>
              <TabsTrigger 
                value="subscribed" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <Users size={16} />
                Subscribed
              </TabsTrigger>
              <TabsTrigger 
                value="sharpe-plus" 
                className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-lg flex items-center gap-2 text-muted-foreground data-[state=active]:font-bold"
                style={{ borderRadius: '12px' }}
              >
                <DollarSign size={16} />
                Sharpe+
              </TabsTrigger>
            </TabsList>
            
            {/* My Portfolios Tab */}
            <TabsContent value="my-portfolios">
              <MyPortfoliosTab 
                myPortfolios={myPortfolios}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
                performanceData={performanceData}
                chartConfig={chartConfig}
              />
            </TabsContent>
            
            {/* Subscribed Portfolios Tab */}
            <TabsContent value="subscribed">
              <SubscribedPortfoliosTab 
                subscribedPortfolios={subscribedPortfolios}
                timeRange={timeRange}
                setTimeRange={setTimeRange}
              />
            </TabsContent>

            {/* Sharpe+ Tab */}
            <TabsContent value="sharpe-plus">
              <div className="relative">
                {/* Floating Toggle Button */}
                <div className="fixed top-6 right-4 z-50">
                  <Button
                    onClick={() => setIsSharpePlusSubscribed(!isSharpePlusSubscribed)}
                    variant="outline"
                    size="sm"
                    className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background px-4 py-2 flex items-center gap-2 shadow-lg"
                    style={{ borderRadius: '999px' }}
                  >
                    {isSharpePlusSubscribed ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
                    <span className="text-xs font-medium">Preview Mode</span>
                  </Button>
                </div>

                {/* Screen Content */}
                <div className="pt-4">
                  {isSharpePlusSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Portfolios;
