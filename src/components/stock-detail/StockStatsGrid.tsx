
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, BarChart3, TrendingUp, TrendingDown, Volume2, Activity, LucideIcon } from 'lucide-react';
import { Stock } from '@/data/stocks';

interface Stat {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

const StockStatsGrid: React.FC<{ stock: Stock }> = ({ stock }) => {
  const statsData: Stat[] = [
    { label: "Market Cap", value: stock.marketCap, icon: Building, color: "emerald" },
    { label: "P/E Ratio", value: stock.pe, icon: BarChart3, color: "blue" },
    { label: "52W High", value: `$${stock.high52w}`, icon: TrendingUp, color: "green" },
    { label: "52W Low", value: `$${stock.low52w}`, icon: TrendingDown, color: "red" },
    { label: "Volume", value: stock.volume, icon: Volume2, color: "purple" },
    { label: "Beta", value: stock.beta, icon: Activity, color: "orange" }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
        <BarChart3 size={20} className="text-emerald-400" />
        Key Statistics
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {statsData.map((stat) => (
          <Card 
            key={stat.label}
            className={`bg-gradient-to-br from-${stat.color}-500/10 via-${stat.color}-500/5 to-transparent backdrop-blur-sm border-${stat.color}-500/20 hover:border-${stat.color}-500/40 transition-all duration-300 hover:scale-105 cursor-pointer`}
            style={{ borderRadius: '12px' }}
          >
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-base font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-2 bg-${stat.color}-500/20 rounded-lg`}>
                  <stat.icon size={14} className={`text-${stat.color}-400`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StockStatsGrid;
