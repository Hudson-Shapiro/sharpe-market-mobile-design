
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Clock, TrendingUp, TrendingDown } from 'lucide-react';

interface ActivityDropdownFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityDropdownFilter = ({ activeFilter, onFilterChange }: ActivityDropdownFilterProps) => {
  const filters = [
    { id: 'all', label: 'All Activity', icon: Clock },
    { id: 'week', label: 'This Week', icon: Calendar },
    { id: 'buy', label: 'Buy Orders', icon: TrendingUp },
    { id: 'sell', label: 'Sell Orders', icon: TrendingDown }
  ];

  const activeFilterData = filters.find(f => f.id === activeFilter);

  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-lg text-white">Activity</h3>
      
      <Select value={activeFilter} onValueChange={onFilterChange}>
        <SelectTrigger className="w-[140px] h-9 bg-secondary/20 border-secondary/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-secondary/30 transition-colors">
          <SelectValue>
            <div className="flex items-center gap-2">
              {activeFilterData && (
                <>
                  <activeFilterData.icon size={14} className="text-muted-foreground" />
                  <span className="truncate">{activeFilterData.label}</span>
                </>
              )}
            </div>
          </SelectValue>
        </SelectTrigger>
        
        <SelectContent className="bg-background/95 backdrop-blur-sm border-border/50 shadow-xl min-w-[160px]" sideOffset={8}>
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <SelectItem 
                key={filter.id} 
                value={filter.id}
                className="text-sm py-2.5 px-3 cursor-pointer hover:bg-secondary/50 focus:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={14} className="text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground">{filter.label}</span>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ActivityDropdownFilter;
