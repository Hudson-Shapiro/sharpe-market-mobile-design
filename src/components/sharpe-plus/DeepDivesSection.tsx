
import React from 'react';
import { Activity } from 'lucide-react';

const DeepDivesSection = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold flex items-center gap-2">
        🧠 Deep Dives
      </h3>
      
      <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
        <h4 className="font-bold mb-2 flex items-center gap-2">
          📊 Sector Rotation Summary
        </h4>
        <p className="text-xs text-muted-foreground mb-2">Technology leading outflows, Energy seeing inflows</p>
        <div className="flex gap-2">
          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1" style={{ borderRadius: '10px' }}>Tech -2.4%</span>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1" style={{ borderRadius: '10px' }}>Energy +3.1%</span>
        </div>
      </div>

      <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
        <h4 className="font-bold mb-2 flex items-center gap-2">
          📈 Daily ETF Flow Trends
        </h4>
        <p className="text-xs text-muted-foreground mb-2">SPY seeing consistent inflows, QQQ mixed</p>
        <div className="flex gap-2">
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1" style={{ borderRadius: '10px' }}>SPY +$2.4B</span>
          <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1" style={{ borderRadius: '10px' }}>QQQ ±$0.8B</span>
        </div>
      </div>

      <div className="bg-card/30 border border-border p-4 backdrop-blur-sm" style={{ borderRadius: '10px' }}>
        <h4 className="font-bold mb-2 flex items-center gap-2">
          <Activity size={16} className="text-purple-400" />
          Hedge vs Retail Shift Tracker
        </h4>
        <p className="text-xs text-muted-foreground">Retail increasing tech allocation while institutions rotate</p>
      </div>
    </div>
  );
};

export default DeepDivesSection;
