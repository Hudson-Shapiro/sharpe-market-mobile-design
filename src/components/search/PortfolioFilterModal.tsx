
import React, { useState } from 'react';
import { BarChart3, Percent, Clock, Hash, ShieldCheck, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PortfolioFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

const PortfolioFilterModal = ({ isOpen, onClose, onApplyFilters }: PortfolioFilterModalProps) => {
  const [returnRange, setReturnRange] = useState([0, 100]);
  const [sharpeRatio, setSharpeRatio] = useState([0, 5]);
  const [benchmark, setBenchmark] = useState("spy");
  const [groupId, setGroupId] = useState("");
  const [timeFrame, setTimeFrame] = useState("1M");

  const [secConc, setSecConc] = useState({ operator: 'gt', value: '' });
  const [sectConc, setSectConc] = useState({ operator: 'gt', value: '' });

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

    if (secConc.value) {
      filters.push(`Top 5 Holdings ${secConc.operator === 'gt' ? '>' : '<'} ${secConc.value}%`);
    }

    if (sectConc.value) {
      filters.push(`Max Sector Exp. ${sectConc.operator === 'gt' ? '>' : '<'} ${sectConc.value}%`);
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
    setGroupId("");
    setTimeFrame("1M");
    setSecConc({ operator: 'gt', value: '' });
    setSectConc({ operator: 'gt', value: '' });
    onApplyFilters([]);
  };

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
      <DialogContent className="max-w-md w-[95vw] h-[90vh] bg-background/95 backdrop-blur-md border border-border/40 rounded-3xl p-0 overflow-hidden flex flex-col shadow-2xl">
        <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/20 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
              <BarChart3 size={14} className="text-emerald-500" />
            </div>
            Advanced Filter
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          
          {/* Performance Section */}
          <div className="bg-card/50 p-3 rounded-xl border border-border/20">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <TrendingUp className="text-emerald-500" size={16} />
                  Performance
              </h3>
              <div className="space-y-4">
                  <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Annual Return</label>
                      <Slider value={returnRange} onValueChange={setReturnRange} max={100} min={0} step={5} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>{returnRange[0]}%</span>
                          <span>{returnRange[1]}%</span>
                      </div>
                  </div>
                  <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Sharpe Ratio</label>
                      <Slider value={sharpeRatio} onValueChange={setSharpeRatio} max={5} min={0} step={0.1} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                          <span>{sharpeRatio[0].toFixed(1)}</span>
                          <span>{sharpeRatio[1].toFixed(1)}</span>
                      </div>
                  </div>
              </div>
          </div>

          {/* Concentration Section */}
          <div className="bg-card/50 p-3 rounded-xl border border-border/20">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Percent className="text-cyan-500" size={16} />
                  Concentration
              </h3>
              <div className="space-y-3">
                  {/* Security Concentration */}
                  <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Security Concentration</label>
                      <div className="grid grid-cols-2 gap-2">
                          <Select value={secConc.operator} onValueChange={(val) => setSecConc(prev => ({ ...prev, operator: val}))}>
                              <SelectTrigger className="rounded-lg border-border/40 h-9 bg-secondary/60">
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
                              placeholder="Value %"
                              className="rounded-lg border-border/40 h-9 bg-secondary/60"
                          />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 pl-1">Top 5 holdings</p>
                  </div>

                  {/* Sector Concentration */}
                  <div>
                      <label className="block text-xs font-medium text-foreground mb-2">Sector Concentration</label>
                      <div className="grid grid-cols-2 gap-2">
                          <Select value={sectConc.operator} onValueChange={(val) => setSectConc(prev => ({ ...prev, operator: val}))}>
                              <SelectTrigger className="rounded-lg border-border/40 h-9 bg-secondary/60">
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
                              placeholder="Value %"
                              className="rounded-lg border-border/40 h-9 bg-secondary/60"
                          />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 pl-1">Max sector exposure</p>
                  </div>
              </div>
          </div>

          {/* Time Frame & Benchmark */}
          <div className="space-y-3">
              {/* Time Frame */}
              <div className="bg-card/50 p-3 rounded-xl border border-border/20">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                      <Clock className="text-orange-500" size={16} />
                      Time Frame
                  </h3>
                  <ToggleGroup type="single" value={timeFrame} onValueChange={(v) => v && setTimeFrame(v)} className="w-full">
                      <div className="grid grid-cols-5 gap-1 w-full">
                          {timeFrameOptions.map((frame) => (
                              <ToggleGroupItem key={frame.id} value={frame.id} className="px-2 py-1.5 h-auto rounded-full border border-border/40 data-[state=on]:bg-orange-500/15 data-[state=on]:border-orange-500/60 data-[state=on]:text-orange-400 text-xs font-medium bg-secondary/60">
                                  {frame.label}
                              </ToggleGroupItem>
                          ))}
                      </div>
                  </ToggleGroup>
              </div>

              {/* Benchmark & Group */}
              <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card/50 p-3 rounded-xl border border-border/20">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                          <ShieldCheck className="text-indigo-500" size={16} />
                          Benchmark
                      </h3>
                      <Select value={benchmark} onValueChange={setBenchmark}>
                          <SelectTrigger className="w-full rounded-lg border-border/40 h-9 bg-secondary/60">
                              <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                              {benchmarkOptions.map((bench) => (
                              <SelectItem key={bench.id} value={bench.id}>{bench.label}</SelectItem>
                              ))}
                          </SelectContent>
                      </Select>
                  </div>
                    <div className="bg-card/50 p-3 rounded-xl border border-border/20">
                      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                          <Hash className="text-gray-500" size={16} />
                          Group ID
                      </h3>
                      <Input
                          value={groupId}
                          onChange={(e) => setGroupId(e.target.value)}
                          placeholder="Enter Code"
                          className="rounded-lg border-border/40 h-9 bg-secondary/60"
                      />
                  </div>
              </div>
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
