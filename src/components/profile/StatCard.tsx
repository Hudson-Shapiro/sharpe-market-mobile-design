
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  variant?: 'default' | 'performance' | 'subscribers';
  onClick?: () => void;
  clickable?: boolean;
}

const StatCard = ({ icon, title, value, subtitle, variant = 'default', onClick, clickable }: StatCardProps) => {
  const isPerformance = variant === 'performance';
  const isSubscribers = variant === 'subscribers';
  
  const getCardStyles = () => {
    if (isPerformance) return 'bg-emerald-500/10 border-emerald-500/20';
    if (isSubscribers) return 'bg-blue-500/10 border-blue-500/20';
    return 'bg-card border-border';
  };

  const getValueColor = () => {
    if (isPerformance) return 'text-emerald-400';
    if (isSubscribers) return 'text-blue-400';
    return 'text-foreground';
  };
  
  return (
    <div 
      className={`p-3 rounded-xl border ${getCardStyles()} ${clickable ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-xs text-muted-foreground font-medium">{title}</span>
        </div>
      </div>
      <div>
        <div className={`text-xl font-bold ${getValueColor()}`}>
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
