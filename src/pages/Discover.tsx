
import React, { useState } from 'react';
import { Search, TrendingUp, Flame, ArrowUp, ArrowDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Discover = () => {
  const categories = ["All", "Crypto", "Stocks", "ETFs"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const topStocks = [
    { symbol: 'MSFT', name: 'Microsoft', logo: '⬛', change: 0.78, price: 401.78 },
    { symbol: 'NVDA', name: 'NVIDIA', logo: '🟩', change: 1.36, price: 124.36 },
    { symbol: 'AAPL', name: 'Apple', logo: '⚪', change: -0.01, price: 188.99 },
  ];
  
  const trendingStocks = [
    { symbol: 'CTHR', name: 'Charles & Colvard', logo: '🟦', change: 1207.19, price: 13.07 },
    { symbol: 'VIGL', name: 'Vigil Neuroscience', logo: '🟦', change: 241.34, price: 6.41 },
    { symbol: 'NVTS', name: 'Navitas Semiconductor', logo: '🟦', change: 169.63, price: 4.28 },
  ];
  
  const losingStocks = [
    { symbol: 'ZAPWF', name: 'Zaptec', logo: '⬛', change: -89.74, price: 0.25 },
    { symbol: 'LNZAW', name: 'LanzaTech', logo: '⬛', change: -49.49, price: 0.13 },
    { symbol: 'ZOOZW', name: 'Zoo Digital', logo: '⬛', change: -48.67, price: 0.35 },
  ];

  return (
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
              placeholder="Search assets" 
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
      
      {/* Category Pills */}
      <div className="px-4 pt-2 pb-4 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2">
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
          <button className="py-2 px-4 rounded-full text-sm font-medium whitespace-nowrap bg-gray-800/50 text-gray-300">
            <span className="bg-indigo-500 text-white text-xs py-0.5 px-2 rounded-full mr-1">New</span>
            NFTs
          </button>
        </div>
      </div>

      {/* Top 25 Global Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-white">Top 25 Global</h2>
            <div className="ml-2 bg-blue-500 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
          </div>
          <a href="#" className="text-gray-400 text-sm">See all</a>
        </div>
        <p className="text-sm text-gray-400 mb-4">As ranked by market cap</p>
        
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-4">
            {topStocks.map((stock, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-4 min-w-[150px] border border-gray-800/50">
                <div className="w-12 h-12 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-2xl">{stock.logo}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{stock.symbol}</h3>
                <div className={`flex items-center ${stock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stock.change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  <span className="font-medium">{Math.abs(stock.change)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hot Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center mb-1">
          <h2 className="text-xl font-bold text-white">Hot</h2>
          <Flame size={20} className="ml-2 text-orange-500" />
        </div>
        <p className="text-sm text-gray-400 mb-4">What's hot in the market right now</p>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/30 rounded-xl p-4 mb-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="absolute top-[10%] left-[40%] w-24 h-24 rounded-full bg-purple-500/30 blur-xl"></div>
            <div className="absolute top-[40%] left-[20%] w-32 h-32 rounded-full bg-indigo-500/30 blur-xl"></div>
            <div className="absolute top-[20%] left-[70%] w-28 h-28 rounded-full bg-blue-500/30 blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-1">
              <h3 className="text-xl font-bold text-white">Highest volume</h3>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
            <p className="text-sm text-gray-300 mb-4">Most actively traded today</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">₿</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Bitcoin</h4>
                    <div className="flex items-center text-gray-400 text-xs">
                      <span>BTC</span>
                      <span className="mx-1">•</span>
                      <span>Vol. 58.9B</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$111,141.80</p>
                  <div className="flex items-center justify-end text-emerald-400">
                    <ArrowUp size={12} />
                    <span className="text-sm font-medium">2.57%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">Ξ</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Ethereum</h4>
                    <div className="flex items-center text-gray-400 text-xs">
                      <span>ETH</span>
                      <span className="mx-1">•</span>
                      <span>Vol. 31.5B</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$2,631.56</p>
                  <div className="flex items-center justify-end text-emerald-400">
                    <ArrowUp size={12} />
                    <span className="text-sm font-medium">4.89%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gainers & Losers Section */}
      <div className="px-4">
        <Tabs defaultValue="gainers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 rounded-lg mb-4">
            <TabsTrigger value="gainers" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400">
              <TrendingUp size={16} className="mr-2" />
              Gainers
            </TabsTrigger>
            <TabsTrigger value="losers" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-400">
              <ArrowDown size={16} className="mr-2" />
              Losers
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gainers" className="mt-0">
            <div className="space-y-2">
              {trendingStocks.map((stock, index) => (
                <div key={index} className="bg-gray-800/30 border border-gray-800/50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700/50 rounded-md flex items-center justify-center mr-3">
                      <span className="text-lg">{stock.logo}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{stock.symbol}</h4>
                      <p className="text-sm text-gray-400">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">${stock.price.toFixed(2)}</p>
                    <div className="text-emerald-400 flex items-center justify-end">
                      <ArrowUp size={14} className="mr-1" />
                      <span className="font-medium">{stock.change}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="losers" className="mt-0">
            <div className="space-y-2">
              {losingStocks.map((stock, index) => (
                <div key={index} className="bg-gray-800/30 border border-gray-800/50 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700/50 rounded-md flex items-center justify-center mr-3">
                      <span className="text-lg">{stock.logo}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{stock.symbol}</h4>
                      <p className="text-sm text-gray-400">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white">${stock.price.toFixed(2)}</p>
                    <div className="text-red-400 flex items-center justify-end">
                      <ArrowDown size={14} className="mr-1" />
                      <span className="font-medium">{Math.abs(stock.change)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Action Buttons */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 flex gap-2">
        <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-4 rounded-xl font-medium transition-colors">
          Transfer
        </button>
        <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-medium transition-colors">
          Trade
        </button>
      </div>
    </div>
  );
};

export default Discover;
