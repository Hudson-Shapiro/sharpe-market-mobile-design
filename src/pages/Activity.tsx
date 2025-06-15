
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import GlobalHeader from '@/components/layout/GlobalHeader';
import ActivitySummary from '@/components/activity/ActivitySummary';
import ActivityFilters from '@/components/activity/ActivityFilters';
import ActivityCard from '@/components/activity/ActivityCard';
import type { Activity } from '@/types';

/**
 * Activity Page Component
 * 
 * Displays user's trading activity with filtering and summary capabilities.
 * This page provides a comprehensive view of all portfolio transactions
 * with real-time updates and interactive filtering options.
 * 
 * Key Features:
 * - Activity summary with key metrics
 * - Multi-filter system (All, Week, Buy, Sell, Portfolio)
 * - Animated card transitions for smooth UX
 * - Real-time data updates
 * - Mobile-optimized layout with proper spacing
 * 
 * React Native Conversion Notes:
 * - Replace ScrollArea with FlatList for better performance
 * - Convert to screen component with navigation prop
 * - Use React Native Animated API for card transitions
 * - Implement pull-to-refresh functionality
 * - Add loading states with ActivityIndicator
 * - Use react-native-super-grid for optimized rendering
 * 
 * Data Flow:
 * 1. Load activities from API/state management
 * 2. Apply filters based on user selection
 * 3. Animate cards when filter changes
 * 4. Update summary based on filtered data
 * 
 * Performance Considerations:
 * - Virtualized list rendering for large datasets
 * - Memoized filter operations
 * - Optimistic updates for better UX
 */

/**
 * Available filter options for activity display
 * Centralized for easy modification and type safety
 */
type ActivityFilter = 'all' | 'week' | 'buy' | 'sell' | 'portfolio';

/**
 * Mock activity data
 * In production, this would come from API/state management
 * 
 * RN Conversion: Move to services/api layer
 */
const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    portfolio: {
      id: 'p1',
      name: 'Mixed Batch (Hudson Shapiro)',
      creator: 'Hudson Shapiro',
    },
    stock: 'SPHR',
    date: '06-03-2024',
    quantity: 10,
    price: 37.70,
    amount: 377,
    type: 'SELL',
    allocation: 95.05,
    smPrice: 37.70,
    currentPrice: 37.70,
  },
  {
    id: '2',
    portfolio: {
      id: 'p2',
      name: 'Tech Bull (Hudson Shapiro)',
      creator: 'Hudson Shapiro',
    },
    stock: 'V',
    date: '06-03-2024',
    quantity: 1,
    price: 365.19,
    amount: 365,
    type: 'BUY',
    allocation: 10.79,
    smPrice: 365.19,
    currentPrice: 365.19,
  },
  {
    id: '3',
    portfolio: {
      id: 'p3',
      name: 'DEFUND THE GOV... (Hudson S...)',
      creator: 'Hudson Shapiro',
    },
    stock: 'TSLA',
    date: '06-03-2024',
    quantity: 2,
    price: 346.46,
    amount: 693,
    type: 'BUY',
    allocation: 17.89,
    smPrice: 346.46,
    currentPrice: 346.46,
  },
  {
    id: '4',
    portfolio: {
      id: 'p4',
      name: 'Tech Bull (Hudson Shapiro)',
      creator: 'Hudson Shapiro',
    },
    stock: 'MSTR',
    date: '06-03-2024',
    quantity: 1,
    price: 369.06,
    amount: 369,
    type: 'BUY',
    allocation: 16.35,
    smPrice: 369.06,
    currentPrice: 369.06,
  },
  {
    id: '5',
    portfolio: {
      id: 'p5',
      name: 'DEFUND THE GOV... (Hudson S...)',
      creator: 'Hudson Shapiro',
    },
    stock: 'MSTR',
    date: '06-03-2024',
    quantity: 1,
    price: 369.06,
    amount: 369,
    type: 'BUY',
    allocation: 19.07,
    smPrice: 369.06,
    currentPrice: 369.06,
  },
  {
    id: '6',
    portfolio: {
      id: 'p6',
      name: 'COMO (Hudson Shapiro)',
      creator: 'Hudson Shapiro',
    },
    stock: 'SLV',
    date: '06-03-2024',
    quantity: 15,
    price: 30.00,
    amount: 450,
    type: 'BUY',
    allocation: 100.00,
    smPrice: 30.00,
    currentPrice: 30.00,
  },
];

/**
 * Activity Page Component Implementation
 */
