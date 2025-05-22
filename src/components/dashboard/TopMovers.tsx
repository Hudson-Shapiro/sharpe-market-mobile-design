
import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const TopMovers = () => {
  const [activeTab, setActiveTab] = useState<'portfolios' | 'holdings'>('portfolios');

  const topPortfolios = [
    { id: '1', name: 'Healthcare Portfolio', author: 'Robert', return: 16.05 },
    { id: '2', name: 'Real Estate Portfolio', author: 'Robert', return: 14.05 },
    { id: '3', name: 'FMCG Portfolio', author: 'Robert', return: 14.05 },
  ];

  const topHoldings = [
    { id: '1', symbol: 'AAPL', name: 'Apple Inc.', allocation: 16.05 },
    { id: '2', symbol: 'MSFT', name: 'Microsoft Corp.', allocation: 14.05 },
    { id: '3', symbol: 'GOOGL', name: 'Alphabet Inc.', allocation: 14.05 },
  ];

  return (
    <div className="px-4 mb-6">
      <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-4">
        {/* Tab Navigation */}
        <div className="flex bg-gray-800/50 rounded-lg p-1 mb-4">
          <button
            onClick={() => setActiveTab('portfolios')}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200",
              activeTab === 'portfolios'
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            )}
          >
            Top Portfolios
          </button>
          <button
            onClick={() => setActiveTab('holdings')}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200",
              activeTab === 'holdings'
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            )}
          >
            Top Holdings
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {activeTab === 'portfolios' ? (
            topPortfolios.map((portfolio, index) => (
              <div key={portfolio.id} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{portfolio.name}</p>
                  <p className="text-gray-400 text-sm">{portfolio.author}</p>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">
                    +{portfolio.return.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))
          ) : (
            topHoldings.map((holding, index) => (
              <div key={holding.id} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">{holding.symbol}</p>
                  <p className="text-gray-400 text-sm">{holding.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-sm">Avg. Portfolio Allo.</p>
                  <p className="text-emerald-400 font-semibold">+{holding.allocation.toFixed(2)}%</p>
                </div>
              </div>
            ))
          )}
        </div>

        <button className="w-full mt-4 py-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors flex items-center justify-center gap-1">
          View all
          <TrendingUp size={14} />
        </button>
      </div>
    </div>
  );
};

export default TopMovers;
