import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActiveFiltersProps {
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
}

const ActiveFilters = ({ activeFilters, onRemoveFilter }: ActiveFiltersProps) => {
  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {activeFilters.map((filter) => (
        <Button 
          key={filter} 
          variant="outline" 
          size="sm"
          className="flex items-center gap-1 bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs h-7 px-2 rounded-full font-medium" 
          onClick={() => onRemoveFilter(filter)}
        >
          {filter}
          <X size={12} />
        </Button>
      ))}
    </div>
  );
};

export default ActiveFilters;