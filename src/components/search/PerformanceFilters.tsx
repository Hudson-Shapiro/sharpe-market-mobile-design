
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Percent } from 'lucide-react';

const PerformanceFilters = () => {
  const [annualReturnMin, setAnnualReturnMin] = useState('0');
  const [annualReturnMax, setAnnualReturnMax] = useState('∞');
  const [sharpeRatioMin, setSharpeRatioMin] = useState('0.0');
  const [sharpeRatioMax, setSharpeRatioMax] = useState('∞');
  const [securityConcentrationOperator, setSecurityConcentrationOperator] = useState('greater');
  const [securityConcentrationValue, setSecurityConcentrationValue] = useState('');
  const [sectorConcentrationOperator, setSectorConcentrationOperator] = useState('greater');
  const [sectorConcentrationValue, setSectorConcentrationValue] = useState('');

  return (
    <div className="space-y-4 p-3 bg-card/30 border border-border backdrop-blur-sm rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp size={16} className="text-emerald-400" />
        <h3 className="font-bold text-base">Performance</h3>
      </div>

      {/* Annual Return Section */}
      <div className="space-y-2">
        <Label className="text-xs font-medium">Annual Return</Label>
        
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={annualReturnMin}
            onChange={(e) => setAnnualReturnMin(e.target.value)}
            className="w-16 h-7 text-xs rounded-lg"
            placeholder="Min"
          />
          <span className="text-xs text-muted-foreground">%</span>
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="text"
            value={annualReturnMax}
            onChange={(e) => setAnnualReturnMax(e.target.value)}
            className="w-16 h-7 text-xs rounded-lg"
            placeholder="Max"
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>
      </div>

      {/* Sharpe Ratio Section */}
      <div className="space-y-2">
        <Label className="text-xs font-medium">Sharpe Ratio</Label>
        
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={sharpeRatioMin}
            onChange={(e) => setSharpeRatioMin(e.target.value)}
            className="w-16 h-7 text-xs rounded-lg"
            placeholder="Min"
          />
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="text"
            value={sharpeRatioMax}
            onChange={(e) => setSharpeRatioMax(e.target.value)}
            className="w-16 h-7 text-xs rounded-lg"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Concentration Section */}
      <div className="space-y-3 pt-1 border-t border-border/50">
        <div className="flex items-center gap-2">
          <Percent size={14} className="text-emerald-400" />
          <h4 className="font-bold text-sm">Concentration</h4>
        </div>

        {/* Security Concentration */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Security Concentration</Label>
          <div className="flex items-center gap-2">
            <Select value={securityConcentrationOperator} onValueChange={setSecurityConcentrationOperator}>
              <SelectTrigger className="w-24 h-7 text-xs rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              value={securityConcentrationValue}
              onChange={(e) => setSecurityConcentrationValue(e.target.value)}
              className="w-20 h-7 text-xs rounded-lg"
              placeholder="Value %"
            />
          </div>
          <p className="text-xs text-muted-foreground/70">Top 5 holdings</p>
        </div>

        {/* Sector Concentration */}
        <div className="space-y-1.5">
          <Label className="text-xs font-medium">Sector Concentration</Label>
          <div className="flex items-center gap-2">
            <Select value={sectorConcentrationOperator} onValueChange={setSectorConcentrationOperator}>
              <SelectTrigger className="w-24 h-7 text-xs rounded-lg">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-lg">
                <SelectItem value="greater">Greater than</SelectItem>
                <SelectItem value="less">Less than</SelectItem>
                <SelectItem value="equal">Equal to</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              value={sectorConcentrationValue}
              onChange={(e) => setSectorConcentrationValue(e.target.value)}
              className="w-20 h-7 text-xs rounded-lg"
              placeholder="Value %"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceFilters;
