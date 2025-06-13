
import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import PreSubscriptionScreen from '@/components/sharpe-plus/PreSubscriptionScreen';
import PostSubscriptionScreen from '@/components/sharpe-plus/PostSubscriptionScreen';

const SharpePlus = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="fixed top-6 left-4 z-50">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background p-2 shadow-lg rounded-full"
        >
          <ArrowLeft size={16} />
        </Button>
      </div>

      {/* Floating Toggle Button */}
      <div className="fixed top-6 right-4 z-50">
        <Button
          onClick={() => setIsSubscribed(!isSubscribed)}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur-sm border-border/50 hover:bg-background px-4 py-2 flex items-center gap-2 shadow-lg"
          style={{ borderRadius: '999px' }}
        >
          {isSubscribed ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
          <span className="text-xs font-medium">Preview Mode</span>
        </Button>
      </div>

      {/* Screen Content */}
      {isSubscribed ? <PostSubscriptionScreen /> : <PreSubscriptionScreen />}
    </div>
  );
};

export default SharpePlus;
