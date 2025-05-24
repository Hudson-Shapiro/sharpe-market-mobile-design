
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface Action {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface QuickActionCardProps {
  action: Action;
}

const QuickActionCard = ({ action }: QuickActionCardProps) => {
  const Icon = action.icon;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group cursor-pointer animate-pulse-slow">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
            <Icon size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground group-hover:text-emerald-400 transition-colors">
              {action.title}
            </h4>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </div>
          <div className="text-muted-foreground group-hover:text-emerald-400 transition-colors">
            →
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;
