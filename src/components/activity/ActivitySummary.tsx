
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Briefcase, Users, Star, Percent } from 'lucide-react';

const ActivitySummary = () => {
  const summaryData = {
    totalPortfolios: 6,
    subscribedPortfolios: 12,
    bestPerformingPortfolio: 'Tech Fund',
    avgAllocation: 47.2
  };

  const summaryItems = [
    {
      label: "My Portfolios",
      value: summaryData.totalPortfolios,
      icon: Briefcase,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10"
    },
    {
      label: "Subscribed",
      value: summaryData.subscribedPortfolios,
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      label: "Avg Allocation",
      value: `${summaryData.avgAllocation}%`,
      icon: Percent,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      label: "Best Performing",
      value: summaryData.bestPerformingPortfolio,
      icon: Star,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <Card className="mb-6 bg-gradient-to-br from-background via-background/50 to-secondary/20 border-border/20 backdrop-blur-sm shadow-lg" style={{ borderRadius: '16px' }}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 bg-gradient-to-br from-emerald-400/20 to-green-500/20 shadow-md rounded-xl">
            <Trophy className="text-emerald-400 drop-shadow-sm" size={16} />
          </div>
          <h3 className="text-base font-bold text-foreground">Activity Summary</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          {summaryItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 ${item.bgColor} rounded-lg`}>
                    <Icon className={item.color} size={14} />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
                <p className={`text-sm font-bold font-mono ${item.color} truncate pl-2`}>
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivitySummary;
