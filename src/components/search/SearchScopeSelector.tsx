
import React from 'react';
import { BarChart3, Users, TrendingUp } from 'lucide-react';

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
    <div className="p-4 bg-background">
      <div className="flex gap-1.5 bg-secondary/30 p-1.5 rounded-2xl">
        {scopes.map((scope) => {
          const Icon = scope.icon;
          const isActive = searchScope === scope.id;
          
          return (
            <button
              key={scope.id}
              className={`flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex-1 ${
                isActive 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
              onClick={() => setSearchScope(scope.id)}
            >
              <Icon size={16} className="mr-2" />
              {scope.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchScopeSelector;
