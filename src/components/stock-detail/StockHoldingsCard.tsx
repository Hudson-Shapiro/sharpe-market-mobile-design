
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { Stock } from '@/data/stocks';

const StockHoldingsCard: React.FC<{ stock: Stock }> = ({ stock }) => {
  return (
    <Card className="bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent backdrop-blur-sm border-purple-500/20" style={{ borderRadius: '12px' }}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Briefcase size={18} className="text-purple-400" />
          Portfolio Holdings
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
            <div>
              <p className="font-medium text-foreground text-sm">{stock.holdings.topHolder}</p>
              <p className="text-xs text-muted-foreground">Avg. Buy: ${stock.holdings.avgBuyPrice.toFixed(2)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-emerald-400">+{((stock.price - stock.holdings.avgBuyPrice) / stock.holdings.avgBuyPrice * 100).toFixed(1)}%</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Held by {stock.holdings.portfolios} portfolios</span>
            <span className="text-emerald-400 font-medium">Sentiment: {stock.holdings.sentiment}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockHoldingsCard;
