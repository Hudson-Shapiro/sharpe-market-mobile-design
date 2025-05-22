
import React, { useState } from 'react';
import { Search, Filter, PlusCircle } from 'lucide-react';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Portfolios = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  const myPortfolios = [
    { id: '124358', name: 'Dividend Portfolio', return: 26, isOwned: true, sharpeRatio: 1.8 },
    { id: '267943', name: 'Tech Growth Portfolio', return: 32.5, isOwned: true, sharpeRatio: 2.1 },
  ];

  const subscribedPortfolios = [
    { id: '124358', name: 'Real Estate Portfolio', return: 14.05, isOwned: false, author: 'Emma Stone', sharpeRatio: 1.2 },
    { id: '346792', name: 'Healthcare Portfolio', return: -2.15, isOwned: false, author: 'Jacob Wilson', sharpeRatio: 0.9 },
    { id: '578431', name: 'Auto Portfolio', return: 14.05, isOwned: false, author: 'Madison Gray', sharpeRatio: 1.4 },
    { id: '698752', name: 'FMCG Portfolio', return: 8.33, isOwned: false, author: 'Chris Evans', sharpeRatio: 1.1 },
    { id: '789023', name: 'IT Portfolio', return: 22.67, isOwned: false, author: 'Robert Lopez', sharpeRatio: 1.6 },
  ];

  // Sample chart data
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
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between p-4 mb-2">
        <h1 className="text-2xl font-bold text-white">Portfolios</h1>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={24} />
          </button>
          <button className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <PlusCircle size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <Tabs defaultValue="my-portfolios" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-900 mb-4">
            <TabsTrigger value="my-portfolios" className="text-sm">My Portfolios</TabsTrigger>
            <TabsTrigger value="subscribed" className="text-sm">Subscribed</TabsTrigger>
          </TabsList>
          
          {/* My Portfolios Tab */}
          <TabsContent value="my-portfolios" className="space-y-4">
            {/* Performance Overview */}
            {myPortfolios.length > 0 && (
              <Card className="bg-gray-900 border-gray-800 p-4">
                <h3 className="text-white font-semibold mb-2">Performance Overview</h3>
                <div className="h-[200px] w-full">
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
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xs text-emerald-400 font-semibold">
                    Overall: +28.5% YTD
                  </div>
                  <div className="text-xs text-gray-400">
                    Last updated: May 22, 2025
                  </div>
                </div>
              </Card>
            )}
            
            {/* My Portfolio Cards */}
            <div className="grid gap-4 pb-6">
              {myPortfolios.length === 0 ? (
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
                  <h3 className="text-white font-medium mb-2">No portfolios yet</h3>
                  <p className="text-gray-400 text-sm mb-4">Create your first portfolio to track your investments</p>
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
            {/* Filter Bar */}
            <div className="mb-4">
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium"
                >
                  <Filter size={16} />
                  Filter
                </button>
                <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full font-medium flex items-center gap-1">
                  Daily return
                  <button className="ml-1 text-gray-400 hover:text-white">×</button>
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

      {/* Filter Panel */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-gray-900 w-full rounded-t-xl p-4 space-y-4 animate-slide-in-right">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold">Filter</h2>
              <button className="text-emerald-400 font-medium">Clear all</button>
            </div>
            
            <div>
              <label className="text-white font-medium mb-2 block">Time Period</label>
              <select className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700">
                <option>Daily Return</option>
                <option>Weekly Return</option>
                <option>Monthly Return</option>
                <option>Yearly Return</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input type="checkbox" className="w-4 h-4" />
                Created by me
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="checkbox" className="w-4 h-4" checked />
                Subscribed by me
              </label>
              <label className="flex items-center gap-2 text-white">
                <input type="checkbox" className="w-4 h-4" />
                Benchmark
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={() => setShowFilter(false)}
                className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowFilter(false)}
                className="flex-1 bg-emerald-500 text-white py-3 rounded-lg font-medium"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolios;
