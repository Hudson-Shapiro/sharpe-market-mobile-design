import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SearchFilterDrawerProps {
  filterVisible: boolean;
  setFilterVisible: (visible: boolean) => void;
  onApplyFilters: () => void;
  onClearAllFilters: () => void;
  filterTimeOption: string;
  setFilterTimeOption: (value: string) => void;
  createdByMe: boolean;
  setCreatedByMe: (value: boolean) => void;
  subscribedByMe: boolean;
  setSubscribedByMe: (value: boolean) => void;
  benchmark: boolean;
  setBenchmark: (value: boolean) => void;
  securitySearch: string;
  setSecuritySearch: (value: string) => void;
  securityConcentration: boolean;
  setSecurityConcentration: (value: boolean) => void;
  securityConcentrationType: string;
  setSecurityConcentrationType: (value: string) => void;
  securityConcentrationValue: string;
  setSecurityConcentrationValue: (value: string) => void;
  sectorConcentration: boolean;
  setSectorConcentration: (value: boolean) => void;
  sectorConcentrationType: string;
  setSectorConcentrationType: (value: string) => void;
  sectorConcentrationValue: string;
  setSectorConcentrationValue: (value: string) => void;
}

const SearchFilterDrawer = ({
  filterVisible,
  setFilterVisible,
  onApplyFilters,
  onClearAllFilters,
  filterTimeOption,
  setFilterTimeOption,
  createdByMe,
  setCreatedByMe,
  subscribedByMe,
  setSubscribedByMe,
  benchmark,
  setBenchmark,
  securitySearch,
  setSecuritySearch,
  securityConcentration,
  setSecurityConcentration,
  securityConcentrationType,
  setSecurityConcentrationType,
  securityConcentrationValue,
  setSecurityConcentrationValue,
  sectorConcentration,
  setSectorConcentration,
  sectorConcentrationType,
  setSectorConcentrationType,
  sectorConcentrationValue,
  setSectorConcentrationValue,
}: SearchFilterDrawerProps) => {
  const FilterComponent = () => (
    <div className="bg-background text-foreground">
      <div className="flex justify-between items-center p-4 border-b border-border">
        <h3 className="text-lg font-medium">Filter</h3>
        <button 
          className="text-red-500 text-sm font-medium" 
          onClick={onClearAllFilters}
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
          onClick={onApplyFilters}
          className="bg-emerald-500 text-white hover:bg-emerald-600"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );

  return (
    <Drawer open={filterVisible} onOpenChange={setFilterVisible}>
      <DrawerContent className="max-h-[90vh]">
        <ScrollArea className="h-full max-h-[80vh]">
          <FilterComponent />
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchFilterDrawer;