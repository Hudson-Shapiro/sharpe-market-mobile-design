
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface StockNotFoundProps {
  symbol?: string;
  onGoBack: () => void;
}

const StockNotFound: React.FC<StockNotFoundProps> = ({ symbol, onGoBack }) => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center">
    <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50" style={{ borderRadius: '16px' }}>
      <h1 className="text-2xl font-bold text-foreground mb-2">Stock Not Found</h1>
      <p className="text-muted-foreground mb-4">The stock symbol "{symbol}" was not found.</p>
      <Button onClick={onGoBack} className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white">
        <ArrowLeft size={16} className="mr-2" />
        Go Back
      </Button>
    </Card>
  </div>
);

export default StockNotFound;
