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
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map((filter) => (
        <Button 
          key={filter} 
          variant="outline" 
          className="flex items-center gap-1.5 bg-secondary border-border hover:bg-secondary/80" 
          onClick={() => onRemoveFilter(filter)}
        >
          {filter}
          <X size={14} />
        </Button>
      ))}
    </div>
  );
};

export default ActiveFilters;