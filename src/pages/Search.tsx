
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
  const [isSearching, setIsSearching] = useState(false);

  const recentSearches = ["Tech stocks", "AI Revolution", "Green Energy", "John Smith"];
  const trendingSearches = ["Nvidia", "Tesla Stock", "S&P 500 ETF", "Dividend Kings", "Green Energy"];
  
  const clearRecentSearches = () => {
    // In real app, would clear stored searches
    console.log("Clear recent searches");
  };

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Search Header */}
      <SearchHeader 
        searchQuery={searchQuery} 
        setSearchQuery={handleSearchQueryChange}
      />

      {/* Search Filter Options - Always visible */}
      <SearchFilters 
        searchFilter={searchFilter} 
        setSearchFilter={setSearchFilter}
      />

      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4">
          {!isSearching ? (
            <div className="animate-fade-in space-y-6">
              {/* Recent Searches - Limited to 4 */}
              <RecentSearches 
                recentSearches={recentSearches.slice(0, 4)}
                setSearchQuery={setSearchQuery}
                clearRecentSearches={clearRecentSearches}
              />
              
              {/* Interactive Filter Button */}
              <div className="border-t border-border/40 pt-4">
                <button className="w-full bg-card/50 border border-border rounded-xl p-4 text-left hover:bg-card/70 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">Interactive Filter</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Advanced search with custom parameters
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <SearchResults searchQuery={searchQuery} />
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Search;
