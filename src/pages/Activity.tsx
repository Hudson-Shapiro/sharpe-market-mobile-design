
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import GlobalHeader from '@/components/layout/GlobalHeader';
import ActivitySummary from '@/components/activity/ActivitySummary';
import ActivityDropdownFilter from '@/components/activity/ActivityDropdownFilter';
import ActivityCard from '@/components/activity/ActivityCard';

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);
  
  const activities = [
    {
      portfolio: 'Mixed Batch (Hudson Shapiro)',
      stock: 'SPHR',
      date: '06-03-2024',
      quantity: 10,
      price: 37.70,
      amount: 377,
      type: 'SELL' as const,
      allocation: 95.05,
      smPrice: 37.70,
      currentPrice: 37.70
    },
    {
      portfolio: 'Tech Bull (Hudson Shapiro)',
      stock: 'V',
      date: '06-03-2024',
      quantity: 1,
      price: 365.19,
      amount: 365,
      type: 'BUY' as const,
      allocation: 10.79,
      smPrice: 365.19,
      currentPrice: 365.19
    },
    {
      portfolio: 'DEFUND THE GOV... (Hudson S...)',
      stock: 'TSLA',
      date: '06-03-2024',
      quantity: 2,
      price: 346.46,
      amount: 693,
      type: 'BUY' as const,
      allocation: 17.89,
      smPrice: 346.46,
      currentPrice: 346.46
    },
    {
      portfolio: 'Tech Bull (Hudson Shapiro)',
      stock: 'MSTR',
      date: '06-03-2024',
      quantity: 1,
      price: 369.06,
      amount: 369,
      type: 'BUY' as const,
      allocation: 16.35,
      smPrice: 369.06,
      currentPrice: 369.06
    },
    {
      portfolio: 'DEFUND THE GOV... (Hudson S...)',
      stock: 'MSTR',
      date: '06-03-2024',
      quantity: 1,
      price: 369.06,
      amount: 369,
      type: 'BUY' as const,
      allocation: 19.07,
      smPrice: 369.06,
      currentPrice: 369.06
    },
    {
      portfolio: 'COMO (Hudson Shapiro)',
      stock: 'SLV',
      date: '06-03-2024',
      quantity: 15,
      price: 30.00,
      amount: 450,
      type: 'BUY' as const,
      allocation: 100.00,
      smPrice: 30.00,
      currentPrice: 30.00
    },
  ];

  // Filter activities based on active filter
  const filteredActivities = activities.filter(activity => {
    switch (activeFilter) {
      case 'week':
        return ['06-03-2024'].includes(activity.date);
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
          <ActivityDropdownFilter 
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
