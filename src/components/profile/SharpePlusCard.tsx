
import React from 'react';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SharpePlusCard = () => {
  return (
    <div className="px-4 mb-6">
      <div className="border rounded-xl p-4 flex items-center justify-between bg-gradient-to-r from-purple-600/20 to-emerald-600/20 border-purple-500/30">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-purple-500/30">
            <DollarSign size={20} className="text-purple-400" />
          </div>
          <div>
            <h3 className="font-bold">Sharpe+</h3>
            <p className="text-muted-foreground text-sm">Unlock premium features</p>
          </div>
        </div>
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:opacity-90 text-white"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SharpePlusCard;
