
import React from 'react';
import { Settings, Share, TrendingUp, Users, BarChart3, DollarSign } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const userStats = {
    totalReturn: 24.8,
    portfolios: 5,
    followers: 1247,
    following: 89
  };

  return (
    <ScrollArea className="h-full">
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

        {/* User Stats */}
        <div className="px-4 mb-6 grid grid-cols-3 gap-2 text-center">
          <div className="py-3">
            <p className="text-gray-400 text-sm">Subscribed</p>
            <p className="text-xl font-bold text-white">12</p>
          </div>
          
          <div className="py-3">
            <p className="text-gray-400 text-sm">Subscribers</p>
            <p className="text-xl font-bold text-white">30</p>
          </div>
          
          <div className="py-3">
            <p className="text-gray-400 text-sm">Portfolios</p>
            <p className="text-xl font-bold text-white">7</p>
          </div>
        </div>
        
        <Separator className="bg-gray-800 mb-4" />

        {/* Subscribe to Sharpe+ */}
        <div className="px-4 mb-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-emerald-600/20 border border-purple-500/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center mr-3">
                <DollarSign size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Sharpe+</h3>
                <p className="text-gray-300 text-sm">Unlock premium features</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:opacity-90"
            >
              Subscribe
            </Button>
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

        {/* Settings Menu */}
        <div className="px-4 space-y-4">
          <Link to="/settings/earnings" className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <DollarSign size={20} className="text-emerald-400" />
              </div>
              <span className="text-white font-medium">Earnings</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
          
          <Link to="/settings/subscription" className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <span className="text-white font-medium">Subscription Settings</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
          
          <Link to="/settings" className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                <Settings size={20} className="text-gray-400" />
              </div>
              <span className="text-white font-medium">Settings</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-400">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
          
          <button className="w-full mt-4 flex items-center justify-center space-x-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Log Out</span>
          </button>
          
          <div className="pt-4 pb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Profile;
