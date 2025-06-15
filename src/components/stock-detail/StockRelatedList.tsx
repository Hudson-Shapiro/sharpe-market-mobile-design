
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import MiniChart from '@/components/discover/MiniChart';
import { Stock } from '@/data/stocks';

interface StockRelatedListProps {
  relatedStocks: Stock[];
  onStockClick: (symbol: string) => void;
}

const StockRelatedList: React.FC<StockRelatedListProps> = ({ relatedStocks, onStockClick }) => (
  <Card className="bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border-border/30" style={{ borderRadius: '12px' }}>
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-base">
        <TrendingUp size={18} className="text-emerald-400" />
        Related Stocks
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-2">
        {relatedStocks.map((relatedStock) => (
          <Card 
            key={relatedStock.symbol}
            className="bg-secondary/20 border-border/30 hover:bg-secondary/30 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            style={{ borderRadius: '8px' }}
            onClick={() => onStockClick(relatedStock.symbol)}
          >
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{relatedStock.logo}</span>
                  <div>
                    <p className="font-medium text-foreground text-sm">{relatedStock.symbol}</p>
                    <p className="text-xs text-muted-foreground truncate max-w-32">{relatedStock.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MiniChart 
                    data={relatedStock.chartData["1D"].map(d => d.price)} 
                    isPositive={relatedStock.change >= 0}
                    width={40}
                    height={16}
                  />
                  <div className="text-right">
                    <p className="font-medium text-foreground text-sm">${relatedStock.price.toFixed(2)}</p>
                    <p className={`text-xs ${relatedStock.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {relatedStock.change >= 0 ? '+' : ''}{relatedStock.changePercent.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StockRelatedList;
