
import React, { useState } from 'react';
import { Search, TrendingUp, Flame, ArrowUp, ArrowDown, Trophy, Users } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Discover = () => {
  const categories = ["All", "Trending", "Top Returns", "New", "Following"];
  const [activeCategory, setActiveCategory] = useState("All");
  
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
  ];

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gray-950 pb-6">
        {/* Header with Search */}
        <div className="p-4 pb-2 flex items-center justify-between space-x-3">
          <div className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">HS</span>
          </div>
          
          <div className="flex-1 relative">
            <div className="flex items-center bg-gray-800/50 rounded-full py-2 px-4">
              <Search size={20} className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Find portfolios or creators" 
                className="bg-transparent border-none text-white focus:outline-none w-full"
              />
            </div>
          </div>
          
          <button className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
        </div>
        
        {/* Tabs Navigation */}
        <div className="px-4 mb-6">
          <Tabs defaultValue="discover" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 rounded-lg mb-4">
              <TabsTrigger value="discover" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Discover
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Leaderboard
              </TabsTrigger>
              <TabsTrigger value="market" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Market
              </TabsTrigger>
            </TabsList>
            
            {/* Discover Tab Content */}
            <TabsContent value="discover" className="mt-0 space-y-6">
              {/* Category Pills */}
              <div className="flex space-x-2 overflow-x-auto no-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-2 px-4 rounded-full text-sm font-medium whitespace-nowrap ${
                      activeCategory === category 
                        ? 'bg-white text-gray-900' 
                        : 'bg-gray-800/50 text-gray-300'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Featured Portfolios */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <h2 className="text-xl font-bold text-white">Featured</h2>
                    <Flame size={20} className="ml-2 text-orange-500" />
                  </div>
                  <a href="#" className="text-emerald-400 text-sm">See all</a>
                </div>
                <p className="text-sm text-gray-400 mb-4">Hand-picked portfolios by our team</p>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl p-4 mb-4">
                  <div className="relative z-10">
                    <PortfolioCard 
                      id="7263"
                      name="Tech Unicorns"
                      return={48.92}
                      author="Sharpe Team"
                      sharpeRatio={2.84}
                    />
                  </div>
                </div>
              </div>
              
              {/* Trending Portfolios */}
              <div>
                <div className="flex items-center mb-1">
                  <h2 className="text-xl font-bold text-white">Trending Portfolios</h2>
                  <TrendingUp size={20} className="ml-2 text-emerald-400" />
                </div>
                <p className="text-sm text-gray-400 mb-4">Most followed this week</p>
                
                <div className="space-y-4">
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
                  <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-lg mb-4">
                    <TabsTrigger value="portfolios" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
                      <Trophy size={16} className="mr-2" />
                      Top Portfolios
                    </TabsTrigger>
                    <TabsTrigger value="creators" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
                      <Users size={16} className="mr-2" />
                      Top Creators
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="portfolios" className="mt-0">
                    <div className="space-y-4">
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
                    <div className="space-y-3">
                      {topCreators.map((creator) => (
                        <div key={creator.id} className="bg-gray-800/30 border border-gray-800/50 rounded-lg p-4 flex items-center">
                          <div className="w-12 h-12 bg-gray-700/70 rounded-full flex items-center justify-center mr-3 text-2xl">
                            {creator.avatar}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium flex items-center">
                              {creator.name}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1 text-emerald-400">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </h4>
                            <div className="flex text-sm text-gray-400 mt-1">
                              <span>{creator.portfolios} portfolios</span>
                              <span className="mx-2">•</span>
                              <span>{creator.followers} followers</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-emerald-400 justify-end">
                              <ArrowUp size={14} className="mr-1" />
                              <span className="font-medium">{creator.avgReturn}%</span>
                            </div>
                            <button className="mt-2 text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
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
            
            {/* Leaderboard Tab Content */}
            <TabsContent value="leaderboard" className="mt-0 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Top Performers</h2>
                <div className="flex bg-gray-800/50 rounded-lg p-1 text-xs">
                  <button className="px-3 py-1 bg-white text-gray-900 rounded">LTD</button>
                  <button className="px-3 py-1 text-gray-300">YTD</button>
                  <button className="px-3 py-1 text-gray-300">3M</button>
                </div>
              </div>
              
              <div className="space-y-3">
                {leaderboardItems.map((item) => (
                  <div key={item.rank} className="bg-gray-900/70 border border-gray-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold text-white">
                        {item.rank}
                      </div>
                      <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-2">by {item.author}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center text-emerald-400">
                          <ArrowUp size={16} className="mr-1" />
                          <span className="font-bold text-lg">+{item.return}%</span>
                        </div>
                        <p className="text-gray-400 text-xs">+{item.vsSP}% vs S&P</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-white text-lg font-semibold">Sharpe {item.sharpe}</p>
                        {item.rank <= 3 && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-amber-400 inline">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-3 w-full bg-gray-800/70 h-1 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-full rounded-full" 
                        style={{ width: `${Math.min(100, item.return)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 text-emerald-400 font-medium bg-gray-900/50 border border-gray-800 rounded-lg">
                View Full Leaderboard
              </button>
            </TabsContent>
            
            {/* Market Tab Content */}
            <TabsContent value="market" className="mt-0 space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">Market Overview</h3>
                  <span className="text-emerald-400 text-sm">May 22, 2025</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-400 text-xs mb-1">S&P 500</p>
                    <p className="text-white font-bold text-lg">5,296.64</p>
                    <div className="flex items-center text-emerald-400 text-sm">
                      <ArrowUp size={14} className="mr-1" />
                      <span>0.98%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-400 text-xs mb-1">NASDAQ</p>
                    <p className="text-white font-bold text-lg">16,742.35</p>
                    <div className="flex items-center text-emerald-400 text-sm">
                      <ArrowUp size={14} className="mr-1" />
                      <span>1.28%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-400 text-xs mb-1">DOW</p>
                    <p className="text-white font-bold text-lg">39,012.75</p>
                    <div className="flex items-center text-red-400 text-sm">
                      <ArrowDown size={14} className="mr-1" />
                      <span>0.21%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <p className="text-gray-400 text-xs mb-1">RUSSELL 2000</p>
                    <p className="text-white font-bold text-lg">2,092.38</p>
                    <div className="flex items-center text-emerald-400 text-sm">
                      <ArrowUp size={14} className="mr-1" />
                      <span>1.12%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Top Gaining Sectors</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Technology', change: 2.14, color: 'from-emerald-500 to-emerald-300' },
                    { name: 'Healthcare', change: 1.86, color: 'from-blue-500 to-blue-300' },
                    { name: 'Consumer Cyclical', change: 1.52, color: 'from-purple-500 to-purple-300' },
                  ].map((sector, i) => (
                    <div key={i} className="bg-gray-900/70 border border-gray-800 p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 mr-3 text-lg">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{sector.name}</h4>
                        <div className="w-full mt-1 bg-gray-800/70 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${sector.color} h-full rounded-full`}
                            style={{ width: `${sector.change * 20}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-emerald-400">
                          <ArrowUp size={14} className="mr-1" />
                          <span className="font-semibold">{sector.change}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Top Declining Sectors</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Energy', change: 0.78, color: 'from-red-500 to-red-300' },
                    { name: 'Utilities', change: 0.52, color: 'from-red-500 to-red-300' },
                    { name: 'Real Estate', change: 0.32, color: 'from-orange-500 to-orange-300' },
                  ].map((sector, i) => (
                    <div key={i} className="bg-gray-900/70 border border-gray-800 p-3 rounded-lg flex items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 mr-3 text-lg">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{sector.name}</h4>
                        <div className="w-full mt-1 bg-gray-800/70 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${sector.color} h-full rounded-full`}
                            style={{ width: `${sector.change * 20}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-red-400">
                          <ArrowDown size={14} className="mr-1" />
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
