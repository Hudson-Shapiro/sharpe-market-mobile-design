
import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import TopHoldingsSection from './TopHoldingsSection';
import TopSectorsSection from './TopSectorsSection';
import BehavioralMoversSection from './BehavioralMoversSection';
import WatchlistSection from './WatchlistSection';
import DeepDivesSection from './DeepDivesSection';

const PostSubscriptionScreen = () => {
  const [expandedSections, setExpandedSections] = useState({
    holdings: true,
    sectors: true,
    behavioralMovers: true,
    watchlist: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden pb-20">
      {/* Background glow effects */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 p-4 max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center" style={{ borderRadius: '10px' }}>
              <Brain size={24} className="text-emerald-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Welcome to Sharpe+
          </h1>
          <p className="text-muted-foreground">You're now seeing how thousands are trading.</p>
        </div>

        {/* Analytics Dashboard */}
        <div className="space-y-6 mb-8">
          <TopHoldingsSection 
            isExpanded={expandedSections.holdings}
            onToggle={() => toggleSection('holdings')}
          />
          
          <TopSectorsSection 
            isExpanded={expandedSections.sectors}
            onToggle={() => toggleSection('sectors')}
          />

          <BehavioralMoversSection 
            isExpanded={expandedSections.behavioralMovers}
            onToggle={() => toggleSection('behavioralMovers')}
          />

          <WatchlistSection 
            isExpanded={expandedSections.watchlist}
            onToggle={() => toggleSection('watchlist')}
          />

          <DeepDivesSection />
        </div>
      </div>
    </div>
  );
};

export default PostSubscriptionScreen;
