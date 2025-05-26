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

  const getAnimatedIcon = () => {
    if (stock.changePercent >= 5) return "🚀";
    if (stock.changePercent <= -5) return "📉";
    return stock.logo;
  };

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
      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4 space-y-6 pb-20">
          {/* Premium Header */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-secondary rounded-full w-10 h-10"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="text-3xl animate-pulse">{getAnimatedIcon()}</div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{stock.symbol}</h1>
                  <p className="text-muted-foreground text-sm">{stock.name}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="rounded-full">
                <Heart size={16} className="mr-1" />
                Watchlist
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Bell size={16} className="mr-1" />
                Alerts
              </Button>
            </div>
          </div>

          {/* Premium Hero Module */}
          <Card className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 border-none shadow-2xl" style={{ borderRadius: '16px' }}>
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-1">Live Price</p>
                <div className={`text-5xl font-bold mb-2 animate-pulse ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  ${stock.price.toFixed(2)}
                </div>
                <div className={`flex items-center justify-center gap-2 text-lg font-semibold ${
                  isPositive ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                  {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                </div>
                <Badge className={`mt-2 ${
                  isPositive ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
                } px-3 py-1 rounded-full`}>
                  {isPositive ? 'GAINING' : 'LOSING'}
                </Badge>
              </div>
              <div className="text-xs text-center text-muted-foreground">
                Last updated: {formatTime(lastUpdated)} • {chartTimeRange} movement
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Chart Module */}
          <Card style={{ borderRadius: '16px' }} className="shadow-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">Price Chart</h3>
                <div className="flex gap-2">
                  <div className="flex bg-secondary/50 rounded-full p-1 text-xs">
                    <button 
                      onClick={() => setChartType("line")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 ${
                        chartType === "line" 
                          ? "bg-emerald-500/30 text-emerald-400" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Line
                    </button>
                    <button 
                      onClick={() => setChartType("candle")}
                      className={`px-3 py-1 rounded-full transition-all duration-200 ${
                        chartType === "candle" 
                          ? "bg-emerald-500/30 text-emerald-400" 
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
                    className="text-xs rounded-full"
                  >
                    <Volume2 size={12} className="mr-1" />
                    Volume
                  </Button>
                </div>
              </div>
              
              <div className="flex bg-secondary/30 rounded-full p-1 text-xs mb-4">
                {chartTimeRanges.map((period) => (
                  <button 
                    key={period}
                    onClick={() => setChartTimeRange(period)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 flex-1 ${
                      chartTimeRange === period 
                        ? "bg-white text-black shadow-md font-semibold" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(55 65 81)" />
                    <XAxis 
                      dataKey="time" 
                      stroke="rgb(156 163 175)"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="rgb(156 163 175)"
                      fontSize={12}
                      domain={['dataMin - 5', 'dataMax + 5']}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgb(30 41 59)',
                        border: '1px solid rgb(71 85 105)',
                        borderRadius: '12px',
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
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)" }}
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

          {/* Day Stats Module */}
          <Card style={{ borderRadius: '16px' }} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Day Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Today's Range</span>
                  <span>${stock.dayRange.low} - ${stock.dayRange.high}</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-3 relative">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-emerald-400 h-3 rounded-full"
                    style={{ width: '100%' }}
                  />
                  <div 
                    className="absolute top-0 w-3 h-3 bg-white border-2 border-blue-500 rounded-full transform -translate-y-0"
                    style={{ 
                      left: `${((stock.price - stock.dayRange.low) / (stock.dayRange.high - stock.dayRange.low)) * 100}%` 
                    }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>52W Range</span>
                  <span>${stock.low52w} - ${stock.high52w}</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-gray-400 to-blue-400 h-2 rounded-full"
                    style={{ 
                      width: `${((stock.price - stock.low52w) / (stock.high52w - stock.low52w)) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modular Stats Block */}
          <div className="grid grid-cols-2 gap-3">
            <Card style={{ borderRadius: '12px' }} className="text-center p-4 hover:shadow-lg transition-all">
              <div className="text-2xl mb-1">🏢</div>
              <p className="text-sm text-muted-foreground">Market Cap</p>
              <p className="text-lg font-bold text-foreground">{stock.marketCap}</p>
            </Card>
            <Card style={{ borderRadius: '12px' }} className="text-center p-4 hover:shadow-lg transition-all">
              <div className="text-2xl mb-1">📊</div>
              <p className="text-sm text-muted-foreground">P/E Ratio</p>
              <p className="text-lg font-bold text-foreground">{stock.pe}</p>
            </Card>
            <Card style={{ borderRadius: '12px' }} className="text-center p-4 hover:shadow-lg transition-all">
              <div className="text-2xl mb-1">💰</div>
              <p className="text-sm text-muted-foreground">Dividend</p>
              <p className="text-lg font-bold text-foreground">{stock.dividend}</p>
            </Card>
            <Card style={{ borderRadius: '12px' }} className="text-center p-4 hover:shadow-lg transition-all">
              <div className="text-2xl mb-1">⚡</div>
              <p className="text-sm text-muted-foreground">Beta</p>
              <p className="text-lg font-bold text-foreground">{stock.beta}</p>
            </Card>
          </div>

          {/* What's Happening - Enhanced */}
          <Card style={{ borderRadius: '16px' }} className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} />
                What's Happening
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stock.events.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border border-blue-500/20">
                  <div className="text-2xl">
                    {event.type === 'earnings' && '📊'}
                    {event.type === 'dividend' && '💸'}
                    {event.type === 'news' && '📰'}
                    {event.type === 'vote' && '🗳️'}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Holdings Snapshot */}
          <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/30" style={{ borderRadius: '16px' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye size={20} />
                Community Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Held in Portfolios</p>
                <p className="text-2xl font-bold text-emerald-400">{stock.holdings.portfolios}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Community Sentiment</p>
                <p className="text-2xl font-bold text-emerald-400">{stock.holdings.sentiment}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Top Holder</p>
                <p className="font-semibold text-foreground">{stock.holdings.topHolder}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Buy Price</p>
                <p className="text-lg font-semibold text-foreground">${stock.holdings.avgBuyPrice}</p>
              </div>
            </CardContent>
          </Card>

          {/* Related Stocks - Horizontal Scroll */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Related Stocks</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {relatedStocks.map((relatedStock) => (
                <Card 
                  key={relatedStock.symbol}
                  className="min-w-[180px] cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0"
                  onClick={() => navigate(`/stock/${relatedStock.symbol}`)}
                  style={{ borderRadius: '12px' }}
                >
                  <CardContent className="p-4">
                    <div className="text-center space-y-2">
                      <div className="text-3xl">{relatedStock.logo}</div>
                      <h4 className="font-bold text-foreground">{relatedStock.symbol}</h4>
                      <Badge variant="outline" className="text-xs rounded-full">
                        {relatedStock.sectors[0]}
                      </Badge>
                      <div>
                        <p className="text-lg font-bold text-foreground">${relatedStock.price.toFixed(2)}</p>
                        <p className={`text-sm flex items-center justify-center gap-1 ${
                          relatedStock.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {relatedStock.change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
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
