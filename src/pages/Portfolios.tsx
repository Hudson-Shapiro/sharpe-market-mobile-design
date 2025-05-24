
import React, { useState } from 'react';
import { BarChart3, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import MyPortfoliosTab from '../components/portfolio/MyPortfoliosTab';
import SubscribedPortfoliosTab from '../components/portfolio/SubscribedPortfoliosTab';

const Portfolios = () => {
  const [timeRange, setTimeRange] = useState("LTD");
  
  const myPortfolios = [
    { id: '124358', name: 'Dividend Portfolio', return: 26, isOwned: true, sharpeRatio: 1.8, recentPurchases: ['JNJ', 'PG', 'KO', 'VZ'] },
    { id: '267943', name: 'Tech Growth Portfolio', return: 32.5, isOwned: true, sharpeRatio: 2.1, recentPurchases: ['AAPL', 'MSFT', 'NVDA', 'AMZN'] },
  ];

  const subscribedPortfolios = [
    { id: '124358', name: 'Real Estate Portfolio', return: 14.05, isOwned: false, author: 'Emma Stone', sharpeRatio: 1.2, recentPurchases: ['SPG', 'AMT', 'EQIX'], rank: 12 },
    { id: '346792', name: 'Healthcare Portfolio', return: -2.15, isOwned: false, author: 'Jacob Wilson', sharpeRatio: 0.9, recentPurchases: ['UNH', 'JNJ', 'PFE'], rank: 45 },
    { id: '578431', name: 'Auto Portfolio', return: 14.05, isOwned: false, author: 'Madison Gray', sharpeRatio: 1.4, recentPurchases: ['TSLA', 'F', 'GM'], rank: 8 },
    { id: '698752', name: 'FMCG Portfolio', return: 8.33, isOwned: false, author: 'Chris Evans', sharpeRatio: 1.1, recentPurchases: ['PG', 'K', 'KHC'], rank: 36 },
    { id: '789023', name: 'IT Portfolio', return: 22.67, isOwned: false, author: 'Robert Lopez', sharpeRatio: 1.6, recentPurchases: ['MSFT', 'ORCL', 'CRM'], rank: 3 },
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
        {/* Main Content */}
        <div className="px-4">
          <Tabs defaultValue="my-portfolios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary/30 backdrop-blur-sm border-0 mb-4 shadow-lg p-1" style={{ borderRadius: '12px' }}>
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
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Portfolios;
