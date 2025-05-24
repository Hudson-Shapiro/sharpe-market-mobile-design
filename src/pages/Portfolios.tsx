import React, { useState } from 'react';
import { PlusCircle, ChevronRight, ArrowUp, ArrowDown, BarChart3, Users } from 'lucide-react';
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
      <div className="min-h-screen bg-background pt-2 relative">
        {/* Main Content */}
        <div className="px-4">
          <Tabs defaultValue="my-portfolios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary/50 backdrop-blur-sm border border-border/40 mb-6 shadow-lg rounded-xl">
              <TabsTrigger 
                value="my-portfolios" 
                className="text-sm transition-all duration-300 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400 data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 rounded-lg flex items-center gap-2"
              >
                <BarChart3 size={16} />
                My Portfolios
              </TabsTrigger>
              <TabsTrigger 
                value="subscribed" 
                className="text-sm transition-all duration-300 data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400 data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/25 rounded-lg flex items-center gap-2"
              >
                <Users size={16} />
                Subscribed
              </TabsTrigger>
            </TabsList>
            
            {/* My Portfolios Tab */}
            <TabsContent value="my-portfolios" className="space-y-6">
              {/* Performance Overview */}
              {myPortfolios.length > 0 && (
                <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-6 shadow-xl shadow-emerald-500/5 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-white">Performance Overview</h3>
                    <div className="flex bg-gray-900/60 backdrop-blur-sm rounded-xl p-1.5 text-xs border border-gray-800/40">
                      {["LTD", "YTD", "3M", "1D"].map((period) => (
                        <button 
                          key={period}
                          onClick={() => setTimeRange(period)}
                          className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                            timeRange === period 
                              ? "bg-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20 backdrop-blur-sm" 
                              : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/40"
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-[200px] w-full">
                    <ChartContainer config={chartConfig}>
                      <LineChart data={performanceData}>
                        <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                        <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} />
                        <Line
                          type="monotone"
                          dataKey="Dividend"
                          stroke="#10b981"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#10b981', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Tech"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={false}
                          activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: '#3b82f6', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' }}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800/40">
                    <div className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                      Overall: +28.5% YTD
                    </div>
                    <div className="text-xs text-gray-400">
                      Last updated: May 22, 2025
                    </div>
                  </div>
                </Card>
              )}
              
              {/* Section Header with Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800/40"></div>
                </div>
                <div className="relative flex justify-between items-center bg-background px-2">
                  <h3 className="font-semibold text-lg text-white bg-background pr-4">My Portfolios</h3>
                  <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm py-2.5 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 backdrop-blur-sm border border-emerald-400/20">
                    <PlusCircle size={16} className="mr-2" />
                    Create
                  </button>
                </div>
              </div>
              
              {/* My Portfolio Cards */}
              <div className="grid gap-4 pb-6">
                {myPortfolios.length === 0 ? (
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 text-center shadow-xl">
                    <h3 className="font-semibold text-lg mb-3 text-white">No portfolios yet</h3>
                    <p className="text-gray-400 text-sm mb-6">Create your first portfolio to track your investments</p>
                    <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95">
                      <PlusCircle size={18} />
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
            <TabsContent value="subscribed" className="space-y-6">
              {/* Time Range Filter */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg text-white">Performance</h3>
                <div className="flex bg-gray-900/60 backdrop-blur-sm rounded-xl p-1.5 text-xs border border-gray-800/40">
                  {["LTD", "YTD", "3M", "1D"].map((period) => (
                    <button 
                      key={period}
                      onClick={() => setTimeRange(period)}
                      className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                        timeRange === period 
                          ? "bg-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20 backdrop-blur-sm" 
                          : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/40"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Portfolio Rankings Overview */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 rounded-xl shadow-lg shadow-blue-500/5">
                  <div className="text-xs text-gray-400 mb-2">Top Performer</div>
                  <div className="font-bold text-white text-lg">IT Portfolio</div>
                  <div className="flex items-center text-emerald-400 text-sm font-semibold bg-emerald-500/10 w-fit px-2 py-1 rounded-lg border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <ArrowUp size={14} className="mr-1" />
                    <span>22.67%</span>
                  </div>
                </div>
                
                <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/60 p-4 rounded-xl shadow-lg shadow-blue-500/5">
                  <div className="text-xs text-gray-400 mb-2">Average Return</div>
                  <div className="font-bold text-white text-lg">11.39%</div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <span>across 5 portfolios</span>
                  </div>
                </div>
              </div>
              
              {/* Subscribed Portfolio Cards */}
              <div className="grid gap-4 pb-6">
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
