
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  variant?: 'default' | 'performance';
}

const StatCard = ({ icon, title, value, subtitle, variant = 'default' }: StatCardProps) => {
  const isPerformance = variant === 'performance';
  
  return (
    <div className={`p-4 rounded-xl border ${isPerformance ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-card border-border'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xs text-muted-foreground font-medium">{title}</span>
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-xl font-bold ${isPerformance ? 'text-emerald-400' : 'text-foreground'}`}>
          {value}
        </span>
        {subtitle && (
          <span className="text-xs text-muted-foreground ml-1">{subtitle}</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
