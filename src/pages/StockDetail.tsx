
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { stockData, Stock } from '@/data/stocks';

import StockInfoDisplay from '@/components/stock-detail/StockInfoDisplay';
import ChartTimeRangeSelector from '@/components/stock-detail/ChartTimeRangeSelector';
import StockChartCard from '@/components/stock-detail/StockChartCard';
import StockStatsGrid from '@/components/stock-detail/StockStatsGrid';
import StockAboutCard from '@/components/stock-detail/StockAboutCard';
import StockNotFound from '@/components/stock-detail/StockNotFound';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';

const StockDetail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const stock = stockData[symbol as keyof typeof stockData];

  useEffect(() => {
    // No interval needed anymore
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

  return (
    <div className="min-h-screen bg-background relative">
       <div className="absolute top-4 left-4 z-10">
         <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full w-10 h-10 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
        >
          <ArrowLeft size={20} />
        </Button>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <Button 
            size="icon" 
            variant="ghost"
            onClick={() => setIsWatchlisted(!isWatchlisted)}
            className="rounded-full w-10 h-10 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
        >
            <Star size={20} className={`transition-colors duration-300 ${isWatchlisted ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
        </Button>
      </div>


      <ScrollArea className="h-screen">
        <div className="pt-20 pb-8">
          <div className="px-4">
            <StockInfoDisplay stock={stock} />
          </div>
          
          <div className="mt-6">
            <StockChartCard chartData={chartData} />
          </div>

          <div className="mt-6 px-4">
            <ChartTimeRangeSelector 
              selectedRange={chartTimeRange}
              onRangeChange={setChartTimeRange}
            />
          </div>
          
          <div className="mt-8 px-4 space-y-4">
            <StockStatsGrid stock={stock} />
            <StockAboutCard stock={stock} />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default StockDetail;
