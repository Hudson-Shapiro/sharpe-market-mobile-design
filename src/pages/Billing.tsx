
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Billing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Billing</h1>
      </header>
      <main className="p-4">
        <p>Billing page content goes here. This would include Payment Methods and Withdrawal Methods.</p>
      </main>
    </div>
  );
};

export default Billing;
