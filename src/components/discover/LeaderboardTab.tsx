
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Crown, Star } from 'lucide-react';
import MiniChart from './MiniChart';

const LeaderboardTab = () => {
  const [timeRange, setTimeRange] = useState("1M");
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);

  // Reduced time ranges for better mobile display
  const timeRanges = ["1D", "1M", "YTD", "1Y"];

  // Enhanced data structure with different time periods
  const performersData = {
    "1D": [
      {
        rank: 1,
        username: "Josh",
        author: "by Joshua Kroll",
        topPercent: "1%",
        sharpe: 9.2,
        return: 2.4,
        vsSpReturn: 1.8,
        chartData: [58, 59, 60, 59, 61, 60, 62],
        isFeatured: true
      },
      {
        rank: 2,
        username: "Sarah Chen",
        author: "by Sarah C.",
        topPercent: "1%",
        sharpe: 8.7,
        return: 1.9,
        vsSpReturn: 1.3,
        chartData: [44, 45, 46, 45, 47, 46, 48],
        isFeatured: true
      },
      {
        rank: 3,
        username: "Mike Johnson",
        author: "by Mike J.",
        topPercent: "10%",
        sharpe: 7.4,
        return: 1.5,
        vsSpReturn: 0.9,
        chartData: [37, 38, 39, 38, 40, 39, 41],
        isFeatured: false
      },
      {
        rank: 4,
        username: "Test",
        author: "by Test User",
        topPercent: "10%",
        sharpe: 6.8,
        return: 1.2,
        vsSpReturn: 0.6,
        chartData: [31, 32, 33, 32, 34, 33, 35],
        isFeatured: false
      },
      {
        rank: 5,
        username: "Alex Rivera",
        author: "by Alex R.",
        topPercent: "25%",
        sharpe: 6.2,
        return: 0.9,
        vsSpReturn: 0.3,
        chartData: [28, 29, 30, 29, 31, 30, 32],
        isFeatured: false
      },
      {
        rank: 6,
        username: "Emma Wilson",
        author: "by Emma W.",
        topPercent: "25%",
        sharpe: 5.8,
        return: 0.7,
        vsSpReturn: 0.1,
        chartData: [25, 26, 27, 26, 28, 27, 29],
        isFeatured: false
      },
      {
        rank: 7,
        username: "David Chen",
        author: "by David C.",
        topPercent: "50%",
        sharpe: 5.2,
        return: 0.5,
        vsSpReturn: -0.1,
        chartData: [22, 23, 24, 23, 25, 24, 26],
        isFeatured: false
      },
      {
        rank: 8,
        username: "Lisa Park",
        author: "by Lisa P.",
        topPercent: "50%",
        sharpe: 4.9,
        return: 0.3,
        vsSpReturn: -0.3,
        chartData: [20, 21, 22, 21, 23, 22, 24],
        isFeatured: false
      },
      {
        rank: 9,
        username: "Tom Rodriguez",
        author: "by Tom R.",
        topPercent: "75%",
        sharpe: 4.5,
        return: 0.1,
        vsSpReturn: -0.5,
        chartData: [18, 19, 20, 19, 21, 20, 22],
        isFeatured: false
      },
      {
        rank: 10,
        username: "Julia Kim",
        author: "by Julia K.",
        topPercent: "75%",
        sharpe: 4.2,
        return: -0.1,
        vsSpReturn: -0.7,
        chartData: [16, 17, 18, 17, 19, 18, 20],
        isFeatured: false
      }
    ],
    "1M": [
      {
        rank: 1,
        username: "Josh",
        author: "by Joshua Kroll",
        topPercent: "1%",
        sharpe: 9.2,
        return: 59.6,
        vsSpReturn: 51.2,
        chartData: [45, 52, 48, 61, 59, 65, 59],
        isFeatured: true
      },
      {
        rank: 2,
        username: "Sarah Chen",
        author: "by Sarah C.",
        topPercent: "1%",
        sharpe: 8.7,
        return: 45.3,
        vsSpReturn: 37.8,
        chartData: [30, 35, 42, 38, 45, 48, 45],
        isFeatured: true
      },
      {
        rank: 3,
        username: "Mike Johnson",
        author: "by Mike J.",
        topPercent: "10%",
        sharpe: 7.4,
        return: 38.2,
        vsSpReturn: 30.7,
        chartData: [25, 28, 32, 35, 38, 36, 38],
        isFeatured: false
      },
      {
        rank: 4,
        username: "Test",
        author: "by Test User",
        topPercent: "10%",
        sharpe: 6.8,
        return: 32.1,
        vsSpReturn: 24.6,
        chartData: [20, 25, 28, 30, 32, 31, 32],
        isFeatured: false
      },
      {
        rank: 5,
        username: "Alex Rivera",
        author: "by Alex R.",
        topPercent: "25%",
        sharpe: 6.2,
        return: 28.9,
        vsSpReturn: 21.4,
        chartData: [18, 22, 25, 27, 29, 28, 29],
        isFeatured: false
      },
      {
        rank: 6,
        username: "Emma Wilson",
        author: "by Emma W.",
        topPercent: "25%",
        sharpe: 5.8,
        return: 25.7,
        vsSpReturn: 18.2,
        chartData: [15, 19, 22, 24, 26, 25, 26],
        isFeatured: false
      },
      {
        rank: 7,
        username: "David Chen",
        author: "by David C.",
        topPercent: "50%",
        sharpe: 5.2,
        return: 22.4,
        vsSpReturn: 15.0,
        chartData: [12, 16, 19, 21, 23, 22, 22],
        isFeatured: false
      },
      {
        rank: 8,
        username: "Lisa Park",
        author: "by Lisa P.",
        topPercent: "50%",
        sharpe: 4.9,
        return: 19.8,
        vsSpReturn: 12.3,
        chartData: [10, 14, 17, 19, 20, 19, 20],
        isFeatured: false
      },
      {
        rank: 9,
        username: "Tom Rodriguez",
        author: "by Tom R.",
        topPercent: "75%",
        sharpe: 4.5,
        return: 17.2,
        vsSpReturn: 9.7,
        chartData: [8, 12, 15, 17, 18, 17, 17],
        isFeatured: false
      },
      {
        rank: 10,
        username: "Julia Kim",
        author: "by Julia K.",
        topPercent: "75%",
        sharpe: 4.2,
        return: 14.9,
        vsSpReturn: 7.4,
        chartData: [6, 10, 13, 15, 16, 15, 15],
        isFeatured: false
      }
    ],
    "YTD": [
      {
        rank: 1,
        username: "Josh",
        author: "by Joshua Kroll",
        topPercent: "1%",
        sharpe: 9.2,
        return: 89.2,
        vsSpReturn: 76.8,
        chartData: [30, 42, 38, 55, 62, 78, 72],
        isFeatured: true
      },
      {
        rank: 2,
        username: "Sarah Chen",
        author: "by Sarah C.",
        topPercent: "1%",
        sharpe: 8.7,
        return: 71.5,
        vsSpReturn: 59.2,
        chartData: [20, 28, 35, 42, 55, 68, 62],
        isFeatured: true
      },
      {
        rank: 3,
        username: "Mike Johnson",
        author: "by Mike J.",
        topPercent: "10%",
        sharpe: 7.4,
        return: 59.8,
        vsSpReturn: 47.5,
        chartData: [15, 22, 30, 38, 48, 58, 52],
        isFeatured: false
      },
      {
        rank: 4,
        username: "Test",
        author: "by Test User",
        topPercent: "10%",
        sharpe: 6.8,
        return: 52.1,
        vsSpReturn: 39.8,
        chartData: [12, 18, 25, 35, 42, 50, 47],
        isFeatured: false
      },
      {
        rank: 5,
        username: "Alex Rivera",
        author: "by Alex R.",
        topPercent: "25%",
        sharpe: 6.2,
        return: 46.7,
        vsSpReturn: 34.4,
        chartData: [10, 15, 22, 30, 38, 45, 42],
        isFeatured: false
      }
    ],
    "1Y": [
      {
        rank: 1,
        username: "Josh",
        author: "by Joshua Kroll",
        topPercent: "1%",
        sharpe: 9.2,
        return: 124.7,
        vsSpReturn: 102.3,
        chartData: [25, 38, 45, 62, 78, 95, 89],
        isFeatured: true
      },
      {
        rank: 2,
        username: "Sarah Chen",
        author: "by Sarah C.",
        topPercent: "1%",
        sharpe: 8.7,
        return: 98.2,
        vsSpReturn: 76.8,
        chartData: [18, 25, 35, 48, 65, 82, 75],
        isFeatured: true
      },
      {
        rank: 3,
        username: "Mike Johnson",
        author: "by Mike J.",
        topPercent: "10%",
        sharpe: 7.4,
        return: 81.5,
        vsSpReturn: 60.1,
        chartData: [12, 20, 28, 42, 55, 70, 65],
        isFeatured: false
      },
      {
        rank: 4,
        username: "Test",
        author: "by Test User",
        topPercent: "10%",
        sharpe: 6.8,
        return: 69.8,
        vsSpReturn: 48.4,
        chartData: [10, 15, 25, 35, 48, 62, 58],
        isFeatured: false
      },
      {
        rank: 5,
        username: "Alex Rivera",
        author: "by Alex R.",
        topPercent: "25%",
        sharpe: 6.2,
        return: 61.2,
        vsSpReturn: 39.8,
        chartData: [8, 12, 20, 30, 42, 55, 52],
        isFeatured: false
      }
    ]
  };

  const topPerformers = performersData[timeRange] || performersData["1M"];
  const displayedPerformers = showFullLeaderboard ? topPerformers : topPerformers.slice(0, 5);

  const getTopPercentBadgeColor = (percent: string) => {
    if (percent === "1%") return "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg";
    if (percent === "10%") return "bg-gradient-to-r from-emerald-400 to-green-500 text-white";
    if (percent === "25%") return "bg-gradient-to-r from-blue-400 to-blue-500 text-white";
    if (percent === "50%") return "bg-gradient-to-r from-purple-400 to-purple-500 text-white";
    if (percent === "75%") return "bg-gradient-to-r from-red-400 to-red-500 text-white";
    return "bg-gradient-to-r from-gray-400 to-gray-500 text-white";
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-400/30";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30";
    if (rank === 3) return "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-400/30";
    return "bg-secondary text-secondary-foreground";
  };


  return (
    <div className="space-y-2">
      {/* Combined Header and Time Range Filter - Now Pill Style */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-foreground">Top Performers</h2>
        <div className="flex bg-secondary/30 backdrop-blur-sm rounded-full p-1 text-xs border-0 gap-0">
          {timeRanges.map((period) => (
            <button 
              key={period}
              onClick={() => setTimeRange(period)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 font-medium text-xs ${
                timeRange === period 
                  ? "bg-white text-black shadow-lg font-bold" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {displayedPerformers.map((performer) => (
        <div 
          key={performer.rank}
          className="bg-card border border-border rounded-2xl p-3 hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            {/* LEFT SECTION - User Info */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${getRankBadgeColor(performer.rank)}`}>
                {performer.rank <= 3 ? (
                  <Crown size={12} />
                ) : (
                  performer.rank
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-foreground text-base truncate">{performer.username}</h3>
                  {performer.isFeatured && (
                    <Star size={12} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">{performer.author}</p>
                <Badge 
                  className={`text-xs mt-0.5 ${getTopPercentBadgeColor(performer.topPercent)}`}
                >
                  Top {performer.topPercent}
                </Badge>
              </div>
            </div>

            {/* CENTER SECTION - Mini Graph */}
            <div className="flex-shrink-0 bg-secondary/30 rounded-lg p-2">
              <MiniChart data={performer.chartData} width={50} height={20} />
            </div>

            {/* RIGHT SECTION - Performance Stats */}
            <div className="text-right flex-shrink-0 min-w-[100px]">
              <div className="text-xs text-muted-foreground font-medium">
                Sharpe {performer.sharpe}
              </div>
              <div className="text-lg font-bold text-emerald-400 flex items-center justify-end gap-1">
                <TrendingUp size={14} />
                +{performer.return}%
              </div>
              <div className="text-xs text-muted-foreground">
                +{performer.vsSpReturn}% vs S&P
              </div>
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={() => setShowFullLeaderboard(!showFullLeaderboard)}
        className="w-full mt-6 py-3 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors border border-emerald-400/30 rounded-2xl hover:bg-emerald-400/10"
      >
        {showFullLeaderboard ? 'Show Top 5' : 'View Full Leaderboard'}
      </button>
    </div>
  );
};

export default LeaderboardTab;
