
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingDown, Activity, Target } from 'lucide-react';

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
  // Fallback to generate sample data if new props aren't provided
  const numSecurities = numHoldings || Math.floor(Math.random() * 15) + 5;
  const betaToBenchmark = beta || parseFloat((Math.random() * 1.5 + 0.5).toFixed(2));
  const trades30d = Math.floor(Math.random() * 25) + 3;
  const portfolioValue = totalValue || Math.floor(Math.random() * 50000) + 15000;
  const vol = volatility || parseFloat((Math.random() * 10 + 8).toFixed(1));
  const drawdown = maxDrawdown || parseFloat((Math.random() * -10 - 2).toFixed(1));

  return (
    <div className="px-3 pb-3 pt-0 border-t border-border/30 bg-secondary/5" style={{ borderRadius: '0 0 10px 10px' }}>
      <div className="space-y-3 pt-3">
        {/* Portfolio Value */}
        <div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <DollarSign size={14} className="text-emerald-400" />
          <div className="flex-1">
            <div className="text-xs text-muted-foreground">Portfolio Value</div>
            <div className="text-sm font-bold text-emerald-400">${portfolioValue.toLocaleString()}</div>
          </div>
        </div>

        {/* Holdings & Top Holding */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
            <Target size={12} className="text-blue-400" />
            Holdings
          </h4>
          <div className="grid grid-cols-1 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground"># Holdings:</span>
              <span className="text-foreground font-medium">{numSecurities}</span>
            </div>
            {topHolding && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Top Holding:</span>
                <span className="text-blue-400 font-medium">{topHolding}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground"># Trades (30d):</span>
              <span className="text-foreground font-medium">{trades30d}</span>
            </div>
          </div>
        </div>

        {/* Risk Metrics */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
            <Activity size={12} className="text-orange-400" />
            Risk Metrics
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {sharpeRatio && (
              <div className="flex justify-between">
                <span>Sharpe:</span>
                <span className="text-blue-400 font-medium">{sharpeRatio.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Volatility:</span>
              <span className="text-orange-400 font-medium">{vol}%</span>
            </div>
            <div className="flex justify-between">
              <span>Beta to {benchmark}:</span>
              <span className="text-foreground font-medium">{betaToBenchmark}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Max Drawdown:</span>
              <span className="text-red-400 font-medium flex items-center gap-1">
                <TrendingDown size={10} />
                {drawdown}%
              </span>
            </div>
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
