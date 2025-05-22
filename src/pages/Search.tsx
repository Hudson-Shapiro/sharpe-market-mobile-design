
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import SearchHeader from '@/components/search/SearchHeader';
import SearchFilters from '@/components/search/SearchFilters';
import RecentSearches from '@/components/search/RecentSearches';
import TrendingSearches from '@/components/search/TrendingSearches';
import SearchResults from '@/components/search/SearchResults';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("portfolios");

  const recentSearches = ["Tech stocks", "AI Revolution", "Green Energy", "John Smith"];
  const trendingSearches = ["Nvidia", "Tesla Stock", "S&P 500 ETF", "Dividend Kings", "Green Energy"];
  
  const clearRecentSearches = () => {
    // In real app, would clear stored searches
    console.log("Clear recent searches");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Search Header */}
      <SearchHeader 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
      />

      {/* Search Filter Options */}
      <SearchFilters 
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter}
      />

      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4">
          {!searchQuery ? (
            <>
              <RecentSearches 
                recentSearches={recentSearches}
                setSearchQuery={setSearchQuery}
                clearRecentSearches={clearRecentSearches}
              />
              <TrendingSearches 
                trendingSearches={trendingSearches}
                setSearchQuery={setSearchQuery}
              />
            </>
          ) : (
            <SearchResults searchQuery={searchQuery} />
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Search;