const Activity: React.FC = () => {
  // State management for filters and animations
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>('all');
  const [animateCards, setAnimateCards] = useState(false);

  /**
   * Filter activities based on current filter selection
   * Memoized for performance with large datasets
   */
  const filteredActivities = React.useMemo(() => {
    return MOCK_ACTIVITIES.filter(activity => {
      switch (activeFilter) {
        case 'week':
          // In production, implement proper date filtering
          return ['06-03-2024'].includes(activity.date);
        case 'buy':
          return activity.type === 'BUY';
        case 'sell':
          return activity.type === 'SELL';
        case 'portfolio':
          // In production, filter by specific portfolio
          return true;
        case 'all':
        default:
          return true;
      }
    });
  }, [activeFilter]);

  /**
   * Handle filter changes with animation
   * Provides smooth visual feedback when switching filters
   */
  const handleFilterChange = (filter: ActivityFilter) => {
    setActiveFilter(filter);
  };

  /**
   * Trigger card animations when filter changes
   * Creates staggered animation effect for better UX
   */
  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  /**
   * Empty state component
   * Displayed when no activities match current filter
   */
  const EmptyState = () => (
    <div className="text-center py-8">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
        <TrendingUp className="text-emerald-400" size={24} />
      </div>
      <p className="text-muted-foreground text-lg font-medium">
        No activities found for the selected filter.
      </p>
      <p className="text-muted-foreground/60 text-sm mt-1">
        Try adjusting your filters or make some trades!
      </p>
    </div>
  );

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background">
        {/* 
          Global Header
          Provides consistent navigation and branding
          RN Conversion: Replace with Stack Navigator header
        */}
        <GlobalHeader />
        
        {/* 
          Activity Summary Section
          Key metrics and performance overview
          RN Conversion: Separate component with proper styling
        */}
        <div className="px-4 pt-2">
          <ActivitySummary />
        </div>

        {/* 
          Filter Controls
          Interactive filter buttons for data refinement
          RN Conversion: Custom segmented control component
        */}
        <div className="px-4 mb-2">
          <ActivityFilters 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
        </div>

        {/* 
          Activity List
          Main content area with filtered activities
          RN Conversion: FlatList with optimized rendering
        */}
        <div className="px-4 space-y-2 pb-4">
          {filteredActivities.length > 0 ? (
            // Activity cards with staggered animation
            filteredActivities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`transition-all duration-300 ${
                  animateCards ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms` 
                }}
              >
                <ActivityCard activity={activity} />
              </div>
            ))
          ) : (
            // Empty state when no activities match filter
            <EmptyState />
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

// Add display name for debugging
Activity.displayName = 'Activity';

export default Activity;

/**
 * React Native Conversion Example:
 * 
 * import React, { useState, useEffect } from 'react';
 * import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';
 * import { useQuery } from '@tanstack/react-query';
 * 
 * const ActivityScreen = ({ navigation, route }) => {
 *   const [activeFilter, setActiveFilter] = useState('all');
 *   const [refreshing, setRefreshing] = useState(false);
 * 
 *   const { data: activities, isLoading, refetch } = useQuery({
 *     queryKey: ['activities', activeFilter],
 *     queryFn: () => fetchActivities(activeFilter),
 *   });
 * 
 *   const onRefresh = async () => {
 *     setRefreshing(true);
 *     await refetch();
 *     setRefreshing(false);
 *   };
 * 
 *   const renderActivity = ({ item, index }) => (
 *     <ActivityCard 
 *       activity={item} 
 *       style={[
 *         styles.activityCard,
 *         { opacity: animateCards ? 0 : 1 }
 *       ]}
 *     />
 *   );
 * 
 *   return (
 *     <View style={styles.container}>
 *       <ActivitySummary />
 *       <ActivityFilters 
 *         activeFilter={activeFilter}
 *         onFilterChange={setActiveFilter}
 *       />
 *       <FlatList
 *         data={activities}
 *         renderItem={renderActivity}
 *         keyExtractor={(item) => item.id}
 *         refreshControl={
 *           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
 *         }
 *         contentContainerStyle={styles.listContainer}
 *         showsVerticalScrollIndicator={false}
 *         ListEmptyComponent={<EmptyState />}
 *       />
 *     </View>
 *   );
 * };
 * 
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     backgroundColor: '#0a0a0a',
 *   },
 *   listContainer: {
 *     padding: 16,
 *   },
 *   activityCard: {
 *     marginBottom: 8,
 *   },
 * });
 */
