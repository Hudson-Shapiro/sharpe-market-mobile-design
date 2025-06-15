
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import { Stock } from '@/data/stocks';

const StockAboutCard: React.FC<{ stock: Stock }> = ({ stock }) => (
  <Card className="bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border-border/30" style={{ borderRadius: '12px' }}>
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-base">
        <Info size={18} className="text-blue-400" />
        About {stock.symbol}
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <p className="text-muted-foreground leading-relaxed mb-3 text-sm">{stock.description}</p>
      <div className="flex flex-wrap gap-2">
        {stock.sectors.map((sector) => (
          <Badge 
            key={sector} 
            variant="secondary" 
            className="bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors cursor-pointer text-xs"
            style={{ borderRadius: '8px' }}
          >
            {sector}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StockAboutCard;
