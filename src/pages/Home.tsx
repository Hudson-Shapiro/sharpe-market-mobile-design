
import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import PortfolioSection from '../components/dashboard/PortfolioSection';
import TopMovers from '../components/dashboard/TopMovers';

const Home = () => {
  const myPortfolios = [
    { id: '124358', name: 'Healthcare Portfolio', return: 14.05, sharpeRatio: 1.25, isOwned: true },
    { id: '124359', name: 'FMCG Portfolio', return: 13, sharpeRatio: 1.32, isOwned: true },
    { id: '124360', name: 'Auto Portfolio', return: 12.8, sharpeRatio: 1.18, isOwned: true },
  ];

  const subscribedPortfolios = [
    { id: '124361', name: 'Dividend Portfolio', return: 14.05, author: 'Sarah Chen', isSubscribed: true },
    { id: '124362', name: 'IT Companies Portfolio', return: -7.09, author: 'Mike Johnson', isSubscribed: true },
    { id: '124363', name: 'Healthcare Portfolio', return: -10.20, author: 'Alex Rivera', isSubscribed: true },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <DashboardHeader />
      
      <div className="pb-4">
        <PortfolioSection 
          title="My Portfolios" 
          portfolios={myPortfolios}
        />
        
        <PortfolioSection 
          title="Subscribed Portfolios" 
          portfolios={subscribedPortfolios}
        />
        
        <TopMovers />
        
        {/* Subscribe CTA */}
        <div className="px-4 mb-6">
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-6 text-center">
            <h3 className="text-white font-bold text-lg mb-2">Join Sharpe+</h3>
            <p className="text-gray-300 text-sm mb-4">Get access to premium portfolios and exclusive insights</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-lg font-semibold transition-colors">
              Subscribe to Sharpe+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
