
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Activity, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import GlobalHeader from './GlobalHeader';
import DiscoverHeader from './DiscoverHeader';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const location = useLocation();
  const isSearchPage = location.pathname === '/search';
  const isDiscoverPage = location.pathname === '/discover';
  // Hide header on search page
  const hideHeader = isSearchPage;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/portfolios', icon: BarChart3, label: 'Portfolios' },
    { path: '/discover', icon: Search, label: 'Explore' },
    { path: '/activity', icon: Activity, label: 'Activity' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      {/* Use DiscoverHeader for Discover page, GlobalHeader for others, and hide on search page */}
      {!hideHeader && (
        isDiscoverPage ? <DiscoverHeader /> : <GlobalHeader />
      )}
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      
      {/* Bottom Navigation */}
      <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200",
                  isActive 
                    ? "text-emerald-400" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                <item.icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mt-1" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
