
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, User, Activity, BarChart3, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/portfolios', icon: BarChart3, label: 'Portfolios' },
    { path: '/activity', icon: Activity, label: 'Activity' },
    { path: '/leaderboard', icon: Users, label: 'Leaderboard' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      {/* Main Content */}
      <div className="pb-20">
        {children}
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
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
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
