
import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
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
    <div className="p-4 pb-2 flex items-center gap-3">
      {/* Search bar now matches discover page size exactly */}
      <div className="flex-1 relative">
        <div className="flex items-center bg-card rounded-xl py-2.5 px-4">
          <SearchIcon size={20} className="text-muted-foreground mr-2" />
          <Input 
            type="text" 
            placeholder="Search portfolios, users, stocks..." 
            className="bg-transparent border-none focus:outline-none w-full h-auto p-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      <button className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors whitespace-nowrap" onClick={handleClose}>
        Cancel
      </button>
    </div>
  );
};

export default SearchHeader;
