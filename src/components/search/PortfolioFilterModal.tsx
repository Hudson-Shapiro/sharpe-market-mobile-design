
import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import PerformanceSection from './filter-sections/PerformanceSection';
import ConcentrationSection from './filter-sections/ConcentrationSection';
import TimeFrameSection from './filter-sections/TimeFrameSection';
import BenchmarkGroupSection from './filter-sections/BenchmarkGroupSection';
import { ConcentrationFilter } from './filter-sections/types';

interface PortfolioFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: string[]) => void;
  activeFilters: string[];
}

const PortfolioFilterModal = ({ isOpen, onClose, onApplyFilters }: PortfolioFilterModalProps) => {
  const [returnMin, setReturnMin] = useState('0');
  const [returnMax, setReturnMax] = useState('100');
  const [sharpeMin, setSharpeMin] = useState([0.0]);
  const [benchmark, setBenchmark] = useState("spy");
  const [groupId, setGroupId] = useState("");
  const [timeFrame, setTimeFrame] = useState("1M");

  const [secConc, setSecConc] = useState<ConcentrationFilter>({ operator: 'gt', value: '' });
  const [sectConc, setSectConc] = useState<ConcentrationFilter>({ operator: 'gt', value: '' });

  const handleApplyFilters = () => {
    const filters: string[] = [];
    
    if (returnMin !== '0' || returnMax !== '100') {
      filters.push(`Return: ${returnMin}%-${returnMax}%`);
    }
    if (sharpeMin[0] > 0.0) {
      filters.push(`Sharpe: ${sharpeMin[0]}+`);
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
    setReturnMin('0');
    setReturnMax('100');
    setSharpeMin([0.0]);
    setBenchmark("spy");
    setGroupId("");
    setTimeFrame("1M");
    setSecConc({ operator: 'gt', value: '' });
    setSectConc({ operator: 'gt', value: '' });
    onApplyFilters([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] max-h-[85vh] bg-background/95 backdrop-blur-md border border-border/40 rounded-3xl p-0 overflow-hidden flex flex-col shadow-2xl">
        <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/20 flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-foreground text-lg font-semibold">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full flex items-center justify-center">
              <BarChart3 size={14} className="text-emerald-500" />
            </div>
            Advanced Filter
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          <PerformanceSection
            returnMin={returnMin}
            returnMax={returnMax}
            sharpeMin={sharpeMin}
            onReturnMinChange={setReturnMin}
            onReturnMaxChange={setReturnMax}
            onSharpeMinChange={setSharpeMin}
          />

          <ConcentrationSection
            secConc={secConc}
            sectConc={sectConc}
            onSecConcChange={setSecConc}
            onSectConcChange={setSectConc}
          />

          <TimeFrameSection
            timeFrame={timeFrame}
            onTimeFrameChange={setTimeFrame}
          />

          <BenchmarkGroupSection
            benchmark={benchmark}
            groupId={groupId}
            onBenchmarkChange={setBenchmark}
            onGroupIdChange={setGroupId}
          />
        </div>

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
