import React from 'react';
import PortfolioSection from '../components/dashboard/PortfolioSection';
import TopMovers from '../components/dashboard/TopMovers';
import { PlusCircle, Search, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import GlobalHeader from '@/components/layout/GlobalHeader';

const Home = () => {
  const myPortfolios = [
    { id: '5', name: 'Tech Bull', return: 28.58, sharpeRatio: 7.48, isOwned: true },
    { id: '6', name: 'DEFUND THE GOVT', return: 27.76, sharpeRatio: 8.74, isOwned: true },
    { id: '14', name: 'Mixed Bag', return: 14.16, sharpeRatio: 6.23, isOwned: true },
  ];

  const subscribedPortfolios = [
    { id: '16', name: 'Money Making Machine', return: 11.23, author: 'Sarah Chen', isSubscribed: true },
    { id: '18', name: 'Gained Stocks', return: 9.30, author: 'Mike Johnson', isSubscribed: true },
    { id: '27', name: 'XLU', return: 7.61, author: 'Alex Rivera', isSubscribed: true },
  ];

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gray-950">
        <GlobalHeader />
        
        <div className="px-4 mb-4 flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-white">My Portfolios</h2>
            <ChevronDown size={16} className="text-emerald-400" />
          </div>
          <Link to="/portfolios" className="flex items-center bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-2 px-4 rounded-full text-sm font-medium transition-all hover:opacity-90">
            <PlusCircle size={16} className="mr-1" />
            Create Portfolio
          </Link>
        </div>
        
        <div className="px-4 mb-6 grid grid-cols-1 gap-4">
          {myPortfolios.map(portfolio => (
            <div key={portfolio.id} className="bg-gray-900/70 border border-gray-800 rounded-xl p-4 hover:bg-gray-900/90 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full px-2 py-1">#{portfolio.id}</span>
                    <span className="text-lg">😀</span>
                  </div>
                  <h3 className="text-white text-lg font-bold mt-2">{portfolio.name}</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-gray-400 text-sm">Return</p>
                  <p className="text-emerald-400 text-xl font-bold">+{portfolio.return}%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Sharpe Ratio</p>
                  <p className="text-white text-xl font-bold">{portfolio.sharpeRatio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-2 px-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Subscribed Portfolios</h2>
          <Link to="/discover" className="text-emerald-400 text-sm font-medium bg-emerald-500/20 rounded-full px-4 py-2 flex items-center">
            <Search size={14} className="mr-1" />
            Find a Portfolio
          </Link>
        </div>
        
        <div className="px-4 mb-6">
          {subscribedPortfolios.map(portfolio => (
            <div key={portfolio.id} className="border-b border-gray-800 py-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">😀</span>
                <span className="inline-block bg-gray-800 text-gray-300 text-xs font-mono rounded-full px-2 py-1">#{portfolio.id}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-white text-lg font-medium">{portfolio.name}</h3>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Return:</p>
                  <p className="text-emerald-400 text-lg font-bold">+{portfolio.return}%</p>
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/discover" className="w-full flex items-center justify-center text-emerald-400 py-4 font-medium">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>
        
        <TopMovers />
      </div>
    </ScrollArea>
  );
};

export default Home;
