
import React, { useState } from 'react';
import { PlusCircle, ChevronRight, ArrowUp, ArrowDown } from 'lucide-react';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  // Sample chart data for asset allocation
  const allocationData = [
    { name: 'Tech', value: 40, color: '#3b82f6' },
    { name: 'Healthcare', value: 15, color: '#10b981' },
    { name: 'Consumer', value: 20, color: '#f59e0b' },
    { name: 'Financial', value: 15, color: '#8b5cf6' },
    { name: 'Other', value: 10, color: '#6b7280' },
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
  
  const todayChange = 1.24;
  const weekChange = 3.67;

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background pt-2">
        {/* Main Content - Portfolio Value section removed */}
        <div className="px-4">
          <Tabs defaultValue="my-portfolios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary mb-4">
              <TabsTrigger value="my-portfolios" className="text-sm">My Portfolios</TabsTrigger>
              <TabsTrigger value="subscribed" className="text-sm">Subscribed</TabsTrigger>
            </TabsList>
            
            {/* My Portfolios Tab */}
            <TabsContent value="my-portfolios" className="space-y-4">
              {/* Performance Overview */}
              {myPortfolios.length > 0 && (
                <Card className="bg-card border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Performance Overview</h3>
                    <div className="flex bg-secondary/50 rounded-lg p-1 text-xs">
                      <button 
                        onClick={() => setTimeRange("LTD")}
                        className={`px-2.5 py-0.5 ${timeRange === "LTD" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>LTD</button>
                      <button 
                        onClick={() => setTimeRange("YTD")}
                        className={`px-2.5 py-0.5 ${timeRange === "YTD" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>YTD</button>
                      <button 
                        onClick={() => setTimeRange("3M")}
                        className={`px-2.5 py-0.5 ${timeRange === "3M" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>3M</button>
                      <button 
                        onClick={() => setTimeRange("1D")}
                        className={`px-2.5 py-0.5 ${timeRange === "1D" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>1D</button>
                    </div>
                  </div>
                  <div className="h-[180px] w-full">
                    <ChartContainer config={chartConfig}>
                      <LineChart data={performanceData}>
                        <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <YAxis tick={{ fill: '#9ca3af', fontSize: 10 }} />
                        <Line
                          type="monotone"
                          dataKey="Dividend"
                          stroke="var(--color-Dividend, #10b981)"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Tech"
                          stroke="var(--color-Tech, #3b82f6)"
                          strokeWidth={2}
                          dot={false}
                          activeDot={{ r: 4 }}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-emerald-400 font-semibold">
                      Overall: +28.5% YTD
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last updated: May 22, 2025
                    </div>
                  </div>
                </Card>
              )}
              
              {/* Add Portfolio */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">My Portfolios</h3>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-1 px-3 rounded-lg font-medium transition-colors flex items-center">
                  <PlusCircle size={14} className="mr-1" />
                  Create
                </button>
              </div>
              
              {/* My Portfolio Cards */}
              <div className="grid gap-3 pb-6">
                {myPortfolios.length === 0 ? (
                  <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
                    <h3 className="font-medium mb-2">No portfolios yet</h3>
                    <p className="text-muted-foreground text-sm mb-4">Create your first portfolio to track your investments</p>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
                      <PlusCircle size={16} />
                      Create Portfolio
                    </button>
                  </div>
                ) : (
                  myPortfolios.map((portfolio, index) => (
                    <PortfolioCard key={index} {...portfolio} />
                  ))
                )}
              </div>
            </TabsContent>
            
            {/* Subscribed Portfolios Tab */}
            <TabsContent value="subscribed" className="space-y-4">
              {/* Simplified Filter Bar */}
              <div className="mb-4 flex justify-between items-center">
                <h3 className="font-semibold">Performance</h3>
                <div className="flex bg-secondary/50 rounded-lg p-1 text-xs">
                  <button 
                    onClick={() => setTimeRange("LTD")}
                    className={`px-2.5 py-0.5 ${timeRange === "LTD" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>LTD</button>
                  <button 
                    onClick={() => setTimeRange("YTD")}
                    className={`px-2.5 py-0.5 ${timeRange === "YTD" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>YTD</button>
                  <button 
                    onClick={() => setTimeRange("3M")}
                    className={`px-2.5 py-0.5 ${timeRange === "3M" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>3M</button>
                  <button 
                    onClick={() => setTimeRange("1D")}
                    className={`px-2.5 py-0.5 ${timeRange === "1D" ? "bg-white text-primary-foreground" : "text-muted-foreground"} rounded`}>1D</button>
                </div>
              </div>
              
              {/* Portfolio Rankings Overview */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="bg-card/70 border border-border p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Top Performer</div>
                  <div className="font-bold">IT Portfolio</div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <ArrowUp size={14} className="mr-1" />
                    <span>22.67%</span>
                  </div>
                </div>
                
                <div className="bg-card/70 border border-border p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Average Return</div>
                  <div className="font-bold">11.39%</div>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <span>across 5 portfolios</span>
                  </div>
                </div>
              </div>
              
              {/* Subscribed Portfolio Cards */}
              <div className="grid gap-3 pb-6">
                {subscribedPortfolios.map((portfolio, index) => (
                  <PortfolioCard 
                    key={index} 
                    {...portfolio} 
                    isSubscribed={true}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Portfolios;
