
import React, { useState } from 'react';
import { X, TrendingUp, Shield, Target, BarChart3, Users, Zap, Search, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [securityConcentration, setSecurityConcentration] = useState("");
  const [sectorConcentration, setSectorConcentration] = useState("");

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
    
    if (verifiedOnly) {
      filters.push('Verified Creators');
    }
    
    if (sectors.length > 0) {
      filters.push(`Sectors: ${sectors.join(', ')}`);
    }

    if (groupId.trim()) {
      filters.push(`Group: ${groupId}`);
    }

    if (securityConcentration) {
      filters.push(`Security Concentration: ${securityConcentration}`);
    }

    if (sectorConcentration) {
      filters.push(`Sector Concentration: ${sectorConcentration}`);
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
    setSecurityConcentration("");
    setSectorConcentration("");
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[80vh] bg-background border border-border rounded-2xl p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="flex items-center gap-3 text-foreground text-xl">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <BarChart3 size={18} className="text-emerald-400" />
            </div>
            Portfolio Filters
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-full">
          <div className="overflow-y-auto flex-1 px-6 space-y-4">
            {/* Performance Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">📈</span>
                </div>
                <h3 className="font-semibold text-foreground">Performance</h3>
              </div>
              
              <div className="space-y-4 bg-secondary/30 p-3 rounded-xl">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-muted-foreground">Annual Return</label>
                    <span className="text-sm font-semibold text-emerald-400">{returnRange[0]}% - {returnRange[1]}%</span>
                  </div>
                  <div className="relative">
                    <Slider
                      value={returnRange}
                      onValueChange={setReturnRange}
                      max={100}
                      min={0}
                      step={5}
                      className="[&>.relative]:bg-secondary [&_[role=slider]]:border-emerald-500 [&_[role=slider]]:bg-emerald-500"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium text-muted-foreground">Sharpe Ratio</label>
                    <span className="text-sm font-semibold text-emerald-400">{sharpeRatio[0].toFixed(1)} - {sharpeRatio[1].toFixed(1)}</span>
                  </div>
                  <div className="relative">
                    <Slider
                      value={sharpeRatio}
                      onValueChange={setSharpeRatio}
                      max={5}
                      min={0}
                      step={0.1}
                      className="[&>.relative]:bg-secondary [&_[role=slider]]:border-emerald-500 [&_[role=slider]]:bg-emerald-500"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0.0</span>
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benchmark Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 size={14} className="text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">Benchmark</h3>
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
                        className="flex items-center justify-center px-3 py-2 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:scale-105 peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/50 peer-checked:shadow-lg peer-checked:shadow-emerald-500/20 font-medium text-sm"
                      >
                        {bench.label}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Group ID Search */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Search size={14} className="text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">Search by Group ID</h3>
              </div>
              
              <div className="relative">
                <Input
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                  placeholder="Enter Group ID..."
                  className="pl-10 rounded-xl border-2 h-10 transition-all duration-200 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>

            {/* Creator Filters */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                <h3 className="font-semibold text-foreground">Creator</h3>
              </div>
              
              <div className="flex items-center justify-between bg-secondary/30 p-3 rounded-xl">
                <span className="font-medium text-foreground">Verified Creators Only</span>
                <Switch 
                  checked={verifiedOnly} 
                  onCheckedChange={setVerifiedOnly}
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>
            </div>

            {/* Sector Focus */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Zap size={14} className="text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">Sector Focus</h3>
              </div>
              
              <ToggleGroup type="multiple" value={sectors} onValueChange={setSectors}>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {sectorOptions.map((sector) => (
                    <ToggleGroupItem
                      key={sector}
                      value={sector}
                      className="px-3 py-2 rounded-xl border-2 transition-all duration-200 hover:scale-105 data-[state=on]:bg-emerald-500/20 data-[state=on]:border-emerald-500/50 data-[state=on]:shadow-lg data-[state=on]:shadow-emerald-500/20 text-sm font-medium"
                    >
                      {sector}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>

            {/* Advanced Filters Collapsible */}
            <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between bg-secondary/30 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <BarChart3 size={14} className="text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-foreground">Advanced Filters</h3>
                  </div>
                  {advancedOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-3 mt-3">
                <div className="space-y-3 bg-secondary/20 p-3 rounded-xl">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Highest Security Concentration
                    </label>
                    <Input
                      value={securityConcentration}
                      onChange={(e) => setSecurityConcentration(e.target.value)}
                      placeholder="e.g., AAPL > 10%"
                      className="rounded-xl border-2 h-10 transition-all duration-200 focus:border-emerald-500/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Highest Sector Concentration
                    </label>
                    <Input
                      value={sectorConcentration}
                      onChange={(e) => setSectorConcentration(e.target.value)}
                      placeholder="e.g., Technology > 25%"
                      className="rounded-xl border-2 h-10 transition-all duration-200 focus:border-emerald-500/50"
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Sticky Footer */}
          <div className="sticky bottom-0 bg-background px-6 py-4 border-t border-border">
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleClearAll} 
                className="flex-1 h-10 rounded-xl font-medium hover:bg-secondary/80 transition-colors"
              >
                Clear All
              </Button>
              <Button 
                onClick={handleApplyFilters} 
                className="flex-1 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-medium shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-105"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioFilterModal;
