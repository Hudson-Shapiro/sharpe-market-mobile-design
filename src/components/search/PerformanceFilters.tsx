
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp } from 'lucide-react';

const PerformanceFilters = () => {
  const [annualReturnMin, setAnnualReturnMin] = useState('0');
  const [annualReturnMax, setAnnualReturnMax] = useState('∞');
  const [sharpeRatioMin, setSharpeRatioMin] = useState('0.0');
  const [sharpeRatioMax, setSharpeRatioMax] = useState('∞');

  return (
    <div className="space-y-6 p-4 bg-card/30 border border-border backdrop-blur-sm rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={18} className="text-emerald-400" />
        <h3 className="font-bold text-lg">Performance</h3>
      </div>

      {/* Annual Return Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Annual Return</Label>
        
        <div className="flex items-center gap-3">
          <Input
            type="text"
            value={annualReturnMin}
            onChange={(e) => setAnnualReturnMin(e.target.value)}
            className="w-20 h-8 text-xs rounded-lg"
            placeholder="Min"
          />
          <span className="text-xs text-muted-foreground">%</span>
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="text"
            value={annualReturnMax}
            onChange={(e) => setAnnualReturnMax(e.target.value)}
            className="w-20 h-8 text-xs rounded-lg"
            placeholder="Max"
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      </div>

      {/* Sharpe Ratio Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Sharpe Ratio</Label>
        
        <div className="flex items-center gap-3">
          <Input
            type="text"
            value={sharpeRatioMin}
            onChange={(e) => setSharpeRatioMin(e.target.value)}
            className="w-20 h-8 text-xs rounded-lg"
            placeholder="Min"
          />
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="text"
            value={sharpeRatioMax}
            onChange={(e) => setSharpeRatioMax(e.target.value)}
            className="w-20 h-8 text-xs rounded-lg"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceFilters;
