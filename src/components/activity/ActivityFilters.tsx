
import React from 'react';
import { Button } from '@/components/ui/button';

interface ActivityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityFilters = ({ activeFilter, onFilterChange }: ActivityFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All Time' },
    { id: 'week', label: 'Past Week' },
    { id: 'buy', label: 'Buy Only' },
    { id: 'sell', label: 'Sell Only' },
    { id: 'portfolio', label: 'By Portfolio' }
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar sticky top-0 bg-background/95 backdrop-blur-sm z-10 py-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "secondary"}
          size="sm"
          onClick={() => onFilterChange(filter.id)}
          className={`whitespace-nowrap transition-all duration-300 ${
            activeFilter === filter.id 
              ? "bg-emerald-500/30 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/40" 
              : "hover:bg-secondary/80"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default ActivityFilters;
