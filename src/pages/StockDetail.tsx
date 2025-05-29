import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Volume2, Calendar, DollarSign, Percent, Building, Users, Star, Clock, Bell, Vote, BarChart3, Eye, Info, Heart, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Bar, BarChart, ComposedChart } from 'recharts';

const StockDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");
  const [showVolume, setShowVolume] = useState(false);
  const [chartType, setChartType] = useState("line");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const chartTimeRanges = ["1D", "5D", "1M", "3M", "6M", "1Y"];

  // Mock stock data - enhanced with more realistic data
  const stockData = {
    "NVDA": {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.32,
      change: 45.67,
      changePercent: 5.51,
      logo: "🚀",
      description: "NVIDIA Corporation designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.",
      marketCap: "2.16T",
      volume: "89.3M",
      pe: 65.2,
      high52w: 950.02,
      low52w: 180.00,
      beta: 1.75,
      dividend: "0.16%",
      dayRange: { low: 829.65, high: 875.32 },
      sectors: ["AI", "Gaming", "Automotive", "HPC", "Cloud"],
      events: [
        { type: "earnings", date: "2024-02-21", title: "Q4 2024 Earnings Report", icon: BarChart3 },
        { type: "dividend", date: "2024-03-15", title: "Dividend Payment", icon: DollarSign },
        { type: "news", date: "2024-01-28", title: "Launches new Blackwell architecture", icon: Bell }
      ],
      holdings: {
        portfolios: 6,
        topHolder: "Tech Growth Fund",
        avgBuyPrice: 642.00,
        sentiment: 82
      },
      chartData: {
        "1D": [
          { time: "9:30", price: 829.65, volume: 2.1 },
          { time: "10:00", price: 835.20, volume: 3.2 },
          { time: "10:30", price: 842.15, volume: 2.8 },
          { time: "11:00", price: 838.90, volume: 4.1 },
          { time: "11:30", price: 845.67, volume: 3.5 },
          { time: "12:00", price: 851.23, volume: 2.9 },
          { time: "12:30", price: 848.45, volume: 3.7 },
          { time: "1:00", price: 856.78, volume: 4.2 },
          { time: "1:30", price: 862.34, volume: 3.8 },
          { time: "2:00", price: 859.12, volume: 3.1 },
          { time: "2:30", price: 867.89, volume: 4.5 },
          { time: "3:00", price: 872.45, volume: 3.9 },
          { time: "3:30", price: 875.32, volume: 5.2 }
        ]
      }
    },
    "AMD": {
      symbol: "AMD",
      name: "Advanced Micro Devices",
      price: 178.90,
      change: 12.45,
      changePercent: 7.48,
      logo: "💻",
      description: "Advanced Micro Devices designs and produces microprocessors, chipsets, graphics processing units, and related technologies for business and consumer markets.",
      marketCap: "288.5B",
      volume: "45.2M",
      pe: 28.4,
      high52w: 227.30,
      low52w: 93.12,
      beta: 1.92,
      dividend: "0.00%",
      dayRange: { low: 166.45, high: 178.90 },
      sectors: ["Semiconductors", "Gaming", "AI", "Cloud"],
      events: [
        { type: "earnings", date: "2024-01-30", title: "Q4 2024 Earnings Report", icon: BarChart3 }
      ],
      holdings: {
        portfolios: 4,
        topHolder: "Semiconductor Fund",
        avgBuyPrice: 145.30,
        sentiment: 78
      },
      chartData: {
        "1D": [
          { time: "9:30", price: 166.45, volume: 1.8 },
          { time: "10:00", price: 169.20, volume: 2.1 },
          { time: "10:30", price: 172.15, volume: 2.5 },
          { time: "11:00", price: 170.90, volume: 1.9 },
          { time: "11:30", price: 174.67, volume: 3.2 },
          { time: "12:00", price: 176.23, volume: 2.8 },
          { time: "12:30", price: 175.45, volume: 2.3 },
          { time: "1:00", price: 177.78, volume: 3.1 },
          { time: "1:30", price: 178.90, volume: 2.7 }
        ]
      }
    },
    "TSLA": {
      symbol: "TSLA",
      name: "Tesla Inc",
      price: 245.67,
      change: 18.23,
      changePercent: 8.01,
      logo: "⚡",
      description: "Tesla designs, develops, manufactures, and sells fully electric vehicles, energy generation and storage systems.",
      marketCap: "782.1B",
      volume: "67.3M",
      pe: 42.7,
      high52w: 299.29,
      low52w: 138.80,
      beta: 2.31,
      dividend: "0.00%",
      dayRange: { low: 227.44, high: 245.67 },
      sectors: ["EV", "Energy", "Automotive", "AI", "Solar"],
      events: [
        { type: "earnings", date: "2024-01-24", title: "Q4 2024 Earnings Report", icon: BarChart3 },
        { type: "vote", date: "2024-06-13", title: "Annual Shareholder Meeting", icon: Vote }
      ],
      holdings: {
        portfolios: 8,
        topHolder: "Clean Energy Fund",
        avgBuyPrice: 198.45,
        sentiment: 85
      },
      chartData: {
        "1D": [
          { time: "9:30", price: 227.44, volume: 3.2 },
          { time: "10:00", price: 232.15, volume: 4.1 },
          { time: "10:30", price: 238.67, volume: 3.8 },
          { time: "11:00", price: 241.23, volume: 2.9 },
          { time: "11:30", price: 243.89, volume: 3.5 },
          { time: "12:00", price: 245.67, volume: 4.2 }
        ]
      }
    }
  };

  const stock = stockData[symbol as keyof typeof stockData];

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!stock) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Stock Not Found</h1>
          <p className="text-muted-foreground mb-4">The stock symbol "{symbol}" was not found.</p>
          <Button onClick={() => navigate(-1)} style={{ borderRadius: '8px' }}>
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const chartData = stock.chartData[chartTimeRange] || stock.chartData["1D"];
  const isPositive = stock.change >= 0;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const relatedStocks = Object.values(stockData)
    .filter(s => s.symbol !== stock.symbol)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Compact Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full w-8 h-8"
            >
              <ArrowLeft size={16} />
            </Button>
            <div>
              <h1 className="text-base font-bold">{stock.symbol}</h1>
              <p className="text-xs text-muted-foreground">{stock.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={isPositive ? "default" : "destructive"} className="text-xs px-2 py-0.5 rounded-full h-6">
              {isPositive ? "GAINING" : "FALLING"}
            </Badge>
            <Button size="sm" variant="outline" className="rounded-full h-7 px-2 text-xs">
              <Star size={12} className="mr-1" />
              Watch
            </Button>
            <Button size="sm" variant="outline" className="rounded-full h-7 px-2 text-xs">
              <Bell size={12} className="mr-1" />
              Alert
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-65px)]">
        <div className="p-3 space-y-4 pb-20">
          {/* Compact Hero Price Section */}
          <Card className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 border-none shadow-sm" style={{ borderRadius: '12px' }}>
            <CardContent className="p-3">
              <div className="text-center">
                <div className={`text-3xl font-bold mb-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  ${stock.price.toFixed(2)}
                </div>
                <div className={`flex items-center justify-center gap-2 text-base font-semibold mb-1 ${
                  isPositive ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                </div>
                <div className="text-xs text-muted-foreground">
                  Updated {formatTime(lastUpdated)} · Vol {stock.volume}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compact Chart Section */}
          <Card style={{ borderRadius: '12px' }} className="shadow-sm">
            <CardContent className="p-3">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-1">
                  <button 
                    onClick={() => setChartType("line")}
                    className={`px-2 py-1 rounded-full text-xs transition-all ${
                      chartType === "line" 
                        ? "bg-emerald-500/20 text-emerald-400" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Line
                  </button>
                  <button 
                    onClick={() => setChartType("candle")}
                    className={`px-2 py-1 rounded-full text-xs transition-all ${
                      chartType === "candle" 
                        ? "bg-emerald-500/20 text-emerald-400" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Candles
                  </button>
                </div>
                <Button
                  variant={showVolume ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowVolume(!showVolume)}
                  className="text-xs rounded-full h-6 px-2"
                >
                  <Volume2 size={10} className="mr-1" />
                  Vol
                </Button>
              </div>
              
              <div className="flex bg-secondary/20 rounded-full p-0.5 text-xs mb-2">
                {chartTimeRanges.map((period) => (
                  <button 
                    key={period}
                    onClick={() => setChartTimeRange(period)}
                    className={`px-2 py-1 rounded-full transition-all flex-1 ${
                      chartTimeRange === period 
                        ? "bg-white text-black shadow-sm font-semibold" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(55 65 81)" />
                    <XAxis 
                      dataKey="time" 
                      stroke="rgb(156 163 175)"
                      fontSize={10}
                    />
                    <YAxis 
                      stroke="rgb(156 163 175)"
                      fontSize={10}
                      domain={['dataMin - 5', 'dataMax + 5']}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgb(30 41 59)',
                        border: '1px solid rgb(71 85 105)',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                      formatter={(value, name) => [
                        name === 'price' ? `$${value}` : `${value}M`,
                        name === 'price' ? 'Price' : 'Volume'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke={isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)"}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 3, fill: isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)" }}
                    />
                    {showVolume && (
                      <Bar 
                        dataKey="volume" 
                        fill="rgb(99 102 241)"
                        opacity={0.3}
                        yAxisId="volume"
                      />
                    )}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Compact Stats Grid - Gemini Style */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Market Cap</span>
              <span className="text-sm font-semibold text-foreground">{stock.marketCap}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">P/E Ratio</span>
              <span className="text-sm font-semibold text-foreground">{stock.pe}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Dividend</span>
              <span className="text-sm font-semibold text-foreground">{stock.dividend}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Beta</span>
              <span className="text-sm font-semibold text-foreground">{stock.beta}</span>
            </div>
          </div>

          {/* Compact Events Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2 px-2">
              <Calendar size={14} />
              What's Happening
            </h3>
            <div className="space-y-2">
              {stock.events.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:from-blue-500/10 hover:to-purple-500/10 transition-all border border-blue-500/10">
                  <div className="flex items-center gap-2">
                    <div className="text-sm">
                      {event.type === 'earnings' && '📊'}
                      {event.type === 'dividend' && '💸'}
                      {event.type === 'news' && '📰'}
                      {event.type === 'vote' && '🗳️'}
                    </div>
                    <p className="font-medium text-foreground text-sm">{event.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Day Range */}
          <Card style={{ borderRadius: '12px' }} className="shadow-sm">
            <CardContent className="p-3">
              <h3 className="text-sm font-semibold text-foreground mb-2">Today's Range</h3>
              <div className="flex justify-between text-sm text-muted-foreground mb-1">
                <span>${stock.dayRange.low}</span>
                <span>${stock.dayRange.high}</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-1.5 relative">
                <div 
                  className="bg-gradient-to-r from-red-400 to-emerald-400 h-1.5 rounded-full"
                  style={{ width: '100%' }}
                />
                <div 
                  className="absolute top-0 w-1.5 h-1.5 bg-white border border-blue-500 rounded-full transform -translate-y-0"
                  style={{ 
                    left: `${((stock.price - stock.dayRange.low) / (stock.dayRange.high - stock.dayRange.low)) * 100}%` 
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Related Stocks - Horizontal Scroll */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 px-2">Related Stocks</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {relatedStocks.map((relatedStock) => (
                <Card 
                  key={relatedStock.symbol}
                  className="min-w-[120px] cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0"
                  onClick={() => navigate(`/stock/${relatedStock.symbol}`)}
                  style={{ borderRadius: '10px' }}
                >
                  <CardContent className="p-2">
                    <div className="text-center space-y-1">
                      <div className="text-lg">{relatedStock.logo}</div>
                      <h4 className="font-bold text-foreground text-sm">{relatedStock.symbol}</h4>
                      <div>
                        <p className="text-sm font-bold text-foreground">${relatedStock.price.toFixed(2)}</p>
                        <p className={`text-xs flex items-center justify-center gap-1 ${
                          relatedStock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {relatedStock.change >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                          {relatedStock.change >= 0 ? '+' : ''}{relatedStock.changePercent.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default StockDetail;
