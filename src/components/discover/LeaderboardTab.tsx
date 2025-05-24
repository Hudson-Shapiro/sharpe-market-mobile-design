
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Crown, Star } from 'lucide-react';
import MiniChart from './MiniChart';

const LeaderboardTab = () => {
  const topPerformers = [
    {
      rank: 1,
      username: "Josh",
      author: "by Joshua Kroll",
      topPercent: "Top 1%",
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
      topPercent: "Top 1%",
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
      topPercent: "Top 3%",
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
      topPercent: "Top 5%",
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
      topPercent: "Top 5%",
      sharpe: 6.2,
      return: 28.9,
      vsSpReturn: 21.4,
      chartData: [18, 22, 25, 27, 29, 28, 29],
      isFeatured: false
    }
  ];

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-400/30";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30";
    if (rank === 3) return "bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-400/30";
    return "bg-secondary text-secondary-foreground";
  };

  const getTopPercentBadgeColor = (percent: string) => {
    if (percent === "Top 1%") return "bg-gradient-to-r from-emerald-400 to-green-500 text-white";
    if (percent === "Top 3%") return "bg-gradient-to-r from-emerald-500 to-teal-500 text-white";
    return "bg-gradient-to-r from-teal-500 to-cyan-500 text-white";
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Top Performers</h2>
        <Badge variant="outline" className="text-muted-foreground">
          This Month
        </Badge>
      </div>

      {topPerformers.map((performer) => (
        <div 
          key={performer.rank}
          className="bg-card border border-border rounded-xl p-3 hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
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
                  {performer.topPercent}
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

      <button className="w-full mt-6 py-3 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors border border-emerald-400/30 rounded-xl hover:bg-emerald-400/10">
        View Full Leaderboard
      </button>
    </div>
  );
};

export default LeaderboardTab;
