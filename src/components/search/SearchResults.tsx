
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SlidersHorizontal, BarChart3, Users, X } from 'lucide-react';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from '@/components/ui/input';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SearchResultsProps {
  searchQuery: string;
}

const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [timeRange, setTimeRange] = useState("1m");
  const [minSharpeRatio, setMinSharpeRatio] = useState(0);
  const [riskTolerance, setRiskTolerance] = useState("all");
  const [sortMethod, setSortMethod] = useState("performance");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

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

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

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
    setActiveFilters([]);
  };

  // Apply filters
  const applyFilters = () => {
    const newActiveFilters = [];
    
    // Add active filters to the array based on selected options
    if (filterTimeOption) {
      newActiveFilters.push(`${filterTimeOption} return`);
    }
    
    setActiveFilters(newActiveFilters);
    setFilterVisible(false);
  };
  
  // Remove a specific filter
  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  // Filter component
  const FilterComponent = () => (
    <div className="bg-background text-foreground">
      <div className="flex justify-between items-center p-4 border-b border-border">
        <h3 className="text-lg font-medium">Filter</h3>
        <button 
          className="text-red-500 text-sm font-medium" 
          onClick={clearAllFilters}
        >
          Clear all
        </button>
      </div>
      
      <div className="p-4 space-y-6">
        <div>
          <p className="text-muted-foreground mb-2">Time Period</p>
          <Select value={filterTimeOption} onValueChange={setFilterTimeOption}>
            <SelectTrigger className="w-full bg-secondary border-border">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily Return</SelectItem>
              <SelectItem value="weekly">Weekly Return</SelectItem>
              <SelectItem value="monthly">Monthly Return</SelectItem>
              <SelectItem value="yearly">Yearly Return</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="flex items-center gap-2 mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-secondary border-border" 
              checked={createdByMe} 
              onChange={() => setCreatedByMe(!createdByMe)} 
            />
            Created by me
          </label>
          
          <label className="flex items-center gap-2 mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-secondary border-border" 
              checked={subscribedByMe} 
              onChange={() => setSubscribedByMe(!subscribedByMe)} 
            />
            Subscribed by me
          </label>
          
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-secondary border-border" 
              checked={benchmark} 
              onChange={() => setBenchmark(!benchmark)} 
            />
            Benchmark
          </label>
        </div>
        
        <div className="border-t border-border pt-4">
          <div className="relative">
            <Input 
              placeholder="Search security" 
              className="pl-9 bg-secondary border-border" 
              value={securitySearch}
              onChange={(e) => setSecuritySearch(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-secondary border-border" 
              checked={securityConcentration} 
              onChange={() => setSecurityConcentration(!securityConcentration)} 
            />
            Security Concentration
          </label>
          
          <div className="flex gap-2 mb-4">
            <Select 
              value={securityConcentrationType} 
              onValueChange={setSecurityConcentrationType}
              disabled={!securityConcentration}
            >
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            
            <Input 
              placeholder="Enter value" 
              className="bg-secondary border-border" 
              value={securityConcentrationValue}
              onChange={(e) => setSecurityConcentrationValue(e.target.value)}
              disabled={!securityConcentration}
            />
          </div>
        </div>
        
        <div>
          <label className="flex items-center gap-2 mb-3">
            <input 
              type="checkbox" 
              className="w-5 h-5 rounded bg-secondary border-border" 
              checked={sectorConcentration} 
              onChange={() => setSectorConcentration(!sectorConcentration)} 
            />
            Sector Concentration
          </label>
          
          <div className="flex gap-2 mb-4">
            <Select 
              value={sectorConcentrationType} 
              onValueChange={setSectorConcentrationType}
              disabled={!sectorConcentration}
            >
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            
            <Input 
              placeholder="Enter value" 
              className="bg-secondary border-border" 
              value={sectorConcentrationValue}
              onChange={(e) => setSectorConcentrationValue(e.target.value)}
              disabled={!sectorConcentration}
            />
          </div>
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-3">
        <Button 
          variant="outline" 
          onClick={() => setFilterVisible(false)}
          className="border-border"
        >
          Cancel
        </Button>
        <Button 
          onClick={applyFilters}
          className="bg-emerald-500 text-white hover:bg-emerald-600"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );

  return (
    <Tabs defaultValue="portfolios" className="w-full">
      <div className="flex items-center justify-between mb-2">
        <TabsList className="grid w-full grid-cols-2 bg-secondary/50 rounded-lg">
          <TabsTrigger value="portfolios" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            <BarChart3 size={14} className="mr-1" />
            Portfolios
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
            <Users size={14} className="mr-1" />
            Users
          </TabsTrigger>
        </TabsList>
        
        <button 
          className={`p-2 ${filterVisible ? 'bg-emerald-500 text-white' : 'bg-secondary text-muted-foreground'} rounded-full flex items-center justify-center ml-2`}
          onClick={toggleFilter}
        >
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* Interactive Filter Button and Active Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-secondary border-border hover:bg-secondary/80"
          onClick={() => setFilterVisible(true)}
        >
          <SlidersHorizontal size={16} />
          Interactive Filter
        </Button>
        
        {activeFilters.map((filter) => (
          <Button 
            key={filter} 
            variant="outline" 
            className="flex items-center gap-1.5 bg-secondary border-border hover:bg-secondary/80" 
            onClick={() => removeFilter(filter)}
          >
            {filter}
            <X size={14} />
          </Button>
        ))}
      </div>

      {/* Enhanced Filter Section */}
      {filterVisible && (
        <Card className="p-4 mb-4 bg-card border-border">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Time Range</label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-full bg-secondary border-border">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1w">1 Week</SelectItem>
                  <SelectItem value="1m">1 Month</SelectItem>
                  <SelectItem value="3m">3 Months</SelectItem>
                  <SelectItem value="6m">6 Months</SelectItem>
                  <SelectItem value="1y">1 Year</SelectItem>
                  <SelectItem value="all">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Sort By</label>
              <Select value={sortMethod} onValueChange={setSortMethod}>
                <SelectTrigger className="w-full bg-secondary border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="sharpe">Sharpe Ratio</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                  <SelectItem value="followers">Followers</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-1 block">Minimum Sharpe Ratio: {minSharpeRatio.toFixed(1)}</label>
            <Slider 
              value={[minSharpeRatio]} 
              min={0} 
              max={3.0} 
              step={0.1}
              onValueChange={(values) => setMinSharpeRatio(values[0])}
              className="my-2"
            />
          </div>
          
          <div className="mb-4">
            <label className="text-sm text-muted-foreground mb-2 block">Risk Tolerance</label>
            <ToggleGroup 
              type="single" 
              value={riskTolerance} 
              onValueChange={(value) => setRiskTolerance(value || riskTolerance)} 
              className="justify-between"
            >
              <ToggleGroupItem value="low" className="flex-1 text-xs bg-secondary data-[state=on]:bg-blue-600">
                Conservative
              </ToggleGroupItem>
              <ToggleGroupItem value="medium" className="flex-1 text-xs bg-secondary data-[state=on]:bg-emerald-600">
                Moderate
              </ToggleGroupItem>
              <ToggleGroupItem value="high" className="flex-1 text-xs bg-secondary data-[state=on]:bg-amber-600">
                Aggressive
              </ToggleGroupItem>
              <ToggleGroupItem value="all" className="flex-1 text-xs bg-secondary data-[state=on]:bg-purple-600">
                All
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <h3 className="font-medium mb-2">Performance</h3>
          <RadioGroup defaultValue="all" className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <label htmlFor="all" className="text-sm">All returns</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="positive" id="positive" />
              <label htmlFor="positive" className="text-sm">Positive only</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="negative" id="negative" />
              <label htmlFor="negative" className="text-sm">Negative only</label>
            </div>
          </RadioGroup>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 border-border text-muted-foreground">Reset</Button>
            <Button className="flex-1 bg-emerald-500 hover:bg-emerald-600">Apply</Button>
          </div>
        </Card>
      )}
      
      <TabsContent value="portfolios" className="mt-0">
        <div className="space-y-2">
          {Array(5).fill(0).map((_, i) => (
            <PortfolioCard 
              key={`portfolio-${i}`}
              id={`${101 + i}`}
              name={["AI Revolution", "Tech Innovators", "Green Energy", "Blue Chip Focus", "Dividend Kings"][i]}
              return={[34.52, 28.71, 22.35, 19.28, 15.64][i]}
              author={["Ryan Masters", "Emma Clark", "Dr. Liu Wei", "Sarah Williams", "Robert Johnson"][i]}
              sharpeRatio={[2.14, 1.89, 1.65, 1.77, 1.92][i]}
              rank={i + 1}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="users" className="mt-0">
        <div className="space-y-2">
          {Array(10).fill(0).map((_, i) => (
            <div key={`user-${i}`} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 flex items-center">
              <div className="w-10 h-10 bg-secondary/70 rounded-full flex items-center justify-center mr-3 text-xl">
                {['🤵', '👩‍💼', '👴', '👩‍🔬', '👨‍💻'][i % 5]}
              </div>
              <div>
                <h4 className="font-medium">{
                  ["Mark Cuban", "Lisa Su", "Warren Buffet", "Catherine Wood", "Elon Musk"][i % 5]
                }</h4>
                <p className="text-xs text-muted-foreground">{
                  ["125K", "95K", "210K", "78K", "300K"][i % 5]
                } followers</p>
              </div>
              <button className="ml-auto bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs">
                Follow
              </button>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Filter Drawer */}
      <Drawer open={filterVisible} onOpenChange={setFilterVisible}>
        <DrawerContent className="max-h-[90vh]">
          <ScrollArea className="h-full max-h-[80vh]">
            <FilterComponent />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </Tabs>
  );
};

export default SearchResults;
