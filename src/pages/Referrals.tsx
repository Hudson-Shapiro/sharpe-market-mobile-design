
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-emerald-950/10 text-foreground">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-muted rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Refer Friends</h1>
      </header>
      
      <main className="p-4 pb-8">
        <div className="max-w-md mx-auto space-y-4">
          {/* Header */}
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-purple-500/30 border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/20">
              <Users size={20} className="text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">
              Refer friends and{' '}
              <span 
                className="text-emerald-400" 
                style={{
                  textShadow: '0 0 8px rgba(52, 211, 153, 0.6), 0 0 16px rgba(52, 211, 153, 0.3)'
                }}
              >
                earn
              </span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Share Sharpe with friends and earn rewards when they join
            </p>
          </div>

          {/* Referral Stats */}
          <div className="bg-gradient-to-r from-card to-emerald-950/20 border border-emerald-500/20 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-3 text-emerald-300">Your Referral Stats</h3>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <div className="text-xl font-bold text-emerald-400">12</div>
                <div className="text-xs text-muted-foreground">Friends Invited</div>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <div className="text-xl font-bold text-emerald-400">$120</div>
                <div className="text-xs text-muted-foreground">Rewards Earned</div>
              </div>
            </div>
          </div>

          {/* Referral Code */}
          <div className="bg-gradient-to-r from-card to-purple-950/20 border border-purple-500/20 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-3 text-purple-300">Your Referral Code</h3>
            <div className="flex items-center gap-2 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <code className="flex-1 font-mono text-sm text-purple-200">{referralCode}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(referralCode)}
                className="px-3 border-purple-500/30 hover:bg-purple-500/20 rounded-lg"
              >
                <Copy size={16} />
              </Button>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-gradient-to-r from-card to-blue-950/20 border border-blue-500/20 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-3 text-blue-300">Your Referral Link</h3>
            <div className="flex items-center gap-2 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mb-3">
              <span className="flex-1 text-sm text-blue-200 truncate">{referralLink}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copyToClipboard(referralLink)}
                className="px-3 border-blue-500/30 hover:bg-blue-500/20 rounded-lg"
              >
                <Copy size={16} />
              </Button>
            </div>
            <Button 
              onClick={shareReferral}
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-xl shadow-lg"
              variant="default"
            >
              <Share size={16} className="mr-2" />
              Share Link
            </Button>
          </div>

          {/* How it Works */}
          <div className="bg-gradient-to-r from-card to-emerald-950/20 border border-emerald-500/20 p-4 rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-3 text-emerald-300">How it Works</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-3 p-2 bg-emerald-500/5 rounded-lg">
                <span className="text-emerald-400 font-bold text-base">1.</span>
                <span>Share your referral code or link with friends</span>
              </div>
              <div className="flex items-start gap-3 p-2 bg-emerald-500/5 rounded-lg">
                <span className="text-emerald-400 font-bold text-base">2.</span>
                <span>They sign up using your code</span>
              </div>
              <div className="flex items-start gap-3 p-2 bg-emerald-500/5 rounded-lg">
                <span className="text-emerald-400 font-bold text-base">3.</span>
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
