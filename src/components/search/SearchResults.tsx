import React, { useState } from 'react';
import SearchFilterDrawer from './SearchFilterDrawer';
import SearchResultsList from './SearchResultsList';
import ActiveFilters from './ActiveFilters';

interface SearchResultsProps {
  searchQuery: string;
  searchFilter: string;
  filterVisible: boolean;
  setFilterVisible: (visible: boolean) => void;
  activeFilters?: string[];
  setActiveFilters?: (filters: string[]) => void;
}

const SearchResults = ({ 
  searchQuery, 
  searchFilter, 
  filterVisible, 
  setFilterVisible, 
  activeFilters = [], 
  setActiveFilters 
}: SearchResultsProps) => {
  // Filter state
  const [filterTimeOption, setFilterTimeOption] = useState("daily");
  const [createdByMe, setCreatedByMe] = useState(false);
  const [subscribedByMe, setSubscribedByMe] = useState(true);
  const [benchmark, setBenchmark] = useState(false);
  const [securitySearch, setSecuritySearch] = useState("");
  const [securityConcentration, setSecurityConcentration] = useState(false);
  const [securityConcentrationType, setSecurityConcentrationType] = useState("");
  const [securityConcentrationValue, setSecurityConcentrationValue] = useState("");
  const [sectorConcentration, setSectorConcentration] = useState(false);
  const [sectorConcentrationType, setSectorConcentrationType] = useState("");
  const [sectorConcentrationValue, setSectorConcentrationValue] = useState("");

  // Clear all filters
  const clearAllFilters = () => {
    setFilterTimeOption("daily");
    setCreatedByMe(false);
    setSubscribedByMe(false);
    setBenchmark(false);
    setSecuritySearch("");
    setSecurityConcentration(false);
    setSecurityConcentrationType("");
    setSecurityConcentrationValue("");
    setSectorConcentration(false);
    setSectorConcentrationType("");
    setSectorConcentrationValue("");
    setActiveFilters?.([]);
  };

  // Apply filters
  const applyFilters = () => {
    const newActiveFilters = [];
    
    // Include timeframe in active filters
    if (filterTimeOption && filterTimeOption !== "daily") {
      const timeMap: { [key: string]: string } = {
        "weekly": "1W",
        "monthly": "1M", 
        "yearly": "1Y"
      };
      newActiveFilters.push(`Timeframe: ${timeMap[filterTimeOption] || filterTimeOption}`);
    }
    
    if (createdByMe) newActiveFilters.push("Created by me");
    if (subscribedByMe) newActiveFilters.push("Subscribed by me");
    if (benchmark) newActiveFilters.push("Benchmark");
    if (securitySearch.trim()) newActiveFilters.push(`Security: ${securitySearch}`);
    if (securityConcentration && securityConcentrationValue) {
      newActiveFilters.push(`Security Conc. ${securityConcentrationType === 'greater' ? '>' : '<'} ${securityConcentrationValue}%`);
    }
    if (sectorConcentration && sectorConcentrationValue) {
      newActiveFilters.push(`Sector Conc. ${sectorConcentrationType === 'greater' ? '>' : '<'} ${sectorConcentrationValue}%`);
    }
    
    setActiveFilters?.(newActiveFilters);
    setFilterVisible(false);
  };
  
  // Remove a specific filter
  const removeFilter = (filter: string) => {
    setActiveFilters?.(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="w-full">
      {/* Active Filters */}
      <ActiveFilters 
        activeFilters={activeFilters}
        onRemoveFilter={removeFilter}
        onEditFilters={() => setFilterVisible(true)}
      />

      {/* Results based on selected filter */}
      <SearchResultsList searchFilter={searchFilter} />

      {/* Filter Drawer */}
      <SearchFilterDrawer
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
        onApplyFilters={applyFilters}
        onClearAllFilters={clearAllFilters}
        filterTimeOption={filterTimeOption}
        setFilterTimeOption={setFilterTimeOption}
        createdByMe={createdByMe}
        setCreatedByMe={setCreatedByMe}
        subscribedByMe={subscribedByMe}
        setSubscribedByMe={setSubscribedByMe}
        benchmark={benchmark}
        setBenchmark={setBenchmark}
        securitySearch={securitySearch}
        setSecuritySearch={setSecuritySearch}
        securityConcentration={securityConcentration}
        setSecurityConcentration={setSecurityConcentration}
        securityConcentrationType={securityConcentrationType}
        setSecurityConcentrationType={setSecurityConcentrationType}
        securityConcentrationValue={securityConcentrationValue}
        setSecurityConcentrationValue={setSecurityConcentrationValue}
        sectorConcentration={sectorConcentration}
        setSectorConcentration={setSectorConcentration}
        sectorConcentrationType={sectorConcentrationType}
        setSectorConcentrationType={setSectorConcentrationType}
        sectorConcentrationValue={sectorConcentrationValue}
        setSectorConcentrationValue={setSectorConcentrationValue}
      />
    </div>
  );
};

export default SearchResults;
