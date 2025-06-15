import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Volume2, Calendar, DollarSign, Percent, Building, Users, Star, Clock, Bell, Vote, BarChart3, Eye, Info, Activity, Shield, Briefcase } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
import MiniChart from '@/components/discover/MiniChart';

const StockDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");
  const [showVolume, setShowVolume] = useState(false);
  const [chartType, setChartType] = useState("line");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const chartTimeRanges = ["1D", "1W", "1M", "3M", "1Y", "5Y", "Max"];

  // Mock stock data - enhanced with more realistic data
  const stockData = {
    "NVDA": {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.32,
      change: 45.67,
      changePercent: 5.51,
      logo: "🚀",
      description: "NVIDIA Corporation designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.",
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
        <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50" style={{ borderRadius: '16px' }}>
          <h1 className="text-2xl font-bold text-foreground mb-2">Stock Not Found</h1>
          <p className="text-muted-foreground mb-4">The stock symbol "{symbol}" was not found.</p>
          <Button onClick={() => navigate(-1)} className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white">
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </Card>
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

  const statsData = [
    { label: "Market Cap", value: stock.marketCap, icon: Building, color: "emerald" },
    { label: "P/E Ratio", value: stock.pe, icon: BarChart3, color: "blue" },
    { label: "52W High", value: `$${stock.high52w}`, icon: TrendingUp, color: "green" },
    { label: "52W Low", value: `$${stock.low52w}`, icon: TrendingDown, color: "red" },
    { label: "Volume", value: stock.volume, icon: Volume2, color: "purple" },
    { label: "Beta", value: stock.beta, icon: Activity, color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Enhanced Header with Gradient */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-lg border-b border-border/30">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full w-10 h-10 hover:bg-secondary/50 transition-all duration-200"
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{stock.logo}</span>
                <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {stock.symbol}
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">{stock.name}</p>
            </div>
          </div>
          <Button 
            size="sm" 
            variant={isWatchlisted ? "default" : "outline"} 
            className="rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => setIsWatchlisted(!isWatchlisted)}
          >
            <Star size={16} className={isWatchlisted ? "fill-current" : ""} />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-4 space-y-4">
          {/* Enhanced Price Section with Animation */}
          <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-border/30" style={{ borderRadius: '16px' }}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl font-bold text-foreground animate-pulse-slow">
                  ${stock.price.toFixed(2)}
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-2 text-lg font-bold transition-all duration-300 ${
                    isPositive ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {isPositive ? <TrendingUp size={20} className="animate-bounce" /> : <TrendingDown size={20} className="animate-bounce" />}
                    {isPositive ? '+' : ''}${stock.change.toFixed(2)}
                  </div>
                  <div className={`text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%) Today
                  </div>
                </div>
              </div>
              
              {/* Live indicator */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Live • Last updated {formatTime(lastUpdated)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Chart Section */}
          <Card className="bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border-border/30" style={{ borderRadius: '16px' }}>
            <CardContent className="p-4">
              {/* Time Period Selector */}
              <div className="flex justify-center mb-4">
                <div className="flex bg-secondary/30 rounded-full p-1 backdrop-blur-sm">
                  {chartTimeRanges.map((period) => (
                    <button 
                      key={period}
                      onClick={() => setChartTimeRange(period)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                        chartTimeRange === period 
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg transform scale-105" 
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Chart */}
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgb(34, 197, 94)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="rgb(34, 197, 94)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(55 65 81)" opacity={0.2} />
                    <XAxis 
                      dataKey="time" 
                      stroke="rgb(156 163 175)"
                      fontSize={12}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="rgb(156 163 175)"
                      fontSize={12}
                      domain={['dataMin - 5', 'dataMax + 5']}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgb(15 23 42)',
                        border: '1px solid rgb(51 65 85)',
                        borderRadius: '12px',
                        color: 'white',
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                      }}
                      formatter={(value) => [`$${value}`, 'Price']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="rgb(34, 197, 94)"
                      strokeWidth={3}
                      fill="url(#priceGradient)"
                      dot={false}
                      activeDot={{ r: 8, fill: "rgb(34, 197, 94)", strokeWidth: 0, className: "animate-pulse" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Stats Grid */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <BarChart3 size={20} className="text-emerald-400" />
              Key Statistics
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {statsData.map((stat, index) => (
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

          {/* Portfolio Holdings Section */}
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
                    <p className="text-xs text-muted-foreground">Avg. Buy: ${stock.holdings.avgBuyPrice}</p>
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

          {/* Enhanced About Section */}
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

          {/* Enhanced Events Section */}
          <Card className="bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent backdrop-blur-sm border-orange-500/20" style={{ borderRadius: '12px' }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar size={18} className="text-orange-400" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {stock.events.map((event, index) => (
                  <Card key={index} className="bg-secondary/20 border-border/30 hover:bg-secondary/30 transition-all duration-200 cursor-pointer" style={{ borderRadius: '8px' }}>
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="text-lg">
                          {event.type === 'earnings' && '📊'}
                          {event.type === 'dividend' && '💸'}
                          {event.type === 'news' && '📰'}
                          {event.type === 'vote' && '🗳️'}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.date}</p>
                        </div>
                        <ArrowLeft size={14} className="text-muted-foreground rotate-180" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Stocks */}
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
                    onClick={() => navigate(`/stock/${relatedStock.symbol}`)}
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
                            <p className="font-medium text-foreground text-sm">${relatedStock.price}</p>
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
        </div>
      </ScrollArea>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button size="icon" className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Plus size={20} />
        </Button>
        <Button size="icon" variant="outline" className="rounded-full bg-background/80 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <Heart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default StockDetail;
