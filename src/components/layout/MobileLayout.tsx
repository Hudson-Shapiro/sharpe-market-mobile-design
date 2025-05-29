
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Activity, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    <div className="h-screen flex flex-col bg-background text-foreground">
      {/* Main Content - with bottom padding to account for navigation */}
      <div className="flex-1 overflow-hidden pb-20">
        {children}
      </div>
      
      {/* Bottom Navigation - Fixed with higher z-index */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <div className="flex items-center justify-around py-2 px-2 safe-area-pb">
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
                    : "text-muted-foreground hover:text-foreground"
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
