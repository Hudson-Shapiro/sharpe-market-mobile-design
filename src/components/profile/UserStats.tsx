
import React, { useState } from 'react';
import { TrendingUp, BarChart3, Users } from 'lucide-react';
import StatCard from './StatCard';
import SubscriberDashboard from './SubscriberDashboard';

const UserStats = () => {
  const [showSubscriberDashboard, setShowSubscriberDashboard] = useState(false);

  return (
    <>
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-2">
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
          <StatCard
            icon={<Users size={14} className="text-blue-400" />}
            title="Subscribers"
            value="1,247"
            subtitle="this month: +89"
            variant="subscribers"
            onClick={() => setShowSubscriberDashboard(true)}
            clickable
          />
        </div>
      </div>

      {showSubscriberDashboard && (
        <SubscriberDashboard 
          isOpen={showSubscriberDashboard}
          onClose={() => setShowSubscriberDashboard(false)}
        />
      )}
    </>
  );
};

export default UserStats;
