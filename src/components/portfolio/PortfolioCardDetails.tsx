
import React from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioCardDetailsProps {
  sharpeRatio?: number;
  sortinioRatio?: number;
  benchmark: string;
  createdDate: string;
  totalValue?: number;
  numHoldings?: number;
  topHolding?: string;
  volatility?: number;
  beta?: number;
  maxDrawdown?: number;
}

const PortfolioCardDetails = ({ 
  sharpeRatio, 
  sortinioRatio, 
  benchmark, 
  createdDate,
  totalValue,
  numHoldings,
  topHolding,
  volatility,
  beta,
  maxDrawdown
}: PortfolioCardDetailsProps) => {
  // Generate sample data for missing values
  const numSecurities = numHoldings || Math.floor(Math.random() * 15) + 5;
  const betaToBenchmark = beta || parseFloat((Math.random() * 1.5 + 0.5).toFixed(2));
  const trades30d = Math.floor(Math.random() * 25) + 3;
  const sharpe = sharpeRatio || parseFloat((Math.random() * 2 + 0.5).toFixed(2));

  return (
    <div className="px-3 pb-3 pt-0 border-t border-border/30 bg-secondary/5" style={{ borderRadius: '0 0 10px 10px' }}>
      <div className="space-y-3 pt-3">
        {/* Metrics Grid - 2x2 Layout */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sharpe Ratio:</span>
            <span className="text-blue-400 font-medium">{sharpe.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground"># Securities:</span>
            <span className="text-foreground font-medium">{numSecurities}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Beta to {benchmark}:</span>
            <span className="text-foreground font-medium">{betaToBenchmark}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground"># Trades (30d):</span>
            <span className="text-foreground font-medium">{trades30d}</span>
          </div>
        </div>
        
        {/* Action Button */}
        <Button 
          size="sm" 
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-8"
          style={{ borderRadius: '10px' }}
        >
          View Full Analysis
        </Button>
      </div>
    </div>
  );
};

export default PortfolioCardDetails;
