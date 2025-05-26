
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SharpePlusCard = () => {
  return (
    <div className="px-4 mb-4">
      <div className="border rounded-xl p-3 flex items-center justify-between bg-gradient-to-r from-purple-600/20 to-emerald-600/20 border-purple-500/30">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-purple-500/30">
            <DollarSign size={16} className="text-purple-400" />
          </div>
          <div>
            <h3 className="font-bold text-sm">Sharpe+</h3>
            <p className="text-muted-foreground text-xs">Unlock premium features</p>
          </div>
        </div>
        <Link to="/sharpe-plus">
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-emerald-500 hover:opacity-90 text-white text-xs h-7 px-3"
          >
            Subscribe
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SharpePlusCard;
