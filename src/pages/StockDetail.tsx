
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Volume2, Calendar, DollarSign, Percent, Building, Users, Star, Clock, Bell, Vote, BarChart3, Eye, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const StockDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");
  const [showVolume, setShowVolume] = useState(false);
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
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!stock) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Stock Not Found</h1>
          <p className="text-muted-foreground mb-4">The stock symbol "{symbol}" was not found.</p>
          <Button onClick={() => navigate(-1)}>
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const chartData = stock.chartData[chartTimeRange] || stock.chartData["1D"];
  const isPositive = stock.change >= 0;

  // Determine animated icon based on change percentage
  const getAnimatedIcon = () => {
    if (stock.changePercent >= 5) return "🚀";
    if (stock.changePercent <= -5) return "📉";
    return stock.logo;
  };

  const keyStats = [
    { label: "Market Cap", value: stock.marketCap, icon: Building, tooltip: "Total market value of company shares" },
    { label: "Volume", value: stock.volume, icon: Volume2, tooltip: "Number of shares traded today" },
    { label: "P/E Ratio", value: stock.pe.toString(), icon: Percent, tooltip: "Price-to-earnings ratio" },
    { label: "52W High", value: `$${stock.high52w}`, icon: TrendingUp, tooltip: "Highest price in the last 52 weeks" },
    { label: "52W Low", value: `$${stock.low52w}`, icon: TrendingDown, tooltip: "Lowest price in the last 52 weeks" },
    { label: "Beta", value: stock.beta.toString(), icon: Calendar, tooltip: "Volatility relative to market" },
    { label: "Dividend", value: stock.dividend, icon: DollarSign, tooltip: "Annual dividend yield" }
  ];

  const relatedStocks = Object.values(stockData)
    .filter(s => s.symbol !== stock.symbol)
    .slice(0, 3);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4 space-y-6">
          {/* Enhanced Header with Animation */}
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-secondary"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="text-3xl animate-pulse">{getAnimatedIcon()}</div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{stock.symbol}</h1>
                  <p className="text-muted-foreground">{stock.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Last updated: {formatTime(lastUpdated)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Price Section */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2 animate-fade-in">
                    ${stock.price.toFixed(2)}
                  </div>
                  <div className={`flex items-center gap-2 text-lg font-semibold ${
                    isPositive ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                  </div>
                </div>
                <Badge className={`${
                  isPositive ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
                } text-sm px-3 py-1`}>
                  {isPositive ? 'GAINING' : 'LOSING'}
                </Badge>
              </div>
              
              {/* Day Range Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Today's Range</span>
                  <span>${stock.dayRange.low} - ${stock.dayRange.high}</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-2 relative">
                  <div 
                    className="bg-gradient-to-r from-red-400 to-emerald-400 h-2 rounded-full"
                    style={{ width: '100%' }}
                  />
                  <div 
                    className="absolute top-0 w-2 h-2 bg-white border-2 border-blue-500 rounded-full transform -translate-y-0"
                    style={{ 
                      left: `${((stock.price - stock.dayRange.low) / (stock.dayRange.high - stock.dayRange.low)) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Chart Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">Price Chart</h3>
                <div className="flex gap-2">
                  <Button
                    variant={showVolume ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowVolume(!showVolume)}
                    className="text-xs"
                  >
                    <Volume2 size={12} className="mr-1" />
                    Volume
                  </Button>
                  <div className="flex bg-secondary/50 rounded-lg p-1 text-xs">
                    {chartTimeRanges.map((period) => (
                      <button 
                        key={period}
                        onClick={() => setChartTimeRange(period)}
                        className={`px-3 py-1 rounded transition-all duration-200 ${
                          chartTimeRange === period 
                            ? "bg-emerald-500/30 text-emerald-400" 
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
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
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)" }}
                    />
                    {showVolume && (
                      <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="rgb(99 102 241)"
                        strokeWidth={2}
                        dot={false}
                        yAxisId="volume"
                      />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Events Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} />
                What's Happening
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stock.events.map((event, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <event.icon size={16} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Holdings Snapshot */}
          <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye size={20} />
                Holdings Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Held in Portfolios</p>
                <p className="text-2xl font-bold text-emerald-400">{stock.holdings.portfolios}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Top Holder</p>
                <p className="font-semibold text-foreground">{stock.holdings.topHolder}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Avg Buy Price</p>
                <p className="text-lg font-semibold text-foreground">${stock.holdings.avgBuyPrice}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Community Sentiment</p>
                <p className="text-lg font-semibold text-emerald-400">{stock.holdings.sentiment}% Bullish</p>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Key Statistics */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              {keyStats.map((stat, index) => (
                <Card key={index} className="hover:bg-card/80 transition-colors group relative">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon size={16} className="text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          {stat.label}
                          <Info size={12} className="opacity-50" />
                        </p>
                        <p className="font-semibold text-foreground">{stat.value}</p>
                      </div>
                    </div>
                    {/* Tooltip would go here in a real implementation */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced About Section */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-3">About {stock.name}</h3>
              
              {/* Sector Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {stock.sectors.map((sector, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {sector}
                  </Badge>
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">{stock.description}</p>
              
              {/* Key highlights */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {stock.symbol} recently launched new breakthrough technologies</li>
                  <li>• Dominates market share in key segments</li>
                  <li>• Strong financial performance and growth trajectory</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Related Stocks */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Related Stocks</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {relatedStocks.map((relatedStock) => (
                <Card 
                  key={relatedStock.symbol}
                  className="min-w-[200px] cursor-pointer hover:bg-card/80 transition-all duration-200 hover:scale-[1.02] flex-shrink-0"
                  onClick={() => navigate(`/stock/${relatedStock.symbol}`)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{relatedStock.logo}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{relatedStock.symbol}</h4>
                          <Badge variant="outline" className="text-xs">
                            {relatedStock.sectors[0]}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">${relatedStock.price.toFixed(2)}</p>
                        <p className={`text-sm flex items-center gap-1 ${
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
