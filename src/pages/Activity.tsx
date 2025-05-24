import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import GlobalHeader from '@/components/layout/GlobalHeader';
import ActivitySummary from '@/components/activity/ActivitySummary';
import ActivityFilters from '@/components/activity/ActivityFilters';
import ActivityCard from '@/components/activity/ActivityCard';

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  
  const activities = [
    {
      portfolio: 'Dividend Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'BUY' as const
    },
    {
      portfolio: 'Real Estate Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'BUY' as const
    },
    {
      portfolio: 'HealthCare Portfolio',
      stock: 'AAPB',
      date: '05-20-2024',
      quantity: 10,
      price: 25,
      amount: 250,
      type: 'SELL' as const
    },
    {
      portfolio: 'Auto Portfolio',
      stock: 'TSLA',
      date: '05-19-2024',
      quantity: 5,
      price: 245,
      amount: 1225,
      type: 'BUY' as const
    },
    {
      portfolio: 'FMCG Portfolio',
      stock: 'NVDA',
      date: '05-18-2024',
      quantity: 2,
      price: 875,
      amount: 1750,
      type: 'SELL' as const
    },
    {
      portfolio: 'Tech Portfolio',
      stock: 'META',
      date: '05-17-2024',
      quantity: 8,
      price: 312,
      amount: 2496,
      type: 'BUY' as const
    },
  ];

  // Filter activities based on active filter
  const filteredActivities = activities.filter(activity => {
    switch (activeFilter) {
      case 'week':
        return ['05-20-2024', '05-19-2024'].includes(activity.date);
      case 'buy':
        return activity.type === 'BUY';
      case 'sell':
        return activity.type === 'SELL';
      case 'portfolio':
        return true;
      default:
        return true;
    }
  });

  // Trigger card animations when filter changes
  useEffect(() => {
    setAnimateCards(true);
    const timer = setTimeout(() => setAnimateCards(false), 100);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <ScrollArea className="h-full">
      <div className="min-h-screen bg-background">
        <GlobalHeader />
        
        {/* Activity Summary - reduced padding */}
        <div className="px-4 pt-2">
          <ActivitySummary />
        </div>

        {/* Filters - reduced margin */}
        <div className="px-4 mb-2">
          <ActivityFilters 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />
        </div>

        {/* Activity List - reduced spacing */}
        <div className="px-4 space-y-2 pb-4">
          {filteredActivities.map((activity, index) => (
            <div 
              key={index} 
              className={`transition-all duration-300 ${
                animateCards ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              <ActivityCard activity={activity} />
            </div>
          ))}
          
          {filteredActivities.length === 0 && (
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
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Activity;
