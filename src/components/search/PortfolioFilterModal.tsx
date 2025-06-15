import React, { useState } from 'react';
import { X, TrendingUp, Shield, Target, BarChart3, Users, Zap, Search, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PortfolioFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

const PortfolioFilterModal = ({ isOpen, onClose, onApplyFilters, activeFilters }: PortfolioFilterModalProps) => {
  const [enabledFilters, setEnabledFilters] = useState<Record<string, boolean>>({});

  const [returnRange, setReturnRange] = useState([0, 100]);
  const [sharpeRatio, setSharpeRatio] = useState([0, 5]);
  const [benchmark, setBenchmark] = useState("spy");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sectors, setSectors] = useState<string[]>([]);
  const [groupId, setGroupId] = useState("");
  const [timeFrame, setTimeFrame] = useState("1M");

  const [secConc, setSecConc] = useState({ operator: 'gt', value: '' });
  const [sectConc, setSectConc] = useState({ operator: 'gt', value: '' });

  const handleEnabledChange = (filter: string, checked: boolean) => {
    setEnabledFilters(prev => ({...prev, [filter]: checked}));
  }

  const handleApplyFilters = () => {
    const filters: string[] = [];
    
    if (enabledFilters.performance) {
      if (returnRange[0] > 0 || returnRange[1] < 100) {
        filters.push(`Return: ${returnRange[0]}%-${returnRange[1]}%`);
      }
      if (sharpeRatio[0] > 0 || sharpeRatio[1] < 5) {
        filters.push(`Sharpe: ${sharpeRatio[0]}-${sharpeRatio[1]}`);
      }
    }
    
    if (enabledFilters.benchmark && benchmark) {
      filters.push(`Benchmark: ${benchmark.toUpperCase()}`);
    }
    
    if (enabledFilters.timeFrame && timeFrame) {
      filters.push(`Timeframe: ${timeFrame}`);
    }

    if (enabledFilters.securityConcentration && secConc.value) {
      filters.push(`Top 5 Holdings ${secConc.operator === 'gt' ? '>' : '<'} ${secConc.value}%`);
    }

    if (enabledFilters.sectorConcentration && sectConc.value) {
      filters.push(`Max Sector Exp. ${sectConc.operator === 'gt' ? '>' : '<'} ${sectConc.value}%`);
    }
    
    if (enabledFilters.sectorFocus && sectors.length > 0) {
      filters.push(`Sectors: ${sectors.join(', ')}`);
    }

    if (enabledFilters.groupId && groupId.trim()) {
      filters.push(`Group: ${groupId}`);
    }

    if (enabledFilters.verifiedCreators && verifiedOnly) {
      filters.push('Verified Creators');
    }
    
    onApplyFilters(filters);
    onClose();
  };

  const handleClearAll = () => {
    setEnabledFilters({});
    setReturnRange([0, 100]);
    setSharpeRatio([0, 5]);
    setBenchmark("spy");
    setVerifiedOnly(false);
    setSectors([]);
    setGroupId("");
    setTimeFrame("1M");
    setSecConc({ operator: 'gt', value: '' });
    setSectConc({ operator: 'gt', value: '' });
    onApplyFilters([]);
  };

  const FilterSection = ({ title, filterKey, children }: { title: string; filterKey: string; children: React.ReactNode }) => (
    <div className="space-y-2 border-b border-border/10 last:border-b-0 py-3">
      <div className="flex items-center space-x-3 px-1">
        <Checkbox 
          id={`enable-${filterKey}`} 
          checked={!!enabledFilters[filterKey]} 
          onCheckedChange={(checked) => handleEnabledChange(filterKey, !!checked)}
          className="rounded-[4px]"
        />
        <label htmlFor={`enable-${filterKey}`} className="text-sm font-medium text-foreground cursor-pointer select-none">
          {title}
        </label>
      </div>
      {enabledFilters[filterKey] && (
        <div className="pl-7 pt-2 space-y-4">
          {children}
        </div>
      )}
    </div>
  );

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
      <DialogContent className="max-w-md w-[95vw] h-[95vh] bg-background/95 backdrop-blur-md border border-border/40 rounded-3xl p-0 overflow-hidden flex flex-col shadow-2xl">
        <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/20 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
              <BarChart3 size={14} className="text-emerald-500" />
            </div>
            Advanced Filter
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-3 space-y-1">

            <FilterSection title="Group By ID" filterKey="groupId">
                <Input
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                  placeholder="Enter Group Code"
                  className="rounded-lg border-border/40 h-10 bg-card/60"
                />
            </FilterSection>

            <FilterSection title="Benchmark" filterKey="benchmark">
              <Select value={benchmark} onValueChange={setBenchmark}>
                <SelectTrigger className="w-full rounded-lg border-border/40 h-10 bg-card/60">
                  <SelectValue placeholder="Select Benchmark" />
                </SelectTrigger>
                <SelectContent>
                  {benchmarkOptions.map((bench) => (
                    <SelectItem key={bench.id} value={bench.id}>{bench.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FilterSection>

            <FilterSection title="Security Concentration" filterKey="securityConcentration">
              <div className="grid grid-cols-2 gap-2">
                <Select value={secConc.operator} onValueChange={(val) => setSecConc(prev => ({ ...prev, operator: val}))}>
                  <SelectTrigger className="rounded-lg border-border/40 h-10 bg-card/60">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gt">Greater than</SelectItem>
                    <SelectItem value="lt">Less than</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={secConc.value}
                  onChange={(e) => setSecConc(prev => ({ ...prev, value: e.target.value}))}
                  placeholder="Enter value"
                  className="rounded-lg border-border/40 h-10 bg-card/60"
                />
              </div>
              <p className="text-xs text-muted-foreground pl-1">Top 5 holdings concentration %</p>
            </FilterSection>

            <FilterSection title="Sector Concentration" filterKey="sectorConcentration">
               <div className="grid grid-cols-2 gap-2">
                <Select value={sectConc.operator} onValueChange={(val) => setSectConc(prev => ({ ...prev, operator: val}))}>
                  <SelectTrigger className="rounded-lg border-border/40 h-10 bg-card/60">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gt">Greater than</SelectItem>
                    <SelectItem value="lt">Less than</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={sectConc.value}
                  onChange={(e) => setSectConc(prev => ({ ...prev, value: e.target.value}))}
                  placeholder="Enter value"
                  className="rounded-lg border-border/40 h-10 bg-card/60"
                />
              </div>
              <p className="text-xs text-muted-foreground pl-1">Max sector exposure %</p>
            </FilterSection>

            <FilterSection title="Performance" filterKey="performance">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Annual Return</label>
                  <Slider value={returnRange} onValueChange={setReturnRange} max={100} min={0} step={5} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{returnRange[0]}%</span>
                    <span>{returnRange[1]}%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">Sharpe Ratio</label>
                  <Slider value={sharpeRatio} onValueChange={setSharpeRatio} max={5} min={0} step={0.1} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{sharpeRatio[0].toFixed(1)}</span>
                    <span>{sharpeRatio[1].toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </FilterSection>
            
            <FilterSection title="Time Frame" filterKey="timeFrame">
              <ToggleGroup type="single" value={timeFrame} onValueChange={setTimeFrame}>
                <div className="grid grid-cols-5 gap-1 w-full">
                  {timeFrameOptions.map((frame) => (
                    <ToggleGroupItem key={frame.id} value={frame.id} className="px-2 py-1.5 rounded-full border border-border/40 data-[state=on]:bg-orange-500/15 data-[state=on]:border-orange-500/60 data-[state=on]:text-orange-400 text-xs font-medium bg-card/60">
                      {frame.label}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </FilterSection>
            
            <FilterSection title="Sector Focus" filterKey="sectorFocus">
               <ToggleGroup type="multiple" value={sectors} onValueChange={setSectors}>
                <div className="grid grid-cols-2 gap-1.5 w-full">
                  {sectorOptions.map((sector) => (
                    <ToggleGroupItem key={sector} value={sector} className="px-2 py-1.5 rounded-full border border-border/40 data-[state=on]:bg-green-500/15 data-[state=on]:border-green-500/60 data-[state=on]:text-green-400 text-xs font-medium bg-card/60">
                      {sector}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </FilterSection>
            
            <FilterSection title="Verified Creators" filterKey="verifiedCreators">
              <div className="flex items-center justify-between bg-secondary/10 p-3 rounded-lg">
                <span className="font-medium text-foreground text-sm">Verified Creators Only</span>
                <Switch checked={verifiedOnly} onCheckedChange={setVerifiedOnly} className="data-[state=checked]:bg-emerald-500"/>
              </div>
            </FilterSection>

          </div>
        </div>

        {/* Fixed Footer */}
        <div className="border-t border-border/20 bg-background/90 backdrop-blur-sm px-4 py-3 flex-shrink-0">
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleClearAll} 
              className="flex-1 h-10 rounded-full font-medium hover:bg-secondary/80 transition-colors text-sm border-border/40"
            >
              Clear All
            </Button>
            <Button 
              onClick={handleApplyFilters} 
              className="flex-1 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 font-medium shadow-lg shadow-emerald-500/20 transition-all duration-200 text-sm"
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
