
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PortfolioCardFooterProps {
  createdDate: string;
  lastEditedDate: string;
  isOwned?: boolean;
  isSubscribed?: boolean;
  author?: string;
  isExpanded?: boolean;
}

const PortfolioCardFooter = ({ 
  createdDate, 
  lastEditedDate, 
  isOwned = false, 
  isSubscribed = false, 
  author,
  isExpanded = false
}: PortfolioCardFooterProps) => {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground relative">
      <div className="flex items-center gap-2">
        <span>📅 {createdDate} · ✏️ {lastEditedDate}</span>
      </div>
      
      {/* Ownership/Creator Info */}
      <div className="flex items-center gap-2">
        {isOwned && (
          <span className="text-emerald-400 font-medium">Your Portfolio</span>
        )}
        {author && isSubscribed && (
          <span className="text-muted-foreground">👤 by {author}</span>
        )}
        
        {/* Dropdown Chevron */}
        <div className="opacity-60 hover:opacity-100 transition-opacity duration-200 ml-1">
          {isExpanded ? (
            <ChevronUp size={12} className="text-muted-foreground transition-transform duration-200" />
          ) : (
            <ChevronDown size={12} className="text-muted-foreground transition-transform duration-200" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardFooter;
