
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Filter {
  label: string;
  icon: string;
  value: string;
}

interface QuickFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const QuickFilters = ({ activeFilter, onFilterChange }: QuickFiltersProps) => {
  const filters: Filter[] = [
    { label: "Gainers", icon: "🔍", value: "gainers" },
    { label: "Losers", icon: "📉", value: "losers" },
    { label: "Most Active", icon: "📈", value: "active" },
    { label: "Tech", icon: "🏭", value: "tech" },
    { label: "AI", icon: "💡", value: "ai" },
    { label: "ESG", icon: "🌱", value: "esg" },
    { label: "Crypto", icon: "₿", value: "crypto" },
  ];

  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-3 border-b border-border/40">
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((filter) => (
          <Badge
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "outline"}
            className={`cursor-pointer whitespace-nowrap transition-all duration-200 hover:scale-105 ${
              activeFilter === filter.value 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
                : 'hover:bg-emerald-500/10 hover:border-emerald-500/30'
            }`}
            onClick={() => onFilterChange(filter.value)}
          >
            <span className="mr-1">{filter.icon}</span>
            {filter.label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default QuickFilters;
