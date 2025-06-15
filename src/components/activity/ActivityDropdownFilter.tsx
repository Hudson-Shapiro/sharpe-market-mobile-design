
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ActivityDropdownFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filterOptions = [
  { value: 'all', label: 'All Activity' },
  { value: 'week', label: 'This Week' },
  { value: 'buy', label: 'Buys' },
  { value: 'sell', label: 'Sells' },
  { value: 'portfolio', label: 'By Portfolio' },
];

const ActivityDropdownFilter = ({ activeFilter, onFilterChange }: ActivityDropdownFilterProps) => {
  return (
    <Select value={activeFilter} onValueChange={onFilterChange}>
      <SelectTrigger className="w-full sm:w-[280px] bg-card border-border/50">
        <SelectValue placeholder="Filter activity..." />
      </SelectTrigger>
      <SelectContent>
        {filterOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ActivityDropdownFilter;
