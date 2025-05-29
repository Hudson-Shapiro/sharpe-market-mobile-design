
import React from 'react';

interface PortfolioCardFooterProps {
  createdDate: string;
  lastEditedDate: string;
  isOwned?: boolean;
  isSubscribed?: boolean;
  author?: string;
}

const PortfolioCardFooter = ({ 
  createdDate, 
  lastEditedDate, 
  isOwned = false, 
  isSubscribed = false, 
  author 
}: PortfolioCardFooterProps) => {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground">
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
      </div>
    </div>
  );
};

export default PortfolioCardFooter;
