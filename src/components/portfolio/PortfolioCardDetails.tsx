
import React from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioCardDetailsProps {
  sharpeRatio?: number;
  sortinioRatio?: number;
  benchmark: string;
  createdDate: string;
}

const PortfolioCardDetails = ({ sharpeRatio, sortinioRatio, benchmark, createdDate }: PortfolioCardDetailsProps) => {
  return (
    <div className="px-3 pb-3 pt-0 border-t border-border/30 bg-secondary/5" style={{ borderRadius: '0 0 10px 10px' }}>
      <div className="space-y-3 pt-3">
        {/* Unified Details Section */}
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">Details</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            {sharpeRatio && (
              <div className="flex justify-between">
                <span>Sharpe Ratio:</span>
                <span className="text-blue-400 font-medium">{sharpeRatio.toFixed(2)}</span>
              </div>
            )}
            {sortinioRatio && (
              <div className="flex justify-between">
                <span>Sortino Ratio:</span>
                <span className="text-blue-400 font-medium">{sortinioRatio.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Benchmark:</span>
              <span className="text-foreground font-medium">{benchmark}</span>
            </div>
            <div className="flex justify-between">
              <span>Created:</span>
              <span className="text-foreground">{createdDate}</span>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <Button 
          size="sm" 
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-8"
          style={{ borderRadius: '10px' }}
        >
          View Full Stats
        </Button>
      </div>
    </div>
  );
};

export default PortfolioCardDetails;
