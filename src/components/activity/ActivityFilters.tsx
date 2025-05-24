
import React from 'react';
import { Calendar, Clock, TrendingUp, TrendingDown } from 'lucide-react';

interface ActivityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityFilters = ({ activeFilter, onFilterChange }: ActivityFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All', tooltip: 'Show all trading activity', icon: Clock },
    { id: 'week', label: 'Week', tooltip: 'Last 7 days of trades', icon: Calendar },
    { id: 'buy', label: 'Buy', tooltip: 'Show only executed buy trades', icon: TrendingUp },
    { id: 'sell', label: 'Sell', tooltip: 'Show only executed sell trades', icon: TrendingDown }
  ];

  return (
    <div className="flex justify-between items-center mb-4 px-0">
      <h3 className="font-semibold text-lg text-white">Activity</h3>
      <div className="flex bg-secondary/30 backdrop-blur-sm p-1 text-xs border-0" style={{ borderRadius: '12px' }}>
        {filters.map((filter) => (
          <button 
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-2.5 py-1.5 transition-all duration-300 font-medium text-xs ${
              activeFilter === filter.id 
                ? "bg-white text-black shadow-lg font-bold" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
            style={{ borderRadius: '12px' }}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityFilters;
