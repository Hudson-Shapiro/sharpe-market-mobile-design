
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
    <div className={`p-3 rounded-xl border ${isPerformance ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-card border-border'}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xs text-muted-foreground font-medium">{title}</span>
        </div>
      </div>
      <div>
        <div className={`text-xl font-bold ${isPerformance ? 'text-emerald-400' : 'text-foreground'}`}>
          {value}
        </div>
        {subtitle && (
          <div className="text-xs text-muted-foreground mt-0.5">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
