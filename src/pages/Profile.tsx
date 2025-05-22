
import React from 'react';
import { Settings, Share, TrendingUp, Users, BarChart3 } from 'lucide-react';

const Profile = () => {
  const userStats = {
    totalReturn: 24.8,
    portfolios: 5,
    followers: 1247,
    following: 89
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Share size={24} />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings size={24} />
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="px-4 mb-6">
        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">JD</span>
            </div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-xl">John Doe</h2>
              <p className="text-gray-300">@johndoe</p>
              <p className="text-gray-400 text-sm mt-1">Joined March 2024</p>
            </div>
          </div>
          
          <p className="text-gray-300 mb-4">
            Passionate investor focused on long-term growth and sustainable investing. 
            Love sharing insights with the community! 📈
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <TrendingUp size={24} className="text-emerald-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-emerald-400">+{userStats.totalReturn}%</p>
            <p className="text-gray-400 text-sm">Total Return</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <BarChart3 size={24} className="text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{userStats.portfolios}</p>
            <p className="text-gray-400 text-sm">Portfolios</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <Users size={24} className="text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{userStats.followers}</p>
            <p className="text-gray-400 text-sm">Followers</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
            <Users size={24} className="text-orange-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{userStats.following}</p>
            <p className="text-gray-400 text-sm">Following</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 space-y-3">
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors">
          Create New Portfolio
        </button>
        
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors">
          View My Analytics
        </button>
        
        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors">
          Subscription Settings
        </button>
      </div>
    </div>
  );
};

export default Profile;
