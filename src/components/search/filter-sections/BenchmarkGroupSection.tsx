
import React from 'react';
import { ShieldCheck, Hash } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BenchmarkGroupSectionProps } from './types';

const benchmarkOptions = [
  { id: 'spy', label: 'SPY' },
  { id: 'qqq', label: 'QQQ' },
  { id: 'vti', label: 'VTI' },
  { id: 'custom', label: 'Custom' }
];

const BenchmarkGroupSection = ({
  benchmark,
  groupId,
  onBenchmarkChange,
  onGroupIdChange
}: BenchmarkGroupSectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="bg-card/50 p-2.5 rounded-xl border border-border/20">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
          <ShieldCheck className="text-indigo-500" size={16} />
          Benchmark
        </h3>
        <Select value={benchmark} onValueChange={onBenchmarkChange}>
          <SelectTrigger className="w-full rounded-xl border-border/40 h-7 bg-secondary/60 text-xs">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {benchmarkOptions.map((bench) => (
              <SelectItem key={bench.id} value={bench.id}>{bench.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="bg-card/50 p-2.5 rounded-xl border border-border/20">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
          <Hash className="text-gray-500" size={16} />
          Group ID
        </h3>
        <Input
          value={groupId}
          onChange={(e) => onGroupIdChange(e.target.value)}
          placeholder="Enter Code"
          className="rounded-xl border-border/40 h-7 bg-secondary/60 text-xs"
        />
      </div>
    </div>
  );
};

export default BenchmarkGroupSection;
