
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Search as SearchIcon, Users, BarChart3, Filter, TrendingUp, ArrowUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import PortfolioCard from '../components/portfolio/PortfolioCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const recentSearches = ["Tech stocks", "AI Revolution", "Green Energy", "John Smith"];
  
  const topResults = [
    { id: '101', name: 'AI Revolution', author: 'Ryan Masters', return: 34.52, sharpeRatio: 2.14, rank: 1 },
    { id: '256', name: 'Green Energy Future', author: 'Emma Clark', return: 28.71, sharpeRatio: 1.89, rank: 5 },
    { id: '189', name: 'Biotech Winners', author: 'Dr. Liu Wei', return: 22.35, sharpeRatio: 1.65, rank: 8 },
  ];

  const handleClose = () => {
    navigate(-1);
  };

  const popularUsers = [
    { id: '001', name: 'Mark Cuban', followers: '125K', avatar: '🤵' },
    { id: '002', name: 'Lisa Su', followers: '95K', avatar: '👩‍💼' },
    { id: '003', name: 'Warren Buffet', followers: '210K', avatar: '👴' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Search Header */}
      <div className="p-4 flex items-center gap-3 border-b border-gray-800">
        <button onClick={handleClose} className="text-gray-400">
          <X size={24} />
        </button>
        <div className="flex-1 relative">
          <div className="flex items-center bg-gray-800/50 rounded-full py-2.5 px-4">
            <SearchIcon size={20} className="text-gray-400 mr-2" />
            <Input 
              type="text" 
              placeholder="Search portfolios, users, stocks..." 
              className="bg-transparent border-none text-white focus:outline-none w-full h-auto p-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <button className="text-emerald-400 font-medium">
          Cancel
        </button>
      </div>

      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4">
          {!searchQuery ? (
            <>
              {/* Recent Searches */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold">Recent Searches</h2>
                  <button className="text-emerald-400 text-sm">Clear All</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, idx) => (
                    <button 
                      key={idx}
                      className="flex items-center gap-1 bg-gray-800/50 text-gray-300 py-1.5 px-3 rounded-full text-sm"
                      onClick={() => setSearchQuery(search)}
                    >
                      <span>{search}</span>
                      <X size={14} className="text-gray-500" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <h2 className="text-lg font-bold">Trending Searches</h2>
                  <TrendingUp size={16} className="text-emerald-400" />
                </div>
                <div className="space-y-3">
                  {["Nvidia", "Tesla Stock", "S&P 500 ETF", "Dividend Kings", "Green Energy"].map((item, idx) => (
                    <button 
                      key={idx}
                      className="flex justify-between items-center w-full py-2 border-b border-gray-800/80"
                      onClick={() => setSearchQuery(item)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-800/80 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                      <ArrowUp size={16} className="text-emerald-400" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Search Results */}
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-4">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 rounded-lg">
                    <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="portfolios" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                      <BarChart3 size={14} className="mr-1" />
                      Portfolios
                    </TabsTrigger>
                    <TabsTrigger value="users" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                      <Users size={14} className="mr-1" />
                      Users
                    </TabsTrigger>
                  </TabsList>
                  <button className="p-2 bg-gray-800/50 rounded-full flex items-center justify-center ml-2">
                    <Filter size={18} className="text-gray-400" />
                  </button>
                </div>
                
                <TabsContent value="all" className="mt-0 space-y-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Top Portfolios</h3>
                    <div className="space-y-2">
                      {topResults.map(portfolio => (
                        <PortfolioCard 
                          key={portfolio.id}
                          id={portfolio.id}
                          name={portfolio.name}
                          return={portfolio.return}
                          author={portfolio.author}
                          sharpeRatio={portfolio.sharpeRatio}
                          rank={portfolio.rank}
                          recentPurchases={["AAPL", "MSFT", "GOOG"]}
                        />
                      ))}
                    </div>
                    <button className="w-full text-center py-2 text-emerald-400 text-sm">
                      View all portfolio results
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Users</h3>
                    <div className="space-y-2">
                      {popularUsers.map(user => (
                        <div key={user.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-3 flex items-center">
                          <div className="w-10 h-10 bg-gray-700/70 rounded-full flex items-center justify-center mr-3 text-xl">
                            {user.avatar}
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{user.name}</h4>
                            <p className="text-xs text-gray-400">{user.followers} followers</p>
                          </div>
                          <button className="ml-auto bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs">
                            Follow
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="portfolios" className="mt-0">
                  <div className="space-y-2">
                    {Array(5).fill(0).map((_, i) => (
                      <PortfolioCard 
                        key={`portfolio-${i}`}
                        id={`${101 + i}`}
                        name={["AI Revolution", "Tech Innovators", "Green Energy", "Blue Chip Focus", "Dividend Kings"][i]}
                        return={[34.52, 28.71, 22.35, 19.28, 15.64][i]}
                        author={["Ryan Masters", "Emma Clark", "Dr. Liu Wei", "Sarah Williams", "Robert Johnson"][i]}
                        sharpeRatio={[2.14, 1.89, 1.65, 1.77, 1.92][i]}
                        rank={i + 1}
                        recentPurchases={["AAPL", "MSFT", "GOOG"]}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="users" className="mt-0">
                  <div className="space-y-2">
                    {Array(10).fill(0).map((_, i) => (
                      <div key={`user-${i}`} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-3 flex items-center">
                        <div className="w-10 h-10 bg-gray-700/70 rounded-full flex items-center justify-center mr-3 text-xl">
                          {['🤵', '👩‍💼', '👴', '👩‍🔬', '👨‍💻'][i % 5]}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{
                            ["Mark Cuban", "Lisa Su", "Warren Buffet", "Catherine Wood", "Elon Musk"][i % 5]
                          }</h4>
                          <p className="text-xs text-gray-400">{
                            ["125K", "95K", "210K", "78K", "300K"][i % 5]
                          } followers</p>
                        </div>
                        <button className="ml-auto bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Search;
