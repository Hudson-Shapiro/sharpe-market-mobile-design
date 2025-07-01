
import React from 'react';
import { Percent } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ConcentrationSectionProps } from './types';

const ConcentrationSection = ({
  secConc,
  sectConc,
  onSecConcChange,
  onSectConcChange
}: ConcentrationSectionProps) => {
  return (
    <div className="bg-card/50 p-2.5 rounded-xl border border-border/20">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
        <Percent className="text-cyan-500" size={16} />
        Concentration
      </h3>
      <div className="space-y-1.5">
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">
            Security Concentration - <span className="text-muted-foreground font-normal">Top 5 holdings</span>
          </label>
          <div className="flex gap-1.5">
            <Select 
              value={secConc.operator} 
              onValueChange={(val) => onSecConcChange({ ...secConc, operator: val as 'gt' | 'lt' })}
            >
              <SelectTrigger className="rounded-xl border-border/40 h-9 bg-secondary/60 flex-1 text-xs">
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
              onChange={(e) => onSecConcChange({ ...secConc, value: e.target.value })}
              placeholder="Value %"
              className="rounded-xl border-border/40 h-9 bg-secondary/60 flex-1 text-xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-foreground mb-1">
            Sector Concentration - <span className="text-muted-foreground font-normal">Max sector exposure</span>
          </label>
          <div className="flex gap-1.5">
            <Select 
              value={sectConc.operator} 
              onValueChange={(val) => onSectConcChange({ ...sectConc, operator: val as 'gt' | 'lt' })}
            >
              <SelectTrigger className="rounded-xl border-border/40 h-9 bg-secondary/60 flex-1 text-xs">
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
              onChange={(e) => onSectConcChange({ ...sectConc, value: e.target.value })}
              placeholder="Value %"
              className="rounded-xl border-border/40 h-9 bg-secondary/60 flex-1 text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcentrationSection;
