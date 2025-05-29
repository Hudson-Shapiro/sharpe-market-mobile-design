
import React from 'react';
import { Lightbulb } from 'lucide-react';

const SearchTip = () => {
  return (
    <div className="bg-card/30 border border-border/40 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lightbulb size={16} className="text-blue-400" />
        </div>
        <div>
          <h3 className="font-medium text-foreground mb-1">Smart Search Tips</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use advanced filters to refine your search by performance, return, benchmark, and more. 
            Find exactly what you're looking for faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchTip;
