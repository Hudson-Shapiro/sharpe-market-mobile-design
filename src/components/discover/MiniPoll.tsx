
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BarChart3 } from 'lucide-react';

const MiniPoll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const pollOptions = [
    { id: 'tech', label: 'Tech', emoji: '💻', votes: 42 },
    { id: 'energy', label: 'Energy', emoji: '⚡', votes: 28 },
    { id: 'crypto', label: 'Crypto', emoji: '₿', votes: 35 },
    { id: 'cash', label: 'Cash', emoji: '💵', votes: 15 }
  ];

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <BarChart3 className="text-blue-400" size={20} />
          Quick Poll
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
            Live
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">What will outperform this month?</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          {pollOptions.map((option) => {
            const percentage = hasVoted ? (option.votes / totalVotes) * 100 : 0;
            const isSelected = selectedOption === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => !hasVoted && setSelectedOption(option.id)}
                disabled={hasVoted}
                className={`w-full p-3 rounded-lg border transition-all duration-300 relative overflow-hidden ${
                  isSelected 
                    ? 'border-blue-500 bg-blue-500/20' 
                    : 'border-border hover:border-blue-500/50 bg-card'
                } ${hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-[1.02]'}`}
              >
                {hasVoted && (
                  <div 
                    className="absolute inset-0 bg-blue-500/20 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{option.emoji}</span>
                    <span className="font-medium">{option.label}</span>
                  </div>
                  {hasVoted && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{percentage.toFixed(1)}%</span>
                      <span className="text-xs text-muted-foreground">({option.votes} votes)</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {!hasVoted ? (
          <Button 
            onClick={handleVote}
            disabled={!selectedOption}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50"
          >
            Vote Now
          </Button>
        ) : (
          <div className="text-center text-sm text-muted-foreground">
            Thanks for voting! {totalVotes} total votes
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MiniPoll;
