
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp } from 'lucide-react';

const PerformanceFilters = () => {
  const [annualReturnRange, setAnnualReturnRange] = useState([0, 100]);
  const [sharpeRatioRange, setSharpeRatioRange] = useState([0, 5]);
  
  const [annualReturnMin, setAnnualReturnMin] = useState('0');
  const [annualReturnMax, setAnnualReturnMax] = useState('100');
  const [sharpeRatioMin, setSharpeRatioMin] = useState('0.0');
  const [sharpeRatioMax, setSharpeRatioMax] = useState('5.0');

  const handleAnnualReturnSliderChange = (values: number[]) => {
    setAnnualReturnRange(values);
    setAnnualReturnMin(values[0].toString());
    setAnnualReturnMax(values[1].toString());
  };

  const handleSharpeRatioSliderChange = (values: number[]) => {
    setSharpeRatioRange(values);
    setSharpeRatioMin(values[0].toFixed(1));
    setSharpeRatioMax(values[1].toFixed(1));
  };

  const handleAnnualReturnMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnnualReturnMin(value);
    const numValue = parseFloat(value) || 0;
    if (numValue <= annualReturnRange[1]) {
      setAnnualReturnRange([numValue, annualReturnRange[1]]);
    }
  };

  const handleAnnualReturnMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnnualReturnMax(value);
    const numValue = parseFloat(value) || 0;
    if (numValue >= annualReturnRange[0]) {
      setAnnualReturnRange([annualReturnRange[0], numValue]);
    }
  };

  const handleSharpeRatioMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSharpeRatioMin(value);
    const numValue = parseFloat(value) || 0;
    if (numValue <= sharpeRatioRange[1]) {
      setSharpeRatioRange([numValue, sharpeRatioRange[1]]);
    }
  };

  const handleSharpeRatioMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSharpeRatioMax(value);
    const numValue = parseFloat(value) || 0;
    if (numValue >= sharpeRatioRange[0]) {
      setSharpeRatioRange([sharpeRatioRange[0], numValue]);
    }
  };

  return (
    <div className="space-y-6 p-4 bg-card/30 border border-border backdrop-blur-sm" style={{ borderRadius: '12px' }}>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={18} className="text-emerald-400" />
        <h3 className="font-bold text-lg">Performance</h3>
      </div>

      {/* Annual Return Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Annual Return</Label>
        
        <div className="flex items-center gap-3">
          <Input
            type="number"
            value={annualReturnMin}
            onChange={handleAnnualReturnMinChange}
            className="w-20 h-8 text-xs"
            placeholder="Min"
          />
          <span className="text-xs text-muted-foreground">%</span>
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="number"
            value={annualReturnMax}
            onChange={handleAnnualReturnMaxChange}
            className="w-20 h-8 text-xs"
            placeholder="Max"
          />
          <span className="text-xs text-muted-foreground">%</span>
        </div>

        <Slider
          value={annualReturnRange}
          onValueChange={handleAnnualReturnSliderChange}
          max={500}
          min={-100}
          step={1}
          className="w-full"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>-100%</span>
          <span>500%</span>
        </div>
      </div>

      {/* Sharpe Ratio Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Sharpe Ratio</Label>
        
        <div className="flex items-center gap-3">
          <Input
            type="number"
            value={sharpeRatioMin}
            onChange={handleSharpeRatioMinChange}
            className="w-20 h-8 text-xs"
            placeholder="Min"
            step="0.1"
          />
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="number"
            value={sharpeRatioMax}
            onChange={handleSharpeRatioMaxChange}
            className="w-20 h-8 text-xs"
            placeholder="Max"
            step="0.1"
          />
        </div>

        <Slider
          value={sharpeRatioRange}
          onValueChange={handleSharpeRatioSliderChange}
          max={10}
          min={-5}
          step={0.1}
          className="w-full"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>-5.0</span>
          <span>10.0</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceFilters;
