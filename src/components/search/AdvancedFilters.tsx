
import React from 'react';
import { SlidersHorizontal, Filter, X } from 'lucide-react';
import PortfolioFilterModal from './PortfolioFilterModal';

interface AdvancedFiltersProps {
  onAdvancedFilter: () => void;
  activeFilters: string[];
  setActiveFilters: (filters: string[]) => void;
  filterVisible: boolean;
  setFilterVisible: (visible: boolean) => void;
}

const AdvancedFilters = ({ 
  onAdvancedFilter, 
  activeFilters, 
  setActiveFilters, 
  filterVisible, 
  setFilterVisible 
}: AdvancedFiltersProps) => {
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const handleApplyFilters = (filters: string[]) => {
    setActiveFilters(filters);
  };

  return (
    <div className="space-y-3">
      {/* Advanced Filter Button */}
      <button 
        className="w-full bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 border border-emerald-500/30 rounded-xl p-4 hover:from-emerald-500/20 hover:to-emerald-400/20 hover:border-emerald-500/50 transition-all duration-300 group"
        onClick={onAdvancedFilter}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
              <SlidersHorizontal size={20} className="text-emerald-400" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground">
                Filter Portfolios
                {activeFilters.length > 0 && (
                  <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                    {activeFilters.length}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                Filter by performance, risk, holdings & more
              </p>
            </div>
          </div>
          <div className="text-emerald-400 group-hover:scale-110 transition-transform">
            <SlidersHorizontal size={20} />
          </div>
        </div>
      </button>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-emerald-400" />
            <span className="text-sm font-medium text-foreground">Active Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <button 
                key={filter} 
                className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors" 
                onClick={() => removeFilter(filter)}
              >
                {filter}
                <X size={12} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Portfolio Filter Modal */}
      <PortfolioFilterModal
        isOpen={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApplyFilters={handleApplyFilters}
        activeFilters={activeFilters}
      />
    </div>
  );
};

export default AdvancedFilters;
