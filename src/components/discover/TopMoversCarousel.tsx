
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Flame } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  isGainer: boolean;
}

const TopMoversCarousel = () => {
  const navigate = useNavigate();

  const topMovers: Stock[] = [
    { symbol: "NVDA", name: "NVIDIA Corp", price: 875.32, change: 45.67, changePercent: 5.51, isGainer: true },
    { symbol: "AMD", name: "Advanced Micro", price: 178.90, change: 12.45, changePercent: 7.48, isGainer: true },
    { symbol: "TSLA", name: "Tesla Inc", price: 245.67, change: 18.23, changePercent: 8.01, isGainer: true },
    { symbol: "META", name: "Meta Platforms", price: 312.45, change: -23.67, changePercent: -7.05, isGainer: false },
    { symbol: "NFLX", name: "Netflix Inc", price: 445.32, change: -18.90, changePercent: -4.07, isGainer: false },
    { symbol: "PYPL", name: "PayPal Holdings", price: 67.89, change: -5.67, changePercent: -7.71, isGainer: false },
  ];

  const gainers = topMovers.filter(stock => stock.isGainer).slice(0, 3);
  const losers = topMovers.filter(stock => !stock.isGainer).slice(0, 3);

  const handleStockClick = (symbol: string) => {
    navigate(`/stock/${symbol}`);
  };

  const MoversCard = ({ stocks, title, type }: { stocks: Stock[], title: string, type: 'gainers' | 'losers' }) => (
    <div className="min-w-[220px] space-y-3">
      <h4 className={`font-semibold text-sm ${type === 'gainers' ? 'text-emerald-400' : 'text-red-400'}`}>
        {title}
      </h4>
      <div className="space-y-2">
        {stocks.map((stock, index) => (
          <Card 
            key={stock.symbol} 
            className={`${type === 'gainers' ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'} hover:scale-[1.02] transition-all duration-200 cursor-pointer hover:shadow-lg`}
            style={{ borderRadius: '12px' }}
            onClick={() => handleStockClick(stock.symbol)}
          >
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {index === 0 && <Flame size={14} className={type === 'gainers' ? 'text-emerald-400' : 'text-red-400'} />}
                  <div>
                    <div className="font-bold text-foreground text-sm">{stock.symbol}</div>
                    <div className="text-xs text-muted-foreground truncate max-w-[80px]">{stock.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-foreground">${stock.price.toFixed(2)}</div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${type === 'gainers' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {type === 'gainers' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg text-foreground">Today's Top Movers</h3>
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        <MoversCard stocks={gainers} title="🔥 Top Gainers" type="gainers" />
        <MoversCard stocks={losers} title="📉 Top Losers" type="losers" />
      </div>
    </div>
  );
};

export default TopMoversCarousel;
