import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
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
import MiniChart from '@/components/discover/MiniChart';

interface SearchResultsProps {
  searchQuery: string;
  searchFilter: string;
  filterVisible: boolean;
  setFilterVisible: (visible: boolean) => void;
}

const SearchResults = ({ searchQuery, searchFilter, filterVisible, setFilterVisible }: SearchResultsProps) => {
  const navigate = useNavigate();
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

  // Handle user click navigation
  const handleUserClick = (userName: string) => {
    // Convert user name to URL-friendly username
    const username = userName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/user/${username}`);
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

  // Render portfolios
  const renderPortfolios = () => (
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
  );

  // Render users
  const renderUsers = () => (
    <div className="space-y-2">
      {Array(10).fill(0).map((_, i) => (
        <Card 
          key={`user-${i}`} 
          className="bg-card/50 backdrop-blur-sm p-3 flex items-center rounded-xl shadow-none cursor-pointer hover:bg-card/70 transition-colors"
          onClick={() => handleUserClick(["Mark Cuban", "Lisa Su", "Warren Buffet", "Catherine Wood", "Elon Musk"][i % 5])}
        >
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
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Best Portfolio</p>
            <p className="font-medium text-emerald-400">+{
              [25.8, 42.1, 18.9, 33.7, 55.2][i % 5]
            }%</p>
          </div>
        </Card>
      ))}
    </div>
  );

  const stockChartData = [
    [10, 20, 15, 30, 25, 40, 35],
    [30, 28, 29, 22, 24, 18, 19],
    [50, 52, 51, 55, 54, 58, 57],
    [80, 78, 77, 82, 85, 83, 88],
    [20, 30, 25, 40, 50, 60, 75],
  ];
  const stockChanges = [2.34, -1.89, 0.92, 3.45, 5.67];

  // Render stocks
  const renderStocks = () => (
    <div className="space-y-2">
      {Array(5).fill(0).map((_, i) => (
        <Card key={`stock-${i}`} className="bg-card/50 backdrop-blur-sm p-3 flex items-center justify-between rounded-xl shadow-none">
          <div>
            <h4 className="font-medium">{["AAPL", "GOOGL", "MSFT", "TSLA", "NVDA"][i]}</h4>
            <p className="text-xs text-muted-foreground">{["Apple Inc.", "Alphabet Inc.", "Microsoft Corp.", "Tesla Inc.", "NVIDIA Corp."][i]}</p>
          </div>
          <div className="flex-grow flex justify-center">
            <MiniChart data={stockChartData[i]} isPositive={stockChanges[i] >= 0} />
          </div>
          <div className="text-right w-24">
            <div className="font-medium">${[189.45, 179.12, 445.85, 183.73, 1205.32][i]}</div>
            <div className={`text-xs ${stockChanges[i] >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {stockChanges[i] >= 0 ? '+' : ''}{stockChanges[i]}%
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
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
      )}

      {/* Results based on selected filter */}
      <div className="mt-0">
        {searchFilter === 'portfolios' && renderPortfolios()}
        {searchFilter === 'users' && renderUsers()}
        {searchFilter === 'stocks' && renderStocks()}
      </div>

      {/* Filter Drawer */}
      <Drawer open={filterVisible} onOpenChange={setFilterVisible}>
        <DrawerContent className="max-h-[90vh]">
          <ScrollArea className="h-full max-h-[80vh]">
            <FilterComponent />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SearchResults;
