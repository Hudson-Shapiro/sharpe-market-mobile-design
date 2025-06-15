
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Stock } from '@/data/stocks';

type Event = Stock['events'][0];

const EventIcon: React.FC<{ type: Event['type'] }> = ({ type }) => {
  switch(type) {
    case 'earnings': return <span className="text-lg">📊</span>;
    case 'dividend': return <span className="text-lg">💸</span>;
    case 'news': return <span className="text-lg">📰</span>;
    case 'vote': return <span className="text-lg">🗳️</span>;
    default: return null;
  }
};

const StockEventsCard: React.FC<{ events: Event[] }> = ({ events }) => (
  <Card className="bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent backdrop-blur-sm border-orange-500/20" style={{ borderRadius: '12px' }}>
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-base">
        <Calendar size={18} className="text-orange-400" />
        Upcoming Events
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="space-y-2">
        {events.map((event, index) => (
          <Card key={index} className="bg-secondary/20 border-border/30 hover:bg-secondary/30 transition-all duration-200 cursor-pointer" style={{ borderRadius: '8px' }}>
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <EventIcon type={event.type} />
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <ArrowLeft size={14} className="text-muted-foreground rotate-180" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default StockEventsCard;
