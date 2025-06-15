
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ActivityCardProps {
  activity: {
    portfolio: string;
    stock: string;
    date: string;
    quantity: number;
    price: number;
    amount: number;
    type: 'BUY' | 'SELL';
  };
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  const formatDate = (dateStr: string) => {
    const [month, day, year] = dateStr.split('-');
    return `${month}/${day}`;
  };

  return (
    <Card 
      className={`border transition-all duration-300 hover:scale-[1.01] hover:shadow-lg relative overflow-hidden group ${
        activity.type === 'BUY' 
          ? 'bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 hover:from-emerald-500/10 hover:to-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 hover:shadow-emerald-500/10' 
          : 'bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 hover:from-red-500/10 hover:to-red-500/10 border-red-500/20 hover:border-red-500/30 hover:shadow-red-500/10 bg-card/95'
      }`}
      style={{ borderRadius: '12px' }}
    >
      {/* Subtle left edge stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
        activity.type === 'BUY' ? 'bg-gradient-to-b from-emerald-400/60 to-green-500/40' : 'bg-gradient-to-b from-red-400/60 to-red-600/40'
      } group-hover:w-1 group-hover:shadow-lg ${
        activity.type === 'BUY' ? 'group-hover:shadow-emerald-500/30' : 'group-hover:shadow-red-500/30'
      }`} />
      
      <CardContent className="p-2.5 pl-3.5">
        {/* Single Row Layout - More Condensed */}
        <div className="flex items-center justify-between">
          {/* Left Side: Portfolio + Stock Info */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold transition-all duration-300 ${
              activity.type === 'BUY' 
                ? 'bg-gradient-to-r from-emerald-500/30 to-green-500/40 text-emerald-400 shadow-md shadow-emerald-500/20' 
                : 'bg-gradient-to-r from-red-500/30 to-red-600/40 text-red-400 shadow-md shadow-red-500/20'
            }`} style={{ borderRadius: '8px' }}>
              {activity.type === 'BUY' ? <TrendingUp size={8} className="drop-shadow-sm" /> : <TrendingDown size={8} className="drop-shadow-sm" />}
              {activity.type}
            </span>
            
            <div className="flex flex-col min-w-0">
              <div className="font-semibold text-foreground text-sm truncate">
                {activity.portfolio}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-bold text-foreground">{activity.stock}</span>
                <span className="font-mono">
                  {activity.quantity} × ${activity.price.toFixed(2)}
                </span>
                <span>{formatDate(activity.date)}</span>
              </div>
            </div>
          </div>
          
          {/* Right Side: Amount */}
          <div className={`font-bold text-lg font-mono ${
            activity.type === 'BUY' ? 'text-emerald-400' : 'text-red-400'
          }`}>
            {activity.type === 'BUY' ? '+' : '-'}${activity.amount.toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
