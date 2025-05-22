
import React from 'react';
import { TrendingUp, Users, Crown } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'Sarah Chen', portfolio: 'Tech Growth Fund', return: 45.2, followers: 1234 },
    { rank: 2, name: 'Mike Johnson', portfolio: 'Value Investing', return: 38.7, followers: 987 },
    { rank: 3, name: 'Alex Rivera', portfolio: 'Dividend Masters', return: 32.1, followers: 756 },
    { rank: 4, name: 'Emma Wilson', portfolio: 'ESG Leaders', return: 28.9, followers: 643 },
    { rank: 5, name: 'David Kim', portfolio: 'Small Cap Growth', return: 24.5, followers: 521 },
    { rank: 6, name: 'Lisa Thompson', portfolio: 'Healthcare Focus', return: 22.3, followers: 489 },
    { rank: 7, name: 'John Davis', portfolio: 'Energy Transition', return: 19.8, followers: 367 },
    { rank: 8, name: 'Maria Garcia', portfolio: 'Global Markets', return: 18.2, followers: 298 },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-gray-400">Top performing portfolios this month</p>
      </div>

      {/* Stats Cards */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-emerald-400" />
              <span className="text-gray-300 text-sm">Avg Return</span>
            </div>
            <p className="text-2xl font-bold text-emerald-400">+28.4%</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={20} className="text-blue-400" />
              <span className="text-gray-300 text-sm">Total Users</span>
            </div>
            <p className="text-2xl font-bold text-blue-400">5,327</p>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="px-4 space-y-3">
        {leaderboardData.map((user, index) => (
          <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:bg-gray-900/70 transition-all duration-200">
            <div className="flex items-center gap-4">
              {/* Rank */}
              <div className="w-10 h-10 flex items-center justify-center">
                {user.rank <= 3 ? (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    user.rank === 1 ? 'bg-yellow-500/20' : 
                    user.rank === 2 ? 'bg-gray-400/20' : 
                    'bg-orange-500/20'
                  }`}>
                    <Crown size={16} className={
                      user.rank === 1 ? 'text-yellow-400' : 
                      user.rank === 2 ? 'text-gray-400' : 
                      'text-orange-400'
                    } />
                  </div>
                ) : (
                  <span className="text-gray-400 font-bold">{user.rank}</span>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.portfolio}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Users size={12} />
                    {user.followers} followers
                  </span>
                </div>
              </div>

              {/* Return */}
              <div className="text-right">
                <div className="flex items-center gap-1">
                  <TrendingUp size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 font-bold text-lg">
                    +{user.return}%
                  </span>
                </div>
                <button className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-3 rounded-lg text-sm font-medium transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="p-4 pt-6">
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
