
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { stockData, Stock } from '@/data/stocks';

import StockHeader from '@/components/stock-detail/StockHeader';
import StockPriceCard from '@/components/stock-detail/StockPriceCard';
import StockChartCard from '@/components/stock-detail/StockChartCard';
import StockStatsGrid from '@/components/stock-detail/StockStatsGrid';
import StockHoldingsCard from '@/components/stock-detail/StockHoldingsCard';
import StockAboutCard from '@/components/stock-detail/StockAboutCard';
import StockEventsCard from '@/components/stock-detail/StockEventsCard';
import StockRelatedList from '@/components/stock-detail/StockRelatedList';
import StockNotFound from '@/components/stock-detail/StockNotFound';

const StockDetail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const stock = stockData[symbol as keyof typeof stockData];

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  // Reset state when symbol changes
  useEffect(() => {
      setChartTimeRange("1D");
      setIsWatchlisted(false);
      window.scrollTo(0, 0);
  }, [symbol]);

  if (!stock) {
    return <StockNotFound symbol={symbol} onGoBack={() => navigate(-1)} />;
  }

  const chartData = stock.chartData[chartTimeRange as keyof typeof stock.chartData] || stock.chartData["1D"];

  const relatedStocks = Object.values(stockData)
    .filter((s: Stock) => s.symbol !== stock.symbol)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <StockHeader 
        stock={stock}
        isWatchlisted={isWatchlisted}
        onWatchlistToggle={() => setIsWatchlisted(!isWatchlisted)}
        onGoBack={() => navigate(-1)}
      />

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-4 space-y-4 pb-8">
          <StockPriceCard stock={stock} lastUpdated={lastUpdated} />
          <StockChartCard 
            chartData={chartData}
            chartTimeRange={chartTimeRange}
            onTimeRangeChange={setChartTimeRange}
          />
          <StockStatsGrid stock={stock} />
          <StockHoldingsCard stock={stock} />
          <StockAboutCard stock={stock} />
          <StockEventsCard events={stock.events} />
          <StockRelatedList 
            relatedStocks={relatedStocks}
            onStockClick={(newSymbol) => navigate(`/stock/${newSymbol}`)}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default StockDetail;
