
import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';
import StatCard from './StatCard';

const UserStats = () => {
  return (
    <div className="px-4 mb-6">
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<TrendingUp size={14} className="text-emerald-400" />}
          title="Top Performer"
          value="+22.67%"
          subtitle=""
          variant="performance"
        />
        <StatCard
          icon={<BarChart3 size={14} className="text-muted-foreground" />}
          title="Avg Return"
          value="+11.39%"
          subtitle="5 portfolios"
          variant="default"
        />
      </div>
    </div>
  );
};

export default UserStats;
