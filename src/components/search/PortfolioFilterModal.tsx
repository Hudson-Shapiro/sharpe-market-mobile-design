
import React, { useState } from 'react';
import { X, TrendingUp, Shield, Target, BarChart3, Users, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface PortfolioFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

const PortfolioFilterModal = ({ isOpen, onClose, onApplyFilters, activeFilters }: PortfolioFilterModalProps) => {
  const [returnRange, setReturnRange] = useState([0, 100]);
  const [sharpeRatio, setSharpeRatio] = useState([0, 5]);
  const [portfolioTypes, setPortfolioTypes] = useState<string[]>([]);
  const [benchmark, setBenchmark] = useState("spy");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sectors, setSectors] = useState<string[]>([]);

  const handleApplyFilters = () => {
    const filters: string[] = [];
    
    if (returnRange[0] > 0 || returnRange[1] < 100) {
      filters.push(`Return: ${returnRange[0]}%-${returnRange[1]}%`);
    }
    
    if (sharpeRatio[0] > 0 || sharpeRatio[1] < 5) {
      filters.push(`Sharpe: ${sharpeRatio[0]}-${sharpeRatio[1]}`);
    }
    
    if (portfolioTypes.length > 0) {
      filters.push(`Type: ${portfolioTypes.join(', ')}`);
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
    
    onApplyFilters(filters);
    onClose();
  };

  const handleClearAll = () => {
    setReturnRange([0, 100]);
    setSharpeRatio([0, 5]);
    setPortfolioTypes([]);
    setBenchmark("spy");
    setVerifiedOnly(false);
    setSectors([]);
    onApplyFilters([]);
  };

  const portfolioTypeOptions = [
    { id: 'growth', label: 'Growth', icon: TrendingUp },
    { id: 'value', label: 'Value', icon: Target },
    { id: 'dividend', label: 'Dividend', icon: BarChart3 },
    { id: 'esg', label: 'ESG', icon: Shield },
  ];

  const sectorOptions = [
    'Technology', 'Healthcare', 'Finance', 'Energy', 'Consumer', 'Industrial'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <BarChart3 size={20} className="text-emerald-400" />
            Portfolio Filters
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Performance Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-400" />
              Performance
            </h3>
            <div className="space-y-4 pl-6">
              <div>
                <label className="text-sm text-muted-foreground">
                  Annual Return Range: {returnRange[0]}% - {returnRange[1]}%
                </label>
                <Slider
                  value={returnRange}
                  onValueChange={setReturnRange}
                  max={100}
                  min={0}
                  step={5}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">
                  Sharpe Ratio: {sharpeRatio[0]} - {sharpeRatio[1]}
                </label>
                <Slider
                  value={sharpeRatio}
                  onValueChange={setSharpeRatio}
                  max={5}
                  min={0}
                  step={0.1}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Portfolio Type Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Target size={16} className="text-emerald-400" />
              Portfolio Type
            </h3>
            <div className="pl-6">
              <ToggleGroup type="multiple" value={portfolioTypes} onValueChange={setPortfolioTypes}>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {portfolioTypeOptions.map((type) => {
                    const Icon = type.icon;
                    return (
                      <ToggleGroupItem
                        key={type.id}
                        value={type.id}
                        className="flex items-center gap-2 text-xs"
                      >
                        <Icon size={14} />
                        {type.label}
                      </ToggleGroupItem>
                    );
                  })}
                </div>
              </ToggleGroup>
            </div>
          </div>

          {/* Benchmark Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <BarChart3 size={16} className="text-emerald-400" />
              Benchmark
            </h3>
            <div className="pl-6">
              <RadioGroup value={benchmark} onValueChange={setBenchmark}>
                <div className="space-y-2">
                  {['spy', 'qqq', 'vti', 'custom'].map((bench) => (
                    <div key={bench} className="flex items-center space-x-2">
                      <RadioGroupItem value={bench} id={bench} />
                      <label htmlFor={bench} className="text-sm text-muted-foreground">
                        {bench.toUpperCase()}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Creator Filters */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Users size={16} className="text-emerald-400" />
              Creator
            </h3>
            <div className="pl-6">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Verified Creators Only</label>
                <Switch checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
              </div>
            </div>
          </div>

          {/* Sector Focus */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Zap size={16} className="text-emerald-400" />
              Sector Focus
            </h3>
            <div className="pl-6">
              <ToggleGroup type="multiple" value={sectors} onValueChange={setSectors}>
                <div className="grid grid-cols-2 gap-1 w-full">
                  {sectorOptions.map((sector) => (
                    <ToggleGroupItem
                      key={sector}
                      value={sector}
                      className="text-xs"
                    >
                      {sector}
                    </ToggleGroupItem>
                  ))}
                </div>
              </ToggleGroup>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={handleClearAll} className="flex-1">
            Clear All
          </Button>
          <Button onClick={handleApplyFilters} className="flex-1 bg-emerald-500 hover:bg-emerald-600">
            Apply Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioFilterModal;
