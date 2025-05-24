
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Sector {
  name: string;
  icon: string;
  change: number;
  trend: 'up' | 'down';
}

interface IndustryHeatmapProps {
  onSectorFilter?: (sector: string) => void;
}

const IndustryHeatmap = ({ onSectorFilter }: IndustryHeatmapProps) => {
  const sectors: Sector[] = [
    { name: "Tech", icon: "💻", change: 2.45, trend: 'up' },
    { name: "Energy", icon: "⚡", change: -1.23, trend: 'down' },
    { name: "Financials", icon: "🏦", change: 0.87, trend: 'up' },
    { name: "Healthcare", icon: "🏥", change: 1.56, trend: 'up' },
    { name: "Consumer", icon: "🛍️", change: -0.34, trend: 'down' },
    { name: "Industrials", icon: "🏭", change: 0.92, trend: 'up' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground">Sector Performance Today</h3>
      <div className="grid grid-cols-2 gap-3">
        {sectors.map((sector) => (
          <Card 
            key={sector.name}
            className={`cursor-pointer hover:scale-[1.02] transition-all duration-200 ${
              sector.trend === 'up' 
                ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20' 
                : 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20'
            }`}
            onClick={() => onSectorFilter?.(sector.name)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{sector.icon}</span>
                  <span className="font-medium text-foreground text-sm">{sector.name}</span>
                </div>
                <div className={`font-bold text-sm ${
                  sector.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
                </div>
              </div>
              <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    sector.trend === 'up' ? 'bg-emerald-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(Math.abs(sector.change) * 20, 100)}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IndustryHeatmap;
