import React, { useState } from 'react';
import { TrendingUp, Flame, ArrowUp, ArrowDown, Trophy, Users, ChevronRight, Star } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { AreaChart, Area } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

const Discover = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("All");
  const [timeRange, setTimeRange] = useState("LTD");
  const navigate = useNavigate();
  
  const trendingPortfolios = [
    { id: '101', name: 'AI Revolution', author: 'Ryan Masters', return: 34.52, sharpeRatio: 2.14 },
    { id: '256', name: 'Green Energy Future', author: 'Emma Clark', return: 28.71, sharpeRatio: 1.89 },
    { id: '189', name: 'Biotech Winners', author: 'Dr. Liu Wei', return: 22.35, sharpeRatio: 1.65 },
  ];
  
  const topPortfolios = [
    { id: '087', name: 'Tech Giants Only', author: 'Michael Stevens', return: 42.16, sharpeRatio: 2.36 },
    { id: '156', name: 'Blue Chip Collection', author: 'Sarah Williams', return: 19.78, sharpeRatio: 1.77 },
    { id: '093', name: 'Dividend Kings', author: 'Robert Johnson', return: 15.64, sharpeRatio: 1.92 },
  ];
  
  const topCreators = [
    { id: '001', name: 'Mark Cuban', portfolios: 12, followers: '125K', avgReturn: 26.4, avatar: '🤵' },
    { id: '002', name: 'Lisa Su', portfolios: 8, followers: '95K', avgReturn: 31.2, avatar: '👩‍💼' },
    { id: '003', name: 'Warren Buffet', portfolios: 15, followers: '210K', avgReturn: 18.7, avatar: '👴' },
  ];

  const leaderboardItems = [
    { rank: 1, name: 'Josh', author: 'Joshua Kroll', return: 59.6, vsSP: 51.2, sharpe: 9.2, tag: 'Top 1%' },
    { rank: 2, name: 'Test', author: 'Joseph Blumenfeld', return: 44.5, vsSP: 36.1, sharpe: 8.7, tag: 'Top 5%' },
    { rank: 3, name: 'Goldenberg', author: 'Ryan Goldenberg', return: 31.2, vsSP: 22.8, sharpe: 7.9, tag: 'Top 5%' },
    { rank: 4, name: 'The Junk Yard', author: 'T.K.', return: 30.8, vsSP: 22.4, sharpe: 7.5, tag: 'Top 10%' },
    { rank: 5, name: 'Tech Bull', author: 'Hudson Shapiro', return: 28.6, vsSP: 20.2, sharpe: 7.5, tag: 'Top 10%' },
    { rank: 6, name: 'DEFUND THE GOV', author: 'Hudson Shapiro', return: 27.8, vsSP: 19.4, sharpe: 8.7, tag: 'Top 10%' },
    { rank: 7, name: 'Value Investor', author: 'Jessica Wong', return: 26.5, vsSP: 18.1, sharpe: 6.9, tag: 'Top 15%' },
    { rank: 8, name: 'Crypto Guru', author: 'Alex Mayer', return: 25.3, vsSP: 16.9, sharpe: 6.5, tag: 'Top 15%' },
  ];

  const handleSubscribePlus = () => {
    toast({
      title: "Sharpe+ Subscription",
      description: "You're being redirected to the Sharpe+ subscription page.",
      variant: "default",
    });
  };

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gray-950 pb-6">
        {/* Removed the search bar and filter buttons from here since they're now in the DiscoverHeader */}
        
        {/* Tabs Navigation */}
        <div className="px-4 mb-6 mt-2">
          <Tabs defaultValue="leaderboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 rounded-lg mb-4">
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Leaderboard
              </TabsTrigger>
              <TabsTrigger value="discover" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Discover
              </TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Market
              </TabsTrigger>
            </TabsList>
            
            {/* Leaderboard Tab Content */}
            <TabsContent value="leaderboard" className="mt-0 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-white">Top Performers</h2>
                <div className="flex bg-gray-800/50 rounded-lg p-1 text-xs">
                  <button 
                    onClick={() => setTimeRange("LTD")}
                    className={`px-3 py-1 ${timeRange === "LTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>LTD</button>
                  <button 
                    onClick={() => setTimeRange("YTD")}
                    className={`px-3 py-1 ${timeRange === "YTD" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>YTD</button>
                  <button 
                    onClick={() => setTimeRange("3M")}
                    className={`px-3 py-1 ${timeRange === "3M" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>3M</button>
                  <button 
                    onClick={() => setTimeRange("1D")}
                    className={`px-3 py-1 ${timeRange === "1D" ? "bg-white text-gray-900" : "text-gray-300"} rounded`}>1D</button>
                </div>
              </div>
              
              <div className="space-y-2">
                {leaderboardItems.map((item, index) => (
                  <div key={item.rank} 
                    className={`${
                      index < 3 ? 'bg-gradient-to-r from-gray-900/70 to-gray-900/30 border-l-4' : 'bg-gray-900/50'
                    } ${
                      index === 0 ? 'border-amber-500' : 
                      index === 1 ? 'border-gray-400' :
                      index === 2 ? 'border-amber-700' : ''
                    } border border-gray-800 rounded-lg p-2 ${index < 3 ? 'mb-2' : ''}`}>
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full ${
                        item.rank === 1 ? 'bg-amber-500/20 text-amber-400' : 
                        item.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                        item.rank === 3 ? 'bg-amber-700/20 text-amber-700' :
                        'bg-gray-800'
                      } flex items-center justify-center text-sm font-bold`}>
                        {item.rank}
                      </div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      {item.rank <= 3 && (
                        <Star size={14} className="text-amber-400 fill-amber-400" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-0.5">
                      <div>
                        <p className="text-gray-400 text-xs mb-1">by {item.author}</p>
                        <div className="flex items-center text-emerald-400">
                          <ArrowUp size={16} className="mr-1" />
                          <span className="font-bold text-lg">+{item.return}%</span>
                        </div>
                        <p className="text-gray-400 text-xs">+{item.vsSP}% vs S&P</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-white font-semibold mb-1">Sharpe {item.sharpe}</p>
                        
                        {/* Mini chart */}
                        <div className="w-16 h-8">
                          <AreaChart width={64} height={32} 
                            data={[
                              { value: 100 },
                              { value: 110 },
                              { value: 105 },
                              { value: 120 },
                              { value: 115 },
                              { value: 130 },
                              { value: 125 },
                              { value: 140 },
                            ]} 
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id={`chartGradient-${item.rank}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="#10b981" 
                              strokeWidth={1.5}
                              fill={`url(#chartGradient-${item.rank})`} 
                              dot={false}
                              animationDuration={0}
                            />
                          </AreaChart>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 w-full bg-gray-800/70 h-1 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          item.rank === 1 ? 'bg-gradient-to-r from-amber-500 to-amber-300' :
                          item.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                          item.rank === 3 ? 'bg-gradient-to-r from-amber-700 to-amber-600' :
                          'bg-gradient-to-r from-emerald-500 to-emerald-300'
                        }`}
                        style={{ width: `${Math.min(100, item.return)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mt-4">
                <button className="w-full py-2.5 text-emerald-400 font-medium bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-gray-800/70 transition-colors">
                  View Full Leaderboard
                </button>
                
                <button 
                  onClick={handleSubscribePlus}
                  className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-emerald-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe to Sharpe+ for Premium Insights
                </button>
              </div>
            </TabsContent>
            
            {/* Discover Tab Content */}
            <TabsContent value="discover" className="mt-0 space-y-6">
              {/* Removed the category pills here as requested */}
              
              {/* Featured Portfolios */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <h2 className="text-lg font-bold text-white">Featured</h2>
                    <Flame size={18} className="ml-1.5 text-orange-500" />
                  </div>
                  <a href="#" className="text-emerald-400 text-xs">See all</a>
                </div>
                <p className="text-xs text-gray-400 mb-3">Hand-picked portfolios by our team</p>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl p-2">
                  <PortfolioCard 
                    id="7263"
                    name="Tech Unicorns"
                    return={48.92}
                    author="Sharpe Team"
                    sharpeRatio={2.84}
                  />
                </div>
              </div>
              
              {/* Trending Portfolios */}
              <div>
                <div className="flex items-center mb-1">
                  <h2 className="text-lg font-bold text-white">Trending Portfolios</h2>
                  <TrendingUp size={18} className="ml-1.5 text-emerald-400" />
                </div>
                <p className="text-xs text-gray-400 mb-3">Most followed this week</p>
                
                <div className="space-y-2">
                  {trendingPortfolios.map(portfolio => (
                    <PortfolioCard 
                      key={portfolio.id}
                      id={portfolio.id}
                      name={portfolio.name}
                      return={portfolio.return}
                      author={portfolio.author}
                      sharpeRatio={portfolio.sharpeRatio}
                    />
                  ))}
                </div>
              </div>
              
              {/* Top Creators/Portfolios Section */}
              <div>
                <Tabs defaultValue="portfolios" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-lg mb-3">
                    <TabsTrigger value="portfolios" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
                      <Trophy size={14} className="mr-1.5" />
                      Top Portfolios
                    </TabsTrigger>
                    <TabsTrigger value="creators" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                      <Users size={14} className="mr-1.5" />
                      Top Creators
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="portfolios" className="mt-0">
                    <div className="space-y-2">
                      {topPortfolios.map(portfolio => (
                        <PortfolioCard 
                          key={portfolio.id}
                          id={portfolio.id}
                          name={portfolio.name}
                          return={portfolio.return}
                          author={portfolio.author}
                          sharpeRatio={portfolio.sharpeRatio}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="creators" className="mt-0">
                    <div className="space-y-2">
                      {topCreators.map((creator) => (
                        <div key={creator.id} className="bg-gray-800/30 border border-gray-800/50 rounded-lg p-2 flex items-center">
                          <div className="w-10 h-10 bg-gray-700/70 rounded-full flex items-center justify-center mr-2.5 text-xl">
                            {creator.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium flex items-center">
                              {creator.name}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 ml-1 text-emerald-400">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </h4>
                            <div className="flex text-xs text-gray-400 mt-0.5">
                              <span>{creator.portfolios} portfolios</span>
                              <span className="mx-1.5">•</span>
                              <span>{creator.followers} followers</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-emerald-400 justify-end">
                              <ArrowUp size={12} className="mr-0.5" />
                              <span className="font-medium">{creator.avgReturn}%</span>
                            </div>
                            <button className="mt-1 text-2xs bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full">
                              Follow
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>
            
            {/* Market Tab Content */}
            <TabsContent value="market" className="mt-0 space-y-5">
              <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold">Market Overview</h3>
                  <span className="text-emerald-400 text-xs">May 22, 2025</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs mb-0.5">S&P 500</p>
                    <p className="text-white font-bold">5,296.64</p>
                    <div className="flex items-center text-emerald-400 text-xs">
                      <ArrowUp size={12} className="mr-0.5" />
                      <span>0.98%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs mb-0.5">NASDAQ</p>
                    <p className="text-white font-bold">16,742.35</p>
                    <div className="flex items-center text-emerald-400 text-xs">
                      <ArrowUp size={12} className="mr-0.5" />
                      <span>1.28%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs mb-0.5">DOW</p>
                    <p className="text-white font-bold">39,012.75</p>
                    <div className="flex items-center text-red-400 text-xs">
                      <ArrowDown size={12} className="mr-0.5" />
                      <span>0.21%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-gray-400 text-xs mb-0.5">RUSSELL 2000</p>
                    <p className="text-white font-bold">2,092.38</p>
                    <div className="flex items-center text-emerald-400 text-xs">
                      <ArrowUp size={12} className="mr-0.5" />
                      <span>1.12%</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleSubscribePlus}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Star size={14} className="fill-white" />
                  Get Sharpe+ for In-Depth Analysis
                  <ChevronRight size={14} />
                </button>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-2">Top Gaining Sectors</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Technology', change: 2.14, color: 'from-emerald-500 to-emerald-300' },
                    { name: 'Healthcare', change: 1.86, color: 'from-blue-500 to-blue-300' },
                    { name: 'Consumer Cyclical', change: 1.52, color: 'from-purple-500 to-purple-300' },
                  ].map((sector, i) => (
                    <div key={i} className="bg-gray-900/70 border border-gray-800 p-2 rounded-lg flex items-center">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-800 mr-2 text-base">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{sector.name}</h4>
                        <div className="w-full mt-1 bg-gray-800/70 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${sector.color} h-full rounded-full`}
                            style={{ width: `${sector.change * 20}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-emerald-400">
                          <ArrowUp size={12} className="mr-0.5" />
                          <span className="font-semibold">{sector.change}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-2">Top Declining Sectors</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Energy', change: 0.78, color: 'from-red-500 to-red-300' },
                    { name: 'Utilities', change: 0.52, color: 'from-red-500 to-red-300' },
                    { name: 'Real Estate', change: 0.32, color: 'from-orange-500 to-orange-300' },
                  ].map((sector, i) => (
                    <div key={i} className="bg-gray-900/70 border border-gray-800 p-2 rounded-lg flex items-center">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-800 mr-2 text-base">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{sector.name}</h4>
                        <div className="w-full mt-1 bg-gray-800/70 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${sector.color} h-full rounded-full`}
                            style={{ width: `${sector.change * 20}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-red-400">
                          <ArrowDown size={12} className="mr-0.5" />
                          <span className="font-semibold">{sector.change}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Discover;
