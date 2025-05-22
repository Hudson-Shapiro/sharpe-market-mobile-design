
import React from 'react';
import { ChevronRight } from 'lucide-react';
import PortfolioCard from '../portfolio/PortfolioCard';

interface PortfolioSectionProps {
  title: string;
  portfolios: Array<{
    id: string;
    name: string;
    return: number;
    sharpeRatio?: number;
    isOwned?: boolean;
    isSubscribed?: boolean;
    author?: string;
  }>;
  showViewAll?: boolean;
}

const PortfolioSection = ({ title, portfolios, showViewAll = true }: PortfolioSectionProps) => {
  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {showViewAll && (
          <a 
            href="/portfolios" 
            className="flex items-center gap-1 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
          >
            View all
            <ChevronRight size={16} />
          </a>
        )}
      </div>
      
      <div className="grid gap-3">
        {portfolios.map((portfolio) => (
          <PortfolioCard
            key={portfolio.id}
            {...portfolio}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
