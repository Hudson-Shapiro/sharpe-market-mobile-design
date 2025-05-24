
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface ActivityFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ActivityFilters = ({ activeFilter, onFilterChange }: ActivityFiltersProps) => {
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Time', tooltip: 'Show all trading activity' },
    { id: 'week', label: 'Past Week', tooltip: 'Last 7 days of trades' },
    { id: 'buy', label: 'Buy Only', tooltip: 'Show only executed buy trades' },
    { id: 'sell', label: 'Sell Only', tooltip: 'Show only executed sell trades' },
    { id: 'portfolio', label: 'By Portfolio', tooltip: 'Group trades by portfolio' },
    { id: 'custom', label: 'Custom', tooltip: 'Set custom date range', icon: Calendar }
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
    <div className="flex gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar sticky top-0 bg-background/95 backdrop-blur-md z-10 py-2">
      {filters.map((filter) => (
        <div key={filter.id} className="relative group">
          <Button
            variant={activeFilter === filter.id ? "default" : "secondary"}
            size="sm"
            onClick={(e) => handleFilterClick(filter, e)}
            className={`whitespace-nowrap transition-all duration-300 relative overflow-hidden ${
              activeFilter === filter.id 
                ? "bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-400 border-emerald-500/40 hover:from-emerald-500/40 hover:to-green-500/40 shadow-lg shadow-emerald-500/20" 
                : "hover:bg-secondary/80 hover:scale-105 hover:shadow-md"
            }`}
          >
            {filter.icon && <filter.icon size={14} className="mr-1" />}
            {filter.label}
            
            {ripplePosition && activeFilter !== filter.id && (
              <div
                className="absolute rounded-full bg-emerald-400/30 animate-ping"
                style={{
                  left: ripplePosition.x - 10,
                  top: ripplePosition.y - 10,
                  width: 20,
                  height: 20
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
