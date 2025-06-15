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
      {/* Clean Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full w-10 h-10"
            >
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{stock.symbol}</h1>
              <p className="text-sm text-muted-foreground">{stock.name}</p>
            </div>
          </div>
          <Button size="sm" variant="outline" className="rounded-full">
            <Star size={16} />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-4 space-y-6">
          {/* Clean Price Section */}
          <div className="text-left space-y-2">
            <div className="text-4xl font-bold text-foreground">
              ${stock.price.toFixed(2)}
            </div>
            <div className={`flex items-center gap-2 text-lg font-medium ${
              isPositive ? 'text-emerald-500' : 'text-red-500'
            }`}>
              {isPositive ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
              {isPositive ? '+' : ''}${stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%) Today
            </div>
          </div>

          {/* Clean Chart Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex bg-secondary/20 rounded-full p-1 text-sm">
                {chartTimeRanges.map((period) => (
                  <button 
                    key={period}
                    onClick={() => setChartTimeRange(period)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      chartTimeRange === period 
                        ? "bg-emerald-500 text-white font-semibold" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgb(55 65 81)" opacity={0.3} />
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
                      backgroundColor: 'rgb(30 41 59)',
                      border: '1px solid rgb(71 85 105)',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                    formatter={(value) => [`$${value}`, 'Price']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="rgb(34 197 94)"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: "rgb(34 197 94)", strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground">Market Cap</span>
                <span className="font-medium">{stock.marketCap}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground">P/E Ratio</span>
                <span className="font-medium">{stock.pe}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground">52W High</span>
                <span className="font-medium">${stock.high52w}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground">52W Low</span>
                <span className="font-medium">${stock.low52w}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/20">
                <span className="text-muted-foreground">Volume</span>
                <span className="font-medium">{stock.volume}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Beta</span>
                <span className="font-medium">{stock.beta}</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{stock.description}</p>
          </div>

          {/* Events Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Upcoming Events</h3>
            <div className="space-y-3">
              {stock.events.map((event, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-border/20 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">
                      {event.type === 'earnings' && '📊'}
                      {event.type === 'dividend' && '💸'}
                      {event.type === 'news' && '📰'}
                      {event.type === 'vote' && '🗳️'}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default StockDetail;
