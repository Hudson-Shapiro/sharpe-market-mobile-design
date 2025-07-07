import React, { useState } from 'react';
import { X, Users, ChevronRight, ArrowLeft } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

interface SubscriberDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriberDashboard = ({ isOpen, onClose }: SubscriberDashboardProps) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<string | null>(null);

  // Mock data for portfolio subscriptions
  const portfolios = [
    {
      name: "AI Revolution",
      subscribers: 456,
      subscriberList: [
        { name: "Alex Johnson", avatar: "👨‍💼", joinedDate: "2 hours ago" },
        { name: "Sarah Williams", avatar: "👩‍🔬", joinedDate: "5 hours ago" },
        { name: "Mike Chen", avatar: "👨‍💻", joinedDate: "1 day ago" },
        { name: "Emma Davis", avatar: "👩‍💼", joinedDate: "2 days ago" },
        { name: "David Kim", avatar: "👨‍🎓", joinedDate: "3 days ago" },
        { name: "Lisa Park", avatar: "👩‍🔬", joinedDate: "4 days ago" },
        { name: "Tom Wilson", avatar: "👨‍💼", joinedDate: "5 days ago" },
        { name: "Maria Garcia", avatar: "👩‍💻", joinedDate: "1 week ago" }
      ]
    },
    {
      name: "Tech Innovators",
      subscribers: 312,
      subscriberList: [
        { name: "John Smith", avatar: "👨‍💻", joinedDate: "3 hours ago" },
        { name: "Amy Chen", avatar: "👩‍💼", joinedDate: "6 hours ago" },
        { name: "Robert Jones", avatar: "👨‍🎓", joinedDate: "2 days ago" },
        { name: "Kate Brown", avatar: "👩‍🔬", joinedDate: "3 days ago" },
        { name: "Mark Davis", avatar: "👨‍💼", joinedDate: "1 week ago" }
      ]
    },
    {
      name: "Green Energy",
      subscribers: 289,
      subscriberList: [
        { name: "Jessica Liu", avatar: "👩‍🔬", joinedDate: "1 hour ago" },
        { name: "Carlos Rodriguez", avatar: "👨‍💻", joinedDate: "4 hours ago" },
        { name: "Nina Patel", avatar: "👩‍💼", joinedDate: "1 day ago" },
        { name: "Steve Johnson", avatar: "👨‍🎓", joinedDate: "2 days ago" }
      ]
    },
    {
      name: "Blue Chip Focus",
      subscribers: 125,
      subscriberList: [
        { name: "Rachel Green", avatar: "👩‍💼", joinedDate: "2 hours ago" },
        { name: "Paul Martinez", avatar: "👨‍💻", joinedDate: "1 day ago" },
        { name: "Jennifer Lee", avatar: "👩‍🔬", joinedDate: "3 days ago" }
      ]
    },
    {
      name: "Dividend Kings",
      subscribers: 65,
      subscriberList: [
        { name: "Michael Brown", avatar: "👨‍💼", joinedDate: "5 hours ago" },
        { name: "Linda Wilson", avatar: "👩‍💻", joinedDate: "2 days ago" }
      ]
    }
  ];

  const handlePortfolioClick = (portfolioName: string) => {
    setSelectedPortfolio(portfolioName);
  };

  const handleBackClick = () => {
    setSelectedPortfolio(null);
  };

  const selectedPortfolioData = portfolios.find(p => p.name === selectedPortfolio);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-[95vw] max-h-[85vh] bg-background/95 backdrop-blur-md border border-border/40 rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 pb-2 border-b border-border/20">
          <DialogTitle className="flex items-center gap-3 text-foreground text-lg font-semibold">
            {selectedPortfolio && (
              <button 
                onClick={handleBackClick}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-secondary/50 transition-colors"
              >
                <ArrowLeft size={14} />
              </button>
            )}
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center">
              <Users size={14} className="text-blue-500" />
            </div>
            {selectedPortfolio ? `${selectedPortfolio} Subscribers` : 'Subscribers'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto p-4">
          {!selectedPortfolio ? (
            // Portfolio List View
            <div className="space-y-2">
              {portfolios.map((portfolio, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-border/40 p-3 rounded-xl cursor-pointer hover:bg-card/70 transition-colors"
                  onClick={() => handlePortfolioClick(portfolio.name)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{portfolio.name}</div>
                      <div className="text-sm text-muted-foreground">{portfolio.subscribers} subscribers</div>
                    </div>
                    <ChevronRight size={16} className="text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            // Subscriber List View
            <div className="space-y-2">
              <div className="mb-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="text-sm text-muted-foreground">Total Subscribers</div>
                <div className="text-xl font-bold text-blue-400">{selectedPortfolioData?.subscribers}</div>
              </div>
              
              {selectedPortfolioData?.subscriberList.map((subscriber, index) => (
                <Card key={index} className="bg-card/50 border-border/40 p-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/70 rounded-full flex items-center justify-center text-lg">
                      {subscriber.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{subscriber.name}</div>
                      <div className="text-xs text-muted-foreground">Joined {subscriber.joinedDate}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriberDashboard;