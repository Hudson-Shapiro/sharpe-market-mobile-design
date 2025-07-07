
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import SearchHeader from '@/components/search/SearchHeader';
import SearchScopeSelector from '@/components/search/SearchScopeSelector';
import AdvancedFilters from '@/components/search/AdvancedFilters';
import RecentSearches from '@/components/search/RecentSearches';
import SearchResults from '@/components/search/SearchResults';
import SearchTip from '@/components/search/SearchTip';
import BasicFilterBar from '@/components/search/BasicFilterBar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchScope, setSearchScope] = useState("portfolios");
  const [isSearching, setIsSearching] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Basic filter states
  const [basicTimeFrame, setBasicTimeFrame] = useState("1M");
  const [basicSortBy, setBasicSortBy] = useState("highest");

  const recentSearches = ["Tech stocks", "AI Revolution", "Green Energy", "John Smith"];
  
  const clearRecentSearches = () => {
    console.log("Clear recent searches");
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0 || activeFilters.length > 0);
  };

  const handleAdvancedFilter = () => {
    setFilterVisible(true);
  };

  const handleScopeChange = (scope: string) => {
    setSearchScope(scope);
    // Clear portfolio-specific filters when switching away from portfolios
    if (scope !== "portfolios") {
      setActiveFilters([]);
      setFilterVisible(false);
      setIsSearching(false);
    }
  };

  const handleFiltersChange = (filters: string[]) => {
    setActiveFilters(filters);
    setIsSearching(filters.length > 0 || searchQuery.length > 0);
  };

  const showBasicFilter = isSearching && searchScope === "portfolios";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Search Header - Sticky */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <SearchHeader 
          searchQuery={searchQuery} 
          setSearchQuery={handleSearchQueryChange}
        />
      </div>

      {/* Search Scope Selector */}
      <SearchScopeSelector 
        searchScope={searchScope}
        setSearchScope={handleScopeChange}
      />

      {/* Basic Filter Bar - Shows when searching portfolios */}
      {showBasicFilter && (
        <BasicFilterBar
          timeFrame={basicTimeFrame}
          setTimeFrame={setBasicTimeFrame}
          sortBy={basicSortBy}
          setSortBy={setBasicSortBy}
        />
      )}

      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="p-3 space-y-4">
          {!isSearching ? (
            <div className="animate-fade-in space-y-4">
              {/* Search Context Tip */}
              <SearchTip />
              
              {/* Advanced Filters Section - Only for Portfolios */}
              {searchScope === "portfolios" && (
                <div className="animate-fade-in">
                  <AdvancedFilters 
                    onAdvancedFilter={handleAdvancedFilter}
                    activeFilters={activeFilters}
                    setActiveFilters={handleFiltersChange}
                    filterVisible={filterVisible}
                    setFilterVisible={setFilterVisible}
                  />
                </div>
              )}
              
              {/* Recent Searches */}
              <RecentSearches 
                recentSearches={recentSearches}
                setSearchQuery={setSearchQuery}
                clearRecentSearches={clearRecentSearches}
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <SearchResults 
                searchQuery={searchQuery} 
                searchFilter={searchScope}
                filterVisible={filterVisible}
                setFilterVisible={setFilterVisible}
                activeFilters={activeFilters}
                setActiveFilters={handleFiltersChange}
              />
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Search;
