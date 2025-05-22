
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PortfolioCard from '../components/portfolio/PortfolioCard';

const Portfolios = () => {
  const [showFilter, setShowFilter] = useState(false);
  
  const portfolios = [
    { id: '124358', name: 'Dividend Portfolio', return: 26, isOwned: false },
    { id: '124358', name: 'Real Estate Portfolio', return: 14.05, isOwned: false },
    { id: '124358', name: 'Healthcare Portfolio', return: 14.05, isOwned: false },
    { id: '124358', name: 'Auto Portfolio', return: 14.05, isOwned: false },
    { id: '124358', name: 'FMCG Portfolio', return: 14.05, isOwned: false },
    { id: '124358', name: 'IT Portfolio', return: 14.05, isOwned: false },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-white">Portfolios</h1>
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Search size={24} />
        </button>
      </div>

      {/* Filter Bar */}
      <div className="px-4 mb-6">
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

      {/* Portfolio Grid */}
      <div className="px-4 grid gap-4 pb-6">
        {portfolios.map((portfolio, index) => (
          <PortfolioCard key={index} {...portfolio} />
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
