
import React, { useState } from 'react';
import { X, TrendingUp, Shield, Target, BarChart3, Users, Zap, Search, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface PortfolioFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

const PortfolioFilterModal = ({ isOpen, onClose, onApplyFilters, activeFilters }: PortfolioFilterModalProps) => {
  const [returnRange, setReturnRange] = useState([0, 100]);
  const [sharpeRatio, setSharpeRatio] = useState([0, 5]);
  const [benchmark, setBenchmark] = useState("spy");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sectors, setSectors] = useState<string[]>([]);
  const [groupId, setGroupId] = useState("");
  const [timeFrame, setTimeFrame] = useState("1M");
  const [securityConcentration, setSecurityConcentration] = useState([0, 100]);
  const [sectorConcentration, setSectorConcentration] = useState([0, 100]);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const handleApplyFilters = () => {
    const filters: string[] = [];
    
    if (returnRange[0] > 0 || returnRange[1] < 100) {
      filters.push(`Return: ${returnRange[0]}%-${returnRange[1]}%`);
    }
    
    if (sharpeRatio[0] > 0 || sharpeRatio[1] < 5) {
      filters.push(`Sharpe: ${sharpeRatio[0]}-${sharpeRatio[1]}`);
    }
    
    if (benchmark !== "spy") {
      filters.push(`Benchmark: ${benchmark.toUpperCase()}`);
    }
    
    if (timeFrame !== "1M") {
      filters.push(`Timeframe: ${timeFrame}`);
    }

    if (securityConcentration[0] > 0 || securityConcentration[1] < 100) {
      filters.push(`Security Concentration: ${securityConcentration[0]}%-${securityConcentration[1]}%`);
    }

    if (sectorConcentration[0] > 0 || sectorConcentration[1] < 100) {
      filters.push(`Sector Concentration: ${sectorConcentration[0]}%-${sectorConcentration[1]}%`);
    }
    
    if (verifiedOnly) {
      filters.push('Verified Creators');
    }
    
    if (sectors.length > 0) {
      filters.push(`Sectors: ${sectors.join(', ')}`);
    }

    if (groupId.trim()) {
      filters.push(`Group: ${groupId}`);
    }
    
    onApplyFilters(filters);
    onClose();
  };

  const handleClearAll = () => {
    setReturnRange([0, 100]);
    setSharpeRatio([0, 5]);
    setBenchmark("spy");
    setVerifiedOnly(false);
    setSectors([]);
    setGroupId("");
    setTimeFrame("1M");
    setSecurityConcentration([0, 100]);
    setSectorConcentration([0, 100]);
    onApplyFilters([]);
  };

  const sectorOptions = [
    'Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer', 'Industrial'
  ];

  const benchmarkOptions = [
    { id: 'spy', label: 'SPY' },
    { id: 'qqq', label: 'QQQ' },
    { id: 'vti', label: 'VTI' },
    { id: 'custom', label: 'Custom' }
  ];

  const timeFrameOptions = [
    { id: '1D', label: '1D' },
    { id: '1W', label: '1W' },
    { id: '1M', label: '1M' },
    { id: '1Y', label: '1Y' },
    { id: 'Lifetime', label: 'Lifetime' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] h-[90vh] bg-background border border-border rounded-2xl p-0 overflow-hidden flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/20 flex-shrink-0">
          <DialogTitle className="flex items-center gap-3 text-foreground text-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
              <BarChart3 size={18} className="text-emerald-500" />
            </div>
            Portfolio Filters
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-4 space-y-8">
            {/* Performance Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
                  <TrendingUp size={14} className="text-emerald-500" />
                </div>
                <h3 className="font-semibold text-foreground">Performance</h3>
              </div>
              
              <div className="space-y-6 bg-secondary/20 p-5 rounded-xl">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Annual Return</label>
                  <div className="px-3">
                    <Slider
                      value={returnRange}
                      onValueChange={setReturnRange}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{returnRange[0]}%</span>
                      <span>{returnRange[1]}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Sharpe Ratio</label>
                  <div className="px-3">
                    <Slider
                      value={sharpeRatio}
                      onValueChange={setSharpeRatio}
                      max={5}
                      min={0}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{sharpeRatio[0].toFixed(1)}</span>
                      <span>{sharpeRatio[1].toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center">
                  <Target size={14} className="text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground">Benchmark</h3>
              </div>
              
              <RadioGroup value={benchmark} onValueChange={setBenchmark}>
                <div className="grid grid-cols-2 gap-3">
                  {benchmarkOptions.map((bench) => (
                    <div key={bench.id} className="relative">
                      <RadioGroupItem 
                        value={bench.id} 
                        id={bench.id} 
                        className="peer sr-only" 
                      />
                      <label 
                        htmlFor={bench.id} 
                        className="flex items-center justify-center px-4 py-3 rounded-xl border-2 border-border/50 transition-all duration-200 cursor-pointer hover:border-blue-500/50 peer-checked:bg-blue-500/10 peer-checked:border-blue-500 font-medium text-sm bg-card"
                      >
                        {bench.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Search by Group ID */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-full flex items-center justify-center">
                  <Search size={14} className="text-purple-500" />
                </div>
                <h3 className="font-semibold text-foreground">Search by Group ID</h3>
              </div>
              
              <div className="relative">
                <Input
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                  placeholder="Enter Group ID..."
                  className="pl-12 rounded-xl border-2 h-12 transition-all duration-200 focus:border-purple-500"
                />
                <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Time Frame */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-full flex items-center justify-center">
                  <Clock size={14} className="text-orange-500" />
                </div>
                <h3 className="font-semibold text-foreground">Time Frame</h3>
              </div>
              
              <ToggleGroup type="single" value={timeFrame} onValueChange={setTimeFrame}>
                <div className="grid grid-cols-5 gap-2 w-full">
                  {timeFrameOptions.map((frame) => (
                    <ToggleGroupItem
                      key={frame.id}
                      value={frame.id}
                      className="px-3 py-2.5 rounded-xl border-2 border-border/50 transition-all duration-200 hover:border-orange-500/50 data-[state=on]:bg-orange-500/10 data-[state=on]:border-orange-500 text-sm font-medium bg-card"
                    >
                      {frame.label}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>

            {/* Security Concentration */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-red-500/20 to-red-400/10 rounded-full flex items-center justify-center">
                  <Shield size={14} className="text-red-500" />
                </div>
                <h3 className="font-semibold text-foreground">Security Concentration</h3>
              </div>
              
              <div className="bg-secondary/20 p-5 rounded-xl">
                <label className="block text-sm font-medium text-foreground mb-3">Top 5 Holdings % of Portfolio</label>
                <div className="px-3">
                  <Slider
                    value={securityConcentration}
                    onValueChange={setSecurityConcentration}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{securityConcentration[0]}%</span>
                    <span>{securityConcentration[1]}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Concentration */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-500/20 to-indigo-400/10 rounded-full flex items-center justify-center">
                  <Zap size={14} className="text-indigo-500" />
                </div>
                <h3 className="font-semibold text-foreground">Sector Concentration</h3>
              </div>
              
              <div className="bg-secondary/20 p-5 rounded-xl">
                <label className="block text-sm font-medium text-foreground mb-3">Max Exposure to Any Sector</label>
                <div className="px-3">
                  <Slider
                    value={sectorConcentration}
                    onValueChange={setSectorConcentration}
                    max={100}
                    min={0}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{sectorConcentration[0]}%</span>
                    <span>{sectorConcentration[1]}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Focus */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center">
                  <Zap size={14} className="text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground">Sector Focus</h3>
              </div>
              
              <ToggleGroup type="multiple" value={sectors} onValueChange={setSectors}>
                <div className="grid grid-cols-2 gap-3 w-full">
                  {sectorOptions.map((sector) => (
                    <ToggleGroupItem
                      key={sector}
                      value={sector}
                      className="px-3 py-3 rounded-xl border-2 border-border/50 transition-all duration-200 hover:border-green-500/50 data-[state=on]:bg-green-500/10 data-[state=on]:border-green-500 text-sm font-medium bg-card"
                    >
                      {sector}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>

            {/* Advanced Options Collapsible */}
            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between bg-secondary/20 p-4 rounded-xl hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-500/20 to-gray-400/10 rounded-full flex items-center justify-center">
                      <Users size={14} className="text-gray-500" />
                    </div>
                    <h3 className="font-semibold text-foreground">Advanced Options</h3>
                  </div>
                  {advancedOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-4 mt-4">
                <div className="bg-secondary/10 p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground text-sm">Verified Creators Only</span>
                    <Switch 
                      checked={verifiedOnly} 
                      onCheckedChange={setVerifiedOnly}
                      className="data-[state=checked]:bg-emerald-500"
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Extra spacing at bottom for scroll */}
            <div className="h-4"></div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="border-t border-border/20 bg-background px-6 py-4 flex-shrink-0">
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handleClearAll} 
              className="flex-1 h-12 rounded-xl font-medium hover:bg-secondary/80 transition-colors"
            >
              Clear All
            </Button>
            <Button 
              onClick={handleApplyFilters} 
              className="flex-1 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-medium shadow-lg shadow-emerald-500/20 transition-all duration-200"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioFilterModal;
