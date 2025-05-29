
import React from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

interface SearchHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchHeader = ({ searchQuery, setSearchQuery }: SearchHeaderProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="p-4 flex items-center gap-3">
      <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
        <X size={24} />
      </button>
      <div className="flex-1 relative">
        <div className="flex items-center bg-secondary/70 rounded-2xl py-3 px-4 border border-border/50 shadow-sm">
          <SearchIcon size={20} className="text-muted-foreground mr-3" />
          <Input 
            type="text" 
            placeholder="Search portfolios, users, stocks..." 
            className="bg-transparent border-none focus:outline-none w-full h-auto p-0 placeholder:text-muted-foreground/70 font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")} 
              className="text-muted-foreground hover:text-foreground transition-colors ml-2"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      <button className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" onClick={handleClose}>
        Cancel
      </button>
    </div>
  );
};

export default SearchHeader;
