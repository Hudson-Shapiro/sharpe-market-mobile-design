import React from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { Card } from '@/components/ui/card';
import MiniChart from '@/components/discover/MiniChart';

interface SearchResultsListProps {
  searchFilter: string;
}

const SearchResultsList = ({ searchFilter }: SearchResultsListProps) => {
  const navigate = useNavigate();

  // Handle user click navigation
  const handleUserClick = (userName: string) => {
    // Convert user name to URL-friendly username
    const username = userName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/user/${username}`);
  };

  // Render portfolios
  const renderPortfolios = () => (
    <div className="space-y-2">
      {Array(5).fill(0).map((_, i) => (
        <PortfolioCard 
          key={`portfolio-${i}`}
          id={`${101 + i}`}
          name={["AI Revolution", "Tech Innovators", "Green Energy", "Blue Chip Focus", "Dividend Kings"][i]}
          return={[34.52, 28.71, 22.35, 19.28, 15.64][i]}
          author={["Ryan Masters", "Emma Clark", "Dr. Liu Wei", "Sarah Williams", "Robert Johnson"][i]}
          sharpeRatio={[2.14, 1.89, 1.65, 1.77, 1.92][i]}
          rank={i + 1}
        />
      ))}
    </div>
  );

  // Render users
  const renderUsers = () => (
    <div className="space-y-2">
      {Array(10).fill(0).map((_, i) => (
        <Card 
          key={`user-${i}`} 
          className="bg-card/50 backdrop-blur-sm p-3 flex items-center rounded-xl shadow-none cursor-pointer hover:bg-card/70 transition-colors"
          onClick={() => handleUserClick(["Mark Cuban", "Lisa Su", "Warren Buffet", "Catherine Wood", "Elon Musk"][i % 5])}
        >
          <div className="w-10 h-10 bg-secondary/70 rounded-full flex items-center justify-center mr-3 text-xl">
            {['🤵', '👩‍💼', '👴', '👩‍🔬', '👨‍💻'][i % 5]}
          </div>
          <div>
            <h4 className="font-medium">{
              ["Mark Cuban", "Lisa Su", "Warren Buffet", "Catherine Wood", "Elon Musk"][i % 5]
            }</h4>
            <p className="text-xs text-muted-foreground">{
              ["125K", "95K", "210K", "78K", "300K"][i % 5]
            } followers</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Best Portfolio</p>
            <p className="font-medium text-emerald-400">+{
              [25.8, 42.1, 18.9, 33.7, 55.2][i % 5]
            }%</p>
          </div>
        </Card>
      ))}
    </div>
  );

  const stockChartData = [
    [10, 20, 15, 30, 25, 40, 35],
    [30, 28, 29, 22, 24, 18, 19],
    [50, 52, 51, 55, 54, 58, 57],
    [80, 78, 77, 82, 85, 83, 88],
    [20, 30, 25, 40, 50, 60, 75],
  ];
  const stockChanges = [2.34, -1.89, 0.92, 3.45, 5.67];

  // Render stocks
  const renderStocks = () => (
    <div className="space-y-2">
      {Array(5).fill(0).map((_, i) => (
        <Card key={`stock-${i}`} className="bg-card/50 backdrop-blur-sm p-3 flex items-center justify-between rounded-xl shadow-none">
          <div>
            <h4 className="font-medium">{["AAPL", "GOOGL", "MSFT", "TSLA", "NVDA"][i]}</h4>
            <p className="text-xs text-muted-foreground">{["Apple Inc.", "Alphabet Inc.", "Microsoft Corp.", "Tesla Inc.", "NVIDIA Corp."][i]}</p>
          </div>
          <div className="flex-grow flex justify-center">
            <MiniChart data={stockChartData[i]} isPositive={stockChanges[i] >= 0} />
          </div>
          <div className="text-right w-24">
            <div className="font-medium">${[189.45, 179.12, 445.85, 183.73, 1205.32][i]}</div>
            <div className={`text-xs ${stockChanges[i] >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              {stockChanges[i] >= 0 ? '+' : ''}{stockChanges[i]}%
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="mt-0">
      {searchFilter === 'portfolios' && renderPortfolios()}
      {searchFilter === 'users' && renderUsers()}
      {searchFilter === 'stocks' && renderStocks()}
    </div>
  );
};

export default SearchResultsList;