
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3, Activity, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { NavigationTab } from '@/types';

/**
 * MobileLayout Component
 * 
 * Main application shell that provides bottom tab navigation and content container.
 * This component follows mobile-first design principles with thumb-friendly navigation.
 * 
 * Key Features:
 * - Bottom tab navigation with 5 main sections
 * - Active state indicators with visual feedback
 * - Responsive design optimized for mobile devices
 * - Proper content area with scroll handling
 * 
 * React Native Conversion Notes:
 * - Replace with React Navigation Tab Navigator
 * - Convert Link components to navigation actions
 * - Replace ScrollArea with ScrollView
 * - Use SafeAreaView for proper device handling
 * - Tab bar styling converts to tabBarStyle prop
 * 
 * Usage:
 * <MobileLayout>
 *   <YourPageContent />
 * </MobileLayout>
 */

interface MobileLayoutProps {
  /** Child components to render in the main content area */
  children: React.ReactNode;
}

/**
 * Navigation configuration
 * Centralized tab definition for easy modification
 */
const NAV_ITEMS: NavigationTab[] = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/portfolios', icon: BarChart3, label: 'Portfolios' },
  { path: '/discover', icon: Search, label: 'Explore' },
  { path: '/activity', icon: Activity, label: 'Activity' },
  { path: '/profile', icon: User, label: 'Profile' },
];

/**
 * MobileLayout Component Implementation
 */
const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();

  /**
   * Determines if a navigation item is currently active
   * @param itemPath - The navigation item's path
   * @returns boolean indicating if the item is active
   */
  const isActiveTab = (itemPath: string): boolean => {
    return location.pathname === itemPath;
  };

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      {/* 
        Main Content Area
        - Flexible height to fill available space
        - Overflow handling for scrollable content
        - Headers are included within scrollable content
        
        RN Conversion: Replace with flex: 1 View container
      */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
      
      {/* 
        Bottom Navigation Bar
        - Fixed at bottom of screen
        - Consistent with mobile navigation patterns
        - Touch-friendly sizing and spacing
        
        RN Conversion: This becomes tabBar in Tab Navigator
      */}
      <nav 
        className="bg-background border-t border-border"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-around py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = isActiveTab(item.path);
            const IconComponent = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  // Base styles - touch-friendly sizing
                  "flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200",
                  // Active state styling
                  isActive 
                    ? "text-emerald-400" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label={`Navigate to ${item.label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Icon with consistent sizing */}
                <IconComponent size={20} aria-hidden="true" />
                
                {/* Label with responsive typography */}
                <span className="text-xs mt-1 font-medium">
                  {item.label}
                </span>
                
                {/* Active indicator dot */}
                {isActive && (
                  <div 
                    className="w-1 h-1 bg-emerald-400 rounded-full mt-1"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

// Add display name for debugging
MobileLayout.displayName = 'MobileLayout';

export default MobileLayout;

/**
 * React Native Conversion Example:
 * 
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * 
 * const Tab = createBottomTabNavigator();
 * 
 * function MobileLayout() {
 *   return (
 *     <Tab.Navigator
 *       screenOptions={({ route }) => ({
 *         tabBarIcon: ({ focused, color, size }) => {
 *           const iconName = getIconName(route.name);
 *           return <Icon name={iconName} size={size} color={color} />;
 *         },
 *         tabBarActiveTintColor: '#10b981',
 *         tabBarInactiveTintColor: '#737373',
 *         tabBarStyle: {
 *           backgroundColor: '#0a0a0a',
 *           borderTopColor: '#262626',
 *         },
 *         headerShown: false,
 *       })}
 *     >
 *       <Tab.Screen name="Home" component={HomeScreen} />
 *       <Tab.Screen name="Portfolios" component={PortfoliosScreen} />
 *       <Tab.Screen name="Discover" component={DiscoverScreen} />
 *       <Tab.Screen name="Activity" component={ActivityScreen} />
 *       <Tab.Screen name="Profile" component={ProfileScreen} />
 *     </Tab.Navigator>
 *   );
 * }
 */
