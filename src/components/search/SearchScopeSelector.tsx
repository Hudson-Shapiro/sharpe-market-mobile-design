
import React from 'react';
import { BarChart3, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchScopeSelectorProps {
  searchScope: string;
  setSearchScope: (scope: string) => void;
}

const SearchScopeSelector = ({ searchScope, setSearchScope }: SearchScopeSelectorProps) => {
  const scopes = [
    { id: 'portfolios', label: 'Portfolios', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'stocks', label: 'Stocks', icon: TrendingUp },
  ];

  return (
    <div className="px-4 py-2 bg-background">
      <div className="flex gap-2">
        {scopes.map((scope) => {
          const Icon = scope.icon;
          const isActive = searchScope === scope.id;
          
          return (
            <Button
              key={scope.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 text-xs font-medium ${
                isActive 
                  ? 'bg-white text-black hover:bg-white/90' 
                  : 'border-border/50 hover:bg-secondary/50'
              }`}
              onClick={() => setSearchScope(scope.id)}
            >
              <Icon size={14} />
              {scope.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchScopeSelector;
