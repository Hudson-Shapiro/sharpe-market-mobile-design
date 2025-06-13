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
    { id: 'Lifetime', label: 'All' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] h-[95vh] bg-background border border-border rounded-2xl p-0 overflow-hidden flex flex-col">
        <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/20 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-foreground text-lg">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
              <BarChart3 size={14} className="text-emerald-500" />
            </div>
            Advanced Filter
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-3 space-y-4">
            {/* Performance Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
                  <TrendingUp size={12} className="text-emerald-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Performance</h3>
              </div>
              
              <div className="space-y-3 bg-secondary/20 p-3 rounded-lg">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Annual Return</label>
                  <div className="px-2">
                    <Slider
                      value={returnRange}
                      onValueChange={setReturnRange}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{returnRange[0]}%</span>
                      <span>{returnRange[1]}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Sharpe Ratio</label>
                  <div className="px-2">
                    <Slider
                      value={sharpeRatio}
                      onValueChange={setSharpeRatio}
                      max={5}
                      min={0}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{sharpeRatio[0].toFixed(1)}</span>
                      <span>{sharpeRatio[1].toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center">
                  <Target size={12} className="text-blue-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Benchmark</h3>
              </div>
              
              <RadioGroup value={benchmark} onValueChange={setBenchmark}>
                <div className="grid grid-cols-2 gap-2">
                  {benchmarkOptions.map((bench) => (
                    <div key={bench.id} className="relative">
                      <RadioGroupItem 
                        value={bench.id} 
                        id={bench.id} 
                        className="peer sr-only" 
                      />
                      <label 
                        htmlFor={bench.id} 
                        className="flex items-center justify-center px-3 py-2 rounded-lg border-2 border-border/50 transition-all duration-200 cursor-pointer hover:border-blue-500/50 peer-checked:bg-blue-500/10 peer-checked:border-blue-500 font-medium text-xs bg-card"
                      >
                        {bench.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Time Frame */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-full flex items-center justify-center">
                  <Clock size={12} className="text-orange-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Time Frame</h3>
              </div>
              
              <ToggleGroup type="single" value={timeFrame} onValueChange={setTimeFrame}>
                <div className="grid grid-cols-5 gap-1 w-full">
                  {timeFrameOptions.map((frame) => (
                    <ToggleGroupItem
                      key={frame.id}
                      value={frame.id}
                      className="px-2 py-2 rounded-lg border-2 border-border/50 transition-all duration-200 hover:border-orange-500/50 data-[state=on]:bg-orange-500/10 data-[state=on]:border-orange-500 text-xs font-medium bg-card"
                    >
                      {frame.label}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>

            {/* Concentrations - Combined */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-red-500/20 to-red-400/10 rounded-full flex items-center justify-center">
                  <Shield size={12} className="text-red-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Portfolio Concentration</h3>
              </div>
              
              <div className="bg-secondary/20 p-3 rounded-lg space-y-3">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Top 5 Holdings %</label>
                  <div className="px-2">
                    <Slider
                      value={securityConcentration}
                      onValueChange={setSecurityConcentration}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{securityConcentration[0]}%</span>
                      <span>{securityConcentration[1]}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-foreground mb-2">Max Sector Exposure</label>
                  <div className="px-2">
                    <Slider
                      value={sectorConcentration}
                      onValueChange={setSectorConcentration}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{sectorConcentration[0]}%</span>
                      <span>{sectorConcentration[1]}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Focus */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center">
                  <Zap size={12} className="text-green-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Sector Focus</h3>
              </div>
              
              <ToggleGroup type="multiple" value={sectors} onValueChange={setSectors}>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {sectorOptions.map((sector) => (
                    <ToggleGroupItem
                      key={sector}
                      value={sector}
                      className="px-2 py-2 rounded-lg border-2 border-border/50 transition-all duration-200 hover:border-green-500/50 data-[state=on]:bg-green-500/10 data-[state=on]:border-green-500 text-xs font-medium bg-card"
                    >
                      {sector}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>

            {/* Search by Group ID */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-br from-purple-500/20 to-purple-400/10 rounded-full flex items-center justify-center">
                  <Search size={12} className="text-purple-500" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Group ID</h3>
              </div>
              
              <div className="relative">
                <Input
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                  placeholder="Enter Group ID..."
                  className="pl-10 rounded-lg border-2 h-10 transition-all duration-200 focus:border-purple-500 text-sm"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Advanced Options Collapsible */}
            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between bg-secondary/20 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-gray-500/20 to-gray-400/10 rounded-full flex items-center justify-center">
                      <Users size={12} className="text-gray-500" />
                    </div>
                    <h3 className="font-medium text-foreground text-sm">Advanced Options</h3>
                  </div>
                  {advancedOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-3 mt-2">
                <div className="bg-secondary/10 p-3 rounded-lg">
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
          </div>
        </div>

        {/* Fixed Footer - More Compact */}
        <div className="border-t border-border/20 bg-background px-4 py-3 flex-shrink-0">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleClearAll} 
              className="flex-1 h-10 rounded-lg font-medium hover:bg-secondary/80 transition-colors text-sm"
            >
              Clear All
            </Button>
            <Button 
              onClick={handleApplyFilters} 
              className="flex-1 h-10 rounded-lg bg-emerald-500 hover:bg-emerald-600 font-medium shadow-lg shadow-emerald-500/20 transition-all duration-200 text-sm"
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
