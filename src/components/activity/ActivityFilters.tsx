
import React from 'react';
import { Calendar, Clock, TrendingUp, TrendingDown } from 'lucide-react';

interface ActivityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityFilters = ({ activeFilter, onFilterChange }: ActivityFiltersProps) => {
  const filters = [
    { id: 'all', label: 'All Time', tooltip: 'Show all trading activity', icon: Clock },
    { id: 'week', label: 'Past Week', tooltip: 'Last 7 days of trades', icon: Calendar },
    { id: 'buy', label: 'Buy Only', tooltip: 'Show only executed buy trades', icon: TrendingUp },
    { id: 'sell', label: 'Sell Only', tooltip: 'Show only executed sell trades', icon: TrendingDown }
  ];

  return (
    <div className="flex justify-between items-center mb-4 px-4">
      <h3 className="font-semibold text-lg text-white">Activity</h3>
      <div className="flex bg-gray-900/60 backdrop-blur-sm rounded-xl p-1.5 text-xs border border-gray-800/40">
        {filters.map((filter) => (
          <button 
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
              activeFilter === filter.id 
                ? "bg-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20 backdrop-blur-sm" 
                : "text-gray-400 hover:text-gray-300 hover:bg-gray-800/40"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityFilters;
