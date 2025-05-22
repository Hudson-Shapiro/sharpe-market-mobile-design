
import React, { useState } from 'react';
import { Search, Filter, PlusCircle, ChevronRight, ArrowUp, ArrowDown, X } from 'lucide-react';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Card } from '@/components/ui/card';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

const Portfolios = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [timeRange, setTimeRange] = useState("LTD");
  const [activeFilters, setActiveFilters] = useState([]);
  
  // Filter state
  const [filterTimeOption, setFilterTimeOption] = useState("daily");
  const [createdByMe, setCreatedByMe] = useState(false);
  const [subscribedByMe, setSubscribedByMe] = useState(true);
  const [benchmark, setBenchmark] = useState(false);
  const [securitySearch, setSecuritySearch] = useState("");
  const [securityConcentration, setSecurityConcentration] = useState(false);
  const [securityConcentrationType, setSecurityConcentrationType] = useState("");
  const [securityConcentrationValue, setSecurityConcentrationValue] = useState("");
  const [sectorConcentration, setSectorConcentration] = useState(false);
  const [sectorConcentrationType, setSectorConcentrationType] = useState("");
  const [sectorConcentrationValue, setSectorConcentrationValue] = useState("");
  
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

  // Clear all filters
  const clearAllFilters = () => {
    setFilterTimeOption("daily");
    setCreatedByMe(false);
    setSubscribedByMe(false);
    setBenchmark(false);
    setSecuritySearch("");
    setSecurityConcentration(false);
    setSecurityConcentrationType("");
    setSecurityConcentrationValue("");
    setSectorConcentration(false);
    setSectorConcentrationType("");
    setSectorConcentrationValue("");
    setActiveFilters([]);
  };

  // Apply filters
  const applyFilters = () => {
    const newActiveFilters = [];
    
    // Add active filters to the array based on selected options
    if (filterTimeOption) {
      newActiveFilters.push(`${filterTimeOption} return`);
    }
    
    setActiveFilters(newActiveFilters);
    setShowFilter(false);
  };
  
  // Remove a specific filter
  const removeFilter = (filter) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  // Return the appropriate filter component based on device
  const FilterComponent = () => (
    <div className="bg-gray-950 text-white">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h3 className="text-lg font-medium">Filter</h3>
        <button 
          className="text-red-500 text-sm font-medium" 
          onClick={clearAllFilters}
        >
          Clear all
        </button>
      </div>
      
      <div className="p-4 space-y-6">
        <div>
          <p className="text-gray-400 mb-2">Time Period</p>
          <Select value={filterTimeOption} onValueChange={setFilterTimeOption}>
            <SelectTrigger className="w-full bg-gray-900 border-gray-800 text-white">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-800 text-white">
              <SelectItem value="daily">Daily Return</SelectItem>
              <SelectItem value="weekly">Weekly Return</SelectItem>
              <SelectItem value="monthly">Monthly Return</SelectItem>
              <SelectItem value="yearly">Yearly Return</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-white mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-gray-900 border-gray-700" 
              checked={createdByMe} 
              onChange={() => setCreatedByMe(!createdByMe)} 
            />
            Created by me
          </label>
          
          <label className="flex items-center gap-2 text-white mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-gray-900 border-gray-700" 
              checked={subscribedByMe} 
              onChange={() => setSubscribedByMe(!subscribedByMe)} 
            />
            Subscribed by me
          </label>
          
          <label className="flex items-center gap-2 text-white">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-gray-900 border-gray-700" 
              checked={benchmark} 
              onChange={() => setBenchmark(!benchmark)} 
            />
            Benchmark
          </label>
        </div>
        
        <div className="border-t border-gray-800 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search security" 
              className="pl-9 bg-gray-900 border-gray-800 text-white" 
              value={securitySearch}
              onChange={(e) => setSecuritySearch(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-white mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-gray-900 border-gray-700" 
              checked={securityConcentration} 
              onChange={() => setSecurityConcentration(!securityConcentration)} 
            />
            Security Concentration
          </label>
          
          <div className="flex gap-2 mb-4">
            <Select 
              value={securityConcentrationType} 
              onValueChange={setSecurityConcentrationType}
              disabled={!securityConcentration}
            >
              <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800 text-white">
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            
            <Input 
              placeholder="Enter value" 
              className="bg-gray-900 border-gray-800 text-white" 
              value={securityConcentrationValue}
              onChange={(e) => setSecurityConcentrationValue(e.target.value)}
              disabled={!securityConcentration}
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 text-white mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-gray-900 border-gray-700" 
              checked={sectorConcentration} 
              onChange={() => setSectorConcentration(!sectorConcentration)} 
            />
            Sector Concentration
          </label>
          
          <div className="flex gap-2 mb-4">
            <Select 
              value={sectorConcentrationType} 
              onValueChange={setSectorConcentrationType}
              disabled={!sectorConcentration}
            >
              <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800 text-white">
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            
            <Input 
              placeholder="Enter value" 
              className="bg-gray-900 border-gray-800 text-white" 
              value={sectorConcentrationValue}
              onChange={(e) => setSectorConcentrationValue(e.target.value)}
              disabled={!sectorConcentration}
            />
          </div>
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          onClick={() => setShowFilter(false)}
          className="bg-gray-900 text-white border-gray-800 hover:bg-gray-800"
        >
          Cancel
        </Button>
        <Button 
          onClick={applyFilters}
          className="bg-emerald-500 text-white hover:bg-emerald-600"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gray-950 pt-2">
        {/* Main Content - Portfolio Value section removed */}
        <div className="px-4">
          <Tabs defaultValue="my-portfolios" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900 mb-4">
              <TabsTrigger value="my-portfolios" className="text-sm">My Portfolios</TabsTrigger>
              <TabsTrigger value="subscribed" className="text-sm">Subscribed</TabsTrigger>
            </TabsList>
            
            {/* Filter Button and Active Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-gray-900 border-gray-800 text-white hover:bg-gray-800"
                onClick={() => setShowFilter(true)}
              >
                <Filter size={16} />
                Interactive Filter
              </Button>
              
              {activeFilters.map((filter) => (
                <Button 
                  key={filter} 
                  variant="outline" 
                  className="flex items-center gap-1.5 bg-gray-900 border-gray-800 text-white hover:bg-gray-800" 
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                  <X size={14} />
                </Button>
              ))}
            </div>
            
            {/* My Portfolios Tab */}
            <TabsContent value="my-portfolios" className="space-y-4">
              {/* Performance Overview */}
              {myPortfolios.length > 0 && (
                <Card className="bg-gray-900 border-gray-800 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">Performance Overview</h3>
                    <div className="flex bg-gray-800/50 rounded-lg p-1 text-xs">
                      <button 
                        onClick={() => setTimeRange("LTD")}
                        className={`px-2.5 py-0.5 ${timeRange === "LTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>LTD</button>
                      <button 
                        onClick={() => setTimeRange("YTD")}
                        className={`px-2.5 py-0.5 ${timeRange === "YTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>YTD</button>
                      <button 
                        onClick={() => setTimeRange("3M")}
                        className={`px-2.5 py-0.5 ${timeRange === "3M" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>3M</button>
                      <button 
                        onClick={() => setTimeRange("1D")}
                        className={`px-2.5 py-0.5 ${timeRange === "1D" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>1D</button>
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
                    <div className="text-xs text-gray-400">
                      Last updated: May 22, 2025
                    </div>
                  </div>
                </Card>
              )}
              
              {/* Add Portfolio */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">My Portfolios</h3>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm py-1 px-3 rounded-lg font-medium transition-colors flex items-center">
                  <PlusCircle size={14} className="mr-1" />
                  Create
                </button>
              </div>
              
              {/* My Portfolio Cards */}
              <div className="grid gap-3 pb-6">
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
              {/* Simplified Filter Bar */}
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-white font-semibold">Performance</h3>
                <div className="flex bg-gray-800/50 rounded-lg p-1 text-xs">
                  <button 
                    onClick={() => setTimeRange("LTD")}
                    className={`px-2.5 py-0.5 ${timeRange === "LTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>LTD</button>
                  <button 
                    onClick={() => setTimeRange("YTD")}
                    className={`px-2.5 py-0.5 ${timeRange === "YTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>YTD</button>
                  <button 
                    onClick={() => setTimeRange("3M")}
                    className={`px-2.5 py-0.5 ${timeRange === "3M" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>3M</button>
                  <button 
                    onClick={() => setTimeRange("1D")}
                    className={`px-2.5 py-0.5 ${timeRange === "1D" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>1D</button>
                </div>
              </div>
              
              {/* Portfolio Rankings Overview */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="bg-gray-900/70 border border-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Top Performer</div>
                  <div className="text-white font-bold">IT Portfolio</div>
                  <div className="flex items-center text-emerald-400 text-sm">
                    <ArrowUp size={14} className="mr-1" />
                    <span>22.67%</span>
                  </div>
                </div>
                
                <div className="bg-gray-900/70 border border-gray-800 p-3 rounded-lg">
                  <div className="text-xs text-gray-400 mb-1">Average Return</div>
                  <div className="text-white font-bold">11.39%</div>
                  <div className="flex items-center text-gray-400 text-xs">
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

        {/* Filter Drawer/Sheet implementation */}
        <Drawer open={showFilter} onOpenChange={setShowFilter}>
          <DrawerContent className="max-h-[90vh]">
            <ScrollArea className="h-full max-h-[80vh]">
              <FilterComponent />
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </ScrollArea>
  );
};

export default Portfolios;
