
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import GlobalHeader from '@/components/layout/GlobalHeader';
import ActivitySummary from '@/components/activity/ActivitySummary';
import ActivityFilters from '@/components/activity/ActivityFilters';
import ActivityCard from '@/components/activity/ActivityCard';
import type { Activity } from '@/types';

type ActivityFilter = 'all' | 'week' | 'buy' | 'sell' | 'portfolio';

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

const Activity: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>('all');
  const [animateCards, setAnimateCards] = useState(false);

  const filteredActivities = React.useMemo(() => {
    return MOCK_ACTIVITIES.filter(activity => {
      switch (activeFilter) {
        case 'week':
          return ['06-03-2024'].includes(activity.date);
        case 'buy':
          return activity.type === 'BUY';
        case 'sell':
          return activity.type === 'SELL';
        case 'portfolio':
          return true;
        case 'all':
        default:
          return true;
      }
    });
  }, [activeFilter]);

  const handleFilterChange = (filter: ActivityFilter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

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
        <GlobalHeader />
        
        <div className="px-4 pt-2">
          <ActivitySummary />
        </div>

        <div className="px-4 mb-2">
          <ActivityFilters 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
        </div>

        <div className="px-4 space-y-2 pb-4">
          {filteredActivities.length > 0 ? (
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
            <EmptyState />
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

Activity.displayName = 'Activity';

export default Activity;
