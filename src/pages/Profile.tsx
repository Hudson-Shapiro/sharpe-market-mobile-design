import React, { useState, useEffect } from 'react';
import { Settings, Share, TrendingUp, Users, BarChart3, DollarSign, Bell, Lock, Smartphone, FileText, HelpCircle, MessageSquare, Info, LogOut, ChevronRight, Moon, Sun } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

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
      <div className={cn(
        "min-h-screen bg-background",
        darkMode ? "text-white" : "text-foreground"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Account</h1>
          <div className="flex gap-2">
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Share size={24} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Settings size={24} />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="px-4 mb-6">
          <div className={cn(
            "bg-card border border-border rounded-xl p-6",
            darkMode 
              ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/30" 
              : "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20"
          )}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">JD</span>
              </div>
              <div className="flex-1">
                <h2 className="text-foreground font-bold text-xl">John Doe</h2>
                <p className="text-muted-foreground">@johndoe</p>
                <p className="text-muted-foreground text-sm mt-1">Joined March 2024</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Passionate investor focused on long-term growth and sustainable investing. 
              Love sharing insights with the community! 📈
            </p>
          </div>
        </div>

        {/* User Stats */}
        <div className="px-4 mb-6 grid grid-cols-3 gap-2 text-center">
          <div className="py-3">
            <p className="text-muted-foreground text-sm">Subscribed</p>
            <p className="text-xl font-bold">12</p>
          </div>
          
          <div className="py-3">
            <p className="text-muted-foreground text-sm">Subscribers</p>
            <p className="text-xl font-bold">30</p>
          </div>
          
          <div className="py-3">
            <p className="text-muted-foreground text-sm">Portfolios</p>
            <p className="text-xl font-bold">7</p>
          </div>
        </div>
        
        <Separator className="mb-4" />

        {/* Theme Toggle */}
        <div className="px-4 mb-4">
          <div className={cn(
            "flex items-center justify-between p-3.5 rounded-lg",
            darkMode ? "bg-gray-900/30" : "bg-gray-100"
          )}>
            <div className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                darkMode ? "bg-gray-800" : "bg-gray-200"
              )}>
                {darkMode ? 
                  <Moon size={20} className="text-blue-400" /> : 
                  <Sun size={20} className="text-amber-400" />
                }
              </div>
              <span className="font-medium">Dark Mode</span>
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
          <div className={cn(
            "border rounded-xl p-4 flex items-center justify-between",
            darkMode 
              ? "bg-gradient-to-r from-purple-600/20 to-emerald-600/20 border-purple-500/30" 
              : "bg-gradient-to-r from-purple-500/10 to-emerald-500/10 border-purple-500/20"
          )}>
            <div className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                darkMode ? "bg-purple-500/30" : "bg-purple-500/20"
              )}>
                <DollarSign size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold">Sharpe+</h3>
                <p className="text-muted-foreground text-sm">Unlock premium features</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:opacity-90 text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="px-4">
          <h2 className="text-lg font-bold mb-3">Settings</h2>
          <div className="space-y-2">
            <Link to="/settings/payment" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <DollarSign size={20} className="text-emerald-400" />
                </div>
                <span className="font-medium">Payment methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/settings/deposit" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <span className="font-medium">Deposit methods</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>

            <Link to="/settings/security" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <Lock size={20} className="text-purple-400" />
                </div>
                <span className="font-medium">Security</span>
              </div>
              <div className="flex items-center">
                <span className="text-muted-foreground mr-2 text-sm">Setup 2FA</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
            
            <Link to="/settings/preferences" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <Settings size={20} className="text-gray-400" />
                </div>
                <span className="font-medium">Preferences</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/settings/notifications" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <Bell size={20} className="text-amber-400" />
                </div>
                <span className="font-medium">Notifications</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/settings/devices" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <Smartphone size={20} className="text-green-400" />
                </div>
                <span className="font-medium">Device management</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
          
          <h2 className="text-lg font-bold mt-8 mb-3">More</h2>
          <div className="space-y-2">
            <Link to="/documents" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <FileText size={20} className="text-gray-400" />
                </div>
                <span className="font-medium">Documents</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/support" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <HelpCircle size={20} className="text-blue-400" />
                </div>
                <span className="font-medium">Support</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/feedback" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <MessageSquare size={20} className="text-purple-400" />
                </div>
                <span className="font-medium">Send Feedback</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
            
            <Link to="/about" className={cn(
              "flex items-center justify-between p-3.5 rounded-lg",
              darkMode ? "bg-gray-900/30" : "bg-gray-100"
            )}>
              <div className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                )}>
                  <Info size={20} className="text-gray-400" />
                </div>
                <span className="font-medium">About</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </div>
          
          <button className={cn(
            "w-full mt-8 mb-10 flex items-center justify-center space-x-2 py-4 px-4 rounded-lg transition-colors",
            darkMode ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          )}>
            <LogOut size={18} className="mr-2" />
            <span className="font-medium">Sign Out</span>
          </button>
          
          <div className="pt-2 pb-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Profile;
