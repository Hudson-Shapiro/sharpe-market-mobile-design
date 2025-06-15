
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  TrendingUp, 
  Plus, 
  Minus, 
  BarChart3,
  ChevronLeft,
  CheckCheck
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'rank' | 'portfolio_add' | 'portfolio_sell' | 'summary';
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  icon: typeof TrendingUp;
  iconColor: string;
}

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'rank',
      title: 'Rank Updated',
      description: 'Your rank has been updated on the leaderboards - you moved up 3 positions!',
      timestamp: '2 minutes ago',
      isRead: false,
      icon: TrendingUp,
      iconColor: 'text-emerald-400'
    },
    {
      id: '2',
      type: 'portfolio_add',
      title: 'Portfolio Updated',
      description: 'Portfolio "AI Revolution" you subscribed to added NVDA to their holdings',
      timestamp: '15 minutes ago',
      isRead: false,
      icon: Plus,
      iconColor: 'text-blue-400'
    },
    {
      id: '5',
      type: 'summary',
      title: 'Weekly Summary',
      description: 'Your weekly portfolio performance summary is now available',
      timestamp: '1 day ago',
      isRead: true,
      icon: BarChart3,
      iconColor: 'text-yellow-400'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBack}
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <Bell size={20} className="text-foreground" />
              <h1 className="text-lg font-bold">Notifications</h1>
              {unreadCount > 0 && (
                <Badge className="bg-red-500 text-white text-xs">
                  {unreadCount}
                </Badge>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={markAllAsRead}
              className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-200 font-medium"
            >
              <CheckCheck size={16} className="mr-1.5" />
              Mark all read
            </Button>
          )}
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-4 space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`p-4 bg-card rounded-xl border border-border transition-all duration-200 hover:bg-card/80 cursor-pointer ${
                    !notification.isRead ? 'border-emerald-500/30 bg-emerald-500/5' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center ${notification.iconColor}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`font-medium ${!notification.isRead ? 'text-foreground font-semibold' : 'text-foreground'}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {notification.timestamp}
                          </span>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          )}
                        </div>
                      </div>
                      <p className={`text-sm mt-1 ${!notification.isRead ? 'text-muted-foreground font-medium' : 'text-muted-foreground'}`}>
                        {notification.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No notifications</h3>
              <p className="text-muted-foreground">You're all caught up! Check back later for updates.</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Notifications;
