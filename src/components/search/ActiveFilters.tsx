import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActiveFiltersProps {
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
  onEditFilters?: () => void;
}

const ActiveFilters = ({ activeFilters, onRemoveFilter, onEditFilters }: ActiveFiltersProps) => {
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {activeFilters.map((filter) => (
        <div 
          key={filter} 
          className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs h-7 px-2 rounded-full font-medium cursor-pointer"
        >
          <span 
            className="flex-1"
            onClick={() => onEditFilters?.()}
          >
            {filter}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFilter(filter);
            }}
            className="hover:bg-emerald-500/30 rounded-full p-0.5"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ActiveFilters;