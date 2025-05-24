
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, TrendingUp, TrendingDown, FolderOpen } from 'lucide-react';

interface ActivityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityFilters = ({ activeFilter, onFilterChange }: ActivityFiltersProps) => {
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Time', tooltip: 'Show all trading activity', icon: Clock },
    { id: 'week', label: 'Past Week', tooltip: 'Last 7 days of trades', icon: Calendar },
    { id: 'buy', label: 'Buy Only', tooltip: 'Show only executed buy trades', icon: TrendingUp },
    { id: 'sell', label: 'Sell Only', tooltip: 'Show only executed sell trades', icon: TrendingDown },
    { id: 'portfolio', label: 'By Portfolio', tooltip: 'Group trades by portfolio', icon: FolderOpen }
  ];

  const handleFilterClick = (filter: any, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRipplePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
    
    setTimeout(() => setRipplePosition(null), 600);
    onFilterChange(filter.id);
  };

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 mb-4 no-scrollbar sticky top-0 bg-background/95 backdrop-blur-md z-10 py-2 px-1">
      {filters.map((filter) => (
        <div key={filter.id} className="relative group">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => handleFilterClick(filter, e)}
            className={`whitespace-nowrap transition-all duration-300 relative overflow-hidden h-8 px-2.5 text-xs ${
              activeFilter === filter.id 
                ? "border-2 border-emerald-400/60 text-emerald-400 bg-emerald-500/10 shadow-lg shadow-emerald-500/20 hover:bg-emerald-500/20" 
                : "hover:bg-secondary/80 hover:scale-105 hover:shadow-md border border-transparent"
            }`}
          >
            <filter.icon size={12} className="mr-1.5" />
            {filter.label}
            
            {ripplePosition && activeFilter !== filter.id && (
              <div
                className="absolute rounded-full bg-emerald-400/30 animate-ping"
                style={{
                  left: ripplePosition.x - 8,
                  top: ripplePosition.y - 8,
                  width: 16,
                  height: 16
                }}
              />
            )}
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-popover border border-border rounded text-xs text-popover-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
            {filter.tooltip}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-popover"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFilters;
