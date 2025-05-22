import React, { useState, useEffect } from 'react';
import { Settings, Share, TrendingUp, Users, BarChart3, DollarSign, Bell, Lock, Smartphone, FileText, HelpCircle, MessageSquare, Info, LogOut, ChevronRight, Moon, Sun } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const userStats = {
    totalReturn: 24.8,
    portfolios: 5,
    followers: 1247,
    following: 89
  };

  const [darkMode, setDarkMode] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Apply dark/light mode class to the document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    toast({
      title: darkMode ? "Light mode activated" : "Dark mode activated",
      description: "Your theme preference has been updated.",
    });
  };

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-gray-950">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-white">Account</h1>
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

        {/* Theme Toggle */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                {darkMode ? 
                  <Moon size={20} className="text-blue-400" /> : 
                  <Sun size={20} className="text-amber-400" />
                }
              </div>
              <span className="text-white font-medium">Dark Mode</span>
            </div>
            <Switch 
              checked={darkMode} 
              onCheckedChange={toggleTheme} 
              className={darkMode ? "bg-emerald-500" : "bg-gray-400"}
            />
          </div>
        </div>

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

        {/* Settings Menu */}
        <div className="px-4">
          <h2 className="text-lg font-bold text-white mb-3">Settings</h2>
          <div className="space-y-2">
            <Link to="/settings/payment" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <DollarSign size={20} className="text-emerald-400" />
                </div>
                <span className="text-white font-medium">Payment methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/settings/deposit" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <span className="text-white font-medium">Deposit methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>

            <Link to="/settings/security" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Lock size={20} className="text-purple-400" />
                </div>
                <span className="text-white font-medium">Security</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2 text-sm">Setup 2FA</span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            
            <Link to="/settings/preferences" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Settings size={20} className="text-gray-400" />
                </div>
                <span className="text-white font-medium">Preferences</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/settings/notifications" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Bell size={20} className="text-amber-400" />
                </div>
                <span className="text-white font-medium">Notifications</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/settings/devices" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Smartphone size={20} className="text-green-400" />
                </div>
                <span className="text-white font-medium">Device management</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
          
          <h2 className="text-lg font-bold text-white mt-8 mb-3">More</h2>
          <div className="space-y-2">
            <Link to="/documents" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <FileText size={20} className="text-gray-400" />
                </div>
                <span className="text-white font-medium">Documents</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/support" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <HelpCircle size={20} className="text-blue-400" />
                </div>
                <span className="text-white font-medium">Support</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/feedback" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <MessageSquare size={20} className="text-purple-400" />
                </div>
                <span className="text-white font-medium">Send Feedback</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link to="/about" className="flex items-center justify-between p-3.5 bg-gray-900/30 rounded-lg">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <Info size={20} className="text-gray-400" />
                </div>
                <span className="text-white font-medium">About</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
          
          <button className="w-full mt-8 mb-10 flex items-center justify-center space-x-2 py-4 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors mx-4">
            <LogOut size={18} className="mr-2" />
            <span className="font-medium">Sign Out</span>
          </button>
          
          <div className="pt-2 pb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
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
