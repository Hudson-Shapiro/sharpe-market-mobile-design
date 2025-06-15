
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Calendar, Clock, TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';

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
      
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 bg-secondary/20 border border-secondary/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-secondary/30 transition-colors rounded-lg">
          {activeFilterData && (
            <>
              <activeFilterData.icon size={14} className="text-muted-foreground" />
              <span className="truncate">{activeFilterData.label}</span>
            </>
          )}
          <ChevronDown size={14} className="text-muted-foreground" />
        </DropdownMenuTrigger>
        
        <DropdownMenuContent 
          className="bg-background/95 backdrop-blur-sm border-border/50 shadow-xl min-w-[280px] p-2" 
          sideOffset={8}
          align="end"
        >
          <div className="grid grid-cols-2 gap-1">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <DropdownMenuItem 
                  key={filter.id} 
                  onClick={() => onFilterChange(filter.id)}
                  className={`flex flex-col items-center gap-2 p-3 cursor-pointer hover:bg-secondary/50 focus:bg-secondary/50 transition-colors rounded-lg ${
                    activeFilter === filter.id ? 'bg-secondary/30 ring-1 ring-emerald-500/30' : ''
                  }`}
                >
                  <Icon size={16} className={`${activeFilter === filter.id ? 'text-emerald-400' : 'text-muted-foreground'} flex-shrink-0`} />
                  <span className={`text-xs font-medium text-center ${activeFilter === filter.id ? 'text-emerald-400' : 'text-foreground'}`}>
                    {filter.label}
                  </span>
                </DropdownMenuItem>
              );
            })}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ActivityDropdownFilter;
