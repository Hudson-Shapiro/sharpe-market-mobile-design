
import { BarChart3, Bell, DollarSign, Vote } from 'lucide-react';

export const stockData = {
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
      { type: "earnings" as const, date: "2024-02-21", title: "Q4 2024 Earnings Report", icon: BarChart3 },
      { type: "dividend" as const, date: "2024-03-15", title: "Dividend Payment", icon: DollarSign },
      { type: "news" as const, date: "2024-01-28", title: "Launches new Blackwell architecture", icon: Bell }
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
      { type: "earnings" as const, date: "2024-01-30", title: "Q4 2024 Earnings Report", icon: BarChart3 }
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
      { type: "earnings" as const, date: "2024-01-24", title: "Q4 2024 Earnings Report", icon: BarChart3 },
      { type: "vote" as const, date: "2024-06-13", title: "Annual Shareholder Meeting", icon: Vote }
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

export type Stock = (typeof stockData)[keyof typeof stockData];
