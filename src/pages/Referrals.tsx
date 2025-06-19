
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Users, Copy, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Referrals = () => {
  const navigate = useNavigate();
  const referralCode = "JOHNDOE123";
  const referralLink = `https://app.sharpe.com/signup?ref=${referralCode}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Sharpe',
        text: 'Join me on Sharpe and start building better portfolios!',
        url: referralLink,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Refer Friends</h1>
      </header>
      
      <main className="p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <Users size={24} className="text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Invite Friends</h2>
            <p className="text-muted-foreground text-sm">
              Share Sharpe with friends and earn rewards when they join
            </p>
          </div>

          {/* Referral Stats */}
          <div className="bg-card border border-border p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Your Referral Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">12</div>
                <div className="text-xs text-muted-foreground">Friends Invited</div>
              </div>
              <div className="p-3 bg-background/50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">$120</div>
                <div className="text-xs text-muted-foreground">Rewards Earned</div>
              </div>
            </div>
          </div>

          {/* Referral Code */}
          <div className="bg-card border border-border p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Your Referral Code</h3>
            <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
              <code className="flex-1 font-mono text-sm">{referralCode}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(referralCode)}
                className="px-3"
              >
                <Copy size={16} />
              </Button>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-card border border-border p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Your Referral Link</h3>
            <div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border mb-3">
              <span className="flex-1 text-sm text-muted-foreground truncate">{referralLink}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(referralLink)}
                className="px-3"
              >
                <Copy size={16} />
              </Button>
            </div>
            <Button 
              onClick={shareReferral}
              className="w-full"
              variant="default"
            >
              <Share size={16} className="mr-2" />
              Share Link
            </Button>
          </div>

          {/* How it Works */}
          <div className="bg-card border border-border p-4 rounded-lg">
            <h3 className="font-semibold mb-3">How it Works</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">1.</span>
                <span>Share your referral code or link with friends</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">2.</span>
                <span>They sign up using your code</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">3.</span>
                <span>You both earn $10 when they make their first trade</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Referrals;
