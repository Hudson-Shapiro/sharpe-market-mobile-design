
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Volume2, Calendar, DollarSign, Percent, Building, Users, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const StockDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [chartTimeRange, setChartTimeRange] = useState("1D");

  const chartTimeRanges = ["1D", "5D", "1M", "3M", "6M", "1Y"];

  // Mock stock data - in real app would come from API
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
      chartData: {
        "1D": [
          { time: "9:30", price: 829.65 },
          { time: "10:00", price: 835.20 },
          { time: "10:30", price: 842.15 },
          { time: "11:00", price: 838.90 },
          { time: "11:30", price: 845.67 },
          { time: "12:00", price: 851.23 },
          { time: "12:30", price: 848.45 },
          { time: "1:00", price: 856.78 },
          { time: "1:30", price: 862.34 },
          { time: "2:00", price: 859.12 },
          { time: "2:30", price: 867.89 },
          { time: "3:00", price: 872.45 },
          { time: "3:30", price: 875.32 }
        ],
        "5D": [
          { time: "Mon", price: 810.45 },
          { time: "Tue", price: 825.67 },
          { time: "Wed", price: 842.23 },
          { time: "Thu", price: 856.78 },
          { time: "Fri", price: 875.32 }
        ],
        "1M": [
          { time: "Week 1", price: 780.23 },
          { time: "Week 2", price: 798.45 },
          { time: "Week 3", price: 825.67 },
          { time: "Week 4", price: 875.32 }
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
      chartData: {
        "1D": [
          { time: "9:30", price: 166.45 },
          { time: "10:00", price: 169.20 },
          { time: "10:30", price: 172.15 },
          { time: "11:00", price: 170.90 },
          { time: "11:30", price: 174.67 },
          { time: "12:00", price: 176.23 },
          { time: "12:30", price: 175.45 },
          { time: "1:00", price: 177.78 },
          { time: "1:30", price: 178.90 }
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
      chartData: {
        "1D": [
          { time: "9:30", price: 227.44 },
          { time: "10:00", price: 232.15 },
          { time: "10:30", price: 238.67 },
          { time: "11:00", price: 241.23 },
          { time: "11:30", price: 243.89 },
          { time: "12:00", price: 245.67 }
        ]
      }
    }
  };

  const stock = stockData[symbol as keyof typeof stockData];

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

  const keyStats = [
    { label: "Market Cap", value: stock.marketCap, icon: Building },
    { label: "Volume", value: stock.volume, icon: Volume2 },
    { label: "P/E Ratio", value: stock.pe.toString(), icon: Percent },
    { label: "52W High", value: `$${stock.high52w}`, icon: TrendingUp },
    { label: "52W Low", value: `$${stock.low52w}`, icon: TrendingDown },
    { label: "Beta", value: stock.beta.toString(), icon: Calendar },
    { label: "Dividend", value: stock.dividend, icon: DollarSign }
  ];

  const relatedStocks = Object.values(stockData)
    .filter(s => s.symbol !== stock.symbol)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollArea className="h-[calc(100vh-72px)]">
        <div className="p-4 space-y-6">
          {/* Header */}
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
                <div className="text-3xl">{stock.logo}</div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{stock.symbol}</h1>
                  <p className="text-muted-foreground">{stock.name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">
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
            </CardContent>
          </Card>

          {/* Chart Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">Price Chart</h3>
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
                    <Line 
                      type="monotone" 
                      dataKey="price" 
                      stroke={isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)"}
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: isPositive ? "rgb(34 197 94)" : "rgb(239 68 68)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Key Statistics */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-3">
              {keyStats.map((stat, index) => (
                <Card key={index} className="hover:bg-card/80 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <stat.icon size={16} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="font-semibold text-foreground">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* About Section */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-3">About {stock.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{stock.description}</p>
            </CardContent>
          </Card>

          {/* Related Stocks */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Related Stocks</h3>
            <div className="space-y-3">
              {relatedStocks.map((relatedStock) => (
                <Card 
                  key={relatedStock.symbol}
                  className="cursor-pointer hover:bg-card/80 transition-all duration-200 hover:scale-[1.02]"
                  onClick={() => navigate(`/stock/${relatedStock.symbol}`)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{relatedStock.logo}</div>
                        <div>
                          <h4 className="font-semibold text-foreground">{relatedStock.symbol}</h4>
                          <p className="text-sm text-muted-foreground">{relatedStock.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
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
