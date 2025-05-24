
import React, { useState } from 'react';
import ActivitySummary from '@/components/activity/ActivitySummary';
import ActivityFilters from '@/components/activity/ActivityFilters';
import ActivityCard from '@/components/activity/ActivityCard';

const Activity = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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
        // Mock logic for past week
        return ['05-20-2024', '05-19-2024'].includes(activity.date);
      case 'buy':
        return activity.type === 'BUY';
      case 'sell':
        return activity.type === 'SELL';
      case 'portfolio':
        // Could implement portfolio-specific filtering
        return true;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 pb-2">
        <h1 className="text-2xl font-bold text-foreground">Activity</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Track your trading activity and performance
        </p>
      </div>

      {/* Activity Summary */}
      <div className="px-4">
        <ActivitySummary />
      </div>

      {/* Filters */}
      <div className="px-4">
        <ActivityFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
      </div>

      {/* Activity List */}
      <div className="px-4 space-y-3 pb-6">
        {filteredActivities.map((activity, index) => (
          <div key={index} className="animate-fade-in">
            <ActivityCard activity={activity} />
          </div>
        ))}
        
        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No activities found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
